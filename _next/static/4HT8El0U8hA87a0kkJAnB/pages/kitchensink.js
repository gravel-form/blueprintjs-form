(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+ClR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kitchensink",function(){return t("BtJl")}])},BtJl:function(n,e,t){"use strict";t.r(e);var o=t("q1tI"),r=t("3B7e"),i=t("xS4D"),a=o.createElement;e.default=function(){return a(r.a,null,a(i.a,{code:"const schema = {\n  title: 'Demo of all available widgets',\n  type: 'object',\n  properties: {\n    input: { type: 'string' },\n    textarea: { type: 'string' },\n    date: { type: 'string' },\n    number: { type: 'number' },\n    slider: { type: 'integer', minimum: 0, maximum: 100 },\n    select: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    radioGroup: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    checkbox: { type: 'boolean',title: 'Accepted' },\n    switch: { type: 'boolean' },\n    checkboxGroup: {\n      type: 'array',\n      items: {\n        type: 'string',\n        enum: ['foo', 'bar', 'baz'],\n      },\n      uniqueItems: true,\n    },\n  },\n};\n\nconst extraProps = {\n  properties: {\n    textarea: { component: 'TextArea' },\n    date: { component: 'DatePicker' },\n    slider: { component: 'Slider' },\n    radioGroup: { component: 'RadioGroup' },\n    switch: { component: 'Switch' },\n  },\n};\n\nrender(\n  <Form\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={presetMws}\n  />\n);\n"}))}}},[["+ClR",0,2,3,4,7,10,9,1,5,6,8]]]);