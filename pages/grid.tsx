import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const { get } = Lodash
const { Col, Row } = ReactGridSystem;

const ColMw = (props) => {
  const { extraProps, parent, next } = props;
  if (!parent) return next(props);
  return (
    <Col xs="12" {...get(extraProps, 'col')}>
      {next(props)}
    </Col>
  );
};

const RowMw = (props) => {
  const { schema, extraProps, next } = props;
  if (typeof schema === 'object' && (schema.type === 'object' || schema.type === 'array'))
    return <Row {...get(extraProps, 'row')}>{next(props)}</Row>;
  return next(props);
};

const schema = {
  type: 'object',
  title: 'Grid Demo',
  properties: {
    input1: { type: 'string' },
    input2: { type: 'string' },
    input3: { type: 'string' },
    input4: { type: 'string' },
    input5: { type: 'string' },
    object1: {
      type: 'object',
      title: 'object-1',
      properties: {
        o1_i1: { type: 'string' },
        o1_i2: { type: 'string' },
      },
    },
    object2: {
      title: 'object-2',
      type: 'object',
      properties: {
        o2_i1: { type: 'string' },
        o2_i2: { type: 'string' },
      },
    },
  },
};

const extraProps = {
  properties: {
    input1: { col: { xs: 6 } },
    input2: { col: { xs: 6 } },
    input3: { col: { xs: 4 } },
    input4: { col: { xs: 4 } },
    input5: { col: { xs: 4 } },
    object1: { col: { xs: 6 } },
    object2: {
      col: { xs: 6 },
      properties: {
        o2_i1: { col: { xs: 6 } },
        o2_i2: { col: { xs: 6 } },
      },
    },
  },
};

const middlewares = [
  ExtraPropsMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  FormGroupTemplateMw,
  ...schemaMws,
  InputMw,
  NotSupportedMw,
];

render(
  <Form
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
