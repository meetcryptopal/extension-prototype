import $ from "jquery";
import _ from "lodash";

const store = window.chrome.storage.sync;
const STORE_KEY = "shopify";

// Actions
const CHECKOUT = "CHECKOUT";
const ADD_ITEM = "ADD_ITEM";

const initState = { order: [], cartItems: [] };
const reduceState = (state = initState, { type, payload }) => {
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

const updateStore = action => {
  store.get(STORE_KEY, state => {
    const currentState = _.isEmpty(state) ? undefined : state;
    const nextState = reduceState(currentState, action);

    store.set({ [STORE_KEY]: nextState });
    console.log(`${STORE_KEY}: `, nextState);
  });
};

const saveOnOrder = () => {
  const SHOPIFY_API_TOKEN_SELECTOR = "meta[name=shopify-checkout-api-token]";
  const CHECKOUT_PATH_REGEX = /^\/\d+\/checkouts\/.+/; // ex: 808372/checkouts/bc40cd2fea7f91dcef496097ca38d93e

  const isShopifySite = !!$(SHOPIFY_API_TOKEN_SELECTOR).length;
  const isCheckout = !!location.pathname.match(CHECKOUT_PATH_REGEX);

  const SHOPIFY_COMPLETE_FORM_SELECTOR = "input[name='complete']";
  const isFinalCheckoutPage = !!$(SHOPIFY_COMPLETE_FORM_SELECTOR).length;

  if (isShopifySite && isCheckout && isFinalCheckoutPage) {
    const SHOPIFY_ORDER_BUTTON_SELECTOR = ".step__footer__continue-btn";
    $("body").on("click", SHOPIFY_ORDER_BUTTON_SELECTOR, e => {
      console.log("SHOPIFY ORDER DETECTED");

      updateStore({ type: CHECKOUT });
    });
  }
};

const scrapeCheckout = () => {
  const SHOPIFY_API_TOKEN_SELECTOR = "meta[name=shopify-checkout-api-token]";
  const CHECKOUT_PATH_REGEX = /^\/\d+\/checkouts\/.+/; // ex: 808372/checkouts/bc40cd2fea7f91dcef496097ca38d93e

  const isShopifySite = !!$(SHOPIFY_API_TOKEN_SELECTOR).length;
  const isCheckout = !!location.pathname.match(CHECKOUT_PATH_REGEX);

  if (isShopifySite && isCheckout) {
    console.log("SHOPIFY CHECKOUT DETECTED");

    const SHOPIFY_PRODUCT_CONTAINER_SELECTOR = ".product";
    const SHOPIFY_PRODUCT_NAME_SELECTOR = ".product__description__name";
    const SHOPIFY_PRODUCT_VARIANT_SELECTOR = ".product__description__variant";
    const SHOPIFY_PRODUCT_QUANTITY_SELECTOR = ".product__quantity";
    const SHOPIFY_PRODUCT_PRICE_SELECTOR = ".product__price";

    const cartItems = $.map($(SHOPIFY_PRODUCT_CONTAINER_SELECTOR), element => {
      const productName = $(element)
        .find(SHOPIFY_PRODUCT_NAME_SELECTOR)
        .text()
        .trim();
      const productQuantity = $(element)
        .find(SHOPIFY_PRODUCT_QUANTITY_SELECTOR)
        .text()
        .trim();
      const productPrice = $(element)
        .find(SHOPIFY_PRODUCT_PRICE_SELECTOR)
        .text()
        .trim();
      // const productVariant = $(element)
      // .find(SHOPIFY_PRODUCT_VARIANT_SELECTOR)
      // .text();

      console.log("SHOPIFY PRODUCT NAME:", productName);
      console.log("SHOPIFY PRODUCT QUANTITY:", productQuantity);
      console.log("SHOPIFY PRODUCT PRICE:", productPrice);
      // console.log("SHOPIFY PRODUCT VARIANT:", productVariant);
      return {
        productName,
        productQuantity,
        productPrice
      };
    });

    updateStore({ type: ADD_ITEM, payload: cartItems });
  }
};

export default {
  scrapeCheckout,
  saveOnOrder
};
