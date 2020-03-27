import * as React from 'react';
import get from 'lodash/get';
import { Switch } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const SwitchMw: React.FC<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'boolean') return next(props);

  return (
    <Switch
      label={schema.title}
      checked={data}
      onChange={(e) => onChange(e.currentTarget.checked)}
      {...get(extraProps, 'props')}
    />
  );
};

export default SwitchMw;
