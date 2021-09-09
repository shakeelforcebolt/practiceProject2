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
          lineNumber: 45,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
          lineNumber: 58,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
          lineNumber: 71,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
          lineNumber: 84,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
          lineNumber: 95,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA3ODQyYmIzNGNiNjU5MjkwMTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUdBLElBQU1NLE1BQU0sR0FBSSxTQUFWQSxNQUFVLEdBQUs7QUFFakIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNELEdBRkg7O0FBSUUsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQWU7QUFDcENILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLFNBQXZCO0FBQ0QsR0FGRDs7QUFJRixzQkFDSTtBQUFLLGFBQVMsRUFBSVAsbUVBQWxCO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVFLDhEQUFDLHNDQUFEO0FBQ0ksVUFBSSxFQUFDLE9BRFQ7QUFFSSxjQUFRLEVBQUU7QUFDUlMsUUFBQUEsSUFBSSxFQUFFO0FBREUsT0FGZDtBQUtJLGdCQUFVLEVBQUU7QUFDVkEsUUFBQUEsSUFBSSxFQUFFO0FBREksT0FMaEI7QUFRSSxtQkFBYSxFQUFFO0FBQ2JDLFFBQUFBLFFBQVEsRUFBRTtBQURHLE9BUm5CO0FBV0ksY0FBUSxFQUFFUixRQVhkO0FBWUksb0JBQWMsRUFBRUksY0FacEI7QUFhSSxrQkFBWSxFQUFDLEtBYmpCO0FBQUEsOEJBZUksOERBQUMsMkNBQUQ7QUFDRSxhQUFLLEVBQUMsVUFEUjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsYUFBSyxFQUFFLENBQ0w7QUFDRUssVUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsVUFBQUEsT0FBTyxFQUFFO0FBRlgsU0FESyxDQUhUO0FBQUEsK0JBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSixlQTRCSSw4REFBQywyQ0FBRDtBQUNFLGFBQUssRUFBQyxjQURSO0FBRUUsWUFBSSxFQUFDLGFBRlA7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUNFRCxVQUFBQSxRQUFRLEVBQUUsSUFEWjtBQUVFQyxVQUFBQSxPQUFPLEVBQUU7QUFGWCxTQURLLENBSFQ7QUFBQSwrQkFVRSw4REFBQyx1Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCSixlQXlDSSw4REFBQywyQ0FBRDtBQUNFLGFBQUssRUFBQyxPQURSO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUNFRCxVQUFBQSxRQUFRLEVBQUUsSUFEWjtBQUVFQyxVQUFBQSxPQUFPLEVBQUU7QUFGWCxTQURLLENBSFQ7QUFBQSwrQkFVRSw4REFBQyx1Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpDSixlQXNESSw4REFBQywyQ0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUNFRCxVQUFBQSxRQUFRLEVBQUUsSUFEWjtBQUVFQyxVQUFBQSxPQUFPLEVBQUU7QUFGWCxTQURLLENBSFQ7QUFBQSwrQkFVRSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRESixlQW1FSSw4REFBQywyQ0FBRDtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUscUJBQWEsRUFBQyxTQUZoQjtBQUdFLGtCQUFVLEVBQUU7QUFDVkMsVUFBQUEsTUFBTSxFQUFFLENBREU7QUFFVkosVUFBQUEsSUFBSSxFQUFFO0FBRkksU0FIZDtBQUFBLCtCQVFFLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5FSixlQThFSSw4REFBQywyQ0FBRDtBQUNFLGtCQUFVLEVBQUU7QUFDVkksVUFBQUEsTUFBTSxFQUFFLENBREU7QUFFVkosVUFBQUEsSUFBSSxFQUFFO0FBRkksU0FEZDtBQUFBLCtCQU1FLDhEQUFDLHdDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4RkgsQ0F4R0Q7O0FBMEdBLCtEQUFlUixNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RlbW9BcHAvUm91dGluZ0RlbW8vUm91dGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1JvdXRpbmcubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVyID0gICgpID0+e1xyXG5cclxuICAgIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHZhbHVlcyk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZDonLCBlcnJvckluZm8pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5Sb3V0ZXJ9PlxyXG4gICAgICAgIDxoMT5FbnRlciBDcmVkZW50aWFsczwvaDE+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgICAgICAgIHNwYW46IDgsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBob25lbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgRW1haWwhJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogOCxcclxuICAgICAgICAgICAgICAgICAgc3BhbjogMTYsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiY2xhc3NlcyIsInJvdXRlciIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwiUm91dGVyIiwic3BhbiIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwib2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==