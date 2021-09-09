"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/DemoApp/RoutingDemo/Routing.js":
/*!**********************************************!*\
  !*** ./pages/DemoApp/RoutingDemo/Routing.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Routing_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routing.module.css */ "./pages/DemoApp/RoutingDemo/Routing.module.css");
/* harmony import */ var _Routing_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Routing_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\pages\\DemoApp\\RoutingDemo\\Routing.js",
    _this = undefined;






var router = function router() {
  var onFinish = function onFinish(values) {
    console.log('Success:', values);
  };

  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_Routing_module_css__WEBPACK_IMPORTED_MODULE_2___default().Router),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Enter Credentials"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Enter Credentials"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Enter Credentials"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
      name: "basic",
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      },
      initialValues: {
        remember: true
      },
      onFinish: onFinish,
      onFinishFailed: onFinishFailed,
      autoComplete: "off",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Username",
        name: "username",
        rules: [{
          required: true,
          message: 'Please input your username!'
        }],
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Phone Number",
        name: "phonenumber",
        rules: [{
          required: true,
          message: 'Please input your username!'
        }],
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Email",
        name: "email",
        rules: [{
          required: true,
          message: 'Please input your Email!'
        }],
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Password",
        name: "password",
        rules: [{
          required: true,
          message: 'Please input your password!'
        }],
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Password, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        name: "remember",
        valuePropName: "checked",
        wrapperCol: {
          offset: 8,
          span: 16
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
          children: "Remember me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        wrapperCol: {
          offset: 8,
          span: 16
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
          type: "primary",
          htmlType: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (router);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWY1ZGEwMGZkOWMxNmNhNjZjZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUdBLElBQU1NLE1BQU0sR0FBSSxTQUFWQSxNQUFVLEdBQUs7QUFFakIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNELEdBRkg7O0FBSUUsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQWU7QUFDcENILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLFNBQXZCO0FBQ0QsR0FGRDs7QUFJRixzQkFDSTtBQUFLLGFBQVMsRUFBSVAsbUVBQWxCO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhBLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBLGVBS0UsOERBQUMsc0NBQUQ7QUFDSSxVQUFJLEVBQUMsT0FEVDtBQUVJLGNBQVEsRUFBRTtBQUNSUyxRQUFBQSxJQUFJLEVBQUU7QUFERSxPQUZkO0FBS0ksZ0JBQVUsRUFBRTtBQUNWQSxRQUFBQSxJQUFJLEVBQUU7QUFESSxPQUxoQjtBQVFJLG1CQUFhLEVBQUU7QUFDYkMsUUFBQUEsUUFBUSxFQUFFO0FBREcsT0FSbkI7QUFXSSxjQUFRLEVBQUVSLFFBWGQ7QUFZSSxvQkFBYyxFQUFFSSxjQVpwQjtBQWFJLGtCQUFZLEVBQUMsS0FiakI7QUFBQSw4QkFlSSw4REFBQywyQ0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUNFSyxVQUFBQSxRQUFRLEVBQUUsSUFEWjtBQUVFQyxVQUFBQSxPQUFPLEVBQUU7QUFGWCxTQURLLENBSFQ7QUFBQSwrQkFVRSw4REFBQyx1Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKLGVBNEJJLDhEQUFDLDJDQUFEO0FBQ0UsYUFBSyxFQUFDLGNBRFI7QUFFRSxZQUFJLEVBQUMsYUFGUDtBQUdFLGFBQUssRUFBRSxDQUNMO0FBQ0VELFVBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLFVBQUFBLE9BQU8sRUFBRTtBQUZYLFNBREssQ0FIVDtBQUFBLCtCQVVFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJKLGVBeUNJLDhEQUFDLDJDQUFEO0FBQ0UsYUFBSyxFQUFDLE9BRFI7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGFBQUssRUFBRSxDQUNMO0FBQ0VELFVBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLFVBQUFBLE9BQU8sRUFBRTtBQUZYLFNBREssQ0FIVDtBQUFBLCtCQVVFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekNKLGVBc0RJLDhEQUFDLDJDQUFEO0FBQ0UsYUFBSyxFQUFDLFVBRFI7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLGFBQUssRUFBRSxDQUNMO0FBQ0VELFVBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLFVBQUFBLE9BQU8sRUFBRTtBQUZYLFNBREssQ0FIVDtBQUFBLCtCQVVFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdERKLGVBbUVJLDhEQUFDLDJDQUFEO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxxQkFBYSxFQUFDLFNBRmhCO0FBR0Usa0JBQVUsRUFBRTtBQUNWQyxVQUFBQSxNQUFNLEVBQUUsQ0FERTtBQUVWSixVQUFBQSxJQUFJLEVBQUU7QUFGSSxTQUhkO0FBQUEsK0JBUUUsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVKLGVBOEVJLDhEQUFDLDJDQUFEO0FBQ0Usa0JBQVUsRUFBRTtBQUNWSSxVQUFBQSxNQUFNLEVBQUUsQ0FERTtBQUVWSixVQUFBQSxJQUFJLEVBQUU7QUFGSSxTQURkO0FBQUEsK0JBTUUsOERBQUMsd0NBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixrQkFBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlHSCxDQTNHRDs7QUE2R0EsK0RBQWVSLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGVtb0FwcC9Sb3V0aW5nRGVtby9Sb3V0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUm91dGluZy5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5jb25zdCByb3V0ZXIgPSAgKCkgPT57XHJcblxyXG4gICAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgdmFsdWVzKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLlJvdXRlcn0+XHJcbiAgICAgICAgPGgxPkVudGVyIENyZWRlbnRpYWxzPC9oMT5cclxuICAgICAgICA8aDE+RW50ZXIgQ3JlZGVudGlhbHM8L2gxPlxyXG4gICAgICAgIDxoMT5FbnRlciBDcmVkZW50aWFsczwvaDE+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgICAgICAgc3BhbjogOCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgIHNwYW46IDE2LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBFbWFpbCEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgIHNwYW46IDE2LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiQ2hlY2tib3giLCJjbGFzc2VzIiwicm91dGVyIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJSb3V0ZXIiLCJzcGFuIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJvZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9