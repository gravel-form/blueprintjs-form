import * as React from 'react';
import get from 'lodash/get';
import { Slider } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const SliderMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return (
    <Slider
      min={min}
      max={max}
      labelStepSize={max - min}
      value={typeof data === 'number' ? data : undefined}
      onChange={(value) => {
        if (!Array.isArray(value)) onChange(value);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default SliderMw;
