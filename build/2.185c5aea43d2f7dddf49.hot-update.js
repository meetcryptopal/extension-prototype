webpackHotUpdate(2,{

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst STORE_KEY = \"twitter\";\n\nconst initStore = () => {\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ [STORE_KEY]: { likedPosts: [], retweetedPosts: [] } });\n};\n\nconst trackLikes = () => {\n  const TWITTER_DOMAIN = \"https://twitter.com/\";\n\n  const isTwitter = location.href.match(TWITTER_DOMAIN);\n\n  if (!isTwitter) {\n    return;\n  }\n  console.log(\"TWITTER DETECTED\");\n\n  const TWITTER_LIKE_BUTTON_SELECTOR = \".ProfileTweet-actionButton.js-actionFavorite\";\n  const TWITTER_RETWEET_BUTTON_SELECTOR = \"button.retweet-action\";\n  const TWITTER_RETWEET_BUTTON_CONTAINER_SELECTOR = \".tweet-button\";\n  const TWITTER_RETWEET_BODY_SELECTOR = \".RetweetDialog-tweet\";\n  const TWITTER_POST_HEADER_SELECTOR = \".stream-item-header\";\n  const TWITTER_POST_FOOTER_SELECTOR = \".stream-item-footer\";\n  const TWITTER_POST_BODY_SELECTOR = \".js-tweet-text-container\";\n  const TWITTER_POST_USERNAME_SELECTOR = \".fullname\";\n  const TWITTER_POST_PROFILE_LINK_SELECTOR = \".js-user-profile-link\";\n\n  // retweeting\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", TWITTER_RETWEET_BUTTON_SELECTOR, e => {\n    const $retweetBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const $header = $retweetBtn.closest(TWITTER_RETWEET_BUTTON_CONTAINER_SELECTOR).siblings(TWITTER_RETWEET_BODY_SELECTOR).find(TWITTER_POST_HEADER_SELECTOR);\n    const $body = $retweetBtn.closest(TWITTER_RETWEET_BUTTON_CONTAINER_SELECTOR).siblings(TWITTER_RETWEET_BODY_SELECTOR).find(TWITTER_POST_BODY_SELECTOR);\n\n    const username = $header.find(\".fullname\").text();\n    const content = $body.text();\n\n    const retweetedPost = {\n      content,\n      username\n    };\n\n    console.log(\"TWITTER RETWEETED USER: \", username);\n    console.log(\"TWITTER RETWEETED CONTENT: \", content);\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"twitter\", twitter => {\n      twitter.retweetedPosts = [...twitter.retweetedPosts, retweetedPost];\n    });\n    console.log(\"TWITTER: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"twitter\"));\n  });\n\n  // liking\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", TWITTER_LIKE_BUTTON_SELECTOR, e => {\n    const $likeBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const $header = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_HEADER_SELECTOR);\n    const $body = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_BODY_SELECTOR);\n\n    const username = $header.find(\".fullname\").text();\n    const content = $body.text();\n\n    const likedPost = {\n      content,\n      username\n    };\n\n    console.log(\"TWITTER LIKED USER: \", username);\n    console.log(\"TWITTER LIKED CONTENT: \", content);\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"twitter\", twitter => {\n      twitter.likedPosts = [...twitter.likedPosts, likedPost];\n    });\n    console.log(\"TWITTER: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"twitter\"));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  trackLikes\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy90d2l0dGVyLmpzPzhkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IGFsbFBsdWdpbnMgZnJvbSBcInN0b3JlL3BsdWdpbnMvYWxsXCI7XG5cbnN0b3JlLmFkZFBsdWdpbihhbGxQbHVnaW5zKTtcblxuY29uc3QgU1RPUkVfS0VZID0gXCJ0d2l0dGVyXCI7XG5cbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgc3RvcmUuZGVmYXVsdHMoeyBbU1RPUkVfS0VZXTogeyBsaWtlZFBvc3RzOiBbXSwgcmV0d2VldGVkUG9zdHM6IFtdIH0gfSk7XG59O1xuXG5jb25zdCB0cmFja0xpa2VzID0gKCkgPT4ge1xuICBjb25zdCBUV0lUVEVSX0RPTUFJTiA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIjtcblxuICBjb25zdCBpc1R3aXR0ZXIgPSBsb2NhdGlvbi5ocmVmLm1hdGNoKFRXSVRURVJfRE9NQUlOKTtcblxuICBpZiAoIWlzVHdpdHRlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyhcIlRXSVRURVIgREVURUNURURcIik7XG5cbiAgY29uc3QgVFdJVFRFUl9MSUtFX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgXCIuUHJvZmlsZVR3ZWV0LWFjdGlvbkJ1dHRvbi5qcy1hY3Rpb25GYXZvcml0ZVwiO1xuICBjb25zdCBUV0lUVEVSX1JFVFdFRVRfQlVUVE9OX1NFTEVDVE9SID0gXCJidXR0b24ucmV0d2VldC1hY3Rpb25cIjtcbiAgY29uc3QgVFdJVFRFUl9SRVRXRUVUX0JVVFRPTl9DT05UQUlORVJfU0VMRUNUT1IgPSBcIi50d2VldC1idXR0b25cIjtcbiAgY29uc3QgVFdJVFRFUl9SRVRXRUVUX0JPRFlfU0VMRUNUT1IgPSBcIi5SZXR3ZWV0RGlhbG9nLXR3ZWV0XCI7XG4gIGNvbnN0IFRXSVRURVJfUE9TVF9IRUFERVJfU0VMRUNUT1IgPSBcIi5zdHJlYW0taXRlbS1oZWFkZXJcIjtcbiAgY29uc3QgVFdJVFRFUl9QT1NUX0ZPT1RFUl9TRUxFQ1RPUiA9IFwiLnN0cmVhbS1pdGVtLWZvb3RlclwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfQk9EWV9TRUxFQ1RPUiA9IFwiLmpzLXR3ZWV0LXRleHQtY29udGFpbmVyXCI7XG4gIGNvbnN0IFRXSVRURVJfUE9TVF9VU0VSTkFNRV9TRUxFQ1RPUiA9IFwiLmZ1bGxuYW1lXCI7XG4gIGNvbnN0IFRXSVRURVJfUE9TVF9QUk9GSUxFX0xJTktfU0VMRUNUT1IgPSBcIi5qcy11c2VyLXByb2ZpbGUtbGlua1wiO1xuXG4gIC8vIHJldHdlZXRpbmdcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBUV0lUVEVSX1JFVFdFRVRfQlVUVE9OX1NFTEVDVE9SLCBlID0+IHtcbiAgICBjb25zdCAkcmV0d2VldEJ0biA9ICQoZS50YXJnZXQpO1xuXG4gICAgY29uc3QgJGhlYWRlciA9ICRyZXR3ZWV0QnRuXG4gICAgICAuY2xvc2VzdChUV0lUVEVSX1JFVFdFRVRfQlVUVE9OX0NPTlRBSU5FUl9TRUxFQ1RPUilcbiAgICAgIC5zaWJsaW5ncyhUV0lUVEVSX1JFVFdFRVRfQk9EWV9TRUxFQ1RPUilcbiAgICAgIC5maW5kKFRXSVRURVJfUE9TVF9IRUFERVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0ICRib2R5ID0gJHJldHdlZXRCdG5cbiAgICAgIC5jbG9zZXN0KFRXSVRURVJfUkVUV0VFVF9CVVRUT05fQ09OVEFJTkVSX1NFTEVDVE9SKVxuICAgICAgLnNpYmxpbmdzKFRXSVRURVJfUkVUV0VFVF9CT0RZX1NFTEVDVE9SKVxuICAgICAgLmZpbmQoVFdJVFRFUl9QT1NUX0JPRFlfU0VMRUNUT1IpO1xuXG4gICAgY29uc3QgdXNlcm5hbWUgPSAkaGVhZGVyLmZpbmQoXCIuZnVsbG5hbWVcIikudGV4dCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAkYm9keS50ZXh0KCk7XG5cbiAgICBjb25zdCByZXR3ZWV0ZWRQb3N0ID0ge1xuICAgICAgY29udGVudCxcbiAgICAgIHVzZXJuYW1lXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBSRVRXRUVURUQgVVNFUjogXCIsIHVzZXJuYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlRXSVRURVIgUkVUV0VFVEVEIENPTlRFTlQ6IFwiLCBjb250ZW50KTtcblxuICAgIGluaXRTdG9yZSgpO1xuICAgIHN0b3JlLnVwZGF0ZShcInR3aXR0ZXJcIiwgdHdpdHRlciA9PiB7XG4gICAgICB0d2l0dGVyLnJldHdlZXRlZFBvc3RzID0gWy4uLnR3aXR0ZXIucmV0d2VldGVkUG9zdHMsIHJldHdlZXRlZFBvc3RdO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUjogXCIsIHN0b3JlLmdldChcInR3aXR0ZXJcIikpO1xuICB9KTtcblxuICAvLyBsaWtpbmdcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBUV0lUVEVSX0xJS0VfQlVUVE9OX1NFTEVDVE9SLCBlID0+IHtcbiAgICBjb25zdCAkbGlrZUJ0biA9ICQoZS50YXJnZXQpO1xuXG4gICAgY29uc3QgJGhlYWRlciA9ICRsaWtlQnRuXG4gICAgICAuY2xvc2VzdChUV0lUVEVSX1BPU1RfRk9PVEVSX1NFTEVDVE9SKVxuICAgICAgLnNpYmxpbmdzKFRXSVRURVJfUE9TVF9IRUFERVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0ICRib2R5ID0gJGxpa2VCdG5cbiAgICAgIC5jbG9zZXN0KFRXSVRURVJfUE9TVF9GT09URVJfU0VMRUNUT1IpXG4gICAgICAuc2libGluZ3MoVFdJVFRFUl9QT1NUX0JPRFlfU0VMRUNUT1IpO1xuXG4gICAgY29uc3QgdXNlcm5hbWUgPSAkaGVhZGVyLmZpbmQoXCIuZnVsbG5hbWVcIikudGV4dCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAkYm9keS50ZXh0KCk7XG5cbiAgICBjb25zdCBsaWtlZFBvc3QgPSB7XG4gICAgICBjb250ZW50LFxuICAgICAgdXNlcm5hbWVcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJUV0lUVEVSIExJS0VEIFVTRVI6IFwiLCB1c2VybmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJUV0lUVEVSIExJS0VEIENPTlRFTlQ6IFwiLCBjb250ZW50KTtcblxuICAgIGluaXRTdG9yZSgpO1xuICAgIHN0b3JlLnVwZGF0ZShcInR3aXR0ZXJcIiwgdHdpdHRlciA9PiB7XG4gICAgICB0d2l0dGVyLmxpa2VkUG9zdHMgPSBbLi4udHdpdHRlci5saWtlZFBvc3RzLCBsaWtlZFBvc3RdO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUjogXCIsIHN0b3JlLmdldChcInR3aXR0ZXJcIikpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHJhY2tMaWtlc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvc2VydmljZXMvdHdpdHRlci5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})