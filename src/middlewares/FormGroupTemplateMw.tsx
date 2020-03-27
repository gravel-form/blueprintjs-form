import * as React from 'react';
import { toJSONSchemaPath, isRequired } from '../core';
import { BlueprintFormMiddlewareProps } from '../share';
import { FormGroup, Intent } from '@blueprintjs/core';

export const FormGroupTemplateBaseMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, dataPath, next, errors } = props;

  if (typeof schema === 'boolean') return next(props);

  const id = toJSONSchemaPath(dataPath);
  const error = errors && errors.find(({ dataPath }) => dataPath === id);

  return (
    <FormGroup
      label={schema.title || dataPath[dataPath.length - 1]}
      helperText={error ? error.message : schema.description}
      labelInfo={isRequired(props) ? '(required)' : ''}
      intent={error ? Intent.DANGER : Intent.NONE}
    >
      {next(props)}
    </FormGroup>
  );
};

export const FormGroupTemplateMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, parent, next } = props;
  if (
    typeof schema === 'boolean' ||
    schema.type === 'object' ||
    schema.type === 'array' ||
    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')
  )
    return next(props);

  return <FormGroupTemplateBaseMw {...props} />;
};

export default FormGroupTemplateMw;
