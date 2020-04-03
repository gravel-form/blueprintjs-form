webpackHotUpdate("static/development/pages/simple-middlewares.js",{

/***/ "./pages/simple-middlewares.tsx":
/*!**************************************!*\
  !*** ./pages/simple-middlewares.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/pages/simple-middlewares.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const { FormGroup, Button, Tooltip, Intent, Toaster, Icon, Classes } = BlueprintjsCore\nconst { delay } = Bluebird;\n\nconst MyButtonsMw = (props) => {\n  const {\n    parent,\n    next,\n    onChange,\n    formProps: { defaultData },\n  } = props;\n\n  const toaster = React.useRef(null);\n  const [submitting, setSubmitting] = React.useState(false);\n\n  // if not on the root node, pass the control to the next middleware\n  if (parent) return next(props);\n\n  const handleSubmit = async function() {\n    setSubmitting(true);\n    await delay(1000);\n    // pactically, should check unmounted here\n    setSubmitting(false);\n    toaster.current && toaster.current.show({ message: 'Success!', intent: Intent.SUCCESS });\n  };\n  const handleClear = () => onChange({});\n  const handleReset = () => onChange(defaultData);\n\n  return (\n    <>\n      {next(props) /* render the body of the form */}\n      <Button intent={Intent.PRIMARY} onClick={handleSubmit} loading={submitting}>\n        Submit\n      </Button>{' '}\n      <Button onClick={handleClear}>Clear</Button> <Button onClick={handleReset}>Reset</Button>\n      <Toaster ref={toaster} />\n    </>\n  );\n};\n\nconst MyFormItemTemplate = (props) => {\n  const { schema, dataPath, parent, next } = props;\n\n  if (\n    typeof schema === 'boolean' ||\n    schema.type === 'object' ||\n    schema.type === 'array' ||\n    // skip if current node is under an array\n    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')\n  )\n    return next(props);\n\n  const labelText = schema.title || dataPath[dataPath.length - 1];\n  const label = schema.description ? (\n    <Tooltip className={Classes.TOOLTIP_INDICATOR} content={schema.description}>\n      labelText\n    </Tooltip>\n  ) : (\n    labelText\n  );\n\n  return (\n    <FormGroup\n      label={<span style={{ display: 'inline' }}>{label}</span>}\n      helperText={schema.description}\n      labelInfo={isRequired(props) ? '(required)' : null}\n    >\n      {next(props)}\n    </FormGroup>\n  );\n};\n\nconst schema = {\n    type: 'object',\n    properties: {\n      username: { type: 'string', description: 'Username description' },\n      firstname: { type: 'string' },\n      lastname: { type: 'string' },\n      email: { type: 'string', description: 'Email description' },\n    },\n  };\n\n  const defaultData = {\n  username: 'jhon',\n  firstname: 'Jhon',\n  lastname: 'Smith',\n};\n\nconst middlewares = [\n  MyButtonsMw,\n  FieldsetTemplateMw,\n  MyFormItemTemplate,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={defaultData}\n    layout=\"vertical\"\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=simple-middlewares.js.3e97669c83618c1b2877.hot-update.js.map