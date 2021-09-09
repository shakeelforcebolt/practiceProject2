(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Greet.tsx":
/*!******************************!*\
  !*** ./components/Greet.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_queries_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries/user */ "./graphql/queries/user.ts");
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/client */ "./store/client.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\components\\Greet.tsx";





const Greet = props => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    try {
      getUser();
    } catch (e) {}
  }, []);

  const getUser = async () => {
    const {
      data
    } = await _store_client__WEBPACK_IMPORTED_MODULE_2__.default.request({
      query: _graphql_queries_user__WEBPACK_IMPORTED_MODULE_1__.GET_USER
    });
    console.log("data", data);
  };

  return (
    /*#__PURE__*/

    /*const [updateUser] = useMutation(UPDATE_USER_MUTATION)
        const [newName, setNewName] = useState(id)*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined)
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greet);

/***/ }),

/***/ "./graphql/queries/user.ts":
/*!*********************************!*\
  !*** ./graphql/queries/user.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_USER": () => (/* binding */ GET_USER)
/* harmony export */ });
const GET_USER = `
query getUser {
    users {
      id
      name
      Age
    }
  }`;

/***/ }),

/***/ "./pages/App.tsx":
/*!***********************!*\
  !*** ./pages/App.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Greet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Greet */ "./components/Greet.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\pages\\App.tsx";



const app = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Greet__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "Basudeb"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./pages/App.tsx");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./store/client.ts":
/*!*************************!*\
  !*** ./store/client.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-hooks */ "graphql-hooks");
/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_hooks__WEBPACK_IMPORTED_MODULE_0__);

const client = new graphql_hooks__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "graphql-hooks":
/*!********************************!*\
  !*** external "graphql-hooks" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-hooks");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQU1BLE1BQU1JLEtBQUssR0FBSUMsS0FBRCxJQUF1QjtBQUNuQ0osRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSTtBQUNGSyxNQUFBQSxPQUFPO0FBQ1IsS0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVSxDQUFFO0FBQ2YsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFLQSxRQUFNRCxPQUFPLEdBQUcsWUFBWTtBQUMxQixVQUFNO0FBQUVFLE1BQUFBO0FBQUYsUUFBVyxNQUFNTCwwREFBQSxDQUFlO0FBQ3BDTyxNQUFBQSxLQUFLLEVBQUVSLDJEQUFRQTtBQURxQixLQUFmLENBQXZCO0FBR0FTLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JKLElBQXBCO0FBQ0QsR0FMRDs7QUFNQTtBQUFBOztBQUNFO0FBQ0o7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFRRCxDQXBCRDs7QUFzQkEsaUVBQWVKLEtBQWY7Ozs7Ozs7Ozs7Ozs7OztBQzlCTyxNQUFNRixRQUFRLEdBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFQTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NQOzs7QUFFQSxNQUFNVyxHQUFHLEdBQUcsTUFBTztBQUNmLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsc0RBQUQ7QUFBTyxVQUFJLEVBQUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FORDs7QUFTQSxpRUFBZUEsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFHQTtBQUNBOzs7QUFFQSxTQUFTRSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUNELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUtBLE1BQU1aLE1BQU0sR0FBRyxJQUFJZSx3REFBSixDQUFrQjtBQUMvQkMsRUFBQUEsR0FBRyxFQUFFLDJDQUQwQjtBQUUvQkMsRUFBQUEsT0FBTyxFQUFDO0FBQ0osNkJBQXdCO0FBRHBCLEdBRnVCLENBSy9CO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0Y7QUFDQTtBQUNBOztBQVppQyxDQUFsQixDQUFmO0FBZUEsaUVBQWVqQixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9HcmVldC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vZ3JhcGhxbC9xdWVyaWVzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9zdG9yZS9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiZ3JhcGhxbC1ob29rc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHRVRfVVNFUiB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXMvdXNlclwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9zdG9yZS9jbGllbnRcIjtcclxuXHJcbnR5cGUgR3JlZXRQcm9wcyA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBHcmVldCA9IChwcm9wczogR3JlZXRQcm9wcykgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBnZXRVc2VyKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucmVxdWVzdCh7XHJcbiAgICAgIHF1ZXJ5OiBHRVRfVVNFUixcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIC8qY29uc3QgW3VwZGF0ZVVzZXJdID0gdXNlTXV0YXRpb24oVVBEQVRFX1VTRVJfTVVUQVRJT04pXHJcbiAgICAgICAgY29uc3QgW25ld05hbWUsIHNldE5ld05hbWVdID0gdXNlU3RhdGUoaWQpKi9cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmVldDtcclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9VU0VSPWBcclxucXVlcnkgZ2V0VXNlciB7XHJcbiAgICB1c2VycyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgQWdlXHJcbiAgICB9XHJcbiAgfWA7IiwiXHJcbmltcG9ydCBHcmVldCBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmVldFwiO1xyXG5cclxuY29uc3QgYXBwID0gKCkgID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyZWV0IG5hbWU9IFwiQmFzdWRlYlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcblxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUm91bnRlciBmcm9tICcuL0RlbW9BcHAvUm91dGluZ0RlbW8vUm91dGluZyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8QXBwICAvPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbiAgXG5cbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtaG9va3MnXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJ1xyXG4vLyBvclxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdncmFwaHFsLXdzJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4gIHVybDogJ2h0dHBzOi8vbmV3LXByb2plY3QuaGFzdXJhLmFwcC92MS9ncmFwaHFsJyxcclxuICBoZWFkZXJzOntcclxuICAgICAgJ3gtaGFzdXJhLWFkbWluLXNlY3JldCc6J3E4cVpHdTJ6ck40U2REMkk1MWtKcjQ5eWlhQWtEQUxDMGVmTzlzUGFlNmVVNkxpYXlYbjNaMmd6djlRTTZUNncnXHJcbiAgfSxcclxuICAvLyBzdWJzY3JpcHRpb25DbGllbnQ6IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoJ3dzOi8vbmV3LXByb2plY3QuaGFzdXJhLmFwcC92MS9ncmFwaHFsJywge1xyXG4gIC8vICAgLyogYWRkaXRpb25hbCBjb25maWcgb3B0aW9ucyAqL1xyXG4gIC8vIH0pLFxyXG4gIC8vIG9yXHJcbiAgLypzdWJzY3JpcHRpb25DbGllbnQ6IGNyZWF0ZUNsaWVudCh7XHJcbiAgICB1cmw6ICd3czovL2xvY2FsaG9zdDo4MDAwL2dyYXBocWwnXHJcbiAgICAvKiBhZGRpdGlvbmFsIGNvbmZpZyBvcHRpb25zXHJcbiAgfSkqL1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkdFVF9VU0VSIiwiY2xpZW50IiwiR3JlZXQiLCJwcm9wcyIsImdldFVzZXIiLCJlIiwiZGF0YSIsInJlcXVlc3QiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJhcHAiLCJBcHAiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkdyYXBoUUxDbGllbnQiLCJ1cmwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==