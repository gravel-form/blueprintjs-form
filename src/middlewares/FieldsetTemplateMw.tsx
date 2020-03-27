import * as React from 'react';
import { FormMiddlewareProps } from '../core';

export const FieldsetTemplateMw: React.ComponentType<FormMiddlewareProps> = (props) => {
  const { schema, next } = props;

  if (typeof schema === 'boolean' || !(schema.type === 'object' || schema.type === 'array')) return next(props);
  const title = schema.title;
  return (
    <>
      {title && <h3>{title}</h3>}
      {schema.description && <p className="bp3-text-muted">{schema.description}</p>}
      {next(props)}
    </>
  );
};

export default FieldsetTemplateMw;
