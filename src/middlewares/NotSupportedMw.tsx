import * as React from 'react';
import { toJSONSchemaPath } from '../core';
import { BlueprintFormMiddlewareProps } from '../share';
import { Callout, Intent } from '@blueprintjs/core';

export const NotSupportedMw: React.FC<BlueprintFormMiddlewareProps> = ({ schemaPath }) => (
  <Callout intent={Intent.DANGER}>schema not supported, location {toJSONSchemaPath(schemaPath)}</Callout>
);

export default NotSupportedMw;
