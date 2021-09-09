"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Greet.tsx":
/*!******************************!*\
  !*** ./components/Greet.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./components/Index/Routing.tsx":
/*!**************************************!*\
  !*** ./components/Index/Routing.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\components\\Index\\Routing.tsx";




const router = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      label: "Username",
      name: "username",
      rules: [{
        required: true,
        message: 'Please input your username!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      label: "Phone Number",
      name: "phonenumber",
      rules: [{
        required: true,
        message: 'Please input your username!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      label: "Email",
      name: "email",
      rules: [{
        required: true,
        message: 'Please input your Email!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      label: "Password",
      name: "password",
      rules: [{
        required: true,
        message: 'Please input your password!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      name: "remember",
      valuePropName: "checked",
      wrapperCol: {
        offset: 8,
        span: 16
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        children: "Remember me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      wrapperCol: {
        offset: 8,
        span: 16
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./graphql/queries/user.ts":
/*!*********************************!*\
  !*** ./graphql/queries/user.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Index_Routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Index/Routing */ "./components/Index/Routing.tsx");
/* harmony import */ var _components_Greet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Greet */ "./components/Greet.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Inno\\Desktop\\project\\my-app\\pages\\index.tsx";





const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Index_Routing__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Greet__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "Shakeel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./store/client.ts":
/*!*************************!*\
  !*** ./store/client.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "graphql-hooks":
/*!********************************!*\
  !*** external "graphql-hooks" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("graphql-hooks");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztBQVdBLGlFQUFlQSxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBS0EsTUFBTTFCLE1BQU0sR0FBRyxJQUFJMkIsd0RBQUosQ0FBa0I7QUFDL0JDLEVBQUFBLEdBQUcsRUFBRSwyQ0FEMEI7QUFFL0JDLEVBQUFBLE9BQU8sRUFBQztBQUNKLDZCQUF3QjtBQURwQixHQUZ1QixDQUsvQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNGO0FBQ0E7QUFDQTs7QUFaaUMsQ0FBbEIsQ0FBZjtBQWVBLGlFQUFlN0IsTUFBZjs7Ozs7Ozs7OztBQ3BCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9HcmVldC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9JbmRleC9Sb3V0aW5nLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9ncmFwaHFsL3F1ZXJpZXMvdXNlci50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3RvcmUvY2xpZW50LnRzIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJncmFwaHFsLWhvb2tzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdFVF9VU0VSIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllcy91c2VyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL3N0b3JlL2NsaWVudFwiO1xyXG5cclxudHlwZSBHcmVldFByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEdyZWV0ID0gKHByb3BzOiBHcmVldFByb3BzKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGdldFVzZXIoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgcXVlcnk6IEdFVF9VU0VSLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgLypjb25zdCBbdXBkYXRlVXNlcl0gPSB1c2VNdXRhdGlvbihVUERBVEVfVVNFUl9NVVRBVElPTilcclxuICAgICAgICBjb25zdCBbbmV3TmFtZSwgc2V0TmV3TmFtZV0gPSB1c2VTdGF0ZShpZCkqL1xyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyZWV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1JvdXRpbmcubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVyID0gICgpID0+e1xyXG5cclxuICAgIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHZhbHVlcyk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZDonLCBlcnJvckluZm8pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiAoICAgICAgICBcclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgICAgICAgc3BhbjogOCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgIHNwYW46IDE2LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBFbWFpbCEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICAgICAgICAgICBzcGFuOiAxNixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgIHNwYW46IDE2LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJleHBvcnQgY29uc3QgR0VUX1VTRVI9YFxyXG5xdWVyeSBnZXRVc2VyIHtcclxuICAgIHVzZXJzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBBZ2VcclxuICAgIH1cclxuICB9YDsiLCJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgUm91bnRlciBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1JvdXRpbmcnO1xuaW1wb3J0IEdyZWV0IGZyb20gJy4uL2NvbXBvbmVudHMvR3JlZXQnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxSb3VudGVyIC8+XG4gICAgICA8R3JlZXQgbmFtZSA9IFwiU2hha2VlbFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtaG9va3MnXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJ1xyXG4vLyBvclxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdncmFwaHFsLXdzJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4gIHVybDogJ2h0dHBzOi8vbmV3LXByb2plY3QuaGFzdXJhLmFwcC92MS9ncmFwaHFsJyxcclxuICBoZWFkZXJzOntcclxuICAgICAgJ3gtaGFzdXJhLWFkbWluLXNlY3JldCc6J3E4cVpHdTJ6ck40U2REMkk1MWtKcjQ5eWlhQWtEQUxDMGVmTzlzUGFlNmVVNkxpYXlYbjNaMmd6djlRTTZUNncnXHJcbiAgfSxcclxuICAvLyBzdWJzY3JpcHRpb25DbGllbnQ6IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoJ3dzOi8vbmV3LXByb2plY3QuaGFzdXJhLmFwcC92MS9ncmFwaHFsJywge1xyXG4gIC8vICAgLyogYWRkaXRpb25hbCBjb25maWcgb3B0aW9ucyAqL1xyXG4gIC8vIH0pLFxyXG4gIC8vIG9yXHJcbiAgLypzdWJzY3JpcHRpb25DbGllbnQ6IGNyZWF0ZUNsaWVudCh7XHJcbiAgICB1cmw6ICd3czovL2xvY2FsaG9zdDo4MDAwL2dyYXBocWwnXHJcbiAgICAvKiBhZGRpdGlvbmFsIGNvbmZpZyBvcHRpb25zXHJcbiAgfSkqL1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkdFVF9VU0VSIiwiY2xpZW50IiwiR3JlZXQiLCJwcm9wcyIsImdldFVzZXIiLCJlIiwiZGF0YSIsInJlcXVlc3QiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJDaGVja2JveCIsInJvdXRlciIsIm9uRmluaXNoIiwidmFsdWVzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJzcGFuIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJvZmZzZXQiLCJIZWFkIiwiUm91bnRlciIsIkhvbWUiLCJHcmFwaFFMQ2xpZW50IiwidXJsIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=