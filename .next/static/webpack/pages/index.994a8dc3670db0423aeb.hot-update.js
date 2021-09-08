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
    _this = undefined,
    _s = $RefreshSig$();






var router = function router() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('default'),
      componentSize = _useState[0],
      setComponentSize = _useState[1];

  var onFormLayoutChange = function onFormLayoutChange(_ref) {
    var size = _ref.size;
    setComponentSize(size);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Router Calling!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 14
      },
      layout: "horizontal",
      initialValues: {
        size: componentSize
      },
      onValuesChange: onFormLayoutChange,
      size: componentSize,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "Form Size",
        name: "size",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Radio.Group, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Radio.Button, {
            value: "small",
            children: "Small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Radio.Button, {
            value: "default",
            children: "Default"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Radio.Button, {
            value: "large",
            children: "Large"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "Input",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "Select",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
            value: "demo",
            children: "Demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "TreeSelect",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.TreeSelect, {
          treeData: [{
            title: 'Light',
            value: 'light',
            children: [{
              title: 'Bamboo',
              value: 'bamboo'
            }]
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "Cascader",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Cascader, {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou'
            }]
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "DatePicker",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "InputNumber",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.InputNumber, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "Switch",
        valuePropName: "checked",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Switch, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        label: "Button",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
          children: "Button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(router, "xbjYH+sADrGxvYP4qxppYTMrySQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTk0YThkYzM2NzBkYjA0MjNhZWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFZQTs7O0FBQ0EsSUFBTWEsTUFBTSxHQUFJLFNBQVZBLE1BQVUsR0FBSztBQUFBOztBQUVqQixrQkFBMENaLCtDQUFRLENBQUMsU0FBRCxDQUFsRDtBQUFBLE1BQU9hLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVGLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBYztBQUFBLFFBQVhDLElBQVcsUUFBWEEsSUFBVztBQUN2Q0YsSUFBQUEsZ0JBQWdCLENBQUNFLElBQUQsQ0FBaEI7QUFDRCxHQUZEOztBQUdFLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFGLDhEQUFDLHNDQUFEO0FBQ0UsY0FBUSxFQUFFO0FBQ1JDLFFBQUFBLElBQUksRUFBRTtBQURFLE9BRFo7QUFJRSxnQkFBVSxFQUFFO0FBQ1ZBLFFBQUFBLElBQUksRUFBRTtBQURJLE9BSmQ7QUFPRSxZQUFNLEVBQUMsWUFQVDtBQVFFLG1CQUFhLEVBQUU7QUFDYkQsUUFBQUEsSUFBSSxFQUFFSDtBQURPLE9BUmpCO0FBV0Usb0JBQWMsRUFBRUUsa0JBWGxCO0FBWUUsVUFBSSxFQUFFRixhQVpSO0FBQUEsOEJBY0UsOERBQUMsMkNBQUQ7QUFBVyxhQUFLLEVBQUMsV0FBakI7QUFBNkIsWUFBSSxFQUFDLE1BQWxDO0FBQUEsK0JBQ0UsOERBQUMsNkNBQUQ7QUFBQSxrQ0FDRSw4REFBQyw4Q0FBRDtBQUFjLGlCQUFLLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyw4Q0FBRDtBQUFjLGlCQUFLLEVBQUMsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyw4Q0FBRDtBQUFjLGlCQUFLLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBcUJFLDhEQUFDLDJDQUFEO0FBQVcsYUFBSyxFQUFDLE9BQWpCO0FBQUEsK0JBQ0UsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkYsZUF3QkUsOERBQUMsMkNBQUQ7QUFBVyxhQUFLLEVBQUMsUUFBakI7QUFBQSwrQkFDRSw4REFBQyx3Q0FBRDtBQUFBLGlDQUNFLDhEQUFDLCtDQUFEO0FBQWUsaUJBQUssRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLGVBNkJFLDhEQUFDLDJDQUFEO0FBQVcsYUFBSyxFQUFDLFlBQWpCO0FBQUEsK0JBQ0UsOERBQUMsNENBQUQ7QUFDRSxrQkFBUSxFQUFFLENBQ1I7QUFDRUssWUFBQUEsS0FBSyxFQUFFLE9BRFQ7QUFFRUMsWUFBQUEsS0FBSyxFQUFFLE9BRlQ7QUFHRUMsWUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDRUYsY0FBQUEsS0FBSyxFQUFFLFFBRFQ7QUFFRUMsY0FBQUEsS0FBSyxFQUFFO0FBRlQsYUFEUTtBQUhaLFdBRFE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRixlQTZDRSw4REFBQywyQ0FBRDtBQUFXLGFBQUssRUFBQyxVQUFqQjtBQUFBLCtCQUNFLDhEQUFDLDBDQUFEO0FBQ0UsaUJBQU8sRUFBRSxDQUNQO0FBQ0VBLFlBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVFLFlBQUFBLEtBQUssRUFBRSxVQUZUO0FBR0VELFlBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VELGNBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVFLGNBQUFBLEtBQUssRUFBRTtBQUZULGFBRFE7QUFIWixXQURPO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0YsZUE2REUsOERBQUMsMkNBQUQ7QUFBVyxhQUFLLEVBQUMsWUFBakI7QUFBQSwrQkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdERixlQWdFRSw4REFBQywyQ0FBRDtBQUFXLGFBQUssRUFBQyxhQUFqQjtBQUFBLCtCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEVGLGVBbUVFLDhEQUFDLDJDQUFEO0FBQVcsYUFBSyxFQUFDLFFBQWpCO0FBQTBCLHFCQUFhLEVBQUMsU0FBeEM7QUFBQSwrQkFDRSw4REFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5FRixlQXNFRSw4REFBQywyQ0FBRDtBQUFXLGFBQUssRUFBQyxRQUFqQjtBQUFBLCtCQUNFLDhEQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBGSCxDQWpHRDs7R0FBTVQ7O0FBbUdOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RlbW9BcHAvUm91dGluZ0RlbW8vUm91dGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgQnV0dG9uLFxyXG4gIFJhZGlvLFxyXG4gIFNlbGVjdCxcclxuICBDYXNjYWRlcixcclxuICBEYXRlUGlja2VyLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIFRyZWVTZWxlY3QsXHJcbiAgU3dpdGNoLFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1JvdXRpbmcubW9kdWxlLmNzcyc7XHJcbmNvbnN0IHJvdXRlciA9ICAoKSA9PntcclxuXHJcbiAgICBjb25zdCBbY29tcG9uZW50U2l6ZSwgc2V0Q29tcG9uZW50U2l6ZV0gPSB1c2VTdGF0ZSgnZGVmYXVsdCcpO1xyXG5cclxuICBjb25zdCBvbkZvcm1MYXlvdXRDaGFuZ2UgPSAoeyBzaXplIH0pID0+IHtcclxuICAgIHNldENvbXBvbmVudFNpemUoc2l6ZSk7XHJcbiAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlJvdXRlciBDYWxsaW5nITwvaDE+XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gIFxyXG5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgc3BhbjogNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDE0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgc2l6ZTogY29tcG9uZW50U2l6ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtvbkZvcm1MYXlvdXRDaGFuZ2V9XHJcbiAgICAgICAgc2l6ZT17Y29tcG9uZW50U2l6ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGb3JtIFNpemVcIiBuYW1lPVwic2l6ZVwiPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwic21hbGxcIj5TbWFsbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImxhcmdlXCI+TGFyZ2U8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIklucHV0XCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2VsZWN0XCI+XHJcbiAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRlbW9cIj5EZW1vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlRyZWVTZWxlY3RcIj5cclxuICAgICAgICAgIDxUcmVlU2VsZWN0XHJcbiAgICAgICAgICAgIHRyZWVEYXRhPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMaWdodCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JhbWJvbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdiYW1ib28nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQ2FzY2FkZXJcIj5cclxuICAgICAgICAgIDxDYXNjYWRlclxyXG4gICAgICAgICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd6aGVqaWFuZycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1poZWppYW5nJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2hhbmd6aG91JyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hhbmd6aG91JyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkRhdGVQaWNrZXJcIj5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIklucHV0TnVtYmVyXCI+XHJcbiAgICAgICAgICA8SW5wdXROdW1iZXIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU3dpdGNoXCIgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cclxuICAgICAgICAgIDxTd2l0Y2ggLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQnV0dG9uXCI+XHJcbiAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiUmFkaW8iLCJTZWxlY3QiLCJDYXNjYWRlciIsIkRhdGVQaWNrZXIiLCJJbnB1dE51bWJlciIsIlRyZWVTZWxlY3QiLCJTd2l0Y2giLCJjbGFzc2VzIiwicm91dGVyIiwiY29tcG9uZW50U2l6ZSIsInNldENvbXBvbmVudFNpemUiLCJvbkZvcm1MYXlvdXRDaGFuZ2UiLCJzaXplIiwic3BhbiIsInRpdGxlIiwidmFsdWUiLCJjaGlsZHJlbiIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==