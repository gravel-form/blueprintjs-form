import * as React from 'react';
import get from 'lodash/get';
import { Callout, Intent } from '@blueprintjs/core';

import { BlueprintFormMiddlewareProps } from '../share';

const { DateInput } = (() => {
  try {
    return require('@blueprintjs/datetime');
  } catch (_) {
    return {};
  }
})();

export const DateInputMw: React.FC<BlueprintFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;

  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);

  if (!DateInput) return <Callout intent={Intent.DANGER}>"@blueprintjs/datetime" is not installed</Callout>;

  return (
    <DateInput
      fill
      value={typeof data === 'string' ? new Date(data) : null}
      parseDate={(date: Date) => date}
      formatDate={(date: Date) => date.toLocaleDateString()}
      onChange={(date: Date) => {
        onChange(date ? date.toISOString() : undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default DateInputMw;
