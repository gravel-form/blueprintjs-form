webpackHotUpdate("static/development/pages/single-async-validate.js",{

/***/ "./pages/single-async-validate.tsx":
/*!*****************************************!*\
  !*** ./pages/single-async-validate.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/pages/single-async-validate.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const Promise= Bluebird;\nconst { useAsync } = ReactAsyncHook;\nconst { FormGroup } = BlueprintjsCore;\nconst ajv = new Ajv({\n  errorDataPath: 'property',\n  allErrors: true,\n  multipleOfPrecision: 8,\n  schemaId: 'auto',\n  unknownFormats: 'ignore',\n});\n\nasync function waitForStopTyping(data, focused) {\n  if (!focused) return data;\n  await Promise.delay(500);\n  return data;\n}\n\nasync function asyncValidate(dataToSend, schema) {\n  if (!dataToSend) return null;\n  await Promise.delay(2000);\n  ajv.validate(schema, dataToSend);\n  return ajv.errors;\n}\n\nconst ExampleSignleAsyncValidateMw = (props) => {\n  const { schema, data, parent, dataPath, next, extraProps } = props;\n  const touched = React.useRef(false);\n  const focused = React.useRef(false);\n\n  const { loading: typing, result: dataToSend } = useAsync(\n    waitForStopTyping,\n    [data, focused.current],\n    { executeOnUpdate: true }\n  );\n\n  const { loading: validating, result: errors } = useAsync(\n    asyncValidate,\n    [dataToSend, schema],\n    { executeOnUpdate: true }\n  );\n\n  if (\n    typeof schema === 'boolean' ||\n    schema.type === 'object' ||\n    schema.type === 'array' ||\n    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')\n  )\n    return next(props);\n\n  const error = errors && errors[0];\n\n  const onFocus = () => (touched.current = focused.current = true);\n  const onBlur = () => (focused.current = false);\n  const status = (validating && 'validating') || (error && 'error') || (!typing && touched.current && 'success') || '';\n\n  return (\n    <FormGroup\n      label={schema.title || dataPath[dataPath.length - 1]}\n      helperText={schema.description}\n      labelInfo={ typing ? '(typing)' : status ? `(${status})`:null}\n    >\n    {next({\n        ...props,\n        extraProps: {\n          ...extraProps,\n          props: {\n            ...(extraProps || {}).props,\n            onFocus,\n            onBlur,\n          },\n        },\n      })}\n    </FormGroup>\n  );\n};\n\nconst schema = {\n  type: 'object',\n  title: 'Form',\n  properties: {\n    number_1: {\n      type: 'string',\n      description: 'Max length 5',\n      title: 'String 1',\n      maxLength: 5,\n    },\n    number_2: {\n      type: 'string',\n      description: 'Min length 5',\n      title: 'String 2',\n      minLength: 5,\n    },\n  },\n};\n\nconst middlewares = [\n  ...schemaMws,\n  ExampleSignleAsyncValidateMw,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=single-async-validate.js.c55e75368e87a2e4aa25.hot-update.js.map