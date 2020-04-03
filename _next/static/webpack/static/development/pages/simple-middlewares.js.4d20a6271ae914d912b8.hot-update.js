webpackHotUpdate("static/development/pages/simple-middlewares.js",{

/***/ "./pages/simple-middlewares.tsx":
/*!**************************************!*\
  !*** ./pages/simple-middlewares.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/icons */ "./node_modules/@blueprintjs/icons/lib/esm/index.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/core */ "./src/core.ts");



var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/pages/simple-middlewares.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];








var MyButtonsMw = function MyButtonsMw(props) {
  var parent = props.parent,
      next = props.next,
      onChange = props.onChange,
      defaultData = props.formProps.defaultData;
  var toaster = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      submitting = _React$useState2[0],
      setSubmitting = _React$useState2[1]; // if not on the root node, pass the control to the next middleware


  if (parent) return next(props);

  var handleSubmit = function handleSubmit() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSubmitting(true);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(bluebird__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000));

          case 3:
            // pactically, should check unmounted here
            setSubmitting(false);
            toaster.current && toaster.current.show({
              message: 'Success!',
              intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Intent"].SUCCESS
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleClear = function handleClear() {
    return onChange({});
  };

  var handleReset = function handleReset() {
    return onChange(defaultData);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, next(props)
  /* render the body of the form */
  , __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Intent"].PRIMARY,
    onClick: handleSubmit,
    loading: submitting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Submit"), ' ', __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleClear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Clear"), " ", __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleReset,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 52
    }
  }, "Reset"), __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Toaster"], {
    ref: toaster,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

var MyFormItemTemplate = function MyFormItemTemplate(props) {
  var schema = props.schema,
      dataPath = props.dataPath,
      parent = props.parent,
      next = props.next;
  if (typeof schema === 'boolean' || schema.type === 'object' || schema.type === 'array' || // skip if current node is under an array
  parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array') return next(props);
  var info = schema.description ? __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    content: schema.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    icon: _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_6__["IconNames"].INFO_SIGN,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  })) : null;
  return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    label: schema.title || dataPath[dataPath.length - 1],
    helperText: schema.description,
    labelInfo: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, info, " '(required)'", Object(_src_core__WEBPACK_IMPORTED_MODULE_8__["isRequired"])(props) ? '(required)' : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, next(props));
};

var code = "const schema = {\n    type: 'object',\n    properties: {\n      username: { type: 'string', description: 'Username description' },\n      firstname: { type: 'string' },\n      lastname: { type: 'string' },\n      email: { type: 'string', description: 'Email description' },\n    },\n  };\n\n  const defaultData = {\n  username: 'jhon',\n  firstname: 'Jhon',\n  lastname: 'Smith',\n};\n\nconst middlewares = [\n  MyButtonsMw,\n  FieldsetTemplateMw,\n  MyFormItemTemplate,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={defaultData}\n    layout=\"vertical\"\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    code: code,
    scope: {
      MyButtonsMw: MyButtonsMw,
      MyFormItemTemplate: MyFormItemTemplate
    },
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
//# sourceMappingURL=simple-middlewares.js.4d20a6271ae914d912b8.hot-update.js.map