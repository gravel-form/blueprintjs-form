webpackHotUpdate("static/development/pages/basic.js",{

/***/ "./src/middlewares/RadioGroupMw.tsx":
/*!******************************************!*\
  !*** ./src/middlewares/RadioGroupMw.tsx ***!
  \******************************************/
/*! exports provided: RadioGroupMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupMw", function() { return RadioGroupMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/blueprintjs/src/middlewares/RadioGroupMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var RadioGroupMw = function RadioGroupMw(props) {
  var schema = props.schema,
      _onChange = props.onChange,
      data = props.data,
      extraProps = props.extraProps,
      next = props.next;
  if (typeof schema === 'boolean' || !schema["enum"]) return next(props);
  var labels = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(extraProps, 'labels', schema["enum"]);
  return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onChange: function onChange(e) {
      return _onChange(e.currentTarget.value);
    },
    selectedValue: data
  }, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), schema["enum"].map(function (value, index) {
    return __jsx(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
      key: JSON.stringify(value),
      label: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(labels, index, null),
      value: typeof value === 'string' || typeof value === 'number' ? value : undefined,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RadioGroupMw);

/***/ })

})
//# sourceMappingURL=basic.js.0c5f195e18a42a5c081d.hot-update.js.map