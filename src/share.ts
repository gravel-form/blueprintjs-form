import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';

import { FormMiddlewareProps, FormProps } from './core';

export type ErrorObject = Ajv.ErrorObject;

const ajv = new Ajv({
  errorDataPath: 'property',
  allErrors: true,
  multipleOfPrecision: 8,
  schemaId: 'auto',
  unknownFormats: 'ignore',
});

export function validate(schema: JSONSchema7, data: any) {
  ajv.validate(schema, data);
  return ajv.errors;
}

export interface BlueprintFormProps extends FormProps {
  onSubmit?: (data: unknown) => void;
  extraProps?: unknown;
  defaultData?: unknown;
}

export interface BlueprintFormMiddlewareProps extends FormMiddlewareProps {
  formProps: BlueprintFormProps;
  errors?: ErrorObject[];
  extraProps?: unknown;
  onSubmit?: (data: unknown) => void;
}
