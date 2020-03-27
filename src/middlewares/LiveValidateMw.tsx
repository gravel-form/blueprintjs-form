import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps, validate } from '../share';

export const LiveValidateMw: React.FC<BlueprintFormMiddlewareProps> = (props) => {
  const { schema, data, next, parent } = props;
  const [errors, ajvException] = React.useMemo(() => {
    try {
      return [parent || typeof schema === 'boolean' ? null : validate(schema, data), null];
    } catch (err) {
      return [null, err];
    }
  }, [schema, data]);
  const newProps = React.useMemo(() => ({ ...props, errors }), [errors, props]);
  return ajvException ? (
    <>
      <Callout intent={Intent.DANGER} title="Ajv exception">
        {ajvException.message}
      </Callout>
      {next(props)}
    </>
  ) : (
    next(errors ? newProps : props)
  );
};

export default LiveValidateMw;
