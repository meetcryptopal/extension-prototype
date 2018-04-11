webpackHotUpdate(3,{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(53);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(307);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst STORE_KEY = \"amazon\";\n\nconst initStore = () => {\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ [STORE_KEY]: { orders: [], cartItems: [] } });\n};\n\nconst saveOnOrder = () => {\n  const AMAZON_CHECKOUT_URL = \"https://www.amazon.com/gp/buy/spc/handlers/display.html\";\n\n  const isCheckout = location.href.match(AMAZON_CHECKOUT_URL);\n\n  if (!isCheckout) {\n    return;\n  }\n\n  const AMAZON_ORDER_BUTTON_SELECTOR = \".place-your-order-button\";\n\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", AMAZON_ORDER_BUTTON_SELECTOR, e => {\n    console.log(\"AMAZON ORDER DETECTED\");\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"amazon\", amazon => {\n      amazon.orders = [...amazon.orders, ...amazon.cartItems];\n      amazon.cartItems = [];\n    });\n    console.log(\"AMAZON: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"amazon\"));\n  });\n};\n\nconst scrapeCart = () => {\n  const AMAZON_CART_URL = \"https://www.amazon.com/gp/cart/view.html\";\n\n  const isCart = location.href.match(AMAZON_CART_URL);\n\n  if (!isCart) {\n    return;\n  }\n  console.log(\"AMAZON CART DETECTED\");\n\n  const AMAZON_PRODUCT_CONTAINER_SELECTOR = \".sc-list-item-content\";\n  const AMAZON_PRODUCT_NAME_SELECTOR = \".sc-product-title\";\n  const AMAZON_PRODUCT_QUANTITY_SELECTOR = \".a-dropdown-prompt\";\n  const AMAZON_PRODUCT_PRICE_SELECTOR = \".sc-product-price\";\n\n  const cartItems = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.map(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(AMAZON_PRODUCT_CONTAINER_SELECTOR), element => {\n    const productName = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find(AMAZON_PRODUCT_NAME_SELECTOR).text().trim();\n    const productQuantity = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find(AMAZON_PRODUCT_QUANTITY_SELECTOR).text().trim();\n    const productPrice = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find(AMAZON_PRODUCT_PRICE_SELECTOR).text().trim();\n\n    console.log(\"AMAZON PRODUCT NAME:\", productName);\n    console.log(\"AMAZON PRODUCT QUANTITY:\", productQuantity);\n    console.log(\"AMAZON PRODUCT PRICE:\", productPrice);\n    return {\n      productName,\n      productQuantity,\n      productPrice\n    };\n  });\n\n  console.log(\"mmmmmmmmmmmmmmmmm\");\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.clearAll();\n  initStore();\n  console.log(\"kkkkkkkkkkkkkkk\");\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"amazon\", amazon => {\n    amazon.cartItems = cartItems;\n  });\n  console.log(\"xxxxxxxxxxxxxxX\");\n  console.log(\"AMAZON: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"amazon\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  scrapeCart,\n  saveOnOrder\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy9hbWF6b24uanM/MDU3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlXCI7XG5pbXBvcnQgYWxsUGx1Z2lucyBmcm9tIFwic3RvcmUvcGx1Z2lucy9hbGxcIjtcblxuc3RvcmUuYWRkUGx1Z2luKGFsbFBsdWdpbnMpO1xuXG5jb25zdCBTVE9SRV9LRVkgPSBcImFtYXpvblwiO1xuXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHN0b3JlLmRlZmF1bHRzKHsgW1NUT1JFX0tFWV06IHsgb3JkZXJzOiBbXSwgY2FydEl0ZW1zOiBbXSB9IH0pO1xufTtcblxuY29uc3Qgc2F2ZU9uT3JkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IEFNQVpPTl9DSEVDS09VVF9VUkwgPVxuICAgIFwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbFwiO1xuXG4gIGNvbnN0IGlzQ2hlY2tvdXQgPSBsb2NhdGlvbi5ocmVmLm1hdGNoKEFNQVpPTl9DSEVDS09VVF9VUkwpO1xuXG4gIGlmICghaXNDaGVja291dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IEFNQVpPTl9PUkRFUl9CVVRUT05fU0VMRUNUT1IgPSBcIi5wbGFjZS15b3VyLW9yZGVyLWJ1dHRvblwiO1xuXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgQU1BWk9OX09SREVSX0JVVFRPTl9TRUxFQ1RPUiwgZSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBTUFaT04gT1JERVIgREVURUNURURcIik7XG5cbiAgICBpbml0U3RvcmUoKTtcbiAgICBzdG9yZS51cGRhdGUoXCJhbWF6b25cIiwgYW1hem9uID0+IHtcbiAgICAgIGFtYXpvbi5vcmRlcnMgPSBbLi4uYW1hem9uLm9yZGVycywgLi4uYW1hem9uLmNhcnRJdGVtc107XG4gICAgICBhbWF6b24uY2FydEl0ZW1zID0gW107XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJBTUFaT046IFwiLCBzdG9yZS5nZXQoXCJhbWF6b25cIikpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNjcmFwZUNhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IEFNQVpPTl9DQVJUX1VSTCA9IFwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L3ZpZXcuaHRtbFwiO1xuXG4gIGNvbnN0IGlzQ2FydCA9IGxvY2F0aW9uLmhyZWYubWF0Y2goQU1BWk9OX0NBUlRfVVJMKTtcblxuICBpZiAoIWlzQ2FydCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyhcIkFNQVpPTiBDQVJUIERFVEVDVEVEXCIpO1xuXG4gIGNvbnN0IEFNQVpPTl9QUk9EVUNUX0NPTlRBSU5FUl9TRUxFQ1RPUiA9IFwiLnNjLWxpc3QtaXRlbS1jb250ZW50XCI7XG4gIGNvbnN0IEFNQVpPTl9QUk9EVUNUX05BTUVfU0VMRUNUT1IgPSBcIi5zYy1wcm9kdWN0LXRpdGxlXCI7XG4gIGNvbnN0IEFNQVpPTl9QUk9EVUNUX1FVQU5USVRZX1NFTEVDVE9SID0gXCIuYS1kcm9wZG93bi1wcm9tcHRcIjtcbiAgY29uc3QgQU1BWk9OX1BST0RVQ1RfUFJJQ0VfU0VMRUNUT1IgPSBcIi5zYy1wcm9kdWN0LXByaWNlXCI7XG5cbiAgY29uc3QgY2FydEl0ZW1zID0gJC5tYXAoJChBTUFaT05fUFJPRFVDVF9DT05UQUlORVJfU0VMRUNUT1IpLCBlbGVtZW50ID0+IHtcbiAgICBjb25zdCBwcm9kdWN0TmFtZSA9ICQoZWxlbWVudClcbiAgICAgIC5maW5kKEFNQVpPTl9QUk9EVUNUX05BTUVfU0VMRUNUT1IpXG4gICAgICAudGV4dCgpXG4gICAgICAudHJpbSgpO1xuICAgIGNvbnN0IHByb2R1Y3RRdWFudGl0eSA9ICQoZWxlbWVudClcbiAgICAgIC5maW5kKEFNQVpPTl9QUk9EVUNUX1FVQU5USVRZX1NFTEVDVE9SKVxuICAgICAgLnRleHQoKVxuICAgICAgLnRyaW0oKTtcbiAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSAkKGVsZW1lbnQpXG4gICAgICAuZmluZChBTUFaT05fUFJPRFVDVF9QUklDRV9TRUxFQ1RPUilcbiAgICAgIC50ZXh0KClcbiAgICAgIC50cmltKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkFNQVpPTiBQUk9EVUNUIE5BTUU6XCIsIHByb2R1Y3ROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIkFNQVpPTiBQUk9EVUNUIFFVQU5USVRZOlwiLCBwcm9kdWN0UXVhbnRpdHkpO1xuICAgIGNvbnNvbGUubG9nKFwiQU1BWk9OIFBST0RVQ1QgUFJJQ0U6XCIsIHByb2R1Y3RQcmljZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2R1Y3ROYW1lLFxuICAgICAgcHJvZHVjdFF1YW50aXR5LFxuICAgICAgcHJvZHVjdFByaWNlXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJtbW1tbW1tbW1tbW1tbW1tbVwiKTtcbiAgc3RvcmUuY2xlYXJBbGwoKTtcbiAgaW5pdFN0b3JlKCk7XG4gIGNvbnNvbGUubG9nKFwia2tra2tra2tra2tra2trXCIpO1xuICBzdG9yZS51cGRhdGUoXCJhbWF6b25cIiwgYW1hem9uID0+IHtcbiAgICBhbWF6b24uY2FydEl0ZW1zID0gY2FydEl0ZW1zO1xuICB9KTtcbiAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eFhcIik7XG4gIGNvbnNvbGUubG9nKFwiQU1BWk9OOiBcIiwgc3RvcmUuZ2V0KFwiYW1hem9uXCIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NyYXBlQ2FydCxcbiAgc2F2ZU9uT3JkZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NlcnZpY2VzL2FtYXpvbi5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})