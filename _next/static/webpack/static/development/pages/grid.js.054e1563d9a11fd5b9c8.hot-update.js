webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./pages/grid.tsx":
/*!************************!*\
  !*** ./pages/grid.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/pages/grid.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const { get } = Lodash\nconst { Col, Row } = ReactGridSystem;\n\nconst ColMw = (props) => {\n  const { extraProps, parent, next } = props;\n  if (!parent) return next(props);\n  return (\n    <Col span=\"24\" {...get(extraProps, 'col')}>\n      {next(props)}\n    </Col>\n  );\n};\n\nconst RowMw = (props) => {\n  const { schema, extraProps, next } = props;\n  if (typeof schema === 'object' && (schema.type === 'object' || schema.type === 'array'))\n    return <Row {...get(extraProps, 'row')}>{next(props)}</Row>;\n  return next(props);\n};\n\nconst schema = {\n  type: 'object',\n  title: 'Grid Demo',\n  properties: {\n    input1: { type: 'string' },\n    input2: { type: 'string' },\n    input3: { type: 'string' },\n    input4: { type: 'string' },\n    input5: { type: 'string' },\n    object1: {\n      type: 'object',\n      title: 'object-1',\n      properties: {\n        o1_i1: { type: 'string' },\n        o1_i2: { type: 'string' },\n      },\n    },\n    object2: {\n      title: 'object-2',\n      type: 'object',\n      properties: {\n        o2_i1: { type: 'string' },\n        o2_i2: { type: 'string' },\n      },\n    },\n  },\n};\n\nconst extraProps = {\n  row: { justify: 'space-between' },\n  properties: {\n    input1: { col: { span: 6 } },\n    input2: { col: { span: 6 } },\n    input3: { col: { span: 4 } },\n    input4: { col: { span: 4 } },\n    input5: { col: { span: 4 } },\n    object1: { col: { span: 6 } },\n    object2: {\n      col: { span: 11 },\n      row: { justify: 'space-between' },\n      properties: {\n        o2_i1: { col: { span: 6 } },\n        o2_i2: { col: { span: 6 } },\n      },\n    },\n  },\n};\n\nconst middlewares = [\n  ExtraPropsMw,\n  ColMw,\n  FieldsetTemplateMw,\n  RowMw,\n  FormItemTemplateMw,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=grid.js.054e1563d9a11fd5b9c8.hot-update.js.map