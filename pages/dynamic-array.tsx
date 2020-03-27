import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';
import DemoForm from '../components/DemoForm';

const code = `const _ = Lodash;
const { Row, Col } = ReactGridSystem;
const { Button } = BlueprintjsCore
const ExampleDynamicArrayMw = (props) => {
  const {
    schema,
    data,
    next,
    MiddlewareComponent,
    schemaPath,
    dataPath,
    formProps,
    onChange,
    extraProps,
    errors,
    onSubmit,
  } = props;

  if (typeof schema === 'boolean' || schema.type !== 'array' || !schema.items || Array.isArray(schema.items))
    return next(props);

  const schemaItems = schema.items;
  const dataItems = Array.isArray(data) ? data : [];

  return (
    <>
      {dataItems.map((item, index) => {
        return (
          <Row key={index}>
            <Col xs={10}>
              <MiddlewareComponent
                key={index}
                schema={schemaItems}
                data={item}
                onChange={(newItem) =>
                  onChange([...dataItems.slice(0, index), newItem, ...dataItems.slice(index + 1)])
                }
                parent={props}
                schemaPath={[...schemaPath, 'items']}
                dataPath={[...dataPath, index]}
                next={() => null}
                formProps={formProps}
                MiddlewareComponent={MiddlewareComponent}
                {...{ extraProps: _.get(extraProps, 'items'), errors, onSubmit }}
              />
            </Col>
            <Col xs={2}>
              <Button style={{float:'right'}} onClick={(e) => {
                e.preventDefault();
                onChange(dataItems.filter((_, i) => i !== index))
              }}>X</Button>
            </Col>
          </Row>
        );
      })}
      {
        <Row>
          <Button type="dashed" onClick={(e) => {
            e.preventDefault();
            onChange([...dataItems, {}])
          }} style={{ width: '100%' }}>
            + Add field
          </Button>
        </Row>
      }
    </>
  );
};

const schema = {
  title: 'A simple dynamic array form',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        title: 'First name',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
    },
  },
};

const middlewares = [
  FormDataViewerMw,
  ExtraPropsMw,
  FieldsetTemplateMw,
  ExampleDynamicArrayMw,
  FormGroupTemplateMw,
  ...schemaMws,
  InputMw,
  NotSupportedMw,
];

render(
  <Form
    defaultData={[
      { firstName: 'Jhon', lastName: 'Smith' },
    ]}
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
