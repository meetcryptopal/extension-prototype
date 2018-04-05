import $ from "jquery";

const scrapeCart = () => {
  const AMAZON_CART_URL =
    "https://www.amazon.com/gp/cart/view.html/ref=lh_cart";

  const isCart = location.href === AMAZON_CART_URL;

  if (!isCart) {
    return;
  }
  console.log("AMAZON CART DETECTED");

  const AMAZON_PRODUCT_CONTAINER_SELECTOR = ".sc-list-item-content";
  const AMAZON_PRODUCT_NAME_SELECTOR = ".sc-product-title";
  const AMAZON_PRODUCT_QUANTITY_SELECTOR = ".a-dropdown-prompt";
  const AMAZON_PRODUCT_PRICE_SELECTOR = ".sc-product-price";

  $(AMAZON_PRODUCT_CONTAINER_SELECTOR).each((i, element) => {
    const productName = $(element)
      .find(AMAZON_PRODUCT_NAME_SELECTOR)
      .text();
    const productQuantity = $(element)
      .find(AMAZON_PRODUCT_QUANTITY_SELECTOR)
      .text();
    const productPrice = $(element)
      .find(AMAZON_PRODUCT_PRICE_SELECTOR)
      .text();

    console.log("AMAZON PRODUCT NAME:", productName);
    console.log("AMAZON PRODUCT QUANTITY:", productQuantity);
    console.log("AMAZON PRODUCT PRICE:", productPrice);
  });
};

export default {
  scrapeCart
};
