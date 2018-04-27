webpackHotUpdate(0,{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(195);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__(312);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_icon_128_png__ = __webpack_require__(219);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_icon_128_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_icon_128_png__);\n\n\n\n\n\nconst styles = {\n  container: {\n    margin: \"20px 10px 20px 10px\",\n    minWidth: \"500px\"\n    // display: \"flex\",\n    // justifyContent: \"center\",\n    // alignItems: \"center\"\n  },\n  heading: {\n    textAlign: \"center\",\n    flex: \"1\",\n    color: \"#123\"\n  },\n  content: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\"\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n  downloadData() {\n    const dataJson = JSON.stringify(window.localStorage);\n    var dataBlob = new Blob([dataJson], { type: \"text/plain;charset=utf-8\" });\n    console.log();\n  }\n\n  render() {\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { style: styles.container },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"h1\",\n        { style: styles.heading },\n        \"CryptoPal\"\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"div\",\n        { style: styles.content },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          \"button\",\n          { onClick: this.downloadData },\n          \"Download Data\"\n        )\n      )\n    );\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9wb3B1cC9ncmVldGluZ19jb21wb25lbnQuanN4PzViMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tIFwiZmlsZS1zYXZlclwiO1xuXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vLi4vaW1nL2ljb24tMTI4LnBuZ1wiO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogXCIyMHB4IDEwcHggMjBweCAxMHB4XCIsXG4gICAgbWluV2lkdGg6IFwiNTAwcHhcIlxuICAgIC8vIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIC8vIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIC8vIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmbGV4OiBcIjFcIixcbiAgICBjb2xvcjogXCIjMTIzXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBkb3dubG9hZERhdGEoKSB7XG4gICAgY29uc3QgZGF0YUpzb24gPSBKU09OLnN0cmluZ2lmeSh3aW5kb3cubG9jYWxTdG9yYWdlKTtcbiAgICB2YXIgZGF0YUJsb2IgPSBuZXcgQmxvYihbZGF0YUpzb25dLCB7IHR5cGU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCIgfSk7XG4gICAgY29uc29sZS5sb2coKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmhlYWRpbmd9PkNyeXB0b1BhbDwvaDE+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG93bmxvYWREYXRhfT5Eb3dubG9hZCBEYXRhPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9wb3B1cC9ncmVldGluZ19jb21wb25lbnQuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBT0E7QUFoQkE7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})