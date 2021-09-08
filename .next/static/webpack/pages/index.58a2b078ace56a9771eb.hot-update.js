self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/DemoApp/RoutingDemo/Routing.js":
/*!**********************************************!*\
  !*** ./pages/DemoApp/RoutingDemo/Routing.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    className: (_Routing_module_css__WEBPACK_IMPORTED_MODULE_2___default().Router),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Router Calling!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Form Size",
        name: "size",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Radio.Group, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Radio.Button, {
            value: "small",
            children: "Small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Radio.Button, {
            value: "default",
            children: "Default"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Radio.Button, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Input",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Select",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "TreeSelect",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.TreeSelect, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Cascader",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Cascader, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "DatePicker",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.DatePicker, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "InputNumber",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.InputNumber, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Switch",
        valuePropName: "checked",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Switch, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        label: "Button",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
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


/***/ }),

/***/ "./pages/DemoApp/RoutingDemo/Routing.module.css":
/*!******************************************************!*\
  !*** ./pages/DemoApp/RoutingDemo/Routing.module.css ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Routing.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/DemoApp/RoutingDemo/Routing.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Routing.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/DemoApp/RoutingDemo/Routing.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Routing.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/DemoApp/RoutingDemo/Routing.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/DemoApp/RoutingDemo/Routing.module.css":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/DemoApp/RoutingDemo/Routing.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Routing_Router__Grn3g{\r\n    text-align: center;\r\n    background-color: rgb(245, 220, 221);\r\n}", "",{"version":3,"sources":["webpack://pages/DemoApp/RoutingDemo/Routing.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,oCAAoC;AACxC","sourcesContent":[".Router{\r\n    text-align: center;\r\n    background-color: rgb(245, 220, 221);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Router": "Routing_Router__Grn3g"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNThhMmIwNzhhY2U1NmE5NzcxZWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVlBOzs7QUFDQSxJQUFNYSxNQUFNLEdBQUksU0FBVkEsTUFBVSxHQUFLO0FBQUE7O0FBRWpCLGtCQUEwQ1osK0NBQVEsQ0FBQyxTQUFELENBQWxEO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUYsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFjO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDRixJQUFBQSxnQkFBZ0IsQ0FBQ0UsSUFBRCxDQUFoQjtBQUNELEdBRkQ7O0FBR0Usc0JBQ0k7QUFBSyxhQUFTLEVBQUlMLG1FQUFsQjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRRiw4REFBQyxzQ0FBRDtBQUNFLGNBQVEsRUFBRTtBQUNSTyxRQUFBQSxJQUFJLEVBQUU7QUFERSxPQURaO0FBSUUsZ0JBQVUsRUFBRTtBQUNWQSxRQUFBQSxJQUFJLEVBQUU7QUFESSxPQUpkO0FBT0UsWUFBTSxFQUFDLFlBUFQ7QUFRRSxtQkFBYSxFQUFFO0FBQ2JGLFFBQUFBLElBQUksRUFBRUg7QUFETyxPQVJqQjtBQVdFLG9CQUFjLEVBQUVFLGtCQVhsQjtBQVlFLFVBQUksRUFBRUYsYUFaUjtBQUFBLDhCQWNFLDhEQUFDLDJDQUFEO0FBQVcsYUFBSyxFQUFDLFdBQWpCO0FBQTZCLFlBQUksRUFBQyxNQUFsQztBQUFBLCtCQUNFLDhEQUFDLDZDQUFEO0FBQUEsa0NBQ0UsOERBQUMsOENBQUQ7QUFBYyxpQkFBSyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsOENBQUQ7QUFBYyxpQkFBSyxFQUFDLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx3Y0FBNE47QUFDbE87QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx3Y0FBNE47O0FBRXRQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSxpRUFBaUUsMkJBQTJCLDZDQUE2QyxLQUFLLE9BQU8sNkdBQTZHLFlBQVksYUFBYSxrQ0FBa0MsMkJBQTJCLDZDQUE2QyxLQUFLLG1CQUFtQjtBQUM3WjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RlbW9BcHAvUm91dGluZ0RlbW8vUm91dGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGVtb0FwcC9Sb3V0aW5nRGVtby9Sb3V0aW5nLm1vZHVsZS5jc3M/YTBlZiIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGVtb0FwcC9Sb3V0aW5nRGVtby9Sb3V0aW5nLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBSYWRpbyxcclxuICBTZWxlY3QsXHJcbiAgQ2FzY2FkZXIsXHJcbiAgRGF0ZVBpY2tlcixcclxuICBJbnB1dE51bWJlcixcclxuICBUcmVlU2VsZWN0LFxyXG4gIFN3aXRjaCxcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Sb3V0aW5nLm1vZHVsZS5jc3MnO1xyXG5jb25zdCByb3V0ZXIgPSAgKCkgPT57XHJcblxyXG4gICAgY29uc3QgW2NvbXBvbmVudFNpemUsIHNldENvbXBvbmVudFNpemVdID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTtcclxuXHJcbiAgY29uc3Qgb25Gb3JtTGF5b3V0Q2hhbmdlID0gKHsgc2l6ZSB9KSA9PiB7XHJcbiAgICBzZXRDb21wb25lbnRTaXplKHNpemUpO1xyXG4gIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuUm91dGVyfT5cclxuICAgICAgICAgICAgPGgxPlJvdXRlciBDYWxsaW5nITwvaDE+XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gIFxyXG5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgc3BhbjogNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDE0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgc2l6ZTogY29tcG9uZW50U2l6ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtvbkZvcm1MYXlvdXRDaGFuZ2V9XHJcbiAgICAgICAgc2l6ZT17Y29tcG9uZW50U2l6ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGb3JtIFNpemVcIiBuYW1lPVwic2l6ZVwiPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwic21hbGxcIj5TbWFsbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImxhcmdlXCI+TGFyZ2U8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIklucHV0XCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2VsZWN0XCI+XHJcbiAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRlbW9cIj5EZW1vPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlRyZWVTZWxlY3RcIj5cclxuICAgICAgICAgIDxUcmVlU2VsZWN0XHJcbiAgICAgICAgICAgIHRyZWVEYXRhPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMaWdodCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JhbWJvbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdiYW1ib28nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQ2FzY2FkZXJcIj5cclxuICAgICAgICAgIDxDYXNjYWRlclxyXG4gICAgICAgICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd6aGVqaWFuZycsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1poZWppYW5nJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2hhbmd6aG91JyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hhbmd6aG91JyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkRhdGVQaWNrZXJcIj5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIklucHV0TnVtYmVyXCI+XHJcbiAgICAgICAgICA8SW5wdXROdW1iZXIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU3dpdGNoXCIgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cclxuICAgICAgICAgIDxTd2l0Y2ggLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQnV0dG9uXCI+XHJcbiAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9Sb3V0aW5nLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL1JvdXRpbmcubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vUm91dGluZy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Sb3V0aW5nX1JvdXRlcl9fR3JuM2d7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIwLCAyMjEpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvRGVtb0FwcC9Sb3V0aW5nRGVtby9Sb3V0aW5nLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Sb3V0ZXJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIwLCAyMjEpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJSb3V0ZXJcIjogXCJSb3V0aW5nX1JvdXRlcl9fR3JuM2dcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIlJhZGlvIiwiU2VsZWN0IiwiQ2FzY2FkZXIiLCJEYXRlUGlja2VyIiwiSW5wdXROdW1iZXIiLCJUcmVlU2VsZWN0IiwiU3dpdGNoIiwiY2xhc3NlcyIsInJvdXRlciIsImNvbXBvbmVudFNpemUiLCJzZXRDb21wb25lbnRTaXplIiwib25Gb3JtTGF5b3V0Q2hhbmdlIiwic2l6ZSIsIlJvdXRlciIsInNwYW4iLCJ0aXRsZSIsInZhbHVlIiwiY2hpbGRyZW4iLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=