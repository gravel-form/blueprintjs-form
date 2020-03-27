import * as React from 'react';
import omit from 'lodash/omit';
import { Card } from '@blueprintjs/core';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import FormDataViewerMw from '../components/FormDataViewerMw';
import { Row, Col } from 'react-grid-system';

const DemoForm: React.FC<{ code: string; scope?: { [key: string]: any } | React.ReactElement }> = ({ code, scope }) => {
  return (
    <LiveProvider
      code={code}
      scope={{
        ...omit(require('../src'), 'default'),
        GravelFormCore: require('../src/core'),
        BlueprintjsCore: require('@blueprintjs/core'),
        FormDataViewerMw,
        ReactGridSystem: require('react-grid-system'),
        Ajv: require('ajv'),
        ReactAsyncHook: require('react-async-hook'),
        Bluebird: require('bluebird'),
        Lodash: require('lodash'),
        ...scope,
      }}
      noInline={true}
    >
      <Row>
        <Col xs={6}>
          <Card style={{ height: '100vh', overflowY: 'auto', overflowX: 'auto' }}>
            <LiveEditor />
          </Card>
        </Col>
        <Col xs={6}>
          <Card style={{ height: '100vh', overflowY: 'auto' }}>
            <LiveError />
            <LivePreview />
          </Card>
        </Col>
      </Row>
    </LiveProvider>
  );
};

export default DemoForm;
