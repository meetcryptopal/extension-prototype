webpackHotUpdate(3,{

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(53);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(307);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst STORE_KEY = \"shopify\";\n\nconst initStore = () => {\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ [STORE_KEY]: { orders: [], cartItems: [] } });\n};\n\nconst saveOnOrder = () => {\n  const SHOPIFY_API_TOKEN_SELECTOR = \"meta[name=shopify-checkout-api-token]\";\n  const CHECKOUT_PATH_REGEX = /^\\/\\d+\\/checkouts\\/.+/; // ex: 808372/checkouts/bc40cd2fea7f91dcef496097ca38d93e\n\n  const isShopifySite = !!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(SHOPIFY_API_TOKEN_SELECTOR).length;\n  const isCheckout = !!location.pathname.match(CHECKOUT_PATH_REGEX);\n\n  const SHOPIFY_COMPLETE_FORM_SELECTOR = \"input[name='complete']\";\n  const isFinalCheckoutPage = !!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(SHOPIFY_COMPLETE_FORM_SELECTOR).length;\n\n  if (isShopifySite && isCheckout && isFinalCheckoutPage) {\n    const SHOPIFY_ORDER_BUTTON_SELECTOR = \".step__footer__continue-btn\";\n    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", SHOPIFY_ORDER_BUTTON_SELECTOR, e => {\n      console.log(\"SHOPIFY ORDER DETECTED\");\n\n      initStore();\n      __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(STORE_KEY, shopify => {\n        shopify.orders = [...shopify.orders, ...shopify.cartItems];\n        shopify.cartItems = [];\n      });\n      console.log(\"SHOPIFY: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"shopify\"));\n    });\n  }\n};\n\nconst scrapeCheckout = () => {\n  const SHOPIFY_API_TOKEN_SELECTOR = \"meta[name=shopify-checkout-api-token]\";\n  const CHECKOUT_PATH_REGEX = /^\\/\\d+\\/checkouts\\/.+/; // ex: 808372/checkouts/bc40cd2fea7f91dcef496097ca38d93e\n\n  const isShopifySite = !!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(SHOPIFY_API_TOKEN_SELECTOR).length;\n  const isCheckout = !!location.pathname.match(CHECKOUT_PATH_REGEX);\n\n  if (isShopifySite && isCheckout) {\n    console.log(\"SHOPIFY CHECKOUT DETECTED\");\n\n    const SHOPIFY_PRODUCT_CONTAINER_SELECTOR = \".product\";\n    const SHOPIFY_PRODUCT_NAME_SELECTOR = \".product__description__name\";\n    const SHOPIFY_PRODUCT_VARIANT_SELECTOR = \".product__description__variant\";\n    const SHOPIFY_PRODUCT_QUANTITY_SELECTOR = \".product__quantity\";\n    const SHOPIFY_PRODUCT_PRICE_SELECTOR = \".product__price\";\n\n    const cartItems = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.map(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(SHOPIFY_PRODUCT_CONTAINER_SELECTOR), element => {\n      const productName = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find(SHOPIFY_PRODUCT_NAME_SELECTOR).text().trim();\n      const productQuantity = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find(SHOPIFY_PRODUCT_QUANTITY_SELECTOR).text().trim();\n      const productPrice = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find(SHOPIFY_PRODUCT_PRICE_SELECTOR).text().trim();\n      // const productVariant = $(element)\n      // .find(SHOPIFY_PRODUCT_VARIANT_SELECTOR)\n      // .text();\n\n      console.log(\"SHOPIFY PRODUCT NAME:\", productName);\n      console.log(\"SHOPIFY PRODUCT QUANTITY:\", productQuantity);\n      console.log(\"SHOPIFY PRODUCT PRICE:\", productPrice);\n      // console.log(\"SHOPIFY PRODUCT VARIANT:\", productVariant);\n      return {\n        productName,\n        productQuantity,\n        productPrice\n      };\n    });\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(STORE_KEY, shopify => {\n      shopify.cartItems = cartItems;\n    });\n    console.log(\"SHOPIFY: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(STORE_KEY));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  scrapeCheckout,\n  saveOnOrder\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy9zaG9waWZ5LmpzP2NiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IGFsbFBsdWdpbnMgZnJvbSBcInN0b3JlL3BsdWdpbnMvYWxsXCI7XG5cbnN0b3JlLmFkZFBsdWdpbihhbGxQbHVnaW5zKTtcblxuY29uc3QgU1RPUkVfS0VZID0gXCJzaG9waWZ5XCI7XG5cbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgc3RvcmUuZGVmYXVsdHMoeyBbU1RPUkVfS0VZXTogeyBvcmRlcnM6IFtdLCBjYXJ0SXRlbXM6IFtdIH0gfSk7XG59O1xuXG5jb25zdCBzYXZlT25PcmRlciA9ICgpID0+IHtcbiAgY29uc3QgU0hPUElGWV9BUElfVE9LRU5fU0VMRUNUT1IgPSBcIm1ldGFbbmFtZT1zaG9waWZ5LWNoZWNrb3V0LWFwaS10b2tlbl1cIjtcbiAgY29uc3QgQ0hFQ0tPVVRfUEFUSF9SRUdFWCA9IC9eXFwvXFxkK1xcL2NoZWNrb3V0c1xcLy4rLzsgLy8gZXg6IDgwODM3Mi9jaGVja291dHMvYmM0MGNkMmZlYTdmOTFkY2VmNDk2MDk3Y2EzOGQ5M2VcblxuICBjb25zdCBpc1Nob3BpZnlTaXRlID0gISEkKFNIT1BJRllfQVBJX1RPS0VOX1NFTEVDVE9SKS5sZW5ndGg7XG4gIGNvbnN0IGlzQ2hlY2tvdXQgPSAhIWxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKENIRUNLT1VUX1BBVEhfUkVHRVgpO1xuXG4gIGNvbnN0IFNIT1BJRllfQ09NUExFVEVfRk9STV9TRUxFQ1RPUiA9IFwiaW5wdXRbbmFtZT0nY29tcGxldGUnXVwiO1xuICBjb25zdCBpc0ZpbmFsQ2hlY2tvdXRQYWdlID0gISEkKFNIT1BJRllfQ09NUExFVEVfRk9STV9TRUxFQ1RPUikubGVuZ3RoO1xuXG4gIGlmIChpc1Nob3BpZnlTaXRlICYmIGlzQ2hlY2tvdXQgJiYgaXNGaW5hbENoZWNrb3V0UGFnZSkge1xuICAgIGNvbnN0IFNIT1BJRllfT1JERVJfQlVUVE9OX1NFTEVDVE9SID0gXCIuc3RlcF9fZm9vdGVyX19jb250aW51ZS1idG5cIjtcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFNIT1BJRllfT1JERVJfQlVUVE9OX1NFTEVDVE9SLCBlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU0hPUElGWSBPUkRFUiBERVRFQ1RFRFwiKTtcblxuICAgICAgaW5pdFN0b3JlKCk7XG4gICAgICBzdG9yZS51cGRhdGUoU1RPUkVfS0VZLCBzaG9waWZ5ID0+IHtcbiAgICAgICAgc2hvcGlmeS5vcmRlcnMgPSBbLi4uc2hvcGlmeS5vcmRlcnMsIC4uLnNob3BpZnkuY2FydEl0ZW1zXTtcbiAgICAgICAgc2hvcGlmeS5jYXJ0SXRlbXMgPSBbXTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJTSE9QSUZZOiBcIiwgc3RvcmUuZ2V0KFwic2hvcGlmeVwiKSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHNjcmFwZUNoZWNrb3V0ID0gKCkgPT4ge1xuICBjb25zdCBTSE9QSUZZX0FQSV9UT0tFTl9TRUxFQ1RPUiA9IFwibWV0YVtuYW1lPXNob3BpZnktY2hlY2tvdXQtYXBpLXRva2VuXVwiO1xuICBjb25zdCBDSEVDS09VVF9QQVRIX1JFR0VYID0gL15cXC9cXGQrXFwvY2hlY2tvdXRzXFwvLisvOyAvLyBleDogODA4MzcyL2NoZWNrb3V0cy9iYzQwY2QyZmVhN2Y5MWRjZWY0OTYwOTdjYTM4ZDkzZVxuXG4gIGNvbnN0IGlzU2hvcGlmeVNpdGUgPSAhISQoU0hPUElGWV9BUElfVE9LRU5fU0VMRUNUT1IpLmxlbmd0aDtcbiAgY29uc3QgaXNDaGVja291dCA9ICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goQ0hFQ0tPVVRfUEFUSF9SRUdFWCk7XG5cbiAgaWYgKGlzU2hvcGlmeVNpdGUgJiYgaXNDaGVja291dCkge1xuICAgIGNvbnNvbGUubG9nKFwiU0hPUElGWSBDSEVDS09VVCBERVRFQ1RFRFwiKTtcblxuICAgIGNvbnN0IFNIT1BJRllfUFJPRFVDVF9DT05UQUlORVJfU0VMRUNUT1IgPSBcIi5wcm9kdWN0XCI7XG4gICAgY29uc3QgU0hPUElGWV9QUk9EVUNUX05BTUVfU0VMRUNUT1IgPSBcIi5wcm9kdWN0X19kZXNjcmlwdGlvbl9fbmFtZVwiO1xuICAgIGNvbnN0IFNIT1BJRllfUFJPRFVDVF9WQVJJQU5UX1NFTEVDVE9SID0gXCIucHJvZHVjdF9fZGVzY3JpcHRpb25fX3ZhcmlhbnRcIjtcbiAgICBjb25zdCBTSE9QSUZZX1BST0RVQ1RfUVVBTlRJVFlfU0VMRUNUT1IgPSBcIi5wcm9kdWN0X19xdWFudGl0eVwiO1xuICAgIGNvbnN0IFNIT1BJRllfUFJPRFVDVF9QUklDRV9TRUxFQ1RPUiA9IFwiLnByb2R1Y3RfX3ByaWNlXCI7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSAkLm1hcCgkKFNIT1BJRllfUFJPRFVDVF9DT05UQUlORVJfU0VMRUNUT1IpLCBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gJChlbGVtZW50KVxuICAgICAgICAuZmluZChTSE9QSUZZX1BST0RVQ1RfTkFNRV9TRUxFQ1RPUilcbiAgICAgICAgLnRleHQoKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgY29uc3QgcHJvZHVjdFF1YW50aXR5ID0gJChlbGVtZW50KVxuICAgICAgICAuZmluZChTSE9QSUZZX1BST0RVQ1RfUVVBTlRJVFlfU0VMRUNUT1IpXG4gICAgICAgIC50ZXh0KClcbiAgICAgICAgLnRyaW0oKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9ICQoZWxlbWVudClcbiAgICAgICAgLmZpbmQoU0hPUElGWV9QUk9EVUNUX1BSSUNFX1NFTEVDVE9SKVxuICAgICAgICAudGV4dCgpXG4gICAgICAgIC50cmltKCk7XG4gICAgICAvLyBjb25zdCBwcm9kdWN0VmFyaWFudCA9ICQoZWxlbWVudClcbiAgICAgIC8vIC5maW5kKFNIT1BJRllfUFJPRFVDVF9WQVJJQU5UX1NFTEVDVE9SKVxuICAgICAgLy8gLnRleHQoKTtcblxuICAgICAgY29uc29sZS5sb2coXCJTSE9QSUZZIFBST0RVQ1QgTkFNRTpcIiwgcHJvZHVjdE5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJTSE9QSUZZIFBST0RVQ1QgUVVBTlRJVFk6XCIsIHByb2R1Y3RRdWFudGl0eSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNIT1BJRlkgUFJPRFVDVCBQUklDRTpcIiwgcHJvZHVjdFByaWNlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU0hPUElGWSBQUk9EVUNUIFZBUklBTlQ6XCIsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2R1Y3ROYW1lLFxuICAgICAgICBwcm9kdWN0UXVhbnRpdHksXG4gICAgICAgIHByb2R1Y3RQcmljZVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGluaXRTdG9yZSgpO1xuICAgIHN0b3JlLnVwZGF0ZShTVE9SRV9LRVksIHNob3BpZnkgPT4ge1xuICAgICAgc2hvcGlmeS5jYXJ0SXRlbXMgPSBjYXJ0SXRlbXM7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJTSE9QSUZZOiBcIiwgc3RvcmUuZ2V0KFNUT1JFX0tFWSkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjcmFwZUNoZWNrb3V0LFxuICBzYXZlT25PcmRlclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvc2VydmljZXMvc2hvcGlmeS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})