"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(props) {\n    _s();\n    const [nft, setNft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.parse(props.uri.metadata));\n    const [nftImage, setNftImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (nft === null || nft === void 0 ? void 0 : nft.image) {\n            return nft.image.includes(\"ipfs\") ? \"https://ipfs.io/ipfs/\".concat(nft.image.split(\"ipfs://\")[1]) : nft.image.split(\"\\\\\")[0];\n        }\n    });\n    const handleCopyClick = ()=>{\n        if (textareaRef.current) {\n            textareaRef.current.select();\n            document.execCommand(\"copy\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Text copied: \".concat(props.id));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n        children: [\n            (nft === null || nft === void 0 ? void 0 : nft.name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: nft.name\n            }, void 0, false, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 29,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"No NFT title can be shown.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 29,\n                columnNumber: 42\n            }, this),\n            nftImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: nftImage\n            }, void 0, false, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 30,\n                columnNumber: 19\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No NFT image can be shown.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 30,\n                columnNumber: 44\n            }, this),\n            props.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                onClick: handleCopyClick,\n                children: [\n                    \"id is : \",\n                    props.id\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 31,\n                columnNumber: 19\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No id can be shown.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 31,\n                columnNumber: 75\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}, void 0, false, {\n                fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fetchnfts\\\\frontend\\\\components\\\\card.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"He+bqQmVPe5Qusq91UUKsA7Lqfw=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNNO0FBRVE7QUFDUjtBQUVoQyxTQUFTSyxLQUFLQyxLQUFLLEVBQUU7O0lBQ2xDLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHUiwrQ0FBUUEsQ0FBQ1MsS0FBS0MsS0FBSyxDQUFDSixNQUFNSyxHQUFHLENBQUNDLFFBQVE7SUFDNUQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDLElBQU07UUFDN0MsSUFBSU8sZ0JBQUFBLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFLUSxLQUFLLEVBQUU7WUFDZCxPQUFPUixJQUFJUSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxVQUN0Qix3QkFBc0QsT0FBOUJULElBQUlRLEtBQUssQ0FBQ0UsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQ3JEVixJQUFJUSxLQUFLLENBQUNFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM5QixDQUFDO0lBQ0g7SUFFQSxNQUFNQyxrQkFBa0IsSUFBTTtRQUM1QixJQUFJQyxZQUFZQyxPQUFPLEVBQUU7WUFDdkJELFlBQVlDLE9BQU8sQ0FBQ0MsTUFBTTtZQUMxQkMsU0FBU0MsV0FBVyxDQUFDO1lBRXJCbkIseURBQWEsQ0FBQyxnQkFBeUIsT0FBVEUsTUFBTW1CLEVBQUU7UUFDeEMsQ0FBQztJQUNIO0lBR0EscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVd6Qiw4RUFBb0I7O1lBQ3JDSyxDQUFBQSxnQkFBQUEsaUJBQUFBLEtBQUFBLElBQUFBLElBQUtzQixJQUFJLGtCQUFHLDhEQUFDQzswQkFBSXZCLElBQUlzQixJQUFJOzs7OztxQ0FBUyw4REFBQ0M7MEJBQUc7Ozs7O29CQUErQjtZQUNyRWpCLHlCQUFXLDhEQUFDa0I7Z0JBQUlDLEtBQUtuQjs7Ozs7cUNBQWUsOERBQUNvQjswQkFBRTs7Ozs7b0JBQThCO1lBQ3JFM0IsTUFBTW1CLEVBQUUsaUJBQUcsOERBQUNTO2dCQUFHQyxTQUFTakI7O29CQUFpQjtvQkFBU1osTUFBTW1CLEVBQUU7Ozs7OztxQ0FBUyw4REFBQ1E7MEJBQUU7Ozs7O29CQUF1QjswQkFDOUYsOERBQUM5QiwwREFBY0E7Ozs7Ozs7Ozs7O0FBR3JCLENBQUM7R0E1QnVCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmQuanM/NDBiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICBjb25zdCBbbmZ0LCBzZXROZnRdID0gdXNlU3RhdGUoSlNPTi5wYXJzZShwcm9wcy51cmkubWV0YWRhdGEpKTtcclxuICBjb25zdCBbbmZ0SW1hZ2UsIHNldE5mdEltYWdlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmIChuZnQ/LmltYWdlKSB7XHJcbiAgICAgIHJldHVybiBuZnQuaW1hZ2UuaW5jbHVkZXMoXCJpcGZzXCIpXHJcbiAgICAgICAgPyBgaHR0cHM6Ly9pcGZzLmlvL2lwZnMvJHtuZnQuaW1hZ2Uuc3BsaXQoXCJpcGZzOi8vXCIpWzFdfWBcclxuICAgICAgICA6IG5mdC5pbWFnZS5zcGxpdChcIlxcXFxcIilbMF07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvcHlDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh0ZXh0YXJlYVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRleHRhcmVhUmVmLmN1cnJlbnQuc2VsZWN0KCk7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKGBUZXh0IGNvcGllZDogJHtwcm9wcy5pZH1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxyXG4gICAgICB7bmZ0Py5uYW1lID8gPGgxPntuZnQubmFtZX08L2gxPiA6IDxoMT5ObyBORlQgdGl0bGUgY2FuIGJlIHNob3duLjwvaDE+fVxyXG4gICAgICB7bmZ0SW1hZ2UgPyA8aW1nIHNyYz17bmZ0SW1hZ2V9IC8+IDogPHA+Tm8gTkZUIGltYWdlIGNhbiBiZSBzaG93bi48L3A+fVxyXG4gICAgICB7cHJvcHMuaWQgPyA8aDMgb25DbGljaz17aGFuZGxlQ29weUNsaWNrfT5pZCBpcyA6IHtwcm9wcy5pZH08L2gzPiA6IDxwPk5vIGlkIGNhbiBiZSBzaG93bi48L3A+fVxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJDYXJkIiwicHJvcHMiLCJuZnQiLCJzZXROZnQiLCJKU09OIiwicGFyc2UiLCJ1cmkiLCJtZXRhZGF0YSIsIm5mdEltYWdlIiwic2V0TmZ0SW1hZ2UiLCJpbWFnZSIsImluY2x1ZGVzIiwic3BsaXQiLCJoYW5kbGVDb3B5Q2xpY2siLCJ0ZXh0YXJlYVJlZiIsImN1cnJlbnQiLCJzZWxlY3QiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwic3VjY2VzcyIsImlkIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNhcmRDb250YWluZXIiLCJuYW1lIiwiaDEiLCJpbWciLCJzcmMiLCJwIiwiaDMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card.js\n"));

/***/ })

});