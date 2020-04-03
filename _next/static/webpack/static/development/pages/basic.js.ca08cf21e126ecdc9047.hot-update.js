webpackHotUpdate("static/development/pages/basic.js",{

/***/ "./pages/basic.tsx":
/*!*************************!*\
  !*** ./pages/basic.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/pages/basic.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const schema = {\n  title: 'A registration form',\n  description: 'A simple form example.',\n  type: 'object',\n  required: ['firstName', 'lastName'],\n  definitions: {\n    firstName: {\n      type: 'string',\n      title: 'First name',\n    },\n    lastName: {\n      $id: '#last-name',\n      type: 'string',\n      title: 'Last name',\n    },\n  },\n  properties: {\n    firstName: {\n      $ref: '#/definitions/firstName',\n    },\n    lastName: {\n      $ref: '#last-name',\n    },\n    gender: {\n      type: 'string',\n      enum: ['male', 'female'],\n    },\n    age: {\n      type: 'integer',\n      title: 'Age of person',\n      description: '(earthian year)',\n    },\n    dof: {\n      type: 'string',\n      title: 'Date of Birth',\n    },\n    bio: {\n      type: 'string',\n      title: 'Bio',\n    },\n    password: {\n      type: 'string',\n      title: 'Password',\n      description: 'Hint: Make it strong!',\n      minLength: 3,\n    },\n    telephone: {\n      type: 'string',\n      title: 'Telephone',\n      minLength: 10,\n    },\n    term: {\n      type: 'boolean',\n      title: 'Accept',\n    },\n    slider: { type: 'integer', minimum: 0, maximum: 100 },\n  },\n};\n\nconst extraProps = {\n  row: { justify: 'space-between' },\n  properties: {\n    gender: {\n      component: 'RadioGroup',\n      labels: ['%E2%99%82', '%E2%99%80'].map(decodeURIComponent),\n    },\n    bio: {\n      component: 'TextArea',\n      props: {\n        placeholder: 'Roundhouse kicking asses since 1940',\n      },\n    },\n    password: {\n      component: 'Password',\n    },\n    dof: {\n      component: 'DateInput',\n    },\n    slider: { component: 'Slider' },\n  },\n};\n\nconst middlewares = [\n  FormDataViewerMw,\n\n  // SubmitButtonMw,\n  // LiveValidateMw,\n  SubmitButtonWithValidationMw,\n  ExtraPropsMw,\n  LocalRefMw,\n  FieldsetTemplateMw,\n  FormGroupTemplateMw,\n  ...schemaMws,\n\n  ...withName([\n    ['DateInput', DateInputMw],\n    ['RadioGroup', RadioGroupMw],\n    ['Slider', SliderMw],\n    ['Switch', SwitchMw],\n    ['TextArea', TextAreaMw],\n  ]),\n\n  CheckboxGroupMw,\n  CheckboxMw,\n  HTMLSelectMw,\n  InputMw,\n  NumericInputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={{}}\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    scope: {
      schema: schema,
      extraProps: extraProps
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=basic.js.ca08cf21e126ecdc9047.hot-update.js.map