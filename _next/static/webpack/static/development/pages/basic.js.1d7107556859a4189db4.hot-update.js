webpackHotUpdate("static/development/pages/basic.js",{

/***/ "./src/middlewares/FormGroupTemplateMw.tsx":
/*!*************************************************!*\
  !*** ./src/middlewares/FormGroupTemplateMw.tsx ***!
  \*************************************************/
/*! exports provided: FormGroupTemplateBaseMw, FormGroupTemplateMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupTemplateBaseMw", function() { return FormGroupTemplateBaseMw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupTemplateMw", function() { return FormGroupTemplateMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/src/middlewares/FormGroupTemplateMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var FormGroupTemplateBaseMw = function FormGroupTemplateBaseMw(props) {
  var schema = props.schema,
      dataPath = props.dataPath,
      next = props.next,
      errors = props.errors;
  if (typeof schema === 'boolean') return next(props);
  var id = Object(_core__WEBPACK_IMPORTED_MODULE_2__["toJSONSchemaPath"])(dataPath);
  var error = errors && errors.find(function (_ref) {
    var dataPath = _ref.dataPath;
    return dataPath === id;
  });
  return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    label: schema.title || dataPath[dataPath.length - 1],
    helperText: error ? error.message : schema.description,
    labelInfo: Object(_core__WEBPACK_IMPORTED_MODULE_2__["isRequired"])(props) ? '(required)' : '',
    intent: error ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].NONE,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, next(props));
};
var FormGroupTemplateMw = function FormGroupTemplateMw(props) {
  var schema = props.schema,
      parent = props.parent,
      next = props.next;
  if (typeof schema === 'boolean' || schema.type === 'object' || schema.type === 'array' || parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array') return next(props);
  return __jsx(FormGroupTemplateBaseMw, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (FormGroupTemplateMw);

/***/ })

})
//# sourceMappingURL=basic.js.1d7107556859a4189db4.hot-update.js.map