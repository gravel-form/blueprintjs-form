(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{BGgm:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),s=t("3B7e"),o=t("xS4D"),r=a.createElement;e.default=function(){return r(s.a,null,r(o.a,{code:"const { FormGroup, Button, Tooltip, Intent, Toaster, Icon, Classes } = BlueprintjsCore\nconst { delay } = Bluebird;\n\nconst MyButtonsMw = (props) => {\n  const {\n    parent,\n    next,\n    onChange,\n    formProps: { defaultData },\n  } = props;\n\n  const toaster = React.useRef(null);\n  const [submitting, setSubmitting] = React.useState(false);\n\n  // if not on the root node, pass the control to the next middleware\n  if (parent) return next(props);\n\n  const handleSubmit = async function() {\n    setSubmitting(true);\n    await delay(1000);\n    // pactically, should check unmounted here\n    setSubmitting(false);\n    toaster.current && toaster.current.show({ message: 'Success!', intent: Intent.SUCCESS });\n  };\n  const handleClear = () => onChange({});\n  const handleReset = () => onChange(defaultData);\n\n  return (\n    <>\n      {next(props) /* render the body of the form */}\n      <Button intent={Intent.PRIMARY} onClick={handleSubmit} loading={submitting}>\n        Submit\n      </Button>{' '}\n      <Button onClick={handleClear}>Clear</Button> <Button onClick={handleReset}>Reset</Button>\n      <Toaster ref={toaster} />\n    </>\n  );\n};\n\nconst MyFormItemTemplate = (props) => {\n  const { schema, dataPath, parent, next } = props;\n\n  if (\n    typeof schema === 'boolean' ||\n    schema.type === 'object' ||\n    schema.type === 'array' ||\n    // skip if current node is under an array\n    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')\n  )\n    return next(props);\n\n  const labelText = schema.title || dataPath[dataPath.length - 1];\n  const label = schema.description ? (\n    <Tooltip className={Classes.TOOLTIP_INDICATOR} content={schema.description}>\n      labelText\n    </Tooltip>\n  ) : (\n    labelText\n  );\n\n  return (\n    <FormGroup\n      label={<span style={{ display: 'inline' }}>{label}</span>}\n      helperText={schema.description}\n      labelInfo={isRequired(props) ? '(required)' : null}\n    >\n      {next(props)}\n    </FormGroup>\n  );\n};\n\nconst schema = {\n    type: 'object',\n    properties: {\n      username: { type: 'string', description: 'Username description' },\n      firstname: { type: 'string' },\n      lastname: { type: 'string' },\n      email: { type: 'string', description: 'Email description' },\n    },\n  };\n\n  const defaultData = {\n  username: 'jhon',\n  firstname: 'Jhon',\n  lastname: 'Smith',\n};\n\nconst middlewares = [\n  MyButtonsMw,\n  FieldsetTemplateMw,\n  MyFormItemTemplate,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={defaultData}\n    layout=\"vertical\"\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n"}))}},QhYp:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/simple-middlewares",function(){return t("BGgm")}])}},[["QhYp",0,2,5,6,7,10,9,1,3,4,8]]]);