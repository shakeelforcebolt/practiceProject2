"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

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


/***/ }),

/***/ "./graphql/queries/user.ts":
/*!*********************************!*\
  !*** ./graphql/queries/user.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_USER": function() { return /* binding */ GET_USER; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var GET_USER = "\nquery getUser {\n    users {\n      id\n      name\n      Age\n    }\n  }";

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

/***/ "./pages/App.tsx":
/*!***********************!*\
  !*** ./pages/App.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Greet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Greet */ "./components/Greet.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\pages\\App.tsx",
    _this = undefined;




var app = function app() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "App Calling!!!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Greet__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "Basudeb"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (app);

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./pages/App.tsx");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Inno_Desktop_project_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ "./store/client.ts":
/*!*************************!*\
  !*** ./store/client.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-hooks */ "./node_modules/graphql-hooks/es/graphql-hooks.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var client = new graphql_hooks__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient({
  url: 'https://new-project.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'q8qZGu2zrN4SdD2I51kJr49yiaAkDALC0efO9sPae6eU6LiayXn3Z2gzv9QM6T6w'
  } // subscriptionClient: new SubscriptionClient('ws://new-project.hasura.app/v1/graphql', {
  //   /* additional config options */
  // }),
  // or

  /*subscriptionClient: createClient({
    url: 'ws://localhost:8000/graphql'
    /* additional config options
  })*/

});
/* harmony default export */ __webpack_exports__["default"] = (client);

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

/***/ "./node_modules/extract-files/public/ReactNativeFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/extract-files/public/ReactNativeFile.js ***!
  \**************************************************************/
/***/ (function(module) {



/**
 * Used to mark a
 * [React Native `File` substitute]{@link ReactNativeFileSubstitute}
 * in an object tree for [`extractFiles`]{@link extractFiles}. It’s too risky to
 * assume all objects with `uri`, `type` and `name` properties are files to
 * extract.
 * @kind class
 * @name ReactNativeFile
 * @param {ReactNativeFileSubstitute} file A [React Native](https://reactnative.dev) [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) substitute.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { ReactNativeFile } from 'extract-files';
 * ```
 *
 * ```js
 * import ReactNativeFile from 'extract-files/public/ReactNativeFile.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { ReactNativeFile } = require('extract-files');
 * ```
 *
 * ```js
 * const ReactNativeFile = require('extract-files/public/ReactNativeFile.js');
 * ```
 * @example <caption>An extractable file in [React Native](https://reactnative.dev).</caption>
 * ```js
 * const file = new ReactNativeFile({
 *   uri: uriFromCameraRoll,
 *   name: 'a.jpg',
 *   type: 'image/jpeg',
 * });
 * ```
 */
module.exports = class ReactNativeFile {
  constructor({ uri, name, type }) {
    this.uri = uri;
    this.name = name;
    this.type = type;
  }
};


/***/ }),

/***/ "./node_modules/extract-files/public/extractFiles.js":
/*!***********************************************************!*\
  !*** ./node_modules/extract-files/public/extractFiles.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



const defaultIsExtractableFile = __webpack_require__(/*! ./isExtractableFile.js */ "./node_modules/extract-files/public/isExtractableFile.js");

/**
 * Clones a value, recursively extracting
 * [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File),
 * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and
 * [`ReactNativeFile`]{@link ReactNativeFile} instances with their
 * [object paths]{@link ObjectPath}, replacing them with `null`.
 * [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/Filelist) instances
 * are treated as [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
 * instance arrays.
 * @kind function
 * @name extractFiles
 * @param {*} value Value (typically an object tree) to extract files from.
 * @param {ObjectPath} [path=''] Prefix for object paths for extracted files.
 * @param {ExtractableFileMatcher} [isExtractableFile=isExtractableFile] The function used to identify extractable files.
 * @returns {ExtractFilesResult} Result.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { extractFiles } from 'extract-files';
 * ```
 *
 * ```js
 * import extractFiles from 'extract-files/public/extractFiles.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { extractFiles } = require('extract-files');
 * ```
 *
 * ```js
 * const extractFiles = require('extract-files/public/extractFiles.js');
 * ```
 * @example <caption>Extract files from an object.</caption>
 * For the following:
 *
 * ```js
 * const file1 = new File(['1'], '1.txt', { type: 'text/plain' });
 * const file2 = new File(['2'], '2.txt', { type: 'text/plain' });
 * const value = {
 *   a: file1,
 *   b: [file1, file2],
 * };
 *
 * const { clone, files } = extractFiles(value, 'prefix');
 * ```
 *
 * `value` remains the same.
 *
 * `clone` is:
 *
 * ```json
 * {
 *   "a": null,
 *   "b": [null, null]
 * }
 * ```
 *
 * `files` is a [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) instance containing:
 *
 * | Key     | Value                        |
 * | :------ | :--------------------------- |
 * | `file1` | `['prefix.a', 'prefix.b.0']` |
 * | `file2` | `['prefix.b.1']`             |
 */
module.exports = function extractFiles(
  value,
  path = '',
  isExtractableFile = defaultIsExtractableFile
) {
  // Map of extracted files and their object paths within the input value.
  const files = new Map();

  // Map of arrays and objects recursed within the input value and their clones,
  // for reusing clones of values that are referenced multiple times within the
  // input value.
  const clones = new Map();

  /**
   * Recursively clones the value, extracting files.
   * @kind function
   * @name extractFiles~recurse
   * @param {*} value Value to extract files from.
   * @param {ObjectPath} path Prefix for object paths for extracted files.
   * @param {Set} recursed Recursed arrays and objects for avoiding infinite recursion of circular references within the input value.
   * @returns {*} Clone of the value with files replaced with `null`.
   * @ignore
   */
  function recurse(value, path, recursed) {
    let clone = value;

    if (isExtractableFile(value)) {
      clone = null;

      const filePaths = files.get(value);

      filePaths ? filePaths.push(path) : files.set(value, [path]);
    } else {
      const isList =
        Array.isArray(value) ||
        (typeof FileList !== 'undefined' && value instanceof FileList);
      const isObject = value && value.constructor === Object;

      if (isList || isObject) {
        const hasClone = clones.has(value);

        if (hasClone) clone = clones.get(value);
        else {
          clone = isList ? [] : {};

          clones.set(value, clone);
        }

        if (!recursed.has(value)) {
          const pathPrefix = path ? `${path}.` : '';
          const recursedDeeper = new Set(recursed).add(value);

          if (isList) {
            let index = 0;

            for (const item of value) {
              const itemClone = recurse(
                item,
                pathPrefix + index++,
                recursedDeeper
              );

              if (!hasClone) clone.push(itemClone);
            }
          } else
            for (const key in value) {
              const propertyClone = recurse(
                value[key],
                pathPrefix + key,
                recursedDeeper
              );

              if (!hasClone) clone[key] = propertyClone;
            }
        }
      }
    }

    return clone;
  }

  return {
    clone: recurse(value, path, new Set()),
    files,
  };
};


/***/ }),

/***/ "./node_modules/extract-files/public/isExtractableFile.js":
/*!****************************************************************!*\
  !*** ./node_modules/extract-files/public/isExtractableFile.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



const ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile.js */ "./node_modules/extract-files/public/ReactNativeFile.js");

/**
 * Checks if a value is an [extractable file]{@link ExtractableFile}.
 * @kind function
 * @name isExtractableFile
 * @type {ExtractableFileMatcher}
 * @param {*} value Value to check.
 * @returns {boolean} Is the value an [extractable file]{@link ExtractableFile}.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { isExtractableFile } from 'extract-files';
 * ```
 *
 * ```js
 * import isExtractableFile from 'extract-files/public/isExtractableFile.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { isExtractableFile } = require('extract-files');
 * ```
 *
 * ```js
 * const isExtractableFile = require('extract-files/public/isExtractableFile.js');
 * ```
 */
module.exports = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};


/***/ }),

/***/ "./node_modules/graphql-hooks/es/graphql-hooks.js":
/*!********************************************************!*\
  !*** ./node_modules/graphql-hooks/es/graphql-hooks.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContext": function() { return /* binding */ ClientContext; },
/* harmony export */   "GraphQLClient": function() { return /* binding */ GraphQLClient; },
/* harmony export */   "useClientRequest": function() { return /* binding */ useClientRequest; },
/* harmony export */   "useManualQuery": function() { return /* binding */ useManualQuery; },
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; },
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; },
/* harmony export */   "useSubscription": function() { return /* binding */ useSubscription; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var extract_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extract-files */ "./node_modules/extract-files/public/index.mjs");
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dequal */ "./node_modules/dequal/dist/index.mjs");




function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var ClientContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
ClientContext.displayName = 'ClientContext';

var isExtractableFileEnhanced = function isExtractableFileEnhanced(value) {
  return (0,extract_files__WEBPACK_IMPORTED_MODULE_2__.isExtractableFile)(value) || // Check if stream
  // https://github.com/sindresorhus/is-stream/blob/3750505b0727f6df54324784fe369365ef78841e/index.js#L3
  value !== null && typeof value === 'object' && typeof value.pipe === 'function';
};

var canUseDOM = (function () {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
});

var GraphQLClient = /*#__PURE__*/function () {
  function GraphQLClient(config) {
    if (config === void 0) {
      config = {};
    }

    // validate config
    if (!config.url) {
      throw new Error('GraphQLClient: config.url is required');
    }

    if (config.fetch && typeof config.fetch !== 'function') {
      throw new Error('GraphQLClient: config.fetch must be a function');
    }

    if ((canUseDOM() || config.ssrMode) && !config.fetch && !fetch) {
      throw new Error('GraphQLClient: fetch must be polyfilled or passed in new GraphQLClient({ fetch })');
    }

    if (config.ssrMode && !config.cache) {
      throw new Error('GraphQLClient: config.cache is required when in ssrMode');
    }

    this.cache = config.cache;
    this.headers = config.headers || {};
    this.ssrMode = config.ssrMode;
    this.ssrPromises = [];
    this.url = config.url;
    this.fetch = config.fetch || typeof fetch !== 'undefined' && fetch && fetch.bind();
    this.fetchOptions = config.fetchOptions || {};
    this.FormData = config.FormData || (typeof FormData !== 'undefined' ? FormData : undefined);
    this.logErrors = config.logErrors !== undefined ? config.logErrors : true;
    this.onError = config.onError;
    this.useGETForQueries = config.useGETForQueries === true;
    this.subscriptionClient = config.subscriptionClient;
  }

  var _proto = GraphQLClient.prototype;

  _proto.setHeader = function setHeader(key, value) {
    this.headers[key] = value;
    return this;
  };

  _proto.setHeaders = function setHeaders(headers) {
    this.headers = headers;
    return this;
  };

  _proto.removeHeader = function removeHeader(key) {
    delete this.headers[key];
    return this;
  }
  /* eslint-disable no-console */
  ;

  _proto.logErrorResult = function logErrorResult(_ref) {
    var result = _ref.result,
        operation = _ref.operation;
    console.error('GraphQL Hooks Error');
    console.groupCollapsed('---> Full Error Details');
    console.groupCollapsed('Operation:');
    console.log(operation);
    console.groupEnd();
    var error = result.error;

    if (error) {
      if (error.fetchError) {
        console.groupCollapsed('FETCH ERROR:');
        console.log(error.fetchError);
        console.groupEnd();
      }

      if (error.httpError) {
        console.groupCollapsed('HTTP ERROR:');
        console.log(error.httpError);
        console.groupEnd();
      }

      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        console.groupCollapsed('GRAPHQL ERROR:');
        error.graphQLErrors.forEach(function (err) {
          return console.log(err);
        });
        console.groupEnd();
      }
    }

    console.groupEnd();
  }
  /* eslint-enable no-console */
  ;

  _proto.generateResult = function generateResult(_ref2) {
    var fetchError = _ref2.fetchError,
        httpError = _ref2.httpError,
        graphQLErrors = _ref2.graphQLErrors,
        data = _ref2.data;
    var errorFound = !!(graphQLErrors && graphQLErrors.length > 0 || fetchError || httpError);
    return !errorFound ? {
      data: data
    } : {
      data: data,
      error: {
        fetchError: fetchError,
        httpError: httpError,
        graphQLErrors: graphQLErrors
      }
    };
  };

  _proto.getCacheKey = function getCacheKey(operation, options) {
    if (options === void 0) {
      options = {};
    }

    var fetchOptions = _objectSpread2(_objectSpread2({}, this.fetchOptions), options.fetchOptionsOverrides);

    return {
      operation: operation,
      fetchOptions: fetchOptions
    };
  };

  _proto.getCache = function getCache(cacheKey) {
    var cacheHit = this.cache ? this.cache.get(cacheKey) : null;

    if (cacheHit) {
      return cacheHit;
    }
  };

  _proto.saveCache = function saveCache(cacheKey, value) {
    if (this.cache) {
      this.cache.set(cacheKey, value);
    }
  } // Kudos to Jayden Seric (@jaydenseric) for this piece of code.
  // See original source: https://github.com/jaydenseric/graphql-react/blob/82d576b5fe6664c4a01cd928d79f33ddc3f7bbfd/src/universal/graphqlFetchOptions.mjs.
  ;

  _proto.getFetchOptions = function getFetchOptions(operation, fetchOptionsOverrides) {
    if (fetchOptionsOverrides === void 0) {
      fetchOptionsOverrides = {};
    }

    var fetchOptions = _objectSpread2(_objectSpread2({
      method: 'POST',
      headers: _objectSpread2({}, this.headers)
    }, this.fetchOptions), fetchOptionsOverrides);

    if (fetchOptions.method === 'GET') {
      return fetchOptions;
    }

    var _extractFiles = (0,extract_files__WEBPACK_IMPORTED_MODULE_2__.extractFiles)(operation, '', isExtractableFileEnhanced),
        clone = _extractFiles.clone,
        files = _extractFiles.files;

    var operationJSON = JSON.stringify(clone);

    if (files.size) {
      // See the GraphQL multipart request spec:
      // https://github.com/jaydenseric/graphql-multipart-request-spec
      if (!this.FormData) {
        throw new Error('GraphQLClient: FormData must be polyfilled or passed in new GraphQLClient({ FormData })');
      }

      var form = new this.FormData();
      form.append('operations', operationJSON);
      var map = {};
      var i = 0;
      files.forEach(function (paths) {
        map[++i] = paths;
      });
      form.append('map', JSON.stringify(map));
      i = 0;
      files.forEach(function (paths, file) {
        form.append("" + ++i, file, file.name);
      });
      fetchOptions.body = form;
    } else {
      fetchOptions.headers['Content-Type'] = 'application/json';
      fetchOptions.body = operationJSON;
    }

    return fetchOptions;
  };

  _proto.request = function request(operation, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var url = this.url;
    var fetchOptions = this.getFetchOptions(operation, options.fetchOptionsOverrides);

    if (fetchOptions.method === 'GET') {
      var paramsQueryString = Object.entries(operation).filter(function (_ref3) {
        var v = _ref3[1];
        return !!v;
      }).map(function (_ref4) {
        var k = _ref4[0],
            v = _ref4[1];

        if (k === 'variables') {
          v = JSON.stringify(v);
        }

        return k + "=" + encodeURIComponent(v);
      }).join('&');
      url = url + '?' + paramsQueryString;
    }

    return this.fetch(url, this.getFetchOptions(operation, options.fetchOptionsOverrides)).then(function (response) {
      if (!response.ok) {
        return response.text().then(function (body) {
          var status = response.status,
              statusText = response.statusText;
          return _this.generateResult({
            httpError: {
              status: status,
              statusText: statusText,
              body: body
            }
          });
        });
      } else {
        return response.json().then(function (_ref5) {
          var errors = _ref5.errors,
              data = _ref5.data;
          return _this.generateResult({
            graphQLErrors: errors,
            data: data
          });
        });
      }
    }).catch(function (error) {
      return _this.generateResult({
        fetchError: error
      });
    }).then(function (result) {
      if (result.error) {
        if (_this.logErrors) {
          _this.logErrorResult({
            result: result,
            operation: operation
          });
        }

        if (_this.onError) {
          _this.onError({
            result: result,
            operation: operation
          });
        }
      }

      return result;
    });
  };

  _proto.createSubscription = function createSubscription(operation) {
    var _this2 = this;

    if (!this.subscriptionClient) {
      throw new Error('No SubscriptionClient! Please set in the constructor.');
    }

    if (typeof this.subscriptionClient.subscribe === 'function') {
      // graphql-ws
      return {
        subscribe: function subscribe(sink) {
          return {
            unsubscribe: _this2.subscriptionClient.subscribe(operation, sink)
          };
        }
      };
    } else {
      // subscriptions-transport-ws
      return this.subscriptionClient.request(operation);
    }
  };

  return GraphQLClient;
}();

var actionTypes = {
  RESET_STATE: 'RESET_STATE',
  LOADING: 'LOADING',
  CACHE_HIT: 'CACHE_HIT',
  REQUEST_RESULT: 'REQUEST_RESULT'
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return action.initialState;

    case actionTypes.LOADING:
      // if the previous action resulted in an error - refetch should clear any errors
      if (state.error) {
        return _objectSpread2(_objectSpread2({}, action.initialState), {}, {
          data: state.data,
          loading: true
        });
      }

      if (state.loading) {
        return state; // saves a render cycle as state is the same
      }

      return _objectSpread2(_objectSpread2({}, state), {}, {
        loading: true
      });

    case actionTypes.CACHE_HIT:
      if (state.cacheHit && !action.resetState) {
        // we can be sure this is the same cacheKey hit
        // because we dispatch RESET_STATE if it changes
        return state;
      }

      return _objectSpread2(_objectSpread2({}, action.result), {}, {
        cacheHit: true,
        loading: false
      });

    case actionTypes.REQUEST_RESULT:
      return _objectSpread2(_objectSpread2({}, action.result), {}, {
        data: state.data && action.result.data && action.updateData ? action.updateData(state.data, action.result.data) : action.result.data,
        cacheHit: false,
        loading: false
      });

    default:
      return state;
  }
}

function useDeepCompareCallback(callback, deps) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();

  if (!(0,dequal__WEBPACK_IMPORTED_MODULE_1__.dequal)(deps, ref.current)) {
    ref.current = deps;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(callback, ref.current);
}
/*
  options include:

  opts.variables: Object
  opts.operationName: String
  opts.fetchOptionsOverrides: Object
  opts.skipCache: Boolean
*/


function useClientRequest(query, initialOpts) {
  if (initialOpts === void 0) {
    initialOpts = {};
  }

  if (typeof query !== 'string') {
    throw new Error('Your query must be a string. If you are using the `gql` template literal from graphql-tag, remove it from your query.');
  }

  var contextClient = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(ClientContext);
  var client = initialOpts.client || contextClient;
  var isMounted = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(true);
  var activeCacheKey = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var operation = {
    query: query,
    variables: initialOpts.variables,
    operationName: initialOpts.operationName,
    persisted: initialOpts.persisted
  };

  if (initialOpts.persisted || client.useGETForQueries && !initialOpts.isMutation) {
    initialOpts.fetchOptionsOverrides = _objectSpread2(_objectSpread2({}, initialOpts.fetchOptionsOverrides), {}, {
      method: 'GET'
    });
  }

  var cacheKey = client.getCacheKey(operation, initialOpts);
  var isDeferred = initialOpts.isMutation || initialOpts.isManual;
  var initialCacheHit = initialOpts.skipCache || !client.cache ? null : client.cache.get(cacheKey);

  var initialState = _objectSpread2(_objectSpread2({}, initialCacheHit), {}, {
    cacheHit: !!initialCacheHit,
    loading: isDeferred ? false : !initialCacheHit
  });

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(reducer, initialState),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1]; // NOTE: state from useReducer is only initialState on the first render
  // in subsequent renders the operation could have changed
  // if so the state would be invalid, this effect ensures we reset it back


  var stringifiedCacheKey = JSON.stringify(cacheKey);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (!initialOpts.updateData) {
      // if using updateData we can assume that the consumer cares about the previous data
      dispatch({
        type: actionTypes.RESET_STATE,
        initialState: initialState
      });
    }
  }, [stringifiedCacheKey]); // eslint-disable-line react-hooks/exhaustive-deps

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []); // arguments to fetchData override the useClientRequest arguments

  var fetchData = useDeepCompareCallback(function (newOpts) {
    if (!isMounted.current) return Promise.resolve();

    var revisedOpts = _objectSpread2(_objectSpread2({}, initialOpts), newOpts);

    var revisedOperation = _objectSpread2(_objectSpread2({}, operation), {}, {
      variables: revisedOpts.variables,
      operationName: revisedOpts.operationName
    });

    var revisedCacheKey = client.getCacheKey(revisedOperation, revisedOpts); // NOTE: There is a possibility of a race condition whereby
    // the second query could finish before the first one, dispatching an old result
    // see https://github.com/nearform/graphql-hooks/issues/150

    activeCacheKey.current = revisedCacheKey;
    var cacheHit = revisedOpts.skipCache ? null : client.getCache(revisedCacheKey);

    if (cacheHit) {
      dispatch({
        type: actionTypes.CACHE_HIT,
        result: cacheHit,
        resetState: stringifiedCacheKey !== JSON.stringify(state.cacheKey)
      });
      return Promise.resolve(cacheHit);
    }

    dispatch({
      type: actionTypes.LOADING,
      initialState: initialState
    });
    return client.request(revisedOperation, revisedOpts).then(function (result) {
      if (revisedOpts.updateData && typeof revisedOpts.updateData !== 'function') {
        throw new Error('options.updateData must be a function');
      }

      var actionResult = _objectSpread2({}, result);

      if (revisedOpts.useCache) {
        actionResult.useCache = true;
        actionResult.cacheKey = revisedCacheKey;

        if (client.ssrMode) {
          var cacheValue = {
            error: actionResult.error,
            data: revisedOpts.updateData ? revisedOpts.updateData(state.data, actionResult.data) : actionResult.data
          };
          client.saveCache(revisedCacheKey, cacheValue);
        }
      }

      if (isMounted.current && revisedCacheKey === activeCacheKey.current) {
        dispatch({
          type: actionTypes.REQUEST_RESULT,
          updateData: revisedOpts.updateData,
          result: actionResult
        });
      }

      return result;
    });
  }, [client, initialOpts, operation]); // We perform caching after reducer update
  // To include the outcome of updateData

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (state.useCache) {
      client.saveCache(state.cacheKey, state);
    }
  }, [client, state]);

  var reset = function reset(desiredState) {
    if (desiredState === void 0) {
      desiredState = {};
    }

    return dispatch({
      type: actionTypes.RESET_STATE,
      initialState: _objectSpread2(_objectSpread2({}, initialState), desiredState)
    });
  };

  return [fetchData, state, reset];
}

var defaultOpts = {
  useCache: true,
  skip: false,
  throwErrors: false
};

function useQuery(query, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var allOpts = _objectSpread2(_objectSpread2({}, defaultOpts), opts);

  var contextClient = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(ClientContext);
  var client = opts.client || contextClient;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      calledDuringSSR = _React$useState[0],
      setCalledDuringSSR = _React$useState[1];

  var _useClientRequest = useClientRequest(query, allOpts),
      queryReq = _useClientRequest[0],
      state = _useClientRequest[1];

  if (client.ssrMode && opts.ssr !== false && !calledDuringSSR && !opts.skipCache && !opts.skip) {
    // result may already be in the cache from previous SSR iterations
    if (!state.data && !state.error) {
      var p = queryReq();
      client.ssrPromises.push(p);
    }

    setCalledDuringSSR(true);
  }

  var stringifiedAllOpts = JSON.stringify(allOpts);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (allOpts.skip) {
      return;
    }

    queryReq();
  }, [query, stringifiedAllOpts]); // eslint-disable-line react-hooks/exhaustive-deps

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (state.error && allOpts.throwErrors) {
      throw state.error;
    }
  }, [state.error, allOpts.throwErrors]);
  return _objectSpread2(_objectSpread2({}, state), {}, {
    refetch: react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function (options) {
      if (options === void 0) {
        options = {};
      }

      return queryReq(_objectSpread2({
        skipCache: true,
        // don't call the updateData that has been passed into useQuery here
        // reset to the default behaviour of returning the raw query result
        // this can be overridden in refetch options
        updateData: function updateData(_, data) {
          return data;
        }
      }, options));
    }, [queryReq])
  });
}

function useSubscription(options, callback) {
  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
  callbackRef.current = callback;
  var contextClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ClientContext);
  var client = options.client || contextClient;
  var request = {
    query: options.query,
    variables: options.variables
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var observable = client.createSubscription(request);
    var subscription = observable.subscribe({
      next: function next(result) {
        callbackRef.current(result);
      },
      error: function error() {
        // TODO-db-210611 errors are important, why not handle them?
        subscription.unsubscribe();
      },
      complete: function complete() {
        subscription.unsubscribe();
      }
    });
    return function () {
      subscription.unsubscribe();
    };
  }, []); // eslint-disable-line
  // the effect should be run when component is mounted and unmounted
}

var useManualQuery = function useManualQuery(query, options) {
  return useClientRequest(query, _objectSpread2({
    useCache: true,
    isManual: true
  }, options));
};

var useMutation = function useMutation(query, options) {
  return useClientRequest(query, _objectSpread2({
    isMutation: true
  }, options));
};




/***/ }),

/***/ "./node_modules/dequal/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/dist/index.mjs ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dequal": function() { return /* binding */ dequal; }
/* harmony export */ });
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/extract-files/public/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/extract-files/public/index.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactNativeFile": function() { return /* reexport default export from named module */ _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "extractFiles": function() { return /* reexport default export from named module */ _extractFiles_js__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "isExtractableFile": function() { return /* reexport default export from named module */ _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__; }
/* harmony export */ });
/* harmony import */ var _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactNativeFile.js */ "./node_modules/extract-files/public/ReactNativeFile.js");
/* harmony import */ var _extractFiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractFiles.js */ "./node_modules/extract-files/public/extractFiles.js");
/* harmony import */ var _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isExtractableFile.js */ "./node_modules/extract-files/public/isExtractableFile.js");





/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYTJmNTNkZGFjMjNmNDQ2MGRmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBTUEsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUF1QjtBQUFBOztBQUNuQ0osRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTtBQUNGSyxNQUFBQSxPQUFPO0FBQ1IsS0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVSxDQUFFO0FBQ2YsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFLQSxNQUFNRCxPQUFPO0FBQUEsNlRBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1NILDBEQUFBLENBQWU7QUFDcENNLGdCQUFBQSxLQUFLLEVBQUVQLDJEQUFRQTtBQURxQixlQUFmLENBRFQ7O0FBQUE7QUFBQTtBQUNOUSxjQUFBQSxJQURNLHlCQUNOQSxJQURNO0FBSWRDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBbUJGLElBQW5COztBQUpjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBKLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFTQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FwQkQ7O0dBQU1GOztLQUFBQTtBQXNCTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPLElBQU1GLFFBQVEsZ0ZBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ga0U7QUFDTjtBQUNVOzs7Ozs7Ozs7Ozs7Ozs7QUNGdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmVldC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2dyYXBocWwvcXVlcmllcy91c2VyLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9BcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2xpZW50LnRzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvUmVhY3ROYXRpdmVGaWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvZXh0cmFjdEZpbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvaXNFeHRyYWN0YWJsZUZpbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsLWhvb2tzL2VzL2dyYXBocWwtaG9va3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kZXF1YWwvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR0VUX1VTRVIgfSBmcm9tIFwiLi4vZ3JhcGhxbC9xdWVyaWVzL3VzZXJcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vc3RvcmUvY2xpZW50XCI7XHJcblxyXG50eXBlIEdyZWV0UHJvcHMgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgR3JlZXQgPSAocHJvcHM6IEdyZWV0UHJvcHMpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZ2V0VXNlcigpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICBxdWVyeTogR0VUX1VTRVIsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpO1xyXG4gICBcclxuXHJcblxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT4tLS08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyZWV0O1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX1VTRVI9YFxyXG5xdWVyeSBnZXRVc2VyIHtcclxuICAgIHVzZXJzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBBZ2VcclxuICAgIH1cclxuICB9YDsiLCJcclxuaW1wb3J0IEdyZWV0IGZyb20gXCIuLi9jb21wb25lbnRzL0dyZWV0XCI7XHJcblxyXG5jb25zdCBhcHAgPSAoKSAgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+QXBwIENhbGxpbmchISE8L2gxPlxyXG4gICAgICAgICAgICA8R3JlZXQgbmFtZT0gXCJCYXN1ZGViXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBSb3VudGVyIGZyb20gJy4vRGVtb0FwcC9Sb3V0aW5nRGVtby9Sb3V0aW5nJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEFwcCAgLz5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG4gIFxuXG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLWhvb2tzJ1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tICdzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13cydcclxuLy8gb3JcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC13cydcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHtcclxuICB1cmw6ICdodHRwczovL25ldy1wcm9qZWN0Lmhhc3VyYS5hcHAvdjEvZ3JhcGhxbCcsXHJcbiAgaGVhZGVyczp7XHJcbiAgICAgICd4LWhhc3VyYS1hZG1pbi1zZWNyZXQnOidxOHFaR3UyenJONFNkRDJJNTFrSnI0OXlpYUFrREFMQzBlZk85c1BhZTZlVTZMaWF5WG4zWjJnenY5UU02VDZ3J1xyXG4gIH0sXHJcbiAgLy8gc3Vic2NyaXB0aW9uQ2xpZW50OiBuZXcgU3Vic2NyaXB0aW9uQ2xpZW50KCd3czovL25ldy1wcm9qZWN0Lmhhc3VyYS5hcHAvdjEvZ3JhcGhxbCcsIHtcclxuICAvLyAgIC8qIGFkZGl0aW9uYWwgY29uZmlnIG9wdGlvbnMgKi9cclxuICAvLyB9KSxcclxuICAvLyBvclxyXG4gIC8qc3Vic2NyaXB0aW9uQ2xpZW50OiBjcmVhdGVDbGllbnQoe1xyXG4gICAgdXJsOiAnd3M6Ly9sb2NhbGhvc3Q6ODAwMC9ncmFwaHFsJ1xyXG4gICAgLyogYWRkaXRpb25hbCBjb25maWcgb3B0aW9uc1xyXG4gIH0pKi9cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlZCB0byBtYXJrIGFcbiAqIFtSZWFjdCBOYXRpdmUgYEZpbGVgIHN1YnN0aXR1dGVde0BsaW5rIFJlYWN0TmF0aXZlRmlsZVN1YnN0aXR1dGV9XG4gKiBpbiBhbiBvYmplY3QgdHJlZSBmb3IgW2BleHRyYWN0RmlsZXNgXXtAbGluayBleHRyYWN0RmlsZXN9LiBJdOKAmXMgdG9vIHJpc2t5IHRvXG4gKiBhc3N1bWUgYWxsIG9iamVjdHMgd2l0aCBgdXJpYCwgYHR5cGVgIGFuZCBgbmFtZWAgcHJvcGVydGllcyBhcmUgZmlsZXMgdG9cbiAqIGV4dHJhY3QuXG4gKiBAa2luZCBjbGFzc1xuICogQG5hbWUgUmVhY3ROYXRpdmVGaWxlXG4gKiBAcGFyYW0ge1JlYWN0TmF0aXZlRmlsZVN1YnN0aXR1dGV9IGZpbGUgQSBbUmVhY3QgTmF0aXZlXShodHRwczovL3JlYWN0bmF0aXZlLmRldikgW2BGaWxlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGUpIHN1YnN0aXR1dGUuXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5XYXlzIHRvIGBpbXBvcnRgLjwvY2FwdGlvbj5cbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBSZWFjdE5hdGl2ZUZpbGUgfSBmcm9tICdleHRyYWN0LWZpbGVzJztcbiAqIGBgYFxuICpcbiAqIGBgYGpzXG4gKiBpbXBvcnQgUmVhY3ROYXRpdmVGaWxlIGZyb20gJ2V4dHJhY3QtZmlsZXMvcHVibGljL1JlYWN0TmF0aXZlRmlsZS5qcyc7XG4gKiBgYGBcbiAqIEBleGFtcGxlIDxjYXB0aW9uPldheXMgdG8gYHJlcXVpcmVgLjwvY2FwdGlvbj5cbiAqIGBgYGpzXG4gKiBjb25zdCB7IFJlYWN0TmF0aXZlRmlsZSB9ID0gcmVxdWlyZSgnZXh0cmFjdC1maWxlcycpO1xuICogYGBgXG4gKlxuICogYGBganNcbiAqIGNvbnN0IFJlYWN0TmF0aXZlRmlsZSA9IHJlcXVpcmUoJ2V4dHJhY3QtZmlsZXMvcHVibGljL1JlYWN0TmF0aXZlRmlsZS5qcycpO1xuICogYGBgXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5BbiBleHRyYWN0YWJsZSBmaWxlIGluIFtSZWFjdCBOYXRpdmVdKGh0dHBzOi8vcmVhY3RuYXRpdmUuZGV2KS48L2NhcHRpb24+XG4gKiBgYGBqc1xuICogY29uc3QgZmlsZSA9IG5ldyBSZWFjdE5hdGl2ZUZpbGUoe1xuICogICB1cmk6IHVyaUZyb21DYW1lcmFSb2xsLFxuICogICBuYW1lOiAnYS5qcGcnLFxuICogICB0eXBlOiAnaW1hZ2UvanBlZycsXG4gKiB9KTtcbiAqIGBgYFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFJlYWN0TmF0aXZlRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHsgdXJpLCBuYW1lLCB0eXBlIH0pIHtcbiAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRJc0V4dHJhY3RhYmxlRmlsZSA9IHJlcXVpcmUoJy4vaXNFeHRyYWN0YWJsZUZpbGUuanMnKTtcblxuLyoqXG4gKiBDbG9uZXMgYSB2YWx1ZSwgcmVjdXJzaXZlbHkgZXh0cmFjdGluZ1xuICogW2BGaWxlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGUpLFxuICogW2BCbG9iYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Jsb2IpIGFuZFxuICogW2BSZWFjdE5hdGl2ZUZpbGVgXXtAbGluayBSZWFjdE5hdGl2ZUZpbGV9IGluc3RhbmNlcyB3aXRoIHRoZWlyXG4gKiBbb2JqZWN0IHBhdGhzXXtAbGluayBPYmplY3RQYXRofSwgcmVwbGFjaW5nIHRoZW0gd2l0aCBgbnVsbGAuXG4gKiBbYEZpbGVMaXN0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVsaXN0KSBpbnN0YW5jZXNcbiAqIGFyZSB0cmVhdGVkIGFzIFtgRmlsZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlKVxuICogaW5zdGFuY2UgYXJyYXlzLlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBuYW1lIGV4dHJhY3RGaWxlc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSAodHlwaWNhbGx5IGFuIG9iamVjdCB0cmVlKSB0byBleHRyYWN0IGZpbGVzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdFBhdGh9IFtwYXRoPScnXSBQcmVmaXggZm9yIG9iamVjdCBwYXRocyBmb3IgZXh0cmFjdGVkIGZpbGVzLlxuICogQHBhcmFtIHtFeHRyYWN0YWJsZUZpbGVNYXRjaGVyfSBbaXNFeHRyYWN0YWJsZUZpbGU9aXNFeHRyYWN0YWJsZUZpbGVdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGlkZW50aWZ5IGV4dHJhY3RhYmxlIGZpbGVzLlxuICogQHJldHVybnMge0V4dHJhY3RGaWxlc1Jlc3VsdH0gUmVzdWx0LlxuICogQGV4YW1wbGUgPGNhcHRpb24+V2F5cyB0byBgaW1wb3J0YC48L2NhcHRpb24+XG4gKiBgYGBqc1xuICogaW1wb3J0IHsgZXh0cmFjdEZpbGVzIH0gZnJvbSAnZXh0cmFjdC1maWxlcyc7XG4gKiBgYGBcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IGV4dHJhY3RGaWxlcyBmcm9tICdleHRyYWN0LWZpbGVzL3B1YmxpYy9leHRyYWN0RmlsZXMuanMnO1xuICogYGBgXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5XYXlzIHRvIGByZXF1aXJlYC48L2NhcHRpb24+XG4gKiBgYGBqc1xuICogY29uc3QgeyBleHRyYWN0RmlsZXMgfSA9IHJlcXVpcmUoJ2V4dHJhY3QtZmlsZXMnKTtcbiAqIGBgYFxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBleHRyYWN0RmlsZXMgPSByZXF1aXJlKCdleHRyYWN0LWZpbGVzL3B1YmxpYy9leHRyYWN0RmlsZXMuanMnKTtcbiAqIGBgYFxuICogQGV4YW1wbGUgPGNhcHRpb24+RXh0cmFjdCBmaWxlcyBmcm9tIGFuIG9iamVjdC48L2NhcHRpb24+XG4gKiBGb3IgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgZmlsZTEgPSBuZXcgRmlsZShbJzEnXSwgJzEudHh0JywgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gKiBjb25zdCBmaWxlMiA9IG5ldyBGaWxlKFsnMiddLCAnMi50eHQnLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTtcbiAqIGNvbnN0IHZhbHVlID0ge1xuICogICBhOiBmaWxlMSxcbiAqICAgYjogW2ZpbGUxLCBmaWxlMl0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IHsgY2xvbmUsIGZpbGVzIH0gPSBleHRyYWN0RmlsZXModmFsdWUsICdwcmVmaXgnKTtcbiAqIGBgYFxuICpcbiAqIGB2YWx1ZWAgcmVtYWlucyB0aGUgc2FtZS5cbiAqXG4gKiBgY2xvbmVgIGlzOlxuICpcbiAqIGBgYGpzb25cbiAqIHtcbiAqICAgXCJhXCI6IG51bGwsXG4gKiAgIFwiYlwiOiBbbnVsbCwgbnVsbF1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIGBmaWxlc2AgaXMgYSBbYE1hcGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcCkgaW5zdGFuY2UgY29udGFpbmluZzpcbiAqXG4gKiB8IEtleSAgICAgfCBWYWx1ZSAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgOi0tLS0tLSB8IDotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBgZmlsZTFgIHwgYFsncHJlZml4LmEnLCAncHJlZml4LmIuMCddYCB8XG4gKiB8IGBmaWxlMmAgfCBgWydwcmVmaXguYi4xJ11gICAgICAgICAgICAgIHxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRyYWN0RmlsZXMoXG4gIHZhbHVlLFxuICBwYXRoID0gJycsXG4gIGlzRXh0cmFjdGFibGVGaWxlID0gZGVmYXVsdElzRXh0cmFjdGFibGVGaWxlXG4pIHtcbiAgLy8gTWFwIG9mIGV4dHJhY3RlZCBmaWxlcyBhbmQgdGhlaXIgb2JqZWN0IHBhdGhzIHdpdGhpbiB0aGUgaW5wdXQgdmFsdWUuXG4gIGNvbnN0IGZpbGVzID0gbmV3IE1hcCgpO1xuXG4gIC8vIE1hcCBvZiBhcnJheXMgYW5kIG9iamVjdHMgcmVjdXJzZWQgd2l0aGluIHRoZSBpbnB1dCB2YWx1ZSBhbmQgdGhlaXIgY2xvbmVzLFxuICAvLyBmb3IgcmV1c2luZyBjbG9uZXMgb2YgdmFsdWVzIHRoYXQgYXJlIHJlZmVyZW5jZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZVxuICAvLyBpbnB1dCB2YWx1ZS5cbiAgY29uc3QgY2xvbmVzID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBjbG9uZXMgdGhlIHZhbHVlLCBleHRyYWN0aW5nIGZpbGVzLlxuICAgKiBAa2luZCBmdW5jdGlvblxuICAgKiBAbmFtZSBleHRyYWN0RmlsZXN+cmVjdXJzZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGV4dHJhY3QgZmlsZXMgZnJvbS5cbiAgICogQHBhcmFtIHtPYmplY3RQYXRofSBwYXRoIFByZWZpeCBmb3Igb2JqZWN0IHBhdGhzIGZvciBleHRyYWN0ZWQgZmlsZXMuXG4gICAqIEBwYXJhbSB7U2V0fSByZWN1cnNlZCBSZWN1cnNlZCBhcnJheXMgYW5kIG9iamVjdHMgZm9yIGF2b2lkaW5nIGluZmluaXRlIHJlY3Vyc2lvbiBvZiBjaXJjdWxhciByZWZlcmVuY2VzIHdpdGhpbiB0aGUgaW5wdXQgdmFsdWUuXG4gICAqIEByZXR1cm5zIHsqfSBDbG9uZSBvZiB0aGUgdmFsdWUgd2l0aCBmaWxlcyByZXBsYWNlZCB3aXRoIGBudWxsYC5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZnVuY3Rpb24gcmVjdXJzZSh2YWx1ZSwgcGF0aCwgcmVjdXJzZWQpIHtcbiAgICBsZXQgY2xvbmUgPSB2YWx1ZTtcblxuICAgIGlmIChpc0V4dHJhY3RhYmxlRmlsZSh2YWx1ZSkpIHtcbiAgICAgIGNsb25lID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlsZVBhdGhzID0gZmlsZXMuZ2V0KHZhbHVlKTtcblxuICAgICAgZmlsZVBhdGhzID8gZmlsZVBhdGhzLnB1c2gocGF0aCkgOiBmaWxlcy5zZXQodmFsdWUsIFtwYXRoXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzTGlzdCA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgICh0eXBlb2YgRmlsZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZUxpc3QpO1xuICAgICAgY29uc3QgaXNPYmplY3QgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuXG4gICAgICBpZiAoaXNMaXN0IHx8IGlzT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGhhc0Nsb25lID0gY2xvbmVzLmhhcyh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGhhc0Nsb25lKSBjbG9uZSA9IGNsb25lcy5nZXQodmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbG9uZSA9IGlzTGlzdCA/IFtdIDoge307XG5cbiAgICAgICAgICBjbG9uZXMuc2V0KHZhbHVlLCBjbG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlY3Vyc2VkLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCBwYXRoUHJlZml4ID0gcGF0aCA/IGAke3BhdGh9LmAgOiAnJztcbiAgICAgICAgICBjb25zdCByZWN1cnNlZERlZXBlciA9IG5ldyBTZXQocmVjdXJzZWQpLmFkZCh2YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoaXNMaXN0KSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbUNsb25lID0gcmVjdXJzZShcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIHBhdGhQcmVmaXggKyBpbmRleCsrLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2VkRGVlcGVyXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKCFoYXNDbG9uZSkgY2xvbmUucHVzaChpdGVtQ2xvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDbG9uZSA9IHJlY3Vyc2UoXG4gICAgICAgICAgICAgICAgdmFsdWVba2V5XSxcbiAgICAgICAgICAgICAgICBwYXRoUHJlZml4ICsga2V5LFxuICAgICAgICAgICAgICAgIHJlY3Vyc2VkRGVlcGVyXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKCFoYXNDbG9uZSkgY2xvbmVba2V5XSA9IHByb3BlcnR5Q2xvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb25lOiByZWN1cnNlKHZhbHVlLCBwYXRoLCBuZXcgU2V0KCkpLFxuICAgIGZpbGVzLFxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3ROYXRpdmVGaWxlID0gcmVxdWlyZSgnLi9SZWFjdE5hdGl2ZUZpbGUuanMnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpcyBhbiBbZXh0cmFjdGFibGUgZmlsZV17QGxpbmsgRXh0cmFjdGFibGVGaWxlfS5cbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAbmFtZSBpc0V4dHJhY3RhYmxlRmlsZVxuICogQHR5cGUge0V4dHJhY3RhYmxlRmlsZU1hdGNoZXJ9XG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IElzIHRoZSB2YWx1ZSBhbiBbZXh0cmFjdGFibGUgZmlsZV17QGxpbmsgRXh0cmFjdGFibGVGaWxlfS5cbiAqIEBleGFtcGxlIDxjYXB0aW9uPldheXMgdG8gYGltcG9ydGAuPC9jYXB0aW9uPlxuICogYGBganNcbiAqIGltcG9ydCB7IGlzRXh0cmFjdGFibGVGaWxlIH0gZnJvbSAnZXh0cmFjdC1maWxlcyc7XG4gKiBgYGBcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IGlzRXh0cmFjdGFibGVGaWxlIGZyb20gJ2V4dHJhY3QtZmlsZXMvcHVibGljL2lzRXh0cmFjdGFibGVGaWxlLmpzJztcbiAqIGBgYFxuICogQGV4YW1wbGUgPGNhcHRpb24+V2F5cyB0byBgcmVxdWlyZWAuPC9jYXB0aW9uPlxuICogYGBganNcbiAqIGNvbnN0IHsgaXNFeHRyYWN0YWJsZUZpbGUgfSA9IHJlcXVpcmUoJ2V4dHJhY3QtZmlsZXMnKTtcbiAqIGBgYFxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBpc0V4dHJhY3RhYmxlRmlsZSA9IHJlcXVpcmUoJ2V4dHJhY3QtZmlsZXMvcHVibGljL2lzRXh0cmFjdGFibGVGaWxlLmpzJyk7XG4gKiBgYGBcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0V4dHJhY3RhYmxlRmlsZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgICh0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgIHZhbHVlIGluc3RhbmNlb2YgUmVhY3ROYXRpdmVGaWxlXG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNFeHRyYWN0YWJsZUZpbGUsIGV4dHJhY3RGaWxlcyB9IGZyb20gJ2V4dHJhY3QtZmlsZXMnO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSAnZGVxdWFsJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBDbGllbnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuQ2xpZW50Q29udGV4dC5kaXNwbGF5TmFtZSA9ICdDbGllbnRDb250ZXh0JztcblxudmFyIGlzRXh0cmFjdGFibGVGaWxlRW5oYW5jZWQgPSBmdW5jdGlvbiBpc0V4dHJhY3RhYmxlRmlsZUVuaGFuY2VkKHZhbHVlKSB7XG4gIHJldHVybiBpc0V4dHJhY3RhYmxlRmlsZSh2YWx1ZSkgfHwgLy8gQ2hlY2sgaWYgc3RyZWFtXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvaXMtc3RyZWFtL2Jsb2IvMzc1MDUwNWIwNzI3ZjZkZjU0MzI0Nzg0ZmUzNjkzNjVlZjc4ODQxZS9pbmRleC5qcyNMM1xuICB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5waXBlID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGNhblVzZURPTSA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xufSk7XG5cbnZhciBHcmFwaFFMQ2xpZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR3JhcGhRTENsaWVudChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIGNvbmZpZ1xuICAgIGlmICghY29uZmlnLnVybCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcmFwaFFMQ2xpZW50OiBjb25maWcudXJsIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5mZXRjaCAmJiB0eXBlb2YgY29uZmlnLmZldGNoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dyYXBoUUxDbGllbnQ6IGNvbmZpZy5mZXRjaCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoKGNhblVzZURPTSgpIHx8IGNvbmZpZy5zc3JNb2RlKSAmJiAhY29uZmlnLmZldGNoICYmICFmZXRjaCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcmFwaFFMQ2xpZW50OiBmZXRjaCBtdXN0IGJlIHBvbHlmaWxsZWQgb3IgcGFzc2VkIGluIG5ldyBHcmFwaFFMQ2xpZW50KHsgZmV0Y2ggfSknKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNzck1vZGUgJiYgIWNvbmZpZy5jYWNoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcmFwaFFMQ2xpZW50OiBjb25maWcuY2FjaGUgaXMgcmVxdWlyZWQgd2hlbiBpbiBzc3JNb2RlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgICB0aGlzLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLnNzck1vZGUgPSBjb25maWcuc3NyTW9kZTtcbiAgICB0aGlzLnNzclByb21pc2VzID0gW107XG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIHRoaXMuZmV0Y2ggPSBjb25maWcuZmV0Y2ggfHwgdHlwZW9mIGZldGNoICE9PSAndW5kZWZpbmVkJyAmJiBmZXRjaCAmJiBmZXRjaC5iaW5kKCk7XG4gICAgdGhpcy5mZXRjaE9wdGlvbnMgPSBjb25maWcuZmV0Y2hPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuRm9ybURhdGEgPSBjb25maWcuRm9ybURhdGEgfHwgKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBGb3JtRGF0YSA6IHVuZGVmaW5lZCk7XG4gICAgdGhpcy5sb2dFcnJvcnMgPSBjb25maWcubG9nRXJyb3JzICE9PSB1bmRlZmluZWQgPyBjb25maWcubG9nRXJyb3JzIDogdHJ1ZTtcbiAgICB0aGlzLm9uRXJyb3IgPSBjb25maWcub25FcnJvcjtcbiAgICB0aGlzLnVzZUdFVEZvclF1ZXJpZXMgPSBjb25maWcudXNlR0VURm9yUXVlcmllcyA9PT0gdHJ1ZTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbkNsaWVudCA9IGNvbmZpZy5zdWJzY3JpcHRpb25DbGllbnQ7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gR3JhcGhRTENsaWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldEhlYWRlciA9IGZ1bmN0aW9uIHNldEhlYWRlcihrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5oZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2V0SGVhZGVycyA9IGZ1bmN0aW9uIHNldEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUhlYWRlciA9IGZ1bmN0aW9uIHJlbW92ZUhlYWRlcihrZXkpIHtcbiAgICBkZWxldGUgdGhpcy5oZWFkZXJzW2tleV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICA7XG5cbiAgX3Byb3RvLmxvZ0Vycm9yUmVzdWx0ID0gZnVuY3Rpb24gbG9nRXJyb3JSZXN1bHQoX3JlZikge1xuICAgIHZhciByZXN1bHQgPSBfcmVmLnJlc3VsdCxcbiAgICAgICAgb3BlcmF0aW9uID0gX3JlZi5vcGVyYXRpb247XG4gICAgY29uc29sZS5lcnJvcignR3JhcGhRTCBIb29rcyBFcnJvcicpO1xuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJy0tLT4gRnVsbCBFcnJvciBEZXRhaWxzJyk7XG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnT3BlcmF0aW9uOicpO1xuICAgIGNvbnNvbGUubG9nKG9wZXJhdGlvbik7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHZhciBlcnJvciA9IHJlc3VsdC5lcnJvcjtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLmZldGNoRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnRkVUQ0ggRVJST1I6Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmZldGNoRXJyb3IpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvci5odHRwRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnSFRUUCBFUlJPUjonKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IuaHR0cEVycm9yKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiBlcnJvci5ncmFwaFFMRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnR1JBUEhRTCBFUlJPUjonKTtcbiAgICAgICAgZXJyb3IuZ3JhcGhRTEVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIDtcblxuICBfcHJvdG8uZ2VuZXJhdGVSZXN1bHQgPSBmdW5jdGlvbiBnZW5lcmF0ZVJlc3VsdChfcmVmMikge1xuICAgIHZhciBmZXRjaEVycm9yID0gX3JlZjIuZmV0Y2hFcnJvcixcbiAgICAgICAgaHR0cEVycm9yID0gX3JlZjIuaHR0cEVycm9yLFxuICAgICAgICBncmFwaFFMRXJyb3JzID0gX3JlZjIuZ3JhcGhRTEVycm9ycyxcbiAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGE7XG4gICAgdmFyIGVycm9yRm91bmQgPSAhIShncmFwaFFMRXJyb3JzICYmIGdyYXBoUUxFcnJvcnMubGVuZ3RoID4gMCB8fCBmZXRjaEVycm9yIHx8IGh0dHBFcnJvcik7XG4gICAgcmV0dXJuICFlcnJvckZvdW5kID8ge1xuICAgICAgZGF0YTogZGF0YVxuICAgIH0gOiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgZmV0Y2hFcnJvcjogZmV0Y2hFcnJvcixcbiAgICAgICAgaHR0cEVycm9yOiBodHRwRXJyb3IsXG4gICAgICAgIGdyYXBoUUxFcnJvcnM6IGdyYXBoUUxFcnJvcnNcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRDYWNoZUtleSA9IGZ1bmN0aW9uIGdldENhY2hlS2V5KG9wZXJhdGlvbiwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgZmV0Y2hPcHRpb25zID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHRoaXMuZmV0Y2hPcHRpb25zKSwgb3B0aW9ucy5mZXRjaE9wdGlvbnNPdmVycmlkZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgZmV0Y2hPcHRpb25zOiBmZXRjaE9wdGlvbnNcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRDYWNoZSA9IGZ1bmN0aW9uIGdldENhY2hlKGNhY2hlS2V5KSB7XG4gICAgdmFyIGNhY2hlSGl0ID0gdGhpcy5jYWNoZSA/IHRoaXMuY2FjaGUuZ2V0KGNhY2hlS2V5KSA6IG51bGw7XG5cbiAgICBpZiAoY2FjaGVIaXQpIHtcbiAgICAgIHJldHVybiBjYWNoZUhpdDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhdmVDYWNoZSA9IGZ1bmN0aW9uIHNhdmVDYWNoZShjYWNoZUtleSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5jYWNoZSkge1xuICAgICAgdGhpcy5jYWNoZS5zZXQoY2FjaGVLZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gLy8gS3Vkb3MgdG8gSmF5ZGVuIFNlcmljIChAamF5ZGVuc2VyaWMpIGZvciB0aGlzIHBpZWNlIG9mIGNvZGUuXG4gIC8vIFNlZSBvcmlnaW5hbCBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXlkZW5zZXJpYy9ncmFwaHFsLXJlYWN0L2Jsb2IvODJkNTc2YjVmZTY2NjRjNGEwMWNkOTI4ZDc5ZjMzZGRjM2Y3YmJmZC9zcmMvdW5pdmVyc2FsL2dyYXBocWxGZXRjaE9wdGlvbnMubWpzLlxuICA7XG5cbiAgX3Byb3RvLmdldEZldGNoT3B0aW9ucyA9IGZ1bmN0aW9uIGdldEZldGNoT3B0aW9ucyhvcGVyYXRpb24sIGZldGNoT3B0aW9uc092ZXJyaWRlcykge1xuICAgIGlmIChmZXRjaE9wdGlvbnNPdmVycmlkZXMgPT09IHZvaWQgMCkge1xuICAgICAgZmV0Y2hPcHRpb25zT3ZlcnJpZGVzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGZldGNoT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogX29iamVjdFNwcmVhZDIoe30sIHRoaXMuaGVhZGVycylcbiAgICB9LCB0aGlzLmZldGNoT3B0aW9ucyksIGZldGNoT3B0aW9uc092ZXJyaWRlcyk7XG5cbiAgICBpZiAoZmV0Y2hPcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIHJldHVybiBmZXRjaE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIF9leHRyYWN0RmlsZXMgPSBleHRyYWN0RmlsZXMob3BlcmF0aW9uLCAnJywgaXNFeHRyYWN0YWJsZUZpbGVFbmhhbmNlZCksXG4gICAgICAgIGNsb25lID0gX2V4dHJhY3RGaWxlcy5jbG9uZSxcbiAgICAgICAgZmlsZXMgPSBfZXh0cmFjdEZpbGVzLmZpbGVzO1xuXG4gICAgdmFyIG9wZXJhdGlvbkpTT04gPSBKU09OLnN0cmluZ2lmeShjbG9uZSk7XG5cbiAgICBpZiAoZmlsZXMuc2l6ZSkge1xuICAgICAgLy8gU2VlIHRoZSBHcmFwaFFMIG11bHRpcGFydCByZXF1ZXN0IHNwZWM6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vamF5ZGVuc2VyaWMvZ3JhcGhxbC1tdWx0aXBhcnQtcmVxdWVzdC1zcGVjXG4gICAgICBpZiAoIXRoaXMuRm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcmFwaFFMQ2xpZW50OiBGb3JtRGF0YSBtdXN0IGJlIHBvbHlmaWxsZWQgb3IgcGFzc2VkIGluIG5ldyBHcmFwaFFMQ2xpZW50KHsgRm9ybURhdGEgfSknKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm0gPSBuZXcgdGhpcy5Gb3JtRGF0YSgpO1xuICAgICAgZm9ybS5hcHBlbmQoJ29wZXJhdGlvbnMnLCBvcGVyYXRpb25KU09OKTtcbiAgICAgIHZhciBtYXAgPSB7fTtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKHBhdGhzKSB7XG4gICAgICAgIG1hcFsrK2ldID0gcGF0aHM7XG4gICAgICB9KTtcbiAgICAgIGZvcm0uYXBwZW5kKCdtYXAnLCBKU09OLnN0cmluZ2lmeShtYXApKTtcbiAgICAgIGkgPSAwO1xuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAocGF0aHMsIGZpbGUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJcIiArICsraSwgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIH0pO1xuICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IG9wZXJhdGlvbkpTT047XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoT3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8ucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3Qob3BlcmF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gdGhpcy51cmw7XG4gICAgdmFyIGZldGNoT3B0aW9ucyA9IHRoaXMuZ2V0RmV0Y2hPcHRpb25zKG9wZXJhdGlvbiwgb3B0aW9ucy5mZXRjaE9wdGlvbnNPdmVycmlkZXMpO1xuXG4gICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICB2YXIgcGFyYW1zUXVlcnlTdHJpbmcgPSBPYmplY3QuZW50cmllcyhvcGVyYXRpb24pLmZpbHRlcihmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIHYgPSBfcmVmM1sxXTtcbiAgICAgICAgcmV0dXJuICEhdjtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgdmFyIGsgPSBfcmVmNFswXSxcbiAgICAgICAgICAgIHYgPSBfcmVmNFsxXTtcblxuICAgICAgICBpZiAoayA9PT0gJ3ZhcmlhYmxlcycpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gayArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgfSkuam9pbignJicpO1xuICAgICAgdXJsID0gdXJsICsgJz8nICsgcGFyYW1zUXVlcnlTdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmV0Y2godXJsLCB0aGlzLmdldEZldGNoT3B0aW9ucyhvcGVyYXRpb24sIG9wdGlvbnMuZmV0Y2hPcHRpb25zT3ZlcnJpZGVzKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmdlbmVyYXRlUmVzdWx0KHtcbiAgICAgICAgICAgIGh0dHBFcnJvcjoge1xuICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgICB2YXIgZXJyb3JzID0gX3JlZjUuZXJyb3JzLFxuICAgICAgICAgICAgICBkYXRhID0gX3JlZjUuZGF0YTtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2VuZXJhdGVSZXN1bHQoe1xuICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZW5lcmF0ZVJlc3VsdCh7XG4gICAgICAgIGZldGNoRXJyb3I6IGVycm9yXG4gICAgICB9KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgaWYgKF90aGlzLmxvZ0Vycm9ycykge1xuICAgICAgICAgIF90aGlzLmxvZ0Vycm9yUmVzdWx0KHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5vbkVycm9yKSB7XG4gICAgICAgICAgX3RoaXMub25FcnJvcih7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbkNsaWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTdWJzY3JpcHRpb25DbGllbnQhIFBsZWFzZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zdWJzY3JpcHRpb25DbGllbnQuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBncmFwaHFsLXdzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShzaW5rKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBfdGhpczIuc3Vic2NyaXB0aW9uQ2xpZW50LnN1YnNjcmliZShvcGVyYXRpb24sIHNpbmspXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vic2NyaXB0aW9ucy10cmFuc3BvcnQtd3NcbiAgICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbkNsaWVudC5yZXF1ZXN0KG9wZXJhdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBHcmFwaFFMQ2xpZW50O1xufSgpO1xuXG52YXIgYWN0aW9uVHlwZXMgPSB7XG4gIFJFU0VUX1NUQVRFOiAnUkVTRVRfU1RBVEUnLFxuICBMT0FESU5HOiAnTE9BRElORycsXG4gIENBQ0hFX0hJVDogJ0NBQ0hFX0hJVCcsXG4gIFJFUVVFU1RfUkVTVUxUOiAnUkVRVUVTVF9SRVNVTFQnXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVRfU1RBVEU6XG4gICAgICByZXR1cm4gYWN0aW9uLmluaXRpYWxTdGF0ZTtcblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRElORzpcbiAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBhY3Rpb24gcmVzdWx0ZWQgaW4gYW4gZXJyb3IgLSByZWZldGNoIHNob3VsZCBjbGVhciBhbnkgZXJyb3JzXG4gICAgICBpZiAoc3RhdGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBhY3Rpb24uaW5pdGlhbFN0YXRlKSwge30sIHtcbiAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTsgLy8gc2F2ZXMgYSByZW5kZXIgY3ljbGUgYXMgc3RhdGUgaXMgdGhlIHNhbWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5DQUNIRV9ISVQ6XG4gICAgICBpZiAoc3RhdGUuY2FjaGVIaXQgJiYgIWFjdGlvbi5yZXNldFN0YXRlKSB7XG4gICAgICAgIC8vIHdlIGNhbiBiZSBzdXJlIHRoaXMgaXMgdGhlIHNhbWUgY2FjaGVLZXkgaGl0XG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgZGlzcGF0Y2ggUkVTRVRfU1RBVEUgaWYgaXQgY2hhbmdlc1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgYWN0aW9uLnJlc3VsdCksIHt9LCB7XG4gICAgICAgIGNhY2hlSGl0OiB0cnVlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFUVVFU1RfUkVTVUxUOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBhY3Rpb24ucmVzdWx0KSwge30sIHtcbiAgICAgICAgZGF0YTogc3RhdGUuZGF0YSAmJiBhY3Rpb24ucmVzdWx0LmRhdGEgJiYgYWN0aW9uLnVwZGF0ZURhdGEgPyBhY3Rpb24udXBkYXRlRGF0YShzdGF0ZS5kYXRhLCBhY3Rpb24ucmVzdWx0LmRhdGEpIDogYWN0aW9uLnJlc3VsdC5kYXRhLFxuICAgICAgICBjYWNoZUhpdDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlRGVlcENvbXBhcmVDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgaWYgKCFkZXF1YWwoZGVwcywgcmVmLmN1cnJlbnQpKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBkZXBzO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGNhbGxiYWNrLCByZWYuY3VycmVudCk7XG59XG4vKlxuICBvcHRpb25zIGluY2x1ZGU6XG5cbiAgb3B0cy52YXJpYWJsZXM6IE9iamVjdFxuICBvcHRzLm9wZXJhdGlvbk5hbWU6IFN0cmluZ1xuICBvcHRzLmZldGNoT3B0aW9uc092ZXJyaWRlczogT2JqZWN0XG4gIG9wdHMuc2tpcENhY2hlOiBCb29sZWFuXG4qL1xuXG5cbmZ1bmN0aW9uIHVzZUNsaWVudFJlcXVlc3QocXVlcnksIGluaXRpYWxPcHRzKSB7XG4gIGlmIChpbml0aWFsT3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdGlhbE9wdHMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcXVlcnkgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHF1ZXJ5IG11c3QgYmUgYSBzdHJpbmcuIElmIHlvdSBhcmUgdXNpbmcgdGhlIGBncWxgIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSBncmFwaHFsLXRhZywgcmVtb3ZlIGl0IGZyb20geW91ciBxdWVyeS4nKTtcbiAgfVxuXG4gIHZhciBjb250ZXh0Q2xpZW50ID0gUmVhY3QudXNlQ29udGV4dChDbGllbnRDb250ZXh0KTtcbiAgdmFyIGNsaWVudCA9IGluaXRpYWxPcHRzLmNsaWVudCB8fCBjb250ZXh0Q2xpZW50O1xuICB2YXIgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICB2YXIgYWN0aXZlQ2FjaGVLZXkgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBvcGVyYXRpb24gPSB7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHZhcmlhYmxlczogaW5pdGlhbE9wdHMudmFyaWFibGVzLFxuICAgIG9wZXJhdGlvbk5hbWU6IGluaXRpYWxPcHRzLm9wZXJhdGlvbk5hbWUsXG4gICAgcGVyc2lzdGVkOiBpbml0aWFsT3B0cy5wZXJzaXN0ZWRcbiAgfTtcblxuICBpZiAoaW5pdGlhbE9wdHMucGVyc2lzdGVkIHx8IGNsaWVudC51c2VHRVRGb3JRdWVyaWVzICYmICFpbml0aWFsT3B0cy5pc011dGF0aW9uKSB7XG4gICAgaW5pdGlhbE9wdHMuZmV0Y2hPcHRpb25zT3ZlcnJpZGVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGluaXRpYWxPcHRzLmZldGNoT3B0aW9uc092ZXJyaWRlcyksIHt9LCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2FjaGVLZXkgPSBjbGllbnQuZ2V0Q2FjaGVLZXkob3BlcmF0aW9uLCBpbml0aWFsT3B0cyk7XG4gIHZhciBpc0RlZmVycmVkID0gaW5pdGlhbE9wdHMuaXNNdXRhdGlvbiB8fCBpbml0aWFsT3B0cy5pc01hbnVhbDtcbiAgdmFyIGluaXRpYWxDYWNoZUhpdCA9IGluaXRpYWxPcHRzLnNraXBDYWNoZSB8fCAhY2xpZW50LmNhY2hlID8gbnVsbCA6IGNsaWVudC5jYWNoZS5nZXQoY2FjaGVLZXkpO1xuXG4gIHZhciBpbml0aWFsU3RhdGUgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgaW5pdGlhbENhY2hlSGl0KSwge30sIHtcbiAgICBjYWNoZUhpdDogISFpbml0aWFsQ2FjaGVIaXQsXG4gICAgbG9hZGluZzogaXNEZWZlcnJlZCA/IGZhbHNlIDogIWluaXRpYWxDYWNoZUhpdFxuICB9KTtcblxuICB2YXIgX1JlYWN0JHVzZVJlZHVjZXIgPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSksXG4gICAgICBzdGF0ZSA9IF9SZWFjdCR1c2VSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfUmVhY3QkdXNlUmVkdWNlclsxXTsgLy8gTk9URTogc3RhdGUgZnJvbSB1c2VSZWR1Y2VyIGlzIG9ubHkgaW5pdGlhbFN0YXRlIG9uIHRoZSBmaXJzdCByZW5kZXJcbiAgLy8gaW4gc3Vic2VxdWVudCByZW5kZXJzIHRoZSBvcGVyYXRpb24gY291bGQgaGF2ZSBjaGFuZ2VkXG4gIC8vIGlmIHNvIHRoZSBzdGF0ZSB3b3VsZCBiZSBpbnZhbGlkLCB0aGlzIGVmZmVjdCBlbnN1cmVzIHdlIHJlc2V0IGl0IGJhY2tcblxuXG4gIHZhciBzdHJpbmdpZmllZENhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkoY2FjaGVLZXkpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW5pdGlhbE9wdHMudXBkYXRlRGF0YSkge1xuICAgICAgLy8gaWYgdXNpbmcgdXBkYXRlRGF0YSB3ZSBjYW4gYXNzdW1lIHRoYXQgdGhlIGNvbnN1bWVyIGNhcmVzIGFib3V0IHRoZSBwcmV2aW91cyBkYXRhXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUX1NUQVRFLFxuICAgICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc3RyaW5naWZpZWRDYWNoZUtleV0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gYXJndW1lbnRzIHRvIGZldGNoRGF0YSBvdmVycmlkZSB0aGUgdXNlQ2xpZW50UmVxdWVzdCBhcmd1bWVudHNcblxuICB2YXIgZmV0Y2hEYXRhID0gdXNlRGVlcENvbXBhcmVDYWxsYmFjayhmdW5jdGlvbiAobmV3T3B0cykge1xuICAgIGlmICghaXNNb3VudGVkLmN1cnJlbnQpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIHZhciByZXZpc2VkT3B0cyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBpbml0aWFsT3B0cyksIG5ld09wdHMpO1xuXG4gICAgdmFyIHJldmlzZWRPcGVyYXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgb3BlcmF0aW9uKSwge30sIHtcbiAgICAgIHZhcmlhYmxlczogcmV2aXNlZE9wdHMudmFyaWFibGVzLFxuICAgICAgb3BlcmF0aW9uTmFtZTogcmV2aXNlZE9wdHMub3BlcmF0aW9uTmFtZVxuICAgIH0pO1xuXG4gICAgdmFyIHJldmlzZWRDYWNoZUtleSA9IGNsaWVudC5nZXRDYWNoZUtleShyZXZpc2VkT3BlcmF0aW9uLCByZXZpc2VkT3B0cyk7IC8vIE5PVEU6IFRoZXJlIGlzIGEgcG9zc2liaWxpdHkgb2YgYSByYWNlIGNvbmRpdGlvbiB3aGVyZWJ5XG4gICAgLy8gdGhlIHNlY29uZCBxdWVyeSBjb3VsZCBmaW5pc2ggYmVmb3JlIHRoZSBmaXJzdCBvbmUsIGRpc3BhdGNoaW5nIGFuIG9sZCByZXN1bHRcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lYXJmb3JtL2dyYXBocWwtaG9va3MvaXNzdWVzLzE1MFxuXG4gICAgYWN0aXZlQ2FjaGVLZXkuY3VycmVudCA9IHJldmlzZWRDYWNoZUtleTtcbiAgICB2YXIgY2FjaGVIaXQgPSByZXZpc2VkT3B0cy5za2lwQ2FjaGUgPyBudWxsIDogY2xpZW50LmdldENhY2hlKHJldmlzZWRDYWNoZUtleSk7XG5cbiAgICBpZiAoY2FjaGVIaXQpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuQ0FDSEVfSElULFxuICAgICAgICByZXN1bHQ6IGNhY2hlSGl0LFxuICAgICAgICByZXNldFN0YXRlOiBzdHJpbmdpZmllZENhY2hlS2V5ICE9PSBKU09OLnN0cmluZ2lmeShzdGF0ZS5jYWNoZUtleSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZUhpdCk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuTE9BRElORyxcbiAgICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsaWVudC5yZXF1ZXN0KHJldmlzZWRPcGVyYXRpb24sIHJldmlzZWRPcHRzKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGlmIChyZXZpc2VkT3B0cy51cGRhdGVEYXRhICYmIHR5cGVvZiByZXZpc2VkT3B0cy51cGRhdGVEYXRhICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9ucy51cGRhdGVEYXRhIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aW9uUmVzdWx0ID0gX29iamVjdFNwcmVhZDIoe30sIHJlc3VsdCk7XG5cbiAgICAgIGlmIChyZXZpc2VkT3B0cy51c2VDYWNoZSkge1xuICAgICAgICBhY3Rpb25SZXN1bHQudXNlQ2FjaGUgPSB0cnVlO1xuICAgICAgICBhY3Rpb25SZXN1bHQuY2FjaGVLZXkgPSByZXZpc2VkQ2FjaGVLZXk7XG5cbiAgICAgICAgaWYgKGNsaWVudC5zc3JNb2RlKSB7XG4gICAgICAgICAgdmFyIGNhY2hlVmFsdWUgPSB7XG4gICAgICAgICAgICBlcnJvcjogYWN0aW9uUmVzdWx0LmVycm9yLFxuICAgICAgICAgICAgZGF0YTogcmV2aXNlZE9wdHMudXBkYXRlRGF0YSA/IHJldmlzZWRPcHRzLnVwZGF0ZURhdGEoc3RhdGUuZGF0YSwgYWN0aW9uUmVzdWx0LmRhdGEpIDogYWN0aW9uUmVzdWx0LmRhdGFcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNsaWVudC5zYXZlQ2FjaGUocmV2aXNlZENhY2hlS2V5LCBjYWNoZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQgJiYgcmV2aXNlZENhY2hlS2V5ID09PSBhY3RpdmVDYWNoZUtleS5jdXJyZW50KSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5SRVFVRVNUX1JFU1VMVCxcbiAgICAgICAgICB1cGRhdGVEYXRhOiByZXZpc2VkT3B0cy51cGRhdGVEYXRhLFxuICAgICAgICAgIHJlc3VsdDogYWN0aW9uUmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LCBbY2xpZW50LCBpbml0aWFsT3B0cywgb3BlcmF0aW9uXSk7IC8vIFdlIHBlcmZvcm0gY2FjaGluZyBhZnRlciByZWR1Y2VyIHVwZGF0ZVxuICAvLyBUbyBpbmNsdWRlIHRoZSBvdXRjb21lIG9mIHVwZGF0ZURhdGFcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZS51c2VDYWNoZSkge1xuICAgICAgY2xpZW50LnNhdmVDYWNoZShzdGF0ZS5jYWNoZUtleSwgc3RhdGUpO1xuICAgIH1cbiAgfSwgW2NsaWVudCwgc3RhdGVdKTtcblxuICB2YXIgcmVzZXQgPSBmdW5jdGlvbiByZXNldChkZXNpcmVkU3RhdGUpIHtcbiAgICBpZiAoZGVzaXJlZFN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIGRlc2lyZWRTdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVF9TVEFURSxcbiAgICAgIGluaXRpYWxTdGF0ZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGluaXRpYWxTdGF0ZSksIGRlc2lyZWRTdGF0ZSlcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gW2ZldGNoRGF0YSwgc3RhdGUsIHJlc2V0XTtcbn1cblxudmFyIGRlZmF1bHRPcHRzID0ge1xuICB1c2VDYWNoZTogdHJ1ZSxcbiAgc2tpcDogZmFsc2UsXG4gIHRocm93RXJyb3JzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gdXNlUXVlcnkocXVlcnksIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIHZhciBhbGxPcHRzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRlZmF1bHRPcHRzKSwgb3B0cyk7XG5cbiAgdmFyIGNvbnRleHRDbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KENsaWVudENvbnRleHQpO1xuICB2YXIgY2xpZW50ID0gb3B0cy5jbGllbnQgfHwgY29udGV4dENsaWVudDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgY2FsbGVkRHVyaW5nU1NSID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0Q2FsbGVkRHVyaW5nU1NSID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfdXNlQ2xpZW50UmVxdWVzdCA9IHVzZUNsaWVudFJlcXVlc3QocXVlcnksIGFsbE9wdHMpLFxuICAgICAgcXVlcnlSZXEgPSBfdXNlQ2xpZW50UmVxdWVzdFswXSxcbiAgICAgIHN0YXRlID0gX3VzZUNsaWVudFJlcXVlc3RbMV07XG5cbiAgaWYgKGNsaWVudC5zc3JNb2RlICYmIG9wdHMuc3NyICE9PSBmYWxzZSAmJiAhY2FsbGVkRHVyaW5nU1NSICYmICFvcHRzLnNraXBDYWNoZSAmJiAhb3B0cy5za2lwKSB7XG4gICAgLy8gcmVzdWx0IG1heSBhbHJlYWR5IGJlIGluIHRoZSBjYWNoZSBmcm9tIHByZXZpb3VzIFNTUiBpdGVyYXRpb25zXG4gICAgaWYgKCFzdGF0ZS5kYXRhICYmICFzdGF0ZS5lcnJvcikge1xuICAgICAgdmFyIHAgPSBxdWVyeVJlcSgpO1xuICAgICAgY2xpZW50LnNzclByb21pc2VzLnB1c2gocCk7XG4gICAgfVxuXG4gICAgc2V0Q2FsbGVkRHVyaW5nU1NSKHRydWUpO1xuICB9XG5cbiAgdmFyIHN0cmluZ2lmaWVkQWxsT3B0cyA9IEpTT04uc3RyaW5naWZ5KGFsbE9wdHMpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhbGxPcHRzLnNraXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBxdWVyeVJlcSgpO1xuICB9LCBbcXVlcnksIHN0cmluZ2lmaWVkQWxsT3B0c10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0YXRlLmVycm9yICYmIGFsbE9wdHMudGhyb3dFcnJvcnMpIHtcbiAgICAgIHRocm93IHN0YXRlLmVycm9yO1xuICAgIH1cbiAgfSwgW3N0YXRlLmVycm9yLCBhbGxPcHRzLnRocm93RXJyb3JzXSk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3RhdGUpLCB7fSwge1xuICAgIHJlZmV0Y2g6IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHF1ZXJ5UmVxKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgc2tpcENhY2hlOiB0cnVlLFxuICAgICAgICAvLyBkb24ndCBjYWxsIHRoZSB1cGRhdGVEYXRhIHRoYXQgaGFzIGJlZW4gcGFzc2VkIGludG8gdXNlUXVlcnkgaGVyZVxuICAgICAgICAvLyByZXNldCB0byB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgcmV0dXJuaW5nIHRoZSByYXcgcXVlcnkgcmVzdWx0XG4gICAgICAgIC8vIHRoaXMgY2FuIGJlIG92ZXJyaWRkZW4gaW4gcmVmZXRjaCBvcHRpb25zXG4gICAgICAgIHVwZGF0ZURhdGE6IGZ1bmN0aW9uIHVwZGF0ZURhdGEoXywgZGF0YSkge1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKSk7XG4gICAgfSwgW3F1ZXJ5UmVxXSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tSZWYgPSB1c2VSZWYoY2FsbGJhY2spO1xuICBjYWxsYmFja1JlZi5jdXJyZW50ID0gY2FsbGJhY2s7XG4gIHZhciBjb250ZXh0Q2xpZW50ID0gdXNlQ29udGV4dChDbGllbnRDb250ZXh0KTtcbiAgdmFyIGNsaWVudCA9IG9wdGlvbnMuY2xpZW50IHx8IGNvbnRleHRDbGllbnQ7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIHF1ZXJ5OiBvcHRpb25zLnF1ZXJ5LFxuICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXNcbiAgfTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IGNsaWVudC5jcmVhdGVTdWJzY3JpcHRpb24ocmVxdWVzdCk7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQocmVzdWx0KSB7XG4gICAgICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQocmVzdWx0KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICAgIC8vIFRPRE8tZGItMjEwNjExIGVycm9ycyBhcmUgaW1wb3J0YW50LCB3aHkgbm90IGhhbmRsZSB0aGVtP1xuICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLy8gdGhlIGVmZmVjdCBzaG91bGQgYmUgcnVuIHdoZW4gY29tcG9uZW50IGlzIG1vdW50ZWQgYW5kIHVubW91bnRlZFxufVxuXG52YXIgdXNlTWFudWFsUXVlcnkgPSBmdW5jdGlvbiB1c2VNYW51YWxRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gdXNlQ2xpZW50UmVxdWVzdChxdWVyeSwgX29iamVjdFNwcmVhZDIoe1xuICAgIHVzZUNhY2hlOiB0cnVlLFxuICAgIGlzTWFudWFsOiB0cnVlXG4gIH0sIG9wdGlvbnMpKTtcbn07XG5cbnZhciB1c2VNdXRhdGlvbiA9IGZ1bmN0aW9uIHVzZU11dGF0aW9uKHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiB1c2VDbGllbnRSZXF1ZXN0KHF1ZXJ5LCBfb2JqZWN0U3ByZWFkMih7XG4gICAgaXNNdXRhdGlvbjogdHJ1ZVxuICB9LCBvcHRpb25zKSk7XG59O1xuXG5leHBvcnQgeyBDbGllbnRDb250ZXh0LCBHcmFwaFFMQ2xpZW50LCB1c2VDbGllbnRSZXF1ZXN0LCB1c2VNYW51YWxRdWVyeSwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VTdWJzY3JpcHRpb24gfTtcbiIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBmaW5kKGl0ZXIsIHRhciwga2V5KSB7XG5cdGZvciAoa2V5IG9mIGl0ZXIua2V5cygpKSB7XG5cdFx0aWYgKGRlcXVhbChrZXksIHRhcikpIHJldHVybiBrZXk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuLCB0bXA7XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gU2V0KSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW47XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYmFyLmhhcyh0bXApKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gTWFwKSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW5bMF07XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGVxdWFsKGxlblsxXSwgYmFyLmdldCh0bXApKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG5cdFx0XHRmb28gPSBuZXcgVWludDhBcnJheShmb28pO1xuXHRcdFx0YmFyID0gbmV3IFVpbnQ4QXJyYXkoYmFyKTtcblx0XHR9IGVsc2UgaWYgKGN0b3IgPT09IERhdGFWaWV3KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb28uZ2V0SW50OChsZW4pID09PSBiYXIuZ2V0SW50OChsZW4pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZm9vKSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vW2xlbl0gPT09IGJhcltsZW5dKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0TmF0aXZlRmlsZSB9IGZyb20gJy4vUmVhY3ROYXRpdmVGaWxlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXh0cmFjdEZpbGVzIH0gZnJvbSAnLi9leHRyYWN0RmlsZXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0V4dHJhY3RhYmxlRmlsZSB9IGZyb20gJy4vaXNFeHRyYWN0YWJsZUZpbGUuanMnO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiR0VUX1VTRVIiLCJjbGllbnQiLCJHcmVldCIsInByb3BzIiwiZ2V0VXNlciIsImUiLCJyZXF1ZXN0IiwicXVlcnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFwcCIsIkFwcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiR3JhcGhRTENsaWVudCIsInVybCIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9