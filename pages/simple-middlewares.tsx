import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';
import DemoForm from '../components/DemoForm';

const code = `const { FormGroup, Button, Tooltip, Intent, Toaster, Icon, Classes } = BlueprintjsCore
const { delay } = Bluebird;

const MyButtonsMw = (props) => {
  const {
    parent,
    next,
    onChange,
    formProps: { defaultData },
  } = props;

  const toaster = React.useRef(null);
  const [submitting, setSubmitting] = React.useState(false);

  // if not on the root node, pass the control to the next middleware
  if (parent) return next(props);

  const handleSubmit = async function() {
    setSubmitting(true);
    await delay(1000);
    // pactically, should check unmounted here
    setSubmitting(false);
    toaster.current && toaster.current.show({ message: 'Success!', intent: Intent.SUCCESS });
  };
  const handleClear = () => onChange({});
  const handleReset = () => onChange(defaultData);

  return (
    <>
      {next(props) /* render the body of the form */}
      <Button intent={Intent.PRIMARY} onClick={handleSubmit} loading={submitting}>
        Submit
      </Button>{' '}
      <Button onClick={handleClear}>Clear</Button> <Button onClick={handleReset}>Reset</Button>
      <Toaster ref={toaster} />
    </>
  );
};

const MyFormItemTemplate = (props) => {
  const { schema, dataPath, parent, next } = props;

  if (
    typeof schema === 'boolean' ||
    schema.type === 'object' ||
    schema.type === 'array' ||
    // skip if current node is under an array
    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')
  )
    return next(props);

  const labelText = schema.title || dataPath[dataPath.length - 1];
  const label = schema.description ? (
    <Tooltip className={Classes.TOOLTIP_INDICATOR} content={schema.description}>
      labelText
    </Tooltip>
  ) : (
    labelText
  );

  return (
    <FormGroup
      label={<span style={{ display: 'inline' }}>{label}</span>}
      helperText={schema.description}
      labelInfo={isRequired(props) ? '(required)' : null}
    >
      {next(props)}
    </FormGroup>
  );
};

const schema = {
    type: 'object',
    properties: {
      username: { type: 'string', description: 'Username description' },
      firstname: { type: 'string' },
      lastname: { type: 'string' },
      email: { type: 'string', description: 'Email description' },
    },
  };

  const defaultData = {
  username: 'jhon',
  firstname: 'Jhon',
  lastname: 'Smith',
};

const middlewares = [
  MyButtonsMw,
  FieldsetTemplateMw,
  MyFormItemTemplate,
  ...schemaMws,
  InputMw,
  NotSupportedMw,
];

render(
  <Form
    defaultData={defaultData}
    schema={schema}
    middlewares={middlewares}
  />
);
`;

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <DemoForm code={code} />
    </Layout>
  );
};

export default IndexPage;
