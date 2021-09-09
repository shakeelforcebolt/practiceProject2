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
          lineNumber: 46,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
          lineNumber: 59,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
          lineNumber: 72,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
          lineNumber: 85,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
          lineNumber: 96,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 105,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjE3ODg5Nzg4ZTQ1ZWI3N2JmNDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUdBLElBQU1NLE1BQU0sR0FBSSxTQUFWQSxNQUFVLEdBQUs7QUFFakIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNELEdBRkg7O0FBSUUsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQWU7QUFDcENILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLFNBQXZCO0FBQ0QsR0FGRDs7QUFJRixzQkFDSTtBQUFLLGFBQVMsRUFBSVAsbUVBQWxCO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFHRSw4REFBQyxzQ0FBRDtBQUNJLFVBQUksRUFBQyxPQURUO0FBRUksY0FBUSxFQUFFO0FBQ1JTLFFBQUFBLElBQUksRUFBRTtBQURFLE9BRmQ7QUFLSSxnQkFBVSxFQUFFO0FBQ1ZBLFFBQUFBLElBQUksRUFBRTtBQURJLE9BTGhCO0FBUUksbUJBQWEsRUFBRTtBQUNiQyxRQUFBQSxRQUFRLEVBQUU7QUFERyxPQVJuQjtBQVdJLGNBQVEsRUFBRVIsUUFYZDtBQVlJLG9CQUFjLEVBQUVJLGNBWnBCO0FBYUksa0JBQVksRUFBQyxLQWJqQjtBQUFBLDhCQWVJLDhEQUFDLDJDQUFEO0FBQ0UsYUFBSyxFQUFDLFVBRFI7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLGFBQUssRUFBRSxDQUNMO0FBQ0VLLFVBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLFVBQUFBLE9BQU8sRUFBRTtBQUZYLFNBREssQ0FIVDtBQUFBLCtCQVVFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUE0QkksOERBQUMsMkNBQUQ7QUFDRSxhQUFLLEVBQUMsY0FEUjtBQUVFLFlBQUksRUFBQyxhQUZQO0FBR0UsYUFBSyxFQUFFLENBQ0w7QUFDRUQsVUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsVUFBQUEsT0FBTyxFQUFFO0FBRlgsU0FESyxDQUhUO0FBQUEsK0JBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkosZUF5Q0ksOERBQUMsMkNBQUQ7QUFDRSxhQUFLLEVBQUMsT0FEUjtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsYUFBSyxFQUFFLENBQ0w7QUFDRUQsVUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsVUFBQUEsT0FBTyxFQUFFO0FBRlgsU0FESyxDQUhUO0FBQUEsK0JBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Q0osZUFzREksOERBQUMsMkNBQUQ7QUFDRSxhQUFLLEVBQUMsVUFEUjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsYUFBSyxFQUFFLENBQ0w7QUFDRUQsVUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsVUFBQUEsT0FBTyxFQUFFO0FBRlgsU0FESyxDQUhUO0FBQUEsK0JBVUUsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0REosZUFtRUksOERBQUMsMkNBQUQ7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLHFCQUFhLEVBQUMsU0FGaEI7QUFHRSxrQkFBVSxFQUFFO0FBQ1ZDLFVBQUFBLE1BQU0sRUFBRSxDQURFO0FBRVZKLFVBQUFBLElBQUksRUFBRTtBQUZJLFNBSGQ7QUFBQSwrQkFRRSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUosZUE4RUksOERBQUMsMkNBQUQ7QUFDRSxrQkFBVSxFQUFFO0FBQ1ZJLFVBQUFBLE1BQU0sRUFBRSxDQURFO0FBRVZKLFVBQUFBLElBQUksRUFBRTtBQUZJLFNBRGQ7QUFBQSwrQkFNRSw4REFBQyx3Q0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGtCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0ZILENBekdEOztBQTJHQSwrREFBZVIsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZW1vQXBwL1JvdXRpbmdEZW1vL1JvdXRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Sb3V0aW5nLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlciA9ICAoKSA9PntcclxuXHJcbiAgICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCB2YWx1ZXMpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6JywgZXJyb3JJbmZvKTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuUm91dGVyfT5cclxuICAgICAgICA8aDE+RW50ZXIgQ3JlZGVudGlhbHM8L2gxPlxyXG4gICAgICAgIDxoMT5FbnRlciBDcmVkZW50aWFsczwvaDE+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgICAgICAgIHNwYW46IDgsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBob25lbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgRW1haWwhJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogOCxcclxuICAgICAgICAgICAgICAgICAgc3BhbjogMTYsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiY2xhc3NlcyIsInJvdXRlciIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwiUm91dGVyIiwic3BhbiIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwib2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==