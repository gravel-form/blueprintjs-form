import * as React from 'react';
import get from 'lodash/get';
import { FormGroup, Button, Callout, Intent } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps, ErrorObject, validate } from '../share';

export const SubmitButtonMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { parent, next, data } = props;
  if (parent) return next(props);
  const { extraProps } = props;

  const onSubmit = props.onSubmit || props.formProps.onSubmit;
  return (
    <>
      {props.next(props)}
      <FormGroup>
        <Button
          intent={Intent.PRIMARY}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            onSubmit && onSubmit(data);
          }}
          type="primary"
          {...get(extraProps, 'props')}
        >
          Submit
        </Button>
      </FormGroup>
    </>
  );
};

export const SubmitButtonWithValidationMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const {
    data,
    parent,
    next,
    formProps: { schema },
  } = props;
  const [errors, setErrors] = React.useState<ErrorObject[] | null | undefined>();
  const [ajvException, setAjvException] = React.useState<Error | null>(null);

  if (parent) return next(props);
  const { extraProps } = props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const onSubmit = props.onSubmit || props.formProps.onSubmit;
      const errors = validate(schema, data);
      if (!errors && onSubmit) onSubmit(data);
      setErrors(errors);
      setAjvException(null);
    } catch (err) {
      setAjvException(err);
    }
  };

  return (
    <>
      {props.next(errors === props.errors ? props : { ...props, errors })}
      <FormGroup>
        <Button intent={Intent.PRIMARY} onClick={handleClick} type="primary" {...get(extraProps, 'props')}>
          Submit
        </Button>
      </FormGroup>
      {ajvException ? (
        <Callout intent={Intent.DANGER} title="Ajv exception">
          {ajvException.message}
        </Callout>
      ) : null}
    </>
  );
};

export default SubmitButtonMw;
