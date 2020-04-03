(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"44GD":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dynamic-array",function(){return t("TWTi")}])},TWTi:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t("3B7e"),s=t("xS4D"),o=a.createElement;e.default=function(){return o(r.a,null,o(s.a,{code:"const _ = Lodash;\nconst { Row, Col } = ReactGridSystem;\nconst { Button } = BlueprintjsCore\nconst ExampleDynamicArrayMw = (props) => {\n  const {\n    schema,\n    data,\n    next,\n    MiddlewareComponent,\n    schemaPath,\n    dataPath,\n    formProps,\n    onChange,\n    extraProps,\n    errors,\n    onSubmit,\n  } = props;\n\n  if (typeof schema === 'boolean' || schema.type !== 'array' || !schema.items || Array.isArray(schema.items))\n    return next(props);\n\n  const schemaItems = schema.items;\n  const dataItems = Array.isArray(data) ? data : [];\n\n  return (\n    <>\n      {dataItems.map((item, index) => {\n        return (\n          <Row key={index}>\n            <Col xs={10}>\n              <MiddlewareComponent\n                key={index}\n                schema={schemaItems}\n                data={item}\n                onChange={(newItem) =>\n                  onChange([...dataItems.slice(0, index), newItem, ...dataItems.slice(index + 1)])\n                }\n                parent={props}\n                schemaPath={[...schemaPath, 'items']}\n                dataPath={[...dataPath, index]}\n                next={() => null}\n                formProps={formProps}\n                MiddlewareComponent={MiddlewareComponent}\n                {...{ extraProps: _.get(extraProps, 'items'), errors, onSubmit }}\n              />\n            </Col>\n            <Col xs={2}>\n              <Button style={{float:'right'}} onClick={(e) => {\n                e.preventDefault();\n                onChange(dataItems.filter((_, i) => i !== index))\n              }}>X</Button>\n            </Col>\n          </Row>\n        );\n      })}\n      {\n        <Row>\n          <Button type=\"dashed\" onClick={(e) => {\n            e.preventDefault();\n            onChange([...dataItems, {}])\n          }} style={{ width: '100%' }}>\n            + Add field\n          </Button>\n        </Row>\n      }\n    </>\n  );\n};\n\nconst schema = {\n  title: 'A simple dynamic array form',\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      firstName: {\n        type: 'string',\n        title: 'First name',\n      },\n      lastName: {\n        type: 'string',\n        title: 'Last name',\n      },\n    },\n  },\n};\n\nconst middlewares = [\n  FormDataViewerMw,\n  ExtraPropsMw,\n  FieldsetTemplateMw,\n  ExampleDynamicArrayMw,\n  FormGroupTemplateMw,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={[\n      { firstName: 'Jhon', lastName: 'Smith' },\n    ]}\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n"}))}}},[["44GD",0,2,5,6,7,10,9,1,3,4,8]]]);