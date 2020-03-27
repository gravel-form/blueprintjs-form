import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const fullNameSchema = {
  type: 'string',
  title: 'Full Name',
};

const ExampleCalculatedFieldMw = (props) => {
  const { schema, next, data, MiddlewareComponent, onChange } = props;
  if (typeof schema === 'boolean' || schema.type !== 'object') return next(props);

  const handleChange = (value) => {
    const { firstName, lastName } = data || {};
    if (typeof value !== 'string') {
      onChange({ ...data, firstName: null, lastName: null });
    } else if (value.startsWith(firstName + ' ')) {
      onChange({ ...data, lastName: value.slice(firstName.length + 1) });
    } else if (value.endsWith(' ' + lastName)) {
      onChange({ ...data, firstName: value.slice(0, -lastName.length - 1) });
    } else {
      const [newFirstName, ...newLastName] = value.split(' ');
      onChange({ ...data, firstName: newFirstName, lastName: newLastName.length ? newLastName.join(' ') : null });
    }
  };

  return (
    <>
      {next(props)}
      <MiddlewareComponent
        {...props}
        parent={props}
        schema={fullNameSchema}
        next={() => null}
        data={data && [data.firstName, data.lastName].filter((s) => typeof s === 'string').join(' ')}
        onChange={handleChange}
      />
    </>
  );
};

const schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      default: 'Chuck',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
  },
};

const middlewares = [
  ExtraPropsMw,
  ExampleCalculatedFieldMw,
  FieldsetTemplateMw,
  FormGroupTemplateMw,
  ...schemaMws,
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
