webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./src/middlewares/InputMw.tsx":
/*!*************************************!*\
  !*** ./src/middlewares/InputMw.tsx ***!
  \*************************************/
/*! exports provided: InputMw, TextAreaMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMw", function() { return InputMw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaMw", function() { return TextAreaMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/src/middlewares/InputMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var InputMw = function InputMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: data || '',
    onChange: function onChange(e) {
      _onChange(e.target.value || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }));
};
var TextAreaMw = function TextAreaMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange2 = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["TextArea"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: {
      width: '100%'
    },
    value: data || '',
    onChange: function onChange(e) {
      _onChange2(e.target.value || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InputMw);

/***/ })

})
//# sourceMappingURL=grid.js.baa7d0963d55f24d92ca.hot-update.js.map