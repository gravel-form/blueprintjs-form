webpackHotUpdate("static/development/pages/kitchensink.js",{

/***/ "./layouts/main.tsx":
/*!**************************!*\
  !*** ./layouts/main.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core/lib/css/blueprint.css */ "./node_modules/@blueprintjs/core/lib/css/blueprint.css");
/* harmony import */ var _blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_datetime_lib_css_blueprint_datetime_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/datetime/lib/css/blueprint-datetime.css */ "./node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css");
/* harmony import */ var _blueprintjs_datetime_lib_css_blueprint_datetime_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_datetime_lib_css_blueprint_datetime_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/layouts/main.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





console.log('asdf');
var backendUrl =  false || '';

var Page = function Page(_ref) {
  var children = _ref.children;

  var nav = function nav(url) {
    return function () {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(url, "".concat(backendUrl).concat(url), {
        shallow: true
      });
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["NavbarGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["NavbarHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Blueprint"), __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["NavbarDivider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Classes"].MINIMAL,
    text: "Basic",
    onClick: nav('/basic'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Classes"].MINIMAL,
    text: "Kitchen Sink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }))), children);
  /*
     return (
     <Layout>
     <Sider
     breakpoint="lg"
     collapsedWidth="0"
     onBreakpoint={(broken) => {
     console.log(broken);
     }}
     onCollapse={(collapsed, type) => {
     console.log(collapsed, type);
     }}
     >
     <Menu
     theme="dark"
     mode="inline"
     style={{ height: '100vh', overflow: 'auto' }}
     defaultSelectedKeys={[]}
     onClick={({ key }) => {
     Router.push(key, `${backendUrl}${key}`, { shallow: true });
     }}
     >
     <Menu.Item key="/basic">
     <span className="nav-text">Basic</span>
     </Menu.Item>
     <Menu.Item key="/kitchensink">
     <span className="">Kitchen Sink</span>
     </Menu.Item>
     <Menu.Item key="/simple-middlewares">
     <span className="">Simple Middlewares</span>
     </Menu.Item>
     <Menu.Item key="/grid">
     <span className="nav-text">Grid</span>
     </Menu.Item>
     <Menu.Item key="/single-async-validate">
     <span className="">Single Field Async</span>
     </Menu.Item>
     <Menu.Item key="/dynamic-array">
     <span className="">Dynamic Array</span>
     </Menu.Item>
     <Menu.Item key="/steps">
     <span className="">Steps Component</span>
     </Menu.Item>
     <Menu.Item key="/calculated-field">
     <span className="">Calculated Field</span>
     </Menu.Item>
     </Menu>
     </Sider>
     <Layout>
     <Content
     style={
     {} || {
     margin: '24px 16px',
     padding: 24,
     background: '#fff',
     minHeight: 280,
     }
     }
     >
     {children}
     </Content>
     </Layout>
     </Layout>
     );*/
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=kitchensink.js.a5541989148516dc0ae0.hot-update.js.map