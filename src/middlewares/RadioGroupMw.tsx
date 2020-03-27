import * as React from 'react';
import get from 'lodash/get';
import { Radio, RadioGroup } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const RadioGroupMw: React.FC<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, extraProps, next } = props;
  if (typeof schema === 'boolean' || !schema.enum) return next(props);

  const labels = get(extraProps, 'labels', schema.enum);

  return (
    <RadioGroup onChange={(e) => onChange(e.currentTarget.value)} selectedValue={data} {...get(extraProps, 'props')}>
      {schema.enum.map((value, index) => (
        <Radio
          key={JSON.stringify(value)}
          label={get(labels, index, null)}
          value={typeof value === 'string' || typeof value === 'number' ? value : undefined}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioGroupMw;
