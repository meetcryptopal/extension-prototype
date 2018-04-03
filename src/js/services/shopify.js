import $ from "jquery";

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

    $(SHOPIFY_PRODUCT_CONTAINER_SELECTOR).each((i, element) => {
      const productName = $(element)
        .find(SHOPIFY_PRODUCT_NAME_SELECTOR)
        .text();
      const productVariant = $(element)
        .find(SHOPIFY_PRODUCT_VARIANT_SELECTOR)
        .text();
      const productQuantity = $(element)
        .find(SHOPIFY_PRODUCT_QUANTITY_SELECTOR)
        .text();
      const productPrice = $(element)
        .find(SHOPIFY_PRODUCT_PRICE_SELECTOR)
        .text();

      console.log("SHOPIFY PRODUCT NAME:", productName);
      console.log("SHOPIFY PRODUCT VARIANT:", productVariant);
      console.log("SHOPIFY PRODUCT QUANTITY:", productQuantity);
      console.log("SHOPIFY PRODUCT PRICE:", productPrice);
    });
  }
};

export default {
  scrapeCheckout
};
