import * as React from 'react';
import get from 'lodash/get';
import { BlueprintFormMiddlewareProps } from '../share';

export const HTMLSelectMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, data, onChange, next, extraProps } = props;
  if (
    typeof schema === 'boolean' ||
    !schema.enum ||
    !(schema.type === 'string' || schema.type === 'number' || schema.type === 'integer') ||
    schema.enum.find((option) => !['string', 'number'].includes(typeof option))
  )
    return next(props);

  const labels = get(extraProps, 'labels', schema.enum);
  const placeholder = get(extraProps, 'props.placeholder');
  const value = typeof data === 'string' || typeof data === 'number' ? data : undefined;
  return (
    <div className="bp3-select bp3-fill">
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        <option value={undefined}>{placeholder}</option>
        {schema.enum.map((option, index) => (
          <option key={option as string | number} value={option as string | number}>
            {get(labels, index, null)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HTMLSelectMw;
