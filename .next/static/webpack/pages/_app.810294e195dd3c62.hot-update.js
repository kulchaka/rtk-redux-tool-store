"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./app/redux/api/product.api.ts":
/*!**************************************!*\
  !*** ./app/redux/api/product.api.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": function() { return /* binding */ productApi; },\n/* harmony export */   \"useGetProductsQuery\": function() { return /* binding */ useGetProductsQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreap.com/'\n    }),\n    endpoints: function(build) {\n        return {\n            getProducts: build.query({\n                query: function(limit) {\n                    return \"products?limit=\".concat(limit);\n                }\n            })\n        };\n    }\n});\nvar useGetProductsQuery = productApi.useGetProductsQuery;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcmVkdXgvYXBpL3Byb2R1Y3QuYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0U7QUFHakUsR0FBSyxDQUFDRSxVQUFVLEdBQUdGLHVFQUFTLENBQUMsQ0FBQztJQUNuQ0csV0FBVyxFQUFFLENBQWM7SUFDM0JDLFNBQVMsRUFBRUgsNEVBQWMsQ0FBQyxDQUFDO1FBQ3pCSSxPQUFPLEVBQUUsQ0FBMEI7SUFDckMsQ0FBQztJQUNEQyxTQUFTLEVBQUUsUUFBUSxDQUFQQyxLQUFLO1FBQUssTUFDckIsQ0FEc0IsQ0FBQztZQUN0QkMsV0FBVyxFQUFFRCxLQUFLLENBQUNFLEtBQUssQ0FBc0IsQ0FBQztnQkFDN0NBLEtBQUssRUFBRSxRQUFRLENBQVBDLEtBQWE7b0JBQUssTUFBTSxDQUFMLENBQWUsaUJBQVEsT0FBTkEsS0FBSzs7WUFDbkQsQ0FBQztRQUNILENBQUM7O0FBQ0gsQ0FBQztBQUVNLEdBQUssQ0FBR0MsbUJBQW1CLEdBQUtULFVBQVUsQ0FBbENTLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVkdXgvYXBpL3Byb2R1Y3QuYXBpLnRzPzg5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnXG5pbXBvcnQgeyBJUHJvZHVjdHMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcHJvZHVjdC50eXBlJ1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdEFwaSA9IGNyZWF0ZUFwaSh7XG4gIHJlZHVjZXJQYXRoOiAnYXBpL3Byb2R1Y3RzJyxcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vZmFrZXN0b3JlYXAuY29tLycsXG4gIH0pLFxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcbiAgICBnZXRQcm9kdWN0czogYnVpbGQucXVlcnk8SVByb2R1Y3RzW10sIG51bWJlcj4oe1xuICAgICAgcXVlcnk6IChsaW1pdDogbnVtYmVyKSA9PiBgcHJvZHVjdHM/bGltaXQ9JHtsaW1pdH1gLFxuICAgIH0pLFxuICB9KSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldFByb2R1Y3RzUXVlcnkgfSA9IHByb2R1Y3RBcGlcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsInByb2R1Y3RBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZCIsImdldFByb2R1Y3RzIiwicXVlcnkiLCJsaW1pdCIsInVzZUdldFByb2R1Y3RzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/redux/api/product.api.ts\n");

/***/ })

});