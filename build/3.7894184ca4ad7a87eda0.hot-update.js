webpackHotUpdate(3,{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_store__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store_plugins_all__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store_plugins_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store_plugins_all__);\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_store___default.a.addPlugin(__WEBPACK_IMPORTED_MODULE_1_store_plugins_all___default.a);\n\nconst STORE_KEY = \"history\";\n\nconst siteGenerator = (url, title) => {\n  return { url, title };\n};\n\nconst initStore = () => {\n  __WEBPACK_IMPORTED_MODULE_0_store___default.a.defaults({ [STORE_KEY]: { sites: [] } });\n};\n\nchrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {\n  const { status } = changeInfo;\n  const { url, title } = tab;\n\n  if (status === \"complete\" && url && url.startsWith(\"http\")) {\n    initStore();\n    __WEBPACK_IMPORTED_MODULE_0_store___default.a.update(STORE_KEY, history => {\n      history.sites = [...history.sites, siteGenerator(url, title)];\n    });\n    console.log(\"HISTORY: \", __WEBPACK_IMPORTED_MODULE_0_store___default.a.get(STORE_KEY));\n  }\n  console.log(\"ZZzHISTORY: \", __WEBPACK_IMPORTED_MODULE_0_store___default.a.get(STORE_KEY));\n});\n\nconsole.log(\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX: \", chrome);\n\n// var counter = 0;\n// chrome.browserAction.onClicked.addListener(function(tab) {\n// counter++;\n// if (counter == 5) {\n// alert(\"Hey !!! You have clicked five times\");\n// }\n// });//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9iYWNrZ3JvdW5kLmpzP2JjM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZVwiO1xuaW1wb3J0IGFsbFBsdWdpbnMgZnJvbSBcInN0b3JlL3BsdWdpbnMvYWxsXCI7XG5cbnN0b3JlLmFkZFBsdWdpbihhbGxQbHVnaW5zKTtcblxuY29uc3QgU1RPUkVfS0VZID0gXCJoaXN0b3J5XCI7XG5cbmNvbnN0IHNpdGVHZW5lcmF0b3IgPSAodXJsLCB0aXRsZSkgPT4ge1xuICByZXR1cm4geyB1cmwsIHRpdGxlIH07XG59O1xuXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHN0b3JlLmRlZmF1bHRzKHsgW1NUT1JFX0tFWV06IHsgc2l0ZXM6IFtdIH0gfSk7XG59O1xuXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKF90YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gIGNvbnN0IHsgc3RhdHVzIH0gPSBjaGFuZ2VJbmZvO1xuICBjb25zdCB7IHVybCwgdGl0bGUgfSA9IHRhYjtcblxuICBpZiAoc3RhdHVzID09PSBcImNvbXBsZXRlXCIgJiYgdXJsICYmIHVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIGluaXRTdG9yZSgpO1xuICAgIHN0b3JlLnVwZGF0ZShTVE9SRV9LRVksIGhpc3RvcnkgPT4ge1xuICAgICAgaGlzdG9yeS5zaXRlcyA9IFsuLi5oaXN0b3J5LnNpdGVzLCBzaXRlR2VuZXJhdG9yKHVybCwgdGl0bGUpXTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkhJU1RPUlk6IFwiLCBzdG9yZS5nZXQoU1RPUkVfS0VZKSk7XG4gIH1cbiAgY29uc29sZS5sb2coXCJaWnpISVNUT1JZOiBcIiwgc3RvcmUuZ2V0KFNUT1JFX0tFWSkpO1xufSk7XG5cbmNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFg6IFwiLCBjaHJvbWUpO1xuXG4vLyB2YXIgY291bnRlciA9IDA7XG4vLyBjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24odGFiKSB7XG4vLyBjb3VudGVyKys7XG4vLyBpZiAoY291bnRlciA9PSA1KSB7XG4vLyBhbGVydChcIkhleSAhISEgWW91IGhhdmUgY2xpY2tlZCBmaXZlIHRpbWVzXCIpO1xuLy8gfVxuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2JhY2tncm91bmQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})