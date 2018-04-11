webpackHotUpdate(3,{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(53);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(307);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst trackLike = () => {\n  const TWITTER_DOMAIN = \"https://twitter.com/\";\n\n  const isTwitter = location.href.match(TWITTER_DOMAIN);\n\n  if (!isTwitter) {\n    return;\n  }\n  console.log(\"TWITTER DETECTED\");\n\n  const TWITTER_LIKE_BUTTON_SELECTOR = \".ProfileTweet-actionButton.js-actionFavorite\";\n  const TWITTER_POST_HEADER_SELECTOR = \".stream-item-header\";\n  const TWITTER_POST_FOOTER_SELECTOR = \".stream-item-footer\";\n  const TWITTER_POST_BODY_SELECTOR = \".js-tweet-text-container\";\n  const TWITTER_POST_USERNAME_SELECTOR = \".fullname\";\n  const TWITTER_POST_PROFILE_LINK_SELECTOR = \".js-user-profile-link\";\n\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", TWITTER_LIKE_BUTTON_SELECTOR, e => {\n    const $likeBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const $header = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_HEADER_SELECTOR);\n    const $body = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_BODY_SELECTOR);\n\n    const username = $header.find(TWITTER_POST_USERNAME_SELECTOR).text();\n    const profileLink = $header.find(TWITTER_POST_PROFILE_LINK_SELECTOR).attr(\"href\");\n    const content = $body.text();\n\n    const likedPost = {\n      content,\n      username,\n      profileLink\n    };\n\n    console.log(\"TWITTER LIKED CONTENT: \", content);\n    console.log(\"TWITTER USERNAME: \", username);\n    console.log(\"TWITTER PROFILE LINK: \", profileLink);\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ twitter: { likedPosts: [] } });\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"twitter\", twitter => {\n      twitter.likedPosts = [...twitter.likedPosts, likedPost];\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  trackLike\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy90d2l0dGVyLmpzPzhkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IGFsbFBsdWdpbnMgZnJvbSBcInN0b3JlL3BsdWdpbnMvYWxsXCI7XG5cbnN0b3JlLmFkZFBsdWdpbihhbGxQbHVnaW5zKTtcblxuY29uc3QgdHJhY2tMaWtlID0gKCkgPT4ge1xuICBjb25zdCBUV0lUVEVSX0RPTUFJTiA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIjtcblxuICBjb25zdCBpc1R3aXR0ZXIgPSBsb2NhdGlvbi5ocmVmLm1hdGNoKFRXSVRURVJfRE9NQUlOKTtcblxuICBpZiAoIWlzVHdpdHRlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyhcIlRXSVRURVIgREVURUNURURcIik7XG5cbiAgY29uc3QgVFdJVFRFUl9MSUtFX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgXCIuUHJvZmlsZVR3ZWV0LWFjdGlvbkJ1dHRvbi5qcy1hY3Rpb25GYXZvcml0ZVwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfSEVBREVSX1NFTEVDVE9SID0gXCIuc3RyZWFtLWl0ZW0taGVhZGVyXCI7XG4gIGNvbnN0IFRXSVRURVJfUE9TVF9GT09URVJfU0VMRUNUT1IgPSBcIi5zdHJlYW0taXRlbS1mb290ZXJcIjtcbiAgY29uc3QgVFdJVFRFUl9QT1NUX0JPRFlfU0VMRUNUT1IgPSBcIi5qcy10d2VldC10ZXh0LWNvbnRhaW5lclwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfVVNFUk5BTUVfU0VMRUNUT1IgPSBcIi5mdWxsbmFtZVwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfUFJPRklMRV9MSU5LX1NFTEVDVE9SID0gXCIuanMtdXNlci1wcm9maWxlLWxpbmtcIjtcblxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFRXSVRURVJfTElLRV9CVVRUT05fU0VMRUNUT1IsIGUgPT4ge1xuICAgIGNvbnN0ICRsaWtlQnRuID0gJChlLnRhcmdldCk7XG5cbiAgICBjb25zdCAkaGVhZGVyID0gJGxpa2VCdG5cbiAgICAgIC5jbG9zZXN0KFRXSVRURVJfUE9TVF9GT09URVJfU0VMRUNUT1IpXG4gICAgICAuc2libGluZ3MoVFdJVFRFUl9QT1NUX0hFQURFUl9TRUxFQ1RPUik7XG4gICAgY29uc3QgJGJvZHkgPSAkbGlrZUJ0blxuICAgICAgLmNsb3Nlc3QoVFdJVFRFUl9QT1NUX0ZPT1RFUl9TRUxFQ1RPUilcbiAgICAgIC5zaWJsaW5ncyhUV0lUVEVSX1BPU1RfQk9EWV9TRUxFQ1RPUik7XG5cbiAgICBjb25zdCB1c2VybmFtZSA9ICRoZWFkZXIuZmluZChUV0lUVEVSX1BPU1RfVVNFUk5BTUVfU0VMRUNUT1IpLnRleHQoKTtcbiAgICBjb25zdCBwcm9maWxlTGluayA9ICRoZWFkZXJcbiAgICAgIC5maW5kKFRXSVRURVJfUE9TVF9QUk9GSUxFX0xJTktfU0VMRUNUT1IpXG4gICAgICAuYXR0cihcImhyZWZcIik7XG4gICAgY29uc3QgY29udGVudCA9ICRib2R5LnRleHQoKTtcblxuICAgIGNvbnN0IGxpa2VkUG9zdCA9IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIHByb2ZpbGVMaW5rXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBMSUtFRCBDT05URU5UOiBcIiwgY29udGVudCk7XG4gICAgY29uc29sZS5sb2coXCJUV0lUVEVSIFVTRVJOQU1FOiBcIiwgdXNlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBQUk9GSUxFIExJTks6IFwiLCBwcm9maWxlTGluayk7XG4gICAgc3RvcmUuZGVmYXVsdHMoeyB0d2l0dGVyOiB7IGxpa2VkUG9zdHM6IFtdIH0gfSk7XG4gICAgc3RvcmUudXBkYXRlKFwidHdpdHRlclwiLCB0d2l0dGVyID0+IHtcbiAgICAgIHR3aXR0ZXIubGlrZWRQb3N0cyA9IFsuLi50d2l0dGVyLmxpa2VkUG9zdHMsIGxpa2VkUG9zdF07XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0cmFja0xpa2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NlcnZpY2VzL3R3aXR0ZXIuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})