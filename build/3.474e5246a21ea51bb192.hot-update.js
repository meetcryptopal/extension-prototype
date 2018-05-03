webpackHotUpdate(3,{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(35);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nconst store = window.chrome.storage.sync;\nconst STORE_KEY = \"linkedin\";\n\n// Actions\nconst FEED = \"FEED\";\nconst PROFILE = \"PROFILE\";\n\nconst initState = {\n  name: null,\n  headline: null,\n  profilePath: null,\n  location: null\n};\nconst reduceState = (state = initState, { type, payload }) => {\n  switch (type) {\n    case FEED:\n    case PROFILE:\n      return _extends({}, state, payload);\n  }\n};\n\nconst updateStore = action => {\n  store.get(STORE_KEY, state => {\n    const nextState = reduceState(state, action);\n\n    store.set({ [STORE_KEY]: nextState });\n    console.log(`${STORE_KEY}: `, nextState);\n  });\n};\n\nconst LINKEDIN_FEED_URL = \"https://www.linkedin.com/feed/\";\n\nconst scrapeFeed = () => {\n  if (location.href !== LINKEDIN_FEED_URL) {\n    return;\n  }\n  console.log(\"LINKEDIN FEED DETECTED\");\n\n  const LINKEDIN_NAME_CLASS = \".feed-identity-module__actor-link\";\n  const LINKEDIN_HEADLINE_CLASS = \".identity-headline\";\n  const LINKEDIN_PROFILE_LINK_CLASS = \".profile-rail-card__actor-link\";\n\n  const name = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_NAME_CLASS).text();\n  const headline = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_HEADLINE_CLASS).text();\n  const profilePath = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(LINKEDIN_PROFILE_LINK_CLASS).attr(\"href\");\n\n  console.log(\"LINKEDIN NAME: \", name);\n  console.log(\"LINKEDIN HEADLINE: \", headline);\n  console.log(\"LINKEDIN PROFILE PATH: \", profilePath);\n\n  updateStore({ type: LIKED, payload: { name, headline, profilePath } });\n};\n\nconst scrapeProfile = () => {\n  initStore();\n  const profilePath = store.get(STORE_KEY).profilePath;\n\n  if (location.pathname === profilePath) {\n    const location = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(\"body\").find(\".pv-top-card-section__location\").first().text().trim();\n\n    updateStore({ type: PROFILE, payload: { location } });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = {\n  scrapeFeed,\n  scrapeProfile\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZXJ2aWNlcy9saW5rZWRpbi5qcz8xMjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3Qgc3RvcmUgPSB3aW5kb3cuY2hyb21lLnN0b3JhZ2Uuc3luYztcbmNvbnN0IFNUT1JFX0tFWSA9IFwibGlua2VkaW5cIjtcblxuLy8gQWN0aW9uc1xuY29uc3QgRkVFRCA9IFwiRkVFRFwiO1xuY29uc3QgUFJPRklMRSA9IFwiUFJPRklMRVwiO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIG5hbWU6IG51bGwsXG4gIGhlYWRsaW5lOiBudWxsLFxuICBwcm9maWxlUGF0aDogbnVsbCxcbiAgbG9jYXRpb246IG51bGxcbn07XG5jb25zdCByZWR1Y2VTdGF0ZSA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBGRUVEOlxuICAgIGNhc2UgUFJPRklMRTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5wYXlsb2FkIH07XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVN0b3JlID0gYWN0aW9uID0+IHtcbiAgc3RvcmUuZ2V0KFNUT1JFX0tFWSwgc3RhdGUgPT4ge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHJlZHVjZVN0YXRlKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgc3RvcmUuc2V0KHsgW1NUT1JFX0tFWV06IG5leHRTdGF0ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhgJHtTVE9SRV9LRVl9OiBgLCBuZXh0U3RhdGUpO1xuICB9KTtcbn07XG5cbmNvbnN0IExJTktFRElOX0ZFRURfVVJMID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vZmVlZC9cIjtcblxuY29uc3Qgc2NyYXBlRmVlZCA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhyZWYgIT09IExJTktFRElOX0ZFRURfVVJMKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiTElOS0VESU4gRkVFRCBERVRFQ1RFRFwiKTtcblxuICBjb25zdCBMSU5LRURJTl9OQU1FX0NMQVNTID0gXCIuZmVlZC1pZGVudGl0eS1tb2R1bGVfX2FjdG9yLWxpbmtcIjtcbiAgY29uc3QgTElOS0VESU5fSEVBRExJTkVfQ0xBU1MgPSBcIi5pZGVudGl0eS1oZWFkbGluZVwiO1xuICBjb25zdCBMSU5LRURJTl9QUk9GSUxFX0xJTktfQ0xBU1MgPSBcIi5wcm9maWxlLXJhaWwtY2FyZF9fYWN0b3ItbGlua1wiO1xuXG4gIGNvbnN0IG5hbWUgPSAkKExJTktFRElOX05BTUVfQ0xBU1MpLnRleHQoKTtcbiAgY29uc3QgaGVhZGxpbmUgPSAkKExJTktFRElOX0hFQURMSU5FX0NMQVNTKS50ZXh0KCk7XG4gIGNvbnN0IHByb2ZpbGVQYXRoID0gJChMSU5LRURJTl9QUk9GSUxFX0xJTktfQ0xBU1MpLmF0dHIoXCJocmVmXCIpO1xuXG4gIGNvbnNvbGUubG9nKFwiTElOS0VESU4gTkFNRTogXCIsIG5hbWUpO1xuICBjb25zb2xlLmxvZyhcIkxJTktFRElOIEhFQURMSU5FOiBcIiwgaGVhZGxpbmUpO1xuICBjb25zb2xlLmxvZyhcIkxJTktFRElOIFBST0ZJTEUgUEFUSDogXCIsIHByb2ZpbGVQYXRoKTtcblxuICB1cGRhdGVTdG9yZSh7IHR5cGU6IExJS0VELCBwYXlsb2FkOiB7IG5hbWUsIGhlYWRsaW5lLCBwcm9maWxlUGF0aCB9IH0pO1xufTtcblxuY29uc3Qgc2NyYXBlUHJvZmlsZSA9ICgpID0+IHtcbiAgaW5pdFN0b3JlKCk7XG4gIGNvbnN0IHByb2ZpbGVQYXRoID0gc3RvcmUuZ2V0KFNUT1JFX0tFWSkucHJvZmlsZVBhdGg7XG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBwcm9maWxlUGF0aCkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gJChcImJvZHlcIilcbiAgICAgIC5maW5kKFwiLnB2LXRvcC1jYXJkLXNlY3Rpb25fX2xvY2F0aW9uXCIpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLnRleHQoKVxuICAgICAgLnRyaW0oKTtcblxuICAgIHVwZGF0ZVN0b3JlKHsgdHlwZTogUFJPRklMRSwgcGF5bG9hZDogeyBsb2NhdGlvbiB9IH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjcmFwZUZlZWQsXG4gIHNjcmFwZVByb2ZpbGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NlcnZpY2VzL2xpbmtlZGluLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})