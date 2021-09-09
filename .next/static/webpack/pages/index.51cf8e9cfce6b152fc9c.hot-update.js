"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Greet.tsx":
/*!******************************!*\
  !*** ./components/Greet.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/user */ "./graphql/queries/user.ts");
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/client */ "./store/client.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\components\\Greet.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Greet = function Greet(props) {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    try {
      getUser();
    } catch (e) {}
  }, []);

  var getUser = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$client$request, data;

      return C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _store_client__WEBPACK_IMPORTED_MODULE_4__.default.request({
                query: _graphql_queries_user__WEBPACK_IMPORTED_MODULE_3__.GET_USER
              });

            case 2:
              _yield$client$request = _context.sent;
              data = _yield$client$request.data;
              console.log("data", data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getUser() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: "---"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Greet, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Greet;
/* harmony default export */ __webpack_exports__["default"] = (Greet);

var _c;

$RefreshReg$(_c, "Greet");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTFjZjhlOWNmY2U2YjE1MmZjOWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQU1BLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBdUI7QUFBQTs7QUFDbkNKLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRkssTUFBQUEsT0FBTztBQUNSLEtBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVUsQ0FBRTtBQUNmLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBS0EsTUFBTUQsT0FBTztBQUFBLDZUQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNTSCwwREFBQSxDQUFlO0FBQ3BDTSxnQkFBQUEsS0FBSyxFQUFFUCwyREFBUUE7QUFEcUIsZUFBZixDQURUOztBQUFBO0FBQUE7QUFDTlEsY0FBQUEsSUFETSx5QkFDTkEsSUFETTtBQUlkQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CRixJQUFuQjs7QUFKYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQSixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBU0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBcEJEOztHQUFNRjs7S0FBQUE7QUFzQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmVldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHRVRfVVNFUiB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXMvdXNlclwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9zdG9yZS9jbGllbnRcIjtcclxuXHJcbnR5cGUgR3JlZXRQcm9wcyA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBHcmVldCA9IChwcm9wczogR3JlZXRQcm9wcykgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBnZXRVc2VyKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucmVxdWVzdCh7XHJcbiAgICAgIHF1ZXJ5OiBHRVRfVVNFUixcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSk7XHJcbiAgIFxyXG5cclxuXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPi0tLTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JlZXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkdFVF9VU0VSIiwiY2xpZW50IiwiR3JlZXQiLCJwcm9wcyIsImdldFVzZXIiLCJlIiwicmVxdWVzdCIsInF1ZXJ5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9