import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const schema = {
  title: 'Demo of all available widgets',
  type: 'object',
  properties: {
    input: { type: 'string' },
    textarea: { type: 'string' },
    date: { type: 'string' },
    number: { type: 'number' },
    slider: { type: 'integer', minimum: 0, maximum: 100 },
    select: {
      type: 'string',
      enum: ['foo', 'bar', 'baz'],
    },
    radioGroup: {
      type: 'string',
      enum: ['foo', 'bar', 'baz'],
    },
    checkbox: { type: 'boolean',title: 'Accepted' },
    switch: { type: 'boolean' },
    checkboxGroup: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['foo', 'bar', 'baz'],
      },
      uniqueItems: true,
    },
  },
};

const extraProps = {
  properties: {
    textarea: { component: 'TextArea' },
    date: { component: 'DatePicker' },
    slider: { component: 'Slider' },
    radioGroup: { component: 'RadioGroup' },
    switch: { component: 'Switch' },
  },
};

render(
  <Form
    schema={schema}
    extraProps={extraProps}
    middlewares={presetMws}
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
