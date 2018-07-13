import $ from "jquery";
import _ from "lodash";

import { updateStore } from "../storage/store";

const STORE_KEY = "amazon";

const initState = { orders: [], cartItems: [] };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case ONE_CLICK_BUY:
      return {
        ...state,
        orders: [payload, ...state.orders]
      };

    case ADD_ITEM:
      return { ...state, cartItems: [...payload] };

    case CHECKOUT:
      return {
        ...state,
        orders: [...state.cartItems, ...state.orders],
        cartItems: []
      };
  }
};

const dispatch = updateStore(STORE_KEY, reduceState, initState);

// Actions
const CHECKOUT = "CHECKOUT";
const ADD_ITEM = "ADD_ITEM";
const ONE_CLICK_BUY = "ONE_CLICK_BUY";

const saveOnOneClickPurchase = () => {
  const reattach = () => {
    console.log("Listening to one click.");
    $("#addToCart")
      .off() // paranoid removal to not attach more than 1 handler.
      .on("submit", evt => {
        evt.preventDefault();
        const buttonId = document.activeElement.id.replace(/-/g, "");
        console.log("BUTTON ID: ", buttonId);
        if (!buttonId.match(/oneclick/i)) return;

        addDirectlyToOrders();
      });
  };

  // TODO: NEED TO FIND EVENT TO REATTACH TO.

  // First attachment.
  reattach();
};

const addDirectlyToOrders = () => {
  const AMAZON_PRODUCT_URL = /https:\/\/www.amazon.com.*\/d?g?p\/.+/;

  const isProductPage = location.href.match(AMAZON_PRODUCT_URL);

  if (!isProductPage) {
    return;
  }
  console.log("AMAZON ONE CLICK BUY DETECTED");

  const AMAZON_PRODUCT_NAME_SELECTOR = "#productTitle";
  const AMAZON_PRODUCT_QUANTITY_SELECTOR = "#quantity";
  const AMAZON_PRODUCT_PRICE_SELECTOR = "#priceblock_ourprice";

  const productName = $(AMAZON_PRODUCT_NAME_SELECTOR)
    .text()
    .trim();

  const productHref = location.href;

  const productQuantity = $(AMAZON_PRODUCT_QUANTITY_SELECTOR).val();

  const productPrice = $(AMAZON_PRODUCT_PRICE_SELECTOR)
    .text()
    .trim();

  console.log("AMAZON PRODUCT NAME:", productName);
  console.log("AMAZON PRODUCT LINK:", productHref);
  console.log("AMAZON PRODUCT QUANTITY:", productQuantity);
  console.log("AMAZON PRODUCT PRICE:", productPrice);

  const cartItem = {
    productName,
    productQuantity,
    productPrice,
    productHref
  };

  dispatch({ type: ONE_CLICK_BUY, payload: cartItem });
};

const saveOnOrder = () => {
  const AMAZON_THANK_YOU_URL =
    "https://www.amazon.com/gp/buy/thankyou/handlers/display.html";

  const isThankYou = location.href.match(AMAZON_THANK_YOU_URL);
  const fromOneClickOrder =
    $('body:contains("1-Click order has been placed")').length > 0;

  if (!isThankYou || fromOneClickOrder) {
    return;
  }

  console.log("AMAZON ORDER DETECTED");
  dispatch({ type: CHECKOUT });
};

const scrapeCartWhenProceedingToCheckout = () => {
  const AMAZON_PROCEED_CHECKOUT_BUTTON_SELECTOR = "#sc-buy-box-ptc-button";
  $("body").on("click", AMAZON_PROCEED_CHECKOUT_BUTTON_SELECTOR, scrapeCart);
};

const scrapeCart = () => {
  const AMAZON_CART_URL = "https://www.amazon.com/gp/cart/view.html";

  const isCart = location.href.match(AMAZON_CART_URL);

  if (!isCart) {
    return;
  }
  console.log("AMAZON CART DETECTED");

  const AMAZON_PRODUCT_CONTAINER_SELECTOR =
    "#activeCartViewForm .sc-list-item-content";
  const AMAZON_PRODUCT_NAME_SELECTOR = ".sc-product-title";
  const AMAZON_PRODUCT_LINK_SELECTOR = ".sc-product-link";
  const AMAZON_PRODUCT_QUANTITY_SELECTOR = ".a-dropdown-prompt";
  const AMAZON_PRODUCT_PRICE_SELECTOR = ".sc-product-price";

  const cartItems = $.map($(AMAZON_PRODUCT_CONTAINER_SELECTOR), element => {
    const productName = $(element)
      .find(AMAZON_PRODUCT_NAME_SELECTOR)
      .text()
      .trim();
    const productHref = $(element)
      .find(AMAZON_PRODUCT_LINK_SELECTOR)
      .attr("href");
    const productQuantity = $(element)
      .find(AMAZON_PRODUCT_QUANTITY_SELECTOR)
      .text()
      .trim();
    const productPrice = $(element)
      .find(AMAZON_PRODUCT_PRICE_SELECTOR)
      .text()
      .trim();

    console.log("AMAZON PRODUCT NAME:", productName);
    console.log("AMAZON PRODUCT LINK:", productHref);
    console.log("AMAZON PRODUCT QUANTITY:", productQuantity);
    console.log("AMAZON PRODUCT PRICE:", productPrice);

    return {
      productHref,
      productName,
      productQuantity,
      productPrice
    };
  });

  dispatch({ type: ADD_ITEM, payload: cartItems });
};

export default {
  scrapeCartWhenProceedingToCheckout,
  saveOnOrder,
  saveOnOneClickPurchase
};
