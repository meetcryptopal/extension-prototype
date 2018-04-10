import $ from "jquery";
import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);
store.defaults({ amazon: {} });

const saveOnOrder = () => {
  const AMAZON_CHECKOUT_URL =
    "https://www.amazon.com/gp/buy/spc/handlers/display.html";

  const isCheckout = location.href.match(AMAZON_CHECKOUT_URL);

  if (!isCheckout) {
    return;
  }
  console.log("AMAZON ORDER DETECTED");

  const AMAZON_ORDER_BUTTON_SELECTOR = ".place-your-order-button";

  $("body").on("click", AMAZON_ORDER_BUTTON_SELECTOR, e => {
    store.update("amazon", amazon => {
      amazon.orders = amazon.orders || [];
      amazon.orders = [...amazon.orders, ...amazon.cartItems];
      amazon.cartItems = [];
    });
    console.log("AMAZON: ", store.get("amazon"));
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

  store.set("amazon", { cartItems });
  console.log("AMAZON: ", store.get("amazon"));
};

export default {
  scrapeCart
};
