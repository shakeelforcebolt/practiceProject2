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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      label: "Username",
      name: "username",
      rules: [{
        required: true,
        message: 'Please input your username!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      label: "Phone Number",
      name: "phonenumber",
      rules: [{
        required: true,
        message: 'Please input your username!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      label: "Email",
      name: "email",
      rules: [{
        required: true,
        message: 'Please input your Email!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      label: "Password",
      name: "password",
      rules: [{
        required: true,
        message: 'Please input your password!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      name: "remember",
      valuePropName: "checked",
      wrapperCol: {
        offset: 8,
        span: 16
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
        children: "Remember me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      wrapperCol: {
        offset: 8,
        span: 16
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGNkMDAwYTQ4MzI5Y2VhMmE3Y2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFHQSxJQUFNTSxNQUFNLEdBQUksU0FBVkEsTUFBVSxHQUFLO0FBRWpCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBWTtBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsTUFBeEI7QUFDRCxHQUZIOztBQUlFLE1BQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3BDSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRSxTQUF2QjtBQUNELEdBRkQ7O0FBSUYsc0JBR00sOERBQUMsc0NBQUQ7QUFDSSxRQUFJLEVBQUMsT0FEVDtBQUVJLFlBQVEsRUFBRTtBQUNSQyxNQUFBQSxJQUFJLEVBQUU7QUFERSxLQUZkO0FBS0ksY0FBVSxFQUFFO0FBQ1ZBLE1BQUFBLElBQUksRUFBRTtBQURJLEtBTGhCO0FBUUksaUJBQWEsRUFBRTtBQUNiQyxNQUFBQSxRQUFRLEVBQUU7QUFERyxLQVJuQjtBQVdJLFlBQVEsRUFBRVAsUUFYZDtBQVlJLGtCQUFjLEVBQUVJLGNBWnBCO0FBYUksZ0JBQVksRUFBQyxLQWJqQjtBQUFBLDRCQWVJLDhEQUFDLDJDQUFEO0FBQ0UsV0FBSyxFQUFDLFVBRFI7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFdBQUssRUFBRSxDQUNMO0FBQ0VJLFFBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLFFBQUFBLE9BQU8sRUFBRTtBQUZYLE9BREssQ0FIVDtBQUFBLDZCQVVFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkosZUE0QkksOERBQUMsMkNBQUQ7QUFDRSxXQUFLLEVBQUMsY0FEUjtBQUVFLFVBQUksRUFBQyxhQUZQO0FBR0UsV0FBSyxFQUFFLENBQ0w7QUFDRUQsUUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsUUFBQUEsT0FBTyxFQUFFO0FBRlgsT0FESyxDQUhUO0FBQUEsNkJBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkosZUF5Q0ksOERBQUMsMkNBQUQ7QUFDRSxXQUFLLEVBQUMsT0FEUjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsV0FBSyxFQUFFLENBQ0w7QUFDRUQsUUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsUUFBQUEsT0FBTyxFQUFFO0FBRlgsT0FESyxDQUhUO0FBQUEsNkJBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Q0osZUFzREksOERBQUMsMkNBQUQ7QUFDRSxXQUFLLEVBQUMsVUFEUjtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsV0FBSyxFQUFFLENBQ0w7QUFDRUQsUUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsUUFBQUEsT0FBTyxFQUFFO0FBRlgsT0FESyxDQUhUO0FBQUEsNkJBVUUsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0REosZUFtRUksOERBQUMsMkNBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFhLEVBQUMsU0FGaEI7QUFHRSxnQkFBVSxFQUFFO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxDQURFO0FBRVZKLFFBQUFBLElBQUksRUFBRTtBQUZJLE9BSGQ7QUFBQSw2QkFRRSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuRUosZUE4RUksOERBQUMsMkNBQUQ7QUFDRSxnQkFBVSxFQUFFO0FBQ1ZJLFFBQUFBLE1BQU0sRUFBRSxDQURFO0FBRVZKLFFBQUFBLElBQUksRUFBRTtBQUZJLE9BRGQ7QUFBQSw2QkFNRSw4REFBQyx3Q0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGdCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhOO0FBOEZILENBeEdEOztBQTBHQSwrREFBZVAsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZW1vQXBwL1JvdXRpbmdEZW1vL1JvdXRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Sb3V0aW5nLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlciA9ICAoKSA9PntcclxuXHJcbiAgICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCB2YWx1ZXMpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6JywgZXJyb3JJbmZvKTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgICAgICAgc3BhbjogOCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgIHNwYW46IDE2LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBFbWFpbCEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgIHNwYW46IDE2LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJDaGVja2JveCIsImNsYXNzZXMiLCJyb3V0ZXIiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsInNwYW4iLCJyZW1lbWJlciIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm9mZnNldCJdLCJzb3VyY2VSb290IjoiIn0=