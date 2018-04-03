import $ from "jquery";

const scrapeCheckout = () => {
  const SHOPIFY_API_TOKEN_SELECTOR = "meta[name=shopify-checkout-api-token]";
  const CHECKOUT_PATH_REGEX = /^\/\d+\/checkouts\/.+/; // ex: 808372/checkouts/bc40cd2fea7f91dcef496097ca38d93e

  const isShopifySite = !!$(SHOPIFY_API_TOKEN_SELECTOR).length;
  const isCheckout = !!location.pathname.match(CHECKOUT_PATH_REGEX);

  if (isShopifySite && isCheckout) {
    console.log("SHOPIFY CHECKOUT DETECTED");
  }
};

export default {
  scrapeCheckout
};
