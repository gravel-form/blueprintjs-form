webpackHotUpdate("static/development/pages/calculated-field.js",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ "./src/share.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _share__WEBPACK_IMPORTED_MODULE_0__["validate"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./src/core.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core__WEBPACK_IMPORTED_MODULE_2__) if(["Form","validate","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _core__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/ExtraPropsMw */ "./src/middlewares/ExtraPropsMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_3__["withName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtraPropsMw", function() { return _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_3__["ExtraPropsMw"]; });

/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preset */ "./src/preset.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basicFormControlMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["basicFormControlMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "advancedFormControlMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["advancedFormControlMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formControlMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["formControlMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presetMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["presetMws"]; });

/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/DatePickerMw */ "./src/middlewares/DatePickerMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInputMw", function() { return _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_5__["DateInputMw"]; });

/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/FormItemTemplateMw */ "./src/middlewares/FormItemTemplateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemTemplateBaseMw", function() { return _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_6__["FormItemTemplateBaseMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupMw", function() { return _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_6__["FormGroupMw"]; });

/* harmony import */ var _middlewares_LiveValidateMw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/LiveValidateMw */ "./src/middlewares/LiveValidateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveValidateMw", function() { return _middlewares_LiveValidateMw__WEBPACK_IMPORTED_MODULE_7__["LiveValidateMw"]; });

/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/InputMw */ "./src/middlewares/InputMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__["InputMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__["TextAreaMw"]; });

/* harmony import */ var _middlewares_NumericInputMw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/NumericInputMw */ "./src/middlewares/NumericInputMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInputMw", function() { return _middlewares_NumericInputMw__WEBPACK_IMPORTED_MODULE_9__["NumericInputMw"]; });

/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/FieldsetTemplateMw */ "./src/middlewares/FieldsetTemplateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsetTemplateMw", function() { return _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_10__["FieldsetTemplateMw"]; });

/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/CheckboxGroupMw */ "./src/middlewares/CheckboxGroupMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupMw", function() { return _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_11__["CheckboxGroupMw"]; });

/* harmony import */ var _middlewares_HTMLSelectMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middlewares/HTMLSelectMw */ "./src/middlewares/HTMLSelectMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLSelectMw", function() { return _middlewares_HTMLSelectMw__WEBPACK_IMPORTED_MODULE_12__["HTMLSelectMw"]; });

/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./middlewares/SubmitButtonMw */ "./src/middlewares/SubmitButtonMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonMw", function() { return _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_13__["SubmitButtonMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonWithValidationMw", function() { return _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_13__["SubmitButtonWithValidationMw"]; });

/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./middlewares/RadioGroupMw */ "./src/middlewares/RadioGroupMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupMw", function() { return _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_14__["RadioGroupMw"]; });

/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./middlewares/CheckboxMw */ "./src/middlewares/CheckboxMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxMw", function() { return _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_15__["CheckboxMw"]; });

/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middlewares/SwitchMw */ "./src/middlewares/SwitchMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchMw", function() { return _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_16__["SwitchMw"]; });

/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./middlewares/SliderMw */ "./src/middlewares/SliderMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderMw", function() { return _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_17__["SliderMw"]; });

/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./middlewares/NotSupportedMw */ "./src/middlewares/NotSupportedMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotSupportedMw", function() { return _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_18__["NotSupportedMw"]; });








 // export * from './middlewares/ErrorListMw';













/***/ }),

/***/ "./src/middlewares/FormItemTemplateMw.tsx":
/*!************************************************!*\
  !*** ./src/middlewares/FormItemTemplateMw.tsx ***!
  \************************************************/
/*! exports provided: FormItemTemplateBaseMw, FormGroupMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormItemTemplateBaseMw", function() { return FormItemTemplateBaseMw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupMw", function() { return FormGroupMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/src/middlewares/FormItemTemplateMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var FormItemTemplateBaseMw = function FormItemTemplateBaseMw(props) {
  var id = props.id,
      schema = props.schema,
      dataPath = props.dataPath,
      next = props.next,
      errors = props.errors;
  if (typeof schema === 'boolean') return next(props); // const error = errors && errors.find(({ dataPath }) => dataPath === id);

  return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    label: schema.title || dataPath[dataPath.length - 1],
    helperText: schema.description,
    labelInfo: Object(_core__WEBPACK_IMPORTED_MODULE_2__["isRequired"])(props) ? '(required)' : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, next(props));
};
var FormGroupMw = function FormGroupMw(props) {
  var schema = props.schema,
      parent = props.parent,
      next = props.next;
  if (typeof schema === 'boolean' || schema.type === 'object' || schema.type === 'array' || parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array') return next(props);
  return __jsx(FormItemTemplateBaseMw, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (FormGroupMw);

/***/ })

})
//# sourceMappingURL=calculated-field.js.f274595eeedfa5ad7e91.hot-update.js.map