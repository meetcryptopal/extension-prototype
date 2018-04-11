webpackHotUpdate(3,{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(53);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(307);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst trackLikes = () => {\n  // TODO: This should be filtered from manifest.json\n  if (!location.href.toLowerCase().includes(\"facebook.com\")) return;\n\n  const FACEBOOK_LIKE_BUTTON_SELECTOR = \".UFILikeLink\";\n\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", FACEBOOK_LIKE_BUTTON_SELECTOR, e => {\n    console.log(\"FACEBOOK LIKE DETECTED\");\n    const $likeBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const content = $likeBtn.closest(\".userContentWrapper\").find(\".userContent\").text();\n\n    const likedPost = {\n      content\n    };\n\n    console.log(\"FACEBOOK LIKED CONTENT: \", content);\n\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ facebook: { likedPosts: [] } });\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"facebook\", facebook => {\n      facebook.likedPosts = [...facebook.likedPosts, likedPost];\n    });\n    console.log(\"FACEBOOK: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"facebook\"));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  trackLikes\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy9mYWNlYm9vay5qcz83NzJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmVcIjtcbmltcG9ydCBhbGxQbHVnaW5zIGZyb20gXCJzdG9yZS9wbHVnaW5zL2FsbFwiO1xuXG5zdG9yZS5hZGRQbHVnaW4oYWxsUGx1Z2lucyk7XG5cbmNvbnN0IHRyYWNrTGlrZXMgPSAoKSA9PiB7XG4gIC8vIFRPRE86IFRoaXMgc2hvdWxkIGJlIGZpbHRlcmVkIGZyb20gbWFuaWZlc3QuanNvblxuICBpZiAoIWxvY2F0aW9uLmhyZWYudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImZhY2Vib29rLmNvbVwiKSkgcmV0dXJuO1xuXG4gIGNvbnN0IEZBQ0VCT09LX0xJS0VfQlVUVE9OX1NFTEVDVE9SID0gXCIuVUZJTGlrZUxpbmtcIjtcblxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIEZBQ0VCT09LX0xJS0VfQlVUVE9OX1NFTEVDVE9SLCBlID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZBQ0VCT09LIExJS0UgREVURUNURURcIik7XG4gICAgY29uc3QgJGxpa2VCdG4gPSAkKGUudGFyZ2V0KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAkbGlrZUJ0blxuICAgICAgLmNsb3Nlc3QoXCIudXNlckNvbnRlbnRXcmFwcGVyXCIpXG4gICAgICAuZmluZChcIi51c2VyQ29udGVudFwiKVxuICAgICAgLnRleHQoKTtcblxuICAgIGNvbnN0IGxpa2VkUG9zdCA9IHtcbiAgICAgIGNvbnRlbnRcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJGQUNFQk9PSyBMSUtFRCBDT05URU5UOiBcIiwgY29udGVudCk7XG5cbiAgICBzdG9yZS5kZWZhdWx0cyh7IGZhY2Vib29rOiB7IGxpa2VkUG9zdHM6IFtdIH0gfSk7XG4gICAgc3RvcmUudXBkYXRlKFwiZmFjZWJvb2tcIiwgZmFjZWJvb2sgPT4ge1xuICAgICAgZmFjZWJvb2subGlrZWRQb3N0cyA9IFsuLi5mYWNlYm9vay5saWtlZFBvc3RzLCBsaWtlZFBvc3RdO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiRkFDRUJPT0s6IFwiLCBzdG9yZS5nZXQoXCJmYWNlYm9va1wiKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0cmFja0xpa2VzXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9zZXJ2aWNlcy9mYWNlYm9vay5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(53);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_linkedin__ = __webpack_require__(180);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopify__ = __webpack_require__(181);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_amazon__ = __webpack_require__(178);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_twitter__ = __webpack_require__(182);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_facebook__ = __webpack_require__(179);\n\n\n\n\n\n\n\n// TODO: This should be bound from manifest.json.\n// I need fuzzy matching. the FB service will be responsible for only running\n// when it's needed.\nconst scrape = () => {\n  __WEBPACK_IMPORTED_MODULE_3__services_amazon__[\"a\" /* default */].scrapeCart();\n  __WEBPACK_IMPORTED_MODULE_3__services_amazon__[\"a\" /* default */].saveOnOrder();\n  __WEBPACK_IMPORTED_MODULE_2__services_shopify__[\"a\" /* default */].scrapeCheckout();\n  __WEBPACK_IMPORTED_MODULE_2__services_shopify__[\"a\" /* default */].saveOnOrder();\n\n  __WEBPACK_IMPORTED_MODULE_4__services_twitter__[\"a\" /* default */].trackLike();\n  __WEBPACK_IMPORTED_MODULE_5__services_facebook__[\"a\" /* default */].trackLikes();\n  __WEBPACK_IMPORTED_MODULE_1__services_linkedin__[\"a\" /* default */].scrapeFeed();\n  // LinkedIn.scrapeProfile();\n};\n\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function () {\n  console.log(\"CRYPTOPAL LOADED\");\n\n  // on initial load + for full page refreshess\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on(\"load\", () => {\n    scrape();\n  });\n\n  // for JS rendered views + routes\n  // const body = document.querySelector(\"body\");\n  // let currentHref = location.href;\n  // const observer = new MutationObserver(mutations => {\n  // if (currentHref !== location.href) {\n  // currentHref = location.href;\n  // scrape();\n  // }\n  // });\n  // observer.observe(body, { childList: true, subtree: true });\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb250ZW50c2NyaXB0LmpzPzU4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IExpbmtlZEluIGZyb20gXCIuL3NlcnZpY2VzL2xpbmtlZGluXCI7XG5pbXBvcnQgU2hvcGlmeSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9waWZ5XCI7XG5pbXBvcnQgQW1hem9uIGZyb20gXCIuL3NlcnZpY2VzL2FtYXpvblwiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4vc2VydmljZXMvdHdpdHRlclwiO1xuaW1wb3J0IEZhY2Vib29rIGZyb20gXCIuL3NlcnZpY2VzL2ZhY2Vib29rXCI7XG5cbi8vIFRPRE86IFRoaXMgc2hvdWxkIGJlIGJvdW5kIGZyb20gbWFuaWZlc3QuanNvbi5cbi8vIEkgbmVlZCBmdXp6eSBtYXRjaGluZy4gdGhlIEZCIHNlcnZpY2Ugd2lsbCBiZSByZXNwb25zaWJsZSBmb3Igb25seSBydW5uaW5nXG4vLyB3aGVuIGl0J3MgbmVlZGVkLlxuY29uc3Qgc2NyYXBlID0gKCkgPT4ge1xuICBBbWF6b24uc2NyYXBlQ2FydCgpO1xuICBBbWF6b24uc2F2ZU9uT3JkZXIoKTtcbiAgU2hvcGlmeS5zY3JhcGVDaGVja291dCgpO1xuICBTaG9waWZ5LnNhdmVPbk9yZGVyKCk7XG5cbiAgVHdpdHRlci50cmFja0xpa2UoKTtcbiAgRmFjZWJvb2sudHJhY2tMaWtlcygpO1xuICBMaW5rZWRJbi5zY3JhcGVGZWVkKCk7XG4gIC8vIExpbmtlZEluLnNjcmFwZVByb2ZpbGUoKTtcbn07XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKFwiQ1JZUFRPUEFMIExPQURFRFwiKTtcblxuICAvLyBvbiBpbml0aWFsIGxvYWQgKyBmb3IgZnVsbCBwYWdlIHJlZnJlc2hlc3NcbiAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgc2NyYXBlKCk7XG4gIH0pO1xuXG4gIC8vIGZvciBKUyByZW5kZXJlZCB2aWV3cyArIHJvdXRlc1xuICAvLyBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIC8vIGxldCBjdXJyZW50SHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gIC8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgLy8gaWYgKGN1cnJlbnRIcmVmICE9PSBsb2NhdGlvbi5ocmVmKSB7XG4gIC8vIGN1cnJlbnRIcmVmID0gbG9jYXRpb24uaHJlZjtcbiAgLy8gc2NyYXBlKCk7XG4gIC8vIH1cbiAgLy8gfSk7XG4gIC8vIG9ic2VydmVyLm9ic2VydmUoYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29udGVudHNjcmlwdC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})