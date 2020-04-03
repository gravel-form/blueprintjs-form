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



var schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  definitions: {
    firstName: {
      type: 'string',
      title: 'First name'
    },
    lastName: {
      $id: '#last-name',
      type: 'string',
      title: 'Last name'
    }
  },
  properties: {
    firstName: {
      $ref: '#/definitions/firstName'
    },
    lastName: {
      $ref: '#last-name'
    },
    gender: {
      type: 'string',
      "enum": ['male', 'female']
    },
    age: {
      type: 'integer',
      title: 'Age of person',
      description: '(earthian year)'
    },
    dof: {
      type: 'string',
      title: 'Date of Birth'
    },
    bio: {
      type: 'string',
      title: 'Bio'
    },
    password: {
      type: 'string',
      title: 'Password',
      description: 'Hint: Make it strong!',
      minLength: 3
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10
    },
    term: {
      type: 'boolean',
      title: 'Accept'
    },
    slider: {
      type: 'integer',
      minimum: 0,
      maximum: 100
    }
  }
};
var extraProps = {
  row: {
    justify: 'space-between'
  },
  properties: {
    gender: {
      component: 'RadioGroup',
      labels: ['%E2%99%82', '%E2%99%80'].map(decodeURIComponent)
    },
    bio: {
      component: 'TextArea',
      props: {
        placeholder: 'Roundhouse kicking asses since 1940'
      }
    },
    password: {
      component: 'Password'
    },
    dof: {
      component: 'DateInput'
    },
    slider: {
      component: 'Slider'
    }
  }
};
var code = "const middlewares = [\n  FormDataViewerMw,\n\n  // SubmitButtonMw,\n  // LiveValidateMw,\n  SubmitButtonWithValidationMw,\n  ExtraPropsMw,\n  LocalRefMw,\n  FieldsetTemplateMw,\n  FormGroupTemplateMw,\n  ...schemaMws,\n\n  ...withName([\n    ['DateInput', DateInputMw],\n    ['RadioGroup', RadioGroupMw],\n    ['Slider', SliderMw],\n    ['Switch', SwitchMw],\n    ['TextArea', TextAreaMw],\n  ]),\n\n  CheckboxGroupMw,\n  CheckboxMw,\n  HTMLSelectMw,\n  InputMw,\n  NumericInputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={{}}\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

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
//# sourceMappingURL=basic.js.e6ff15068c531c3a0875.hot-update.js.map