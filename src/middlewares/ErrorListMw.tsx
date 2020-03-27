import * as React from 'react';
import { Callout, Intent } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../share';

export const ErrorListMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { parent, next, errors } = props;
  if (parent || !errors || !errors.length) return next(props);

  return (
    <>
      {next(props)}
      {errors.map((error, i) => (
        <Callout key={i} intent={Intent.DANGER}>
          {error.dataPath} {error.message}
        </Callout>
      ))}
    </>
  );
};

export default ErrorListMw;
