webpackHotUpdate("static/development/pages/kitchensink.js",{

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemaMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["schemaMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basicFormControlMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["basicFormControlMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "advancedFormControlMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["advancedFormControlMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formControlMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["formControlMws"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presetMws", function() { return _preset__WEBPACK_IMPORTED_MODULE_4__["presetMws"]; });

/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/DatePickerMw */ "./src/middlewares/DatePickerMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInputMw", function() { return _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_5__["DateInputMw"]; });

/* harmony import */ var _middlewares_FormGroupTemplateMw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/FormGroupTemplateMw */ "./src/middlewares/FormGroupTemplateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupTemplateBaseMw", function() { return _middlewares_FormGroupTemplateMw__WEBPACK_IMPORTED_MODULE_6__["FormGroupTemplateBaseMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupTemplateMw", function() { return _middlewares_FormGroupTemplateMw__WEBPACK_IMPORTED_MODULE_6__["FormGroupTemplateMw"]; });

/* harmony import */ var _middlewares_LiveValidateMw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/LiveValidateMw */ "./src/middlewares/LiveValidateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveValidateMw", function() { return _middlewares_LiveValidateMw__WEBPACK_IMPORTED_MODULE_7__["LiveValidateMw"]; });

/* harmony import */ var _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/ErrorListMw */ "./src/middlewares/ErrorListMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorListMw", function() { return _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_8__["ErrorListMw"]; });

/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/InputMw */ "./src/middlewares/InputMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_9__["InputMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_9__["TextAreaMw"]; });

/* harmony import */ var _middlewares_NumericInputMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/NumericInputMw */ "./src/middlewares/NumericInputMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInputMw", function() { return _middlewares_NumericInputMw__WEBPACK_IMPORTED_MODULE_10__["NumericInputMw"]; });

/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/FieldsetTemplateMw */ "./src/middlewares/FieldsetTemplateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsetTemplateMw", function() { return _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_11__["FieldsetTemplateMw"]; });

/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middlewares/CheckboxGroupMw */ "./src/middlewares/CheckboxGroupMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupMw", function() { return _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_12__["CheckboxGroupMw"]; });

/* harmony import */ var _middlewares_HTMLSelectMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./middlewares/HTMLSelectMw */ "./src/middlewares/HTMLSelectMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLSelectMw", function() { return _middlewares_HTMLSelectMw__WEBPACK_IMPORTED_MODULE_13__["HTMLSelectMw"]; });

/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./middlewares/SubmitButtonMw */ "./src/middlewares/SubmitButtonMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonMw", function() { return _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_14__["SubmitButtonMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonWithValidationMw", function() { return _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_14__["SubmitButtonWithValidationMw"]; });

/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./middlewares/RadioGroupMw */ "./src/middlewares/RadioGroupMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupMw", function() { return _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_15__["RadioGroupMw"]; });

/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middlewares/CheckboxMw */ "./src/middlewares/CheckboxMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxMw", function() { return _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_16__["CheckboxMw"]; });

/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./middlewares/SwitchMw */ "./src/middlewares/SwitchMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchMw", function() { return _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_17__["SwitchMw"]; });

/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./middlewares/SliderMw */ "./src/middlewares/SliderMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderMw", function() { return _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_18__["SliderMw"]; });

/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./middlewares/NotSupportedMw */ "./src/middlewares/NotSupportedMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotSupportedMw", function() { return _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_19__["NotSupportedMw"]; });






















/***/ }),

/***/ "./src/preset.ts":
/*!***********************!*\
  !*** ./src/preset.ts ***!
  \***********************/
/*! exports provided: schemaMws, basicFormControlMws, advancedFormControlMws, formControlMws, presetMws, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemaMws", function() { return schemaMws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicFormControlMws", function() { return basicFormControlMws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFormControlMws", function() { return advancedFormControlMws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formControlMws", function() { return formControlMws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetMws", function() { return presetMws; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/core.ts");
/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/DatePickerMw */ "./src/middlewares/DatePickerMw.tsx");
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/ExtraPropsMw */ "./src/middlewares/ExtraPropsMw.tsx");
/* harmony import */ var _middlewares_FormGroupTemplateMw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/FormGroupTemplateMw */ "./src/middlewares/FormGroupTemplateMw.tsx");
/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/NotSupportedMw */ "./src/middlewares/NotSupportedMw.tsx");
/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/InputMw */ "./src/middlewares/InputMw.tsx");
/* harmony import */ var _middlewares_NumericInputMw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/NumericInputMw */ "./src/middlewares/NumericInputMw.tsx");
/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/FieldsetTemplateMw */ "./src/middlewares/FieldsetTemplateMw.tsx");
/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/CheckboxGroupMw */ "./src/middlewares/CheckboxGroupMw.tsx");
/* harmony import */ var _middlewares_HTMLSelectMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/HTMLSelectMw */ "./src/middlewares/HTMLSelectMw.tsx");
/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/SubmitButtonMw */ "./src/middlewares/SubmitButtonMw.tsx");
/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middlewares/RadioGroupMw */ "./src/middlewares/RadioGroupMw.tsx");
/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./middlewares/CheckboxMw */ "./src/middlewares/CheckboxMw.tsx");
/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./middlewares/SwitchMw */ "./src/middlewares/SwitchMw.tsx");
/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./middlewares/SliderMw */ "./src/middlewares/SliderMw.tsx");
















var schemaMws = [_core__WEBPACK_IMPORTED_MODULE_1__["FixedObjectMw"], _core__WEBPACK_IMPORTED_MODULE_1__["FixedArrayMw"]];
var basicFormControlMws = [_middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_9__["default"], _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_13__["default"], _middlewares_HTMLSelectMw__WEBPACK_IMPORTED_MODULE_10__["default"], _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_6__["InputMw"], _middlewares_NumericInputMw__WEBPACK_IMPORTED_MODULE_7__["default"], _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_5__["default"]];
var advancedFormControlMws = Object(_middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_3__["withName"])([['DatePicker', _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_2__["default"]], ['RadioGroup', _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_12__["default"]], ['Slider', _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_15__["default"]], ['Switch', _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_14__["default"]], ['TextArea', _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_6__["TextAreaMw"]]]);
var formControlMws = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(advancedFormControlMws), basicFormControlMws);
var presetMws = [_middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_11__["SubmitButtonWithValidationMw"], _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_3__["ExtraPropsMw"], _core__WEBPACK_IMPORTED_MODULE_1__["LocalRefMw"], _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_8__["default"]].concat(schemaMws, [_middlewares_FormGroupTemplateMw__WEBPACK_IMPORTED_MODULE_4__["default"]], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(formControlMws), [_middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_5__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (presetMws);

/***/ })

})
//# sourceMappingURL=kitchensink.js.3c653886ec34bb0d905c.hot-update.js.map