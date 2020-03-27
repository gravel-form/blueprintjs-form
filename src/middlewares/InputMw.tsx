import * as React from 'react';
import get from 'lodash/get';
import { InputGroup, TextArea } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const InputMw: React.FC<BlueprintFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <InputGroup
      value={data || ''}
      onChange={(e: any) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export const TextAreaMw: React.FC<BlueprintFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <TextArea
      style={{ width: '100%' }}
      value={data || ''}
      onChange={(e: any) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default InputMw;
