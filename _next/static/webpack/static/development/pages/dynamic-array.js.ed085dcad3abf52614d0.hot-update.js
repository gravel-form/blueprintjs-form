webpackHotUpdate("static/development/pages/dynamic-array.js",{

/***/ "./pages/dynamic-array.tsx":
/*!*********************************!*\
  !*** ./pages/dynamic-array.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/pages/dynamic-array.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const _ = Lodash;\nconst { Row, Col } = ReactGridSystem;\nconst { Button } = BlueprintjsCore\nconst ExampleDynamicArrayMw = (props) => {\n  const {\n    schema,\n    data,\n    next,\n    MiddlewareComponent,\n    schemaPath,\n    dataPath,\n    formProps,\n    onChange,\n    extraProps,\n    errors,\n    onSubmit,\n  } = props;\n\n  if (typeof schema === 'boolean' || schema.type !== 'array' || !schema.items || Array.isArray(schema.items))\n    return next(props);\n\n  const schemaItems = schema.items;\n  const dataItems = Array.isArray(data) ? data : [];\n\n  return (\n    <>\n      {dataItems.map((item, index) => {\n        return (\n          <Row key={index}>\n            <Col xs=\"10\">\n              <MiddlewareComponent\n                key={index}\n                schema={schemaItems}\n                data={item}\n                onChange={(newItem) =>\n                  onChange([...dataItems.slice(0, index), newItem, ...dataItems.slice(index + 1)])\n                }\n                parent={props}\n                schemaPath={[...schemaPath, 'items']}\n                dataPath={[...dataPath, index]}\n                next={() => null}\n                formProps={formProps}\n                MiddlewareComponent={MiddlewareComponent}\n                {...{ extraProps: _.get(extraProps, 'items'), errors, onSubmit }}\n              />\n            </Col>\n            <Col xs=\"2\">\n              <Button style={{float:'right'}} type=\"dashed\" shape=\"circle\" onClick={(e) => {\n                e.preventDefault();\n                onChange(dataItems.filter((_, i) => i !== index))\n              }}>X</Button>\n            </Col>\n          </Row>\n        );\n      })}\n      {\n        <Row>\n          <Button type=\"dashed\" onClick={() => onChange([...dataItems, {}])} style={{ width: '100%' }}>\n            + Add field\n          </Button>\n        </Row>\n      }\n    </>\n  );\n};\n\nconst schema = {\n  title: 'A simple dynamic array form',\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      firstName: {\n        type: 'string',\n        title: 'First name',\n      },\n      lastName: {\n        type: 'string',\n        title: 'Last name',\n      },\n    },\n  },\n};\n\nconst middlewares = [\n  FormDataViewerMw,\n  ExtraPropsMw,\n  FieldsetTemplateMw,\n  ExampleDynamicArrayMw,\n  FormItemTemplateMw,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={[\n      { firstName: 'Jhon', lastName: 'Smith' },\n    ]}\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n";

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
//# sourceMappingURL=dynamic-array.js.ed085dcad3abf52614d0.hot-update.js.map