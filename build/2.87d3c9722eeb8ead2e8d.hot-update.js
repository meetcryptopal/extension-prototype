webpackHotUpdate(2,{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_2_store_plugins_all___default.a);\n\nconst STORE_KEY = \"linkedin\";\n\nconst initStore = () => {\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.defaults({\n    [STORE_KEY]: {\n      name: null,\n      headline: null,\n      profilePath: null,\n      location: null\n    }\n  });\n};\n\nconst LINKEDIN_FEED_URL = \"https://www.linkedin.com/feed/\";\n\nconst scrapeFeed = () => {\n  if (location.href !== LINKEDIN_FEED_URL) {\n    return;\n  }\n  console.log(\"LINKEDIN FEED DETECTED\");\n\n  const LINKEDIN_NAME_CLASS = \".feed-identity-module__actor-link\";\n  const LINKEDIN_HEADLINE_CLASS = \".identity-headline\";\n  const LINKEDIN_PROFILE_LINK_CLASS = \".profile-rail-card__actor-link\";\n\n  const name = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_NAME_CLASS).text();\n  const headline = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_HEADLINE_CLASS).text();\n  const profilePath = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_PROFILE_LINK_CLASS).attr(\"href\");\n\n  console.log(\"LINKEDIN NAME: \", name);\n  console.log(\"LINKEDIN HEADLINE: \", headline);\n  console.log(\"LINKEDIN PROFILE PATH: \", profilePath);\n\n  initStore();\n  __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(\"linkedin\", linkedin => {\n    linkedin.name = name;\n    linkedin.headline = headline;\n    linkedin.profilePath = profilePath;\n  });\n  console.log(\"LINKEDIN: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(\"linkedin\"));\n};\n\nconst scrapeProfile = () => {\n  initStore();\n  const profilePath = __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(STORE_KEY).profilePath;\n\n  if (location.pathname === profilePath) {\n    const location = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").find(\".pv-top-card-section__location\").first().text().trim();\n\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_1_store___default.a.update(STORE_KEY, linkedin => {\n      linkedin.location = location;\n    });\n    console.log(\"LINKEDIN: \", __WEBPACK_IMPORTED_MODULE_1_store___default.a.get(STORE_KEY));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  scrapeFeed,\n  scrapeProfile\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy9saW5rZWRpbi5qcz8xMjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmVcIjtcbmltcG9ydCBhbGxQbHVnaW5zIGZyb20gXCJzdG9yZS9wbHVnaW5zL2FsbFwiO1xuXG5zdG9yZS5hZGRQbHVnaW4oYWxsUGx1Z2lucyk7XG5cbmNvbnN0IFNUT1JFX0tFWSA9IFwibGlua2VkaW5cIjtcblxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICBzdG9yZS5kZWZhdWx0cyh7XG4gICAgW1NUT1JFX0tFWV06IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICBoZWFkbGluZTogbnVsbCxcbiAgICAgIHByb2ZpbGVQYXRoOiBudWxsLFxuICAgICAgbG9jYXRpb246IG51bGxcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgTElOS0VESU5fRkVFRF9VUkwgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9mZWVkL1wiO1xuXG5jb25zdCBzY3JhcGVGZWVkID0gKCkgPT4ge1xuICBpZiAobG9jYXRpb24uaHJlZiAhPT0gTElOS0VESU5fRkVFRF9VUkwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5sb2coXCJMSU5LRURJTiBGRUVEIERFVEVDVEVEXCIpO1xuXG4gIGNvbnN0IExJTktFRElOX05BTUVfQ0xBU1MgPSBcIi5mZWVkLWlkZW50aXR5LW1vZHVsZV9fYWN0b3ItbGlua1wiO1xuICBjb25zdCBMSU5LRURJTl9IRUFETElORV9DTEFTUyA9IFwiLmlkZW50aXR5LWhlYWRsaW5lXCI7XG4gIGNvbnN0IExJTktFRElOX1BST0ZJTEVfTElOS19DTEFTUyA9IFwiLnByb2ZpbGUtcmFpbC1jYXJkX19hY3Rvci1saW5rXCI7XG5cbiAgY29uc3QgbmFtZSA9ICQoTElOS0VESU5fTkFNRV9DTEFTUykudGV4dCgpO1xuICBjb25zdCBoZWFkbGluZSA9ICQoTElOS0VESU5fSEVBRExJTkVfQ0xBU1MpLnRleHQoKTtcbiAgY29uc3QgcHJvZmlsZVBhdGggPSAkKExJTktFRElOX1BST0ZJTEVfTElOS19DTEFTUykuYXR0cihcImhyZWZcIik7XG5cbiAgY29uc29sZS5sb2coXCJMSU5LRURJTiBOQU1FOiBcIiwgbmFtZSk7XG4gIGNvbnNvbGUubG9nKFwiTElOS0VESU4gSEVBRExJTkU6IFwiLCBoZWFkbGluZSk7XG4gIGNvbnNvbGUubG9nKFwiTElOS0VESU4gUFJPRklMRSBQQVRIOiBcIiwgcHJvZmlsZVBhdGgpO1xuXG4gIGluaXRTdG9yZSgpO1xuICBzdG9yZS51cGRhdGUoXCJsaW5rZWRpblwiLCBsaW5rZWRpbiA9PiB7XG4gICAgbGlua2VkaW4ubmFtZSA9IG5hbWU7XG4gICAgbGlua2VkaW4uaGVhZGxpbmUgPSBoZWFkbGluZTtcbiAgICBsaW5rZWRpbi5wcm9maWxlUGF0aCA9IHByb2ZpbGVQYXRoO1xuICB9KTtcbiAgY29uc29sZS5sb2coXCJMSU5LRURJTjogXCIsIHN0b3JlLmdldChcImxpbmtlZGluXCIpKTtcbn07XG5cbmNvbnN0IHNjcmFwZVByb2ZpbGUgPSAoKSA9PiB7XG4gIGluaXRTdG9yZSgpO1xuICBjb25zdCBwcm9maWxlUGF0aCA9IHN0b3JlLmdldChTVE9SRV9LRVkpLnByb2ZpbGVQYXRoO1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gcHJvZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9ICQoXCJib2R5XCIpXG4gICAgICAuZmluZChcIi5wdi10b3AtY2FyZC1zZWN0aW9uX19sb2NhdGlvblwiKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC50ZXh0KClcbiAgICAgIC50cmltKCk7XG5cbiAgICBpbml0U3RvcmUoKTtcbiAgICBzdG9yZS51cGRhdGUoU1RPUkVfS0VZLCBsaW5rZWRpbiA9PiB7XG4gICAgICBsaW5rZWRpbi5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiTElOS0VESU46IFwiLCBzdG9yZS5nZXQoU1RPUkVfS0VZKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NyYXBlRmVlZCxcbiAgc2NyYXBlUHJvZmlsZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvc2VydmljZXMvbGlua2VkaW4uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})