import $ from "jquery";
import _ from "lodash";

import { updateStore } from "../storage/store";

const STORE_KEY = "amazon";

const initState = { order: [], cartItems: [] };
const reduceState = (state, { type, payload }) => {
  switch (type) {
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

const saveOnOrder = () => {
  const AMAZON_CHECKOUT_URL =
    "https://www.amazon.com/gp/buy/spc/handlers/display.html";

  const isCheckout = location.href.match(AMAZON_CHECKOUT_URL);

  if (!isCheckout) {
    return;
  }

  const AMAZON_ORDER_BUTTON_SELECTOR = ".place-order-button-link";

  $("body").on("click", AMAZON_ORDER_BUTTON_SELECTOR, e => {
    console.log("AMAZON ORDER DETECTED");
    dispatch({ type: CHECKOUT });
  });
};

const scrapeCart = () => {
  const AMAZON_CART_URL = "https://www.amazon.com/gp/cart/view.html";

  const isCart = location.href.match(AMAZON_CART_URL);

  if (!isCart) {
    return;
  }
  console.log("AMAZON CART DETECTED");

  const AMAZON_PRODUCT_CONTAINER_SELECTOR = ".sc-list-item-content";
  const AMAZON_PRODUCT_NAME_SELECTOR = ".sc-product-title";
  const AMAZON_PRODUCT_QUANTITY_SELECTOR = ".a-dropdown-prompt";
  const AMAZON_PRODUCT_PRICE_SELECTOR = ".sc-product-price";

  const cartItems = $.map($(AMAZON_PRODUCT_CONTAINER_SELECTOR), element => {
    const productName = $(element)
      .find(AMAZON_PRODUCT_NAME_SELECTOR)
      .text()
      .trim();
    const productQuantity = $(element)
      .find(AMAZON_PRODUCT_QUANTITY_SELECTOR)
      .text()
      .trim();
    const productPrice = $(element)
      .find(AMAZON_PRODUCT_PRICE_SELECTOR)
      .text()
      .trim();

    console.log("AMAZON PRODUCT NAME:", productName);
    console.log("AMAZON PRODUCT QUANTITY:", productQuantity);
    console.log("AMAZON PRODUCT PRICE:", productPrice);
    return {
      productName,
      productQuantity,
      productPrice
    };
  });

  dispatch({ type: ADD_ITEM, payload: cartItems });
};

export default {
  scrapeCart,
  saveOnOrder
};
