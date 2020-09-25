webpackHotUpdate("static/development/pages/details.js",{

/***/ "./pages/details.js":
/*!**************************!*\
  !*** ./pages/details.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Details; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/jonrhymes/Desktop/General_Assembly/djangohw/test_frontend/pages/details.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nfunction Details(props) {\n  var skills = props.skills;\n  var skill_level;\n\n  switch (skill_level) {\n    case 1:\n      skill_level = 1;\n      break;\n\n    case 2:\n      skill_level = 2;\n      break;\n\n    case 3:\n      skill_level = 3;\n      break;\n\n    case 4:\n      skill_level = 4;\n      break;\n\n    case 5:\n      skill_level = 5;\n      break;\n\n    case 6:\n      skill_level = 6;\n      break;\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, props.skills.description), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"Skill level: \", skills.skill_level));\n}\n_c = Details;\n\nDetails.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var query, res, data, skills;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            _context.prev = 1;\n            _context.next = 4;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"http://127.0.0.1:8000/api/v1/skill/\");\n\n          case 4:\n            res = _context.sent;\n            _context.next = 7;\n            return res.json();\n\n          case 7:\n            data = _context.sent;\n            skills = data.objects.find(function (skills) {\n              return skills.id === parseInt(query.id);\n            });\n            _context.next = 14;\n            break;\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](1);\n            console.error(_context.t0);\n\n          case 14:\n            return _context.abrupt(\"return\", {\n              skills: skills\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}(); // export default Details;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"Details\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzLmpzP2YzZDYiXSwibmFtZXMiOlsiRGV0YWlscyIsInByb3BzIiwic2tpbGxzIiwic2tpbGxfbGV2ZWwiLCJkZXNjcmlwdGlvbiIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9iamVjdHMiLCJmaW5kIiwiaWQiLCJwYXJzZUludCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBLE1BQzdCQyxNQUQ2QixHQUNuQkQsS0FEbUIsQ0FDN0JDLE1BRDZCO0FBRXBDLE1BQUlDLFdBQUo7O0FBQ0EsVUFBUUEsV0FBUjtBQUNJLFNBQUssQ0FBTDtBQUNJQSxpQkFBVyxHQUFHLENBQWQ7QUFDQTs7QUFDSixTQUFLLENBQUw7QUFDSUEsaUJBQVcsR0FBRyxDQUFkO0FBQ0E7O0FBQ0osU0FBSyxDQUFMO0FBQ0lBLGlCQUFXLEdBQUcsQ0FBZDtBQUNBOztBQUNKLFNBQUssQ0FBTDtBQUNJQSxpQkFBVyxHQUFHLENBQWQ7QUFDQTs7QUFDSixTQUFLLENBQUw7QUFDSUEsaUJBQVcsR0FBRyxDQUFkO0FBQ0E7O0FBQ0osU0FBSyxDQUFMO0FBQ0lBLGlCQUFXLEdBQUcsQ0FBZDtBQUNBO0FBbEJSOztBQW9CQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFdBQWxCLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFrQkYsTUFBTSxDQUFDQyxXQUF6QixDQUZKLENBREo7QUFNSDtLQTdCdUJILE87O0FBZ0N4QkEsT0FBTyxDQUFDSyxlQUFSO0FBQUEsK0xBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxpQkFBUixRQUFRQSxLQUFSO0FBQUE7QUFBQTtBQUFBLG1CQUdOQyx5REFBSyx1Q0FIQzs7QUFBQTtBQUdsQkMsZUFIa0I7QUFBQTtBQUFBLG1CQUlMQSxHQUFHLENBQUNDLElBQUosRUFKSzs7QUFBQTtBQUlsQkMsZ0JBSmtCO0FBS2xCUixrQkFBTSxHQUFHUSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixVQUFDVixNQUFEO0FBQUEscUJBQVlBLE1BQU0sQ0FBQ1csRUFBUCxLQUFjQyxRQUFRLENBQUNSLEtBQUssQ0FBQ08sRUFBUCxDQUFsQztBQUFBLGFBQWxCLENBQVQ7QUFMa0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPbEJFLG1CQUFPLENBQUNDLEtBQVI7O0FBUGtCO0FBQUEsNkNBU2Y7QUFDSGQsb0JBQU0sRUFBTkE7QUFERyxhQVRlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FjQSIsImZpbGUiOiIuL3BhZ2VzL2RldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbHMgKHByb3BzKSB7XG4gICAgY29uc3Qge3NraWxsc30gPSBwcm9wcztcbiAgICBsZXQgc2tpbGxfbGV2ZWw7XG4gICAgc3dpdGNoIChza2lsbF9sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBza2lsbF9sZXZlbCA9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2tpbGxfbGV2ZWwgPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHNraWxsX2xldmVsID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBza2lsbF9sZXZlbCA9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgc2tpbGxfbGV2ZWwgPSA1O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHNraWxsX2xldmVsID0gNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgxPntwcm9wcy5za2lsbHMuZGVzY3JpcHRpb259PC9oMT5cbiAgICAgICAgICAgIDxoMj5Ta2lsbCBsZXZlbDoge3NraWxscy5za2lsbF9sZXZlbH08L2gyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuRGV0YWlscy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuICAgIGxldCByZXMsIGRhdGEsIHNraWxscztcbiAgICB0cnkge1xuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS92MS9za2lsbC9gKVxuICAgICAgICBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2tpbGxzID0gZGF0YS5vYmplY3RzLmZpbmQoKHNraWxscykgPT4gc2tpbGxzLmlkID09PSBwYXJzZUludChxdWVyeS5pZCkpO1xuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbGxzXG4gICAgfVxufTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/details.js\n");

/***/ })

})