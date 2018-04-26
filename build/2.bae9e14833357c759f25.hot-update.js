webpackHotUpdate(2,{

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst trackLikes = () => {\n  const TWITTER_DOMAIN = \"https://twitter.com/\";\n\n  const isTwitter = location.href.match(TWITTER_DOMAIN);\n\n  if (!isTwitter) {\n    return;\n  }\n  console.log(\"TWITTER DETECTED\");\n\n  const TWITTER_LIKE_BUTTON_SELECTOR = \".ProfileTweet-actionButton.js-actionFavorite\";\n  const TWITTER_POST_HEADER_SELECTOR = \".stream-item-header\";\n  const TWITTER_POST_FOOTER_SELECTOR = \".stream-item-footer\";\n  const TWITTER_POST_BODY_SELECTOR = \".js-tweet-text-container\";\n  const TWITTER_POST_USERNAME_SELECTOR = \".fullname\";\n  const TWITTER_POST_PROFILE_LINK_SELECTOR = \".js-user-profile-link\";\n\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", TWITTER_LIKE_BUTTON_SELECTOR, e => {\n    const $likeBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const $header = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_HEADER_SELECTOR);\n    const $body = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_BODY_SELECTOR);\n\n    const username = $header.find(\".fullname\").text();\n    const content = $body.text();\n\n    const likedPost = {\n      content\n    };\n\n    console.log(\"TWITTER LIKED USER: \", username);\n    console.log(\"TWITTER LIKED CONTENT: \", content);\n\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ twitter: { likedPosts: [] } });\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"twitter\", twitter => {\n      twitter.likedPosts = [...twitter.likedPosts, likedPost];\n    });\n    console.log(\"TWITTER: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"twitter\"));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  trackLikes\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy90d2l0dGVyLmpzPzhkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IGFsbFBsdWdpbnMgZnJvbSBcInN0b3JlL3BsdWdpbnMvYWxsXCI7XG5cbnN0b3JlLmFkZFBsdWdpbihhbGxQbHVnaW5zKTtcblxuY29uc3QgdHJhY2tMaWtlcyA9ICgpID0+IHtcbiAgY29uc3QgVFdJVFRFUl9ET01BSU4gPSBcImh0dHBzOi8vdHdpdHRlci5jb20vXCI7XG5cbiAgY29uc3QgaXNUd2l0dGVyID0gbG9jYXRpb24uaHJlZi5tYXRjaChUV0lUVEVSX0RPTUFJTik7XG5cbiAgaWYgKCFpc1R3aXR0ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5sb2coXCJUV0lUVEVSIERFVEVDVEVEXCIpO1xuXG4gIGNvbnN0IFRXSVRURVJfTElLRV9CVVRUT05fU0VMRUNUT1IgPVxuICAgIFwiLlByb2ZpbGVUd2VldC1hY3Rpb25CdXR0b24uanMtYWN0aW9uRmF2b3JpdGVcIjtcbiAgY29uc3QgVFdJVFRFUl9QT1NUX0hFQURFUl9TRUxFQ1RPUiA9IFwiLnN0cmVhbS1pdGVtLWhlYWRlclwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfRk9PVEVSX1NFTEVDVE9SID0gXCIuc3RyZWFtLWl0ZW0tZm9vdGVyXCI7XG4gIGNvbnN0IFRXSVRURVJfUE9TVF9CT0RZX1NFTEVDVE9SID0gXCIuanMtdHdlZXQtdGV4dC1jb250YWluZXJcIjtcbiAgY29uc3QgVFdJVFRFUl9QT1NUX1VTRVJOQU1FX1NFTEVDVE9SID0gXCIuZnVsbG5hbWVcIjtcbiAgY29uc3QgVFdJVFRFUl9QT1NUX1BST0ZJTEVfTElOS19TRUxFQ1RPUiA9IFwiLmpzLXVzZXItcHJvZmlsZS1saW5rXCI7XG5cbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBUV0lUVEVSX0xJS0VfQlVUVE9OX1NFTEVDVE9SLCBlID0+IHtcbiAgICBjb25zdCAkbGlrZUJ0biA9ICQoZS50YXJnZXQpO1xuXG4gICAgY29uc3QgJGhlYWRlciA9ICRsaWtlQnRuXG4gICAgICAuY2xvc2VzdChUV0lUVEVSX1BPU1RfRk9PVEVSX1NFTEVDVE9SKVxuICAgICAgLnNpYmxpbmdzKFRXSVRURVJfUE9TVF9IRUFERVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0ICRib2R5ID0gJGxpa2VCdG5cbiAgICAgIC5jbG9zZXN0KFRXSVRURVJfUE9TVF9GT09URVJfU0VMRUNUT1IpXG4gICAgICAuc2libGluZ3MoVFdJVFRFUl9QT1NUX0JPRFlfU0VMRUNUT1IpO1xuXG4gICAgY29uc3QgdXNlcm5hbWUgPSAkaGVhZGVyLmZpbmQoXCIuZnVsbG5hbWVcIikudGV4dCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAkYm9keS50ZXh0KCk7XG5cbiAgICBjb25zdCBsaWtlZFBvc3QgPSB7XG4gICAgICBjb250ZW50XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBMSUtFRCBVU0VSOiBcIiwgdXNlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBMSUtFRCBDT05URU5UOiBcIiwgY29udGVudCk7XG5cbiAgICBzdG9yZS5kZWZhdWx0cyh7IHR3aXR0ZXI6IHsgbGlrZWRQb3N0czogW10gfSB9KTtcbiAgICBzdG9yZS51cGRhdGUoXCJ0d2l0dGVyXCIsIHR3aXR0ZXIgPT4ge1xuICAgICAgdHdpdHRlci5saWtlZFBvc3RzID0gWy4uLnR3aXR0ZXIubGlrZWRQb3N0cywgbGlrZWRQb3N0XTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlRXSVRURVI6IFwiLCBzdG9yZS5nZXQoXCJ0d2l0dGVyXCIpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRyYWNrTGlrZXNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NlcnZpY2VzL3R3aXR0ZXIuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})