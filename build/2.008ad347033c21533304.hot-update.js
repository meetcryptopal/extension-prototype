webpackHotUpdate(2,{

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst STORE_KEY = \"twitter\";\n\nconst initStore = () => {\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({ [STORE_KEY]: { likedPosts: [], retweetedPosts } });\n};\n\nconst trackLikes = () => {\n  const TWITTER_DOMAIN = \"https://twitter.com/\";\n\n  const isTwitter = location.href.match(TWITTER_DOMAIN);\n\n  if (!isTwitter) {\n    return;\n  }\n  console.log(\"TWITTER DETECTED\");\n\n  const TWITTER_LIKE_BUTTON_SELECTOR = \".ProfileTweet-actionButton.js-actionFavorite\";\n  const TWITTER_RETWEET_BUTTON_SELECTOR = \"button.retweet-action\";\n  const TWITTER_POST_HEADER_SELECTOR = \".stream-item-header\";\n  const TWITTER_POST_FOOTER_SELECTOR = \".stream-item-footer\";\n  const TWITTER_POST_BODY_SELECTOR = \".js-tweet-text-container\";\n  const TWITTER_POST_USERNAME_SELECTOR = \".fullname\";\n  const TWITTER_POST_PROFILE_LINK_SELECTOR = \".js-user-profile-link\";\n\n  // retweeting\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", TWITTER_RETWEET_BUTTON_SELECTOR, e => {\n    const $retweetBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const $header = $retweetBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_HEADER_SELECTOR);\n    const $body = $retweetBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_BODY_SELECTOR);\n\n    const username = $header.find(\".fullname\").text();\n    const content = $body.text();\n\n    const retweetedPost = {\n      content,\n      username\n    };\n\n    console.log(\"TWITTER RETWEETED USER: \", username);\n    console.log(\"TWITTER RETWEETED CONTENT: \", content);\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"twitter\", twitter => {\n      twitter.retweetedPosts = [...twitter.retweetedPosts, retweetedPost];\n    });\n    console.log(\"TWITTER: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"twitter\"));\n  });\n\n  // liking\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").on(\"click\", TWITTER_LIKE_BUTTON_SELECTOR, e => {\n    const $likeBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);\n\n    const $header = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_HEADER_SELECTOR);\n    const $body = $likeBtn.closest(TWITTER_POST_FOOTER_SELECTOR).siblings(TWITTER_POST_BODY_SELECTOR);\n\n    const username = $header.find(\".fullname\").text();\n    const content = $body.text();\n\n    const likedPost = {\n      content,\n      username\n    };\n\n    console.log(\"TWITTER LIKED USER: \", username);\n    console.log(\"TWITTER LIKED CONTENT: \", content);\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"twitter\", twitter => {\n      twitter.likedPosts = [...twitter.likedPosts, likedPost];\n    });\n    console.log(\"TWITTER: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"twitter\"));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  trackLikes\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy90d2l0dGVyLmpzPzhkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IGFsbFBsdWdpbnMgZnJvbSBcInN0b3JlL3BsdWdpbnMvYWxsXCI7XG5cbnN0b3JlLmFkZFBsdWdpbihhbGxQbHVnaW5zKTtcblxuY29uc3QgU1RPUkVfS0VZID0gXCJ0d2l0dGVyXCI7XG5cbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgc3RvcmUuZGVmYXVsdHMoeyBbU1RPUkVfS0VZXTogeyBsaWtlZFBvc3RzOiBbXSwgcmV0d2VldGVkUG9zdHMgfSB9KTtcbn07XG5cbmNvbnN0IHRyYWNrTGlrZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFRXSVRURVJfRE9NQUlOID0gXCJodHRwczovL3R3aXR0ZXIuY29tL1wiO1xuXG4gIGNvbnN0IGlzVHdpdHRlciA9IGxvY2F0aW9uLmhyZWYubWF0Y2goVFdJVFRFUl9ET01BSU4pO1xuXG4gIGlmICghaXNUd2l0dGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBERVRFQ1RFRFwiKTtcblxuICBjb25zdCBUV0lUVEVSX0xJS0VfQlVUVE9OX1NFTEVDVE9SID1cbiAgICBcIi5Qcm9maWxlVHdlZXQtYWN0aW9uQnV0dG9uLmpzLWFjdGlvbkZhdm9yaXRlXCI7XG4gIGNvbnN0IFRXSVRURVJfUkVUV0VFVF9CVVRUT05fU0VMRUNUT1IgPSBcImJ1dHRvbi5yZXR3ZWV0LWFjdGlvblwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfSEVBREVSX1NFTEVDVE9SID0gXCIuc3RyZWFtLWl0ZW0taGVhZGVyXCI7XG4gIGNvbnN0IFRXSVRURVJfUE9TVF9GT09URVJfU0VMRUNUT1IgPSBcIi5zdHJlYW0taXRlbS1mb290ZXJcIjtcbiAgY29uc3QgVFdJVFRFUl9QT1NUX0JPRFlfU0VMRUNUT1IgPSBcIi5qcy10d2VldC10ZXh0LWNvbnRhaW5lclwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfVVNFUk5BTUVfU0VMRUNUT1IgPSBcIi5mdWxsbmFtZVwiO1xuICBjb25zdCBUV0lUVEVSX1BPU1RfUFJPRklMRV9MSU5LX1NFTEVDVE9SID0gXCIuanMtdXNlci1wcm9maWxlLWxpbmtcIjtcblxuICAvLyByZXR3ZWV0aW5nXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgVFdJVFRFUl9SRVRXRUVUX0JVVFRPTl9TRUxFQ1RPUiwgZSA9PiB7XG4gICAgY29uc3QgJHJldHdlZXRCdG4gPSAkKGUudGFyZ2V0KTtcblxuICAgIGNvbnN0ICRoZWFkZXIgPSAkcmV0d2VldEJ0blxuICAgICAgLmNsb3Nlc3QoVFdJVFRFUl9QT1NUX0ZPT1RFUl9TRUxFQ1RPUilcbiAgICAgIC5zaWJsaW5ncyhUV0lUVEVSX1BPU1RfSEVBREVSX1NFTEVDVE9SKTtcbiAgICBjb25zdCAkYm9keSA9ICRyZXR3ZWV0QnRuXG4gICAgICAuY2xvc2VzdChUV0lUVEVSX1BPU1RfRk9PVEVSX1NFTEVDVE9SKVxuICAgICAgLnNpYmxpbmdzKFRXSVRURVJfUE9TVF9CT0RZX1NFTEVDVE9SKTtcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gJGhlYWRlci5maW5kKFwiLmZ1bGxuYW1lXCIpLnRleHQoKTtcbiAgICBjb25zdCBjb250ZW50ID0gJGJvZHkudGV4dCgpO1xuXG4gICAgY29uc3QgcmV0d2VldGVkUG9zdCA9IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICB1c2VybmFtZVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIlRXSVRURVIgUkVUV0VFVEVEIFVTRVI6IFwiLCB1c2VybmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJUV0lUVEVSIFJFVFdFRVRFRCBDT05URU5UOiBcIiwgY29udGVudCk7XG5cbiAgICBpbml0U3RvcmUoKTtcbiAgICBzdG9yZS51cGRhdGUoXCJ0d2l0dGVyXCIsIHR3aXR0ZXIgPT4ge1xuICAgICAgdHdpdHRlci5yZXR3ZWV0ZWRQb3N0cyA9IFsuLi50d2l0dGVyLnJldHdlZXRlZFBvc3RzLCByZXR3ZWV0ZWRQb3N0XTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlRXSVRURVI6IFwiLCBzdG9yZS5nZXQoXCJ0d2l0dGVyXCIpKTtcbiAgfSk7XG5cbiAgLy8gbGlraW5nXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgVFdJVFRFUl9MSUtFX0JVVFRPTl9TRUxFQ1RPUiwgZSA9PiB7XG4gICAgY29uc3QgJGxpa2VCdG4gPSAkKGUudGFyZ2V0KTtcblxuICAgIGNvbnN0ICRoZWFkZXIgPSAkbGlrZUJ0blxuICAgICAgLmNsb3Nlc3QoVFdJVFRFUl9QT1NUX0ZPT1RFUl9TRUxFQ1RPUilcbiAgICAgIC5zaWJsaW5ncyhUV0lUVEVSX1BPU1RfSEVBREVSX1NFTEVDVE9SKTtcbiAgICBjb25zdCAkYm9keSA9ICRsaWtlQnRuXG4gICAgICAuY2xvc2VzdChUV0lUVEVSX1BPU1RfRk9PVEVSX1NFTEVDVE9SKVxuICAgICAgLnNpYmxpbmdzKFRXSVRURVJfUE9TVF9CT0RZX1NFTEVDVE9SKTtcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gJGhlYWRlci5maW5kKFwiLmZ1bGxuYW1lXCIpLnRleHQoKTtcbiAgICBjb25zdCBjb250ZW50ID0gJGJvZHkudGV4dCgpO1xuXG4gICAgY29uc3QgbGlrZWRQb3N0ID0ge1xuICAgICAgY29udGVudCxcbiAgICAgIHVzZXJuYW1lXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBMSUtFRCBVU0VSOiBcIiwgdXNlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiVFdJVFRFUiBMSUtFRCBDT05URU5UOiBcIiwgY29udGVudCk7XG5cbiAgICBpbml0U3RvcmUoKTtcbiAgICBzdG9yZS51cGRhdGUoXCJ0d2l0dGVyXCIsIHR3aXR0ZXIgPT4ge1xuICAgICAgdHdpdHRlci5saWtlZFBvc3RzID0gWy4uLnR3aXR0ZXIubGlrZWRQb3N0cywgbGlrZWRQb3N0XTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlRXSVRURVI6IFwiLCBzdG9yZS5nZXQoXCJ0d2l0dGVyXCIpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRyYWNrTGlrZXNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NlcnZpY2VzL3R3aXR0ZXIuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})