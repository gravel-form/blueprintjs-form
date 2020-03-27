import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  definitions: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      $id: '#last-name',
      type: 'string',
      title: 'Last name',
    },
  },
  properties: {
    firstName: {
      $ref: '#/definitions/firstName',
    },
    lastName: {
      $ref: '#last-name',
    },
    gender: {
      type: 'string',
      enum: ['male', 'female'],
    },
    age: {
      type: 'integer',
      title: 'Age of person',
      description: '(earthian year)',
    },
    dof: {
      type: 'string',
      title: 'Date of Birth',
    },
    bio: {
      type: 'string',
      title: 'Bio',
    },
    password: {
      type: 'string',
      title: 'Password',
      description: 'Hint: Make it strong!',
      minLength: 3,
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
    },
    term: {
      type: 'boolean',
      title: 'Accept',
    },
    slider: { type: 'integer', minimum: 0, maximum: 100 },
  },
};

const extraProps = {
  row: { justify: 'space-between' },
  properties: {
    gender: {
      component: 'RadioGroup',
      labels: ['%E2%99%82', '%E2%99%80'].map(decodeURIComponent),
      props: { inline: true },
    },
    bio: {
      component: 'TextArea',
      props: {
        placeholder: 'Roundhouse kicking asses since 1940',
      },
    },
    password: {
      props: { type:'password' },
    },
    dof: {
      component: 'DateInput',
    },
    slider: { component: 'Slider' },
  },
};

const middlewares = [
  FormDataViewerMw,

  // SubmitButtonMw,
  // LiveValidateMw,
  SubmitButtonWithValidationMw,
  ExtraPropsMw,
  LocalRefMw,
  FieldsetTemplateMw,
  FormGroupTemplateMw,
  ...schemaMws,

  ...withName([
    ['DateInput', DateInputMw],
    ['RadioGroup', RadioGroupMw],
    ['Slider', SliderMw],
    ['Switch', SwitchMw],
    ['TextArea', TextAreaMw],
  ]),

  CheckboxGroupMw,
  CheckboxMw,
  HTMLSelectMw,
  InputMw,
  NumericInputMw,
  NotSupportedMw,
];

render(
  <Form
    defaultData={{}}
    schema={schema}
    extraProps={extraProps}
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
