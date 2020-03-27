import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const Promise= Bluebird;
const { useAsync } = ReactAsyncHook;
const { FormGroup } = BlueprintjsCore;
const ajv = new Ajv({
  errorDataPath: 'property',
  allErrors: true,
  multipleOfPrecision: 8,
  schemaId: 'auto',
  unknownFormats: 'ignore',
});

async function waitForStopTyping(data, focused) {
  if (!focused) return data;
  await Promise.delay(500);
  return data;
}

async function asyncValidate(dataToSend, schema) {
  if (!dataToSend) return null;
  await Promise.delay(2000);
  ajv.validate(schema, dataToSend);
  return ajv.errors;
}

const ExampleSignleAsyncValidateMw = (props) => {
  const { schema, data, parent, dataPath, next, extraProps } = props;
  const touched = React.useRef(false);
  const focused = React.useRef(false);

  const { loading: typing, result: dataToSend } = useAsync(
    waitForStopTyping,
    [data, focused.current],
    { executeOnUpdate: true }
  );

  const { loading: validating, result: errors } = useAsync(
    asyncValidate,
    [dataToSend, schema],
    { executeOnUpdate: true }
  );

  if (
    typeof schema === 'boolean' ||
    schema.type === 'object' ||
    schema.type === 'array' ||
    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')
  )
    return next(props);

  const error = errors && errors[0];

  const onFocus = () => (touched.current = focused.current = true);
  const onBlur = () => (focused.current = false);
  const status = (typing && 'typing') || (validating && 'validating') || (error && 'error') || (!typing && touched.current && 'success') || '';

  return (
    <FormGroup
      label={schema.title || dataPath[dataPath.length - 1]}
      helperText={schema.description}
      labelInfo={ status ? \`($\{status\})\` : null }
    >
    {next({
        ...props,
        extraProps: {
          ...extraProps,
          props: {
            ...(extraProps || {}).props,
            onFocus,
            onBlur,
          },
        },
      })}
    </FormGroup>
  );
};

const schema = {
  type: 'object',
  title: 'Form',
  properties: {
    number_1: {
      type: 'string',
      description: 'Max length 5',
      title: 'String 1',
      maxLength: 5,
    },
    number_2: {
      type: 'string',
      description: 'Min length 5',
      title: 'String 2',
      minLength: 5,
    },
  },
};

const middlewares = [
  ...schemaMws,
  ExampleSignleAsyncValidateMw,
  InputMw,
  NotSupportedMw,
];

render(
  <Form
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
