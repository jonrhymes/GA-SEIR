webpackHotUpdate("static/development/pages/details.js",{

/***/ "./pages/details.js":
/*!**************************!*\
  !*** ./pages/details.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Details; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/jonrhymes/Desktop/General_Assembly/djangohw/test_frontend/pages/details.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nfunction Details(props) {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"Skills Details\"));\n}\n_c = Details;\n\nDetails.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var query, res, data, skills;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            _context.prev = 1;\n            _context.next = 4;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"http://127.0.0.1:8000/api/v1/skill/\");\n\n          case 4:\n            res = _context.sent;\n            _context.next = 7;\n            return res.json();\n\n          case 7:\n            data = _context.sent;\n            skills = data.objects.find(function (skills) {\n              return skills.id;\n            });\n            _context.next = 14;\n            break;\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](1);\n            console.error(_context.t0);\n\n          case 14:\n            return _context.abrupt(\"return\", {\n              skills: skills\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}(); // export default Details;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"Details\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzLmpzP2YzZDYiXSwibmFtZXMiOlsiRGV0YWlscyIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwic2tpbGxzIiwib2JqZWN0cyIsImZpbmQiLCJpZCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUVwQyxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosQ0FESjtBQUtIO0tBUHVCRCxPOztBQVV4QkEsT0FBTyxDQUFDRSxlQUFSO0FBQUEsK0xBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxpQkFBUixRQUFRQSxLQUFSO0FBQUE7QUFBQTtBQUFBLG1CQUdOQyx5REFBSyx1Q0FIQzs7QUFBQTtBQUdsQkMsZUFIa0I7QUFBQTtBQUFBLG1CQUlMQSxHQUFHLENBQUNDLElBQUosRUFKSzs7QUFBQTtBQUlsQkMsZ0JBSmtCO0FBS2xCQyxrQkFBTSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixVQUFDRixNQUFEO0FBQUEscUJBQVlBLE1BQU0sQ0FBQ0csRUFBbkI7QUFBQSxhQUFsQixDQUFUO0FBTGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT2xCQyxtQkFBTyxDQUFDQyxLQUFSOztBQVBrQjtBQUFBLDZDQVNmO0FBQ0hMLG9CQUFNLEVBQU5BO0FBREcsYUFUZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBY0EiLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzIChwcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT5Ta2lsbHMgRGV0YWlsczwvaDE+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuXG5EZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cXVlcnl9KSA9PiB7XG4gICAgbGV0IHJlcywgZGF0YSwgc2tpbGxzO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL3NraWxsL2ApXG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBza2lsbHMgPSBkYXRhLm9iamVjdHMuZmluZCgoc2tpbGxzKSA9PiBza2lsbHMuaWQpO1xuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbGxzXG4gICAgfVxufTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/details.js\n");

/***/ })

})