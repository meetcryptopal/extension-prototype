webpackHotUpdate(3,{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(53);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store_plugins_all__ = __webpack_require__(307);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store_plugins_all__);\n\n\n\nstore.addPlugin(__WEBPACK_IMPORTED_MODULE_1_store_plugins_all___default.a);\nstore.defaults({ linkedin: {} });\n\nconst LINKEDIN_FEED_URL = \"https://www.linkedin.com/feed/\";\n\nconst scrapeFeed = () => {\n  if (location.href !== LINKEDIN_FEED_URL) {\n    return;\n  }\n  console.log(\"LINKEDIN FEED DETECTED\");\n\n  const LINKEDIN_NAME_CLASS = \".feed-identity-module__actor-link\";\n  const LINKEDIN_HEADLINE_CLASS = \".identity-headline\";\n  const LINKEDIN_PROFILE_LINK_CLASS = \".profile-rail-card__actor-link\";\n\n  const name = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_NAME_CLASS).text();\n  const headline = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_HEADLINE_CLASS).text();\n  const profilePath = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_PROFILE_LINK_CLASS).attr(\"href\");\n\n  console.log(\"LINKEDIN NAME: \", name);\n  console.log(\"LINKEDIN HEADLINE: \", headline);\n  console.log(\"LINKEDIN PROFILE PATH: \", profilePath);\n\n  store.update(\"linkedin\", linkedin => {\n    linkedin.profile = {\n      name,\n      headline,\n      profilePath\n    };\n  });\n};\n\n// const scrapeProfile = profilePath => {\n// if (location.pathname !== profilePath) {\n// console.log(\"LOCATION.PATHNAME: \", location.pathname);\n// console.log(\"profilePath\", profilePath);\n// return;\n// }\n// console.log(\"LINKEDIN PROFILE DETECTED\");\n\n// const LINKEDIN_JOB_SECTION_CLASS = \".pv-profile-section__sortable-card-item\";\n// const LINKEDIN_JOB_SUMMARY_CLASS = \".pv-entity__summary-info\";\n\n// const currentJob = $(LINKEDIN_JOB_SECTION_CLASS).first();\n// // This is the position, company, dates, location all jumbled together\n// const jobSummary = currentJob.find(LINKEDIN_JOB_SUMMARY_CLASS).text();\n\n// console.log(\"LINKEDIN JOB SUMMARY: \", jobSummary);\n// };\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  scrapeFeed\n  // scrapeProfile\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy9saW5rZWRpbi5qcz8xMjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBhbGxQbHVnaW5zIGZyb20gXCJzdG9yZS9wbHVnaW5zL2FsbFwiO1xuXG5zdG9yZS5hZGRQbHVnaW4oYWxsUGx1Z2lucyk7XG5zdG9yZS5kZWZhdWx0cyh7IGxpbmtlZGluOiB7fSB9KTtcblxuY29uc3QgTElOS0VESU5fRkVFRF9VUkwgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9mZWVkL1wiO1xuXG5jb25zdCBzY3JhcGVGZWVkID0gKCkgPT4ge1xuICBpZiAobG9jYXRpb24uaHJlZiAhPT0gTElOS0VESU5fRkVFRF9VUkwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5sb2coXCJMSU5LRURJTiBGRUVEIERFVEVDVEVEXCIpO1xuXG4gIGNvbnN0IExJTktFRElOX05BTUVfQ0xBU1MgPSBcIi5mZWVkLWlkZW50aXR5LW1vZHVsZV9fYWN0b3ItbGlua1wiO1xuICBjb25zdCBMSU5LRURJTl9IRUFETElORV9DTEFTUyA9IFwiLmlkZW50aXR5LWhlYWRsaW5lXCI7XG4gIGNvbnN0IExJTktFRElOX1BST0ZJTEVfTElOS19DTEFTUyA9IFwiLnByb2ZpbGUtcmFpbC1jYXJkX19hY3Rvci1saW5rXCI7XG5cbiAgY29uc3QgbmFtZSA9ICQoTElOS0VESU5fTkFNRV9DTEFTUykudGV4dCgpO1xuICBjb25zdCBoZWFkbGluZSA9ICQoTElOS0VESU5fSEVBRExJTkVfQ0xBU1MpLnRleHQoKTtcbiAgY29uc3QgcHJvZmlsZVBhdGggPSAkKExJTktFRElOX1BST0ZJTEVfTElOS19DTEFTUykuYXR0cihcImhyZWZcIik7XG5cbiAgY29uc29sZS5sb2coXCJMSU5LRURJTiBOQU1FOiBcIiwgbmFtZSk7XG4gIGNvbnNvbGUubG9nKFwiTElOS0VESU4gSEVBRExJTkU6IFwiLCBoZWFkbGluZSk7XG4gIGNvbnNvbGUubG9nKFwiTElOS0VESU4gUFJPRklMRSBQQVRIOiBcIiwgcHJvZmlsZVBhdGgpO1xuXG4gIHN0b3JlLnVwZGF0ZShcImxpbmtlZGluXCIsIGxpbmtlZGluID0+IHtcbiAgICBsaW5rZWRpbi5wcm9maWxlID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGhlYWRsaW5lLFxuICAgICAgcHJvZmlsZVBhdGhcbiAgICB9O1xuICB9KTtcbn07XG5cbi8vIGNvbnN0IHNjcmFwZVByb2ZpbGUgPSBwcm9maWxlUGF0aCA9PiB7XG4vLyBpZiAobG9jYXRpb24ucGF0aG5hbWUgIT09IHByb2ZpbGVQYXRoKSB7XG4vLyBjb25zb2xlLmxvZyhcIkxPQ0FUSU9OLlBBVEhOQU1FOiBcIiwgbG9jYXRpb24ucGF0aG5hbWUpO1xuLy8gY29uc29sZS5sb2coXCJwcm9maWxlUGF0aFwiLCBwcm9maWxlUGF0aCk7XG4vLyByZXR1cm47XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhcIkxJTktFRElOIFBST0ZJTEUgREVURUNURURcIik7XG5cbi8vIGNvbnN0IExJTktFRElOX0pPQl9TRUNUSU9OX0NMQVNTID0gXCIucHYtcHJvZmlsZS1zZWN0aW9uX19zb3J0YWJsZS1jYXJkLWl0ZW1cIjtcbi8vIGNvbnN0IExJTktFRElOX0pPQl9TVU1NQVJZX0NMQVNTID0gXCIucHYtZW50aXR5X19zdW1tYXJ5LWluZm9cIjtcblxuLy8gY29uc3QgY3VycmVudEpvYiA9ICQoTElOS0VESU5fSk9CX1NFQ1RJT05fQ0xBU1MpLmZpcnN0KCk7XG4vLyAvLyBUaGlzIGlzIHRoZSBwb3NpdGlvbiwgY29tcGFueSwgZGF0ZXMsIGxvY2F0aW9uIGFsbCBqdW1ibGVkIHRvZ2V0aGVyXG4vLyBjb25zdCBqb2JTdW1tYXJ5ID0gY3VycmVudEpvYi5maW5kKExJTktFRElOX0pPQl9TVU1NQVJZX0NMQVNTKS50ZXh0KCk7XG5cbi8vIGNvbnNvbGUubG9nKFwiTElOS0VESU4gSk9CIFNVTU1BUlk6IFwiLCBqb2JTdW1tYXJ5KTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NyYXBlRmVlZFxuICAvLyBzY3JhcGVQcm9maWxlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9zZXJ2aWNlcy9saW5rZWRpbi5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})