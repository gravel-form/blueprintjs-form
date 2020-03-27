import * as React from 'react';
import get from 'lodash/get';
import { Checkbox } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const CheckboxGroupMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, onChange, extraProps, next } = props;

  if (
    typeof schema === 'boolean' ||
    Array.isArray(schema.items) ||
    typeof schema.items === 'boolean' ||
    !schema.items ||
    !schema.items.enum ||
    !schema.uniqueItems
  ) {
    return next(props);
  }
  const checkboxValues = schema.items.enum || [];
  const labels = get(extraProps, 'labels', schema.items.enum);

  const data = Array.isArray(props.data) ? props.data : [];

  return (
    <>
      {checkboxValues.map((value, index) => (
        <Checkbox
          key={JSON.stringify(value)}
          checked={data.includes(value)}
          onChange={(e) => {
            onChange(e.currentTarget.checked ? [...data, value] : data.filter((v) => v !== value));
          }}
        >
          {get(labels, index, null)}
        </Checkbox>
      ))}
    </>
  );
};

export default CheckboxGroupMw;
