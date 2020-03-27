import * as React from 'react';
import get from 'lodash/get';
import { NumericInput } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const NumericInputMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  const { maximum, minimum } = schema;
  return (
    <NumericInput
      className="bp3-fill"
      max={maximum}
      min={minimum}
      value={typeof data === 'number' ? data : undefined}
      onValueChange={onChange}
      {...get(extraProps, 'props')}
    />
  );
};

export default NumericInputMw;
