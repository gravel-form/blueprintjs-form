import get from 'lodash/get';
import * as React from 'react';
import { BlueprintFormMiddlewareProps } from '../share';

export function withName(
  list: [string, React.ComponentType<BlueprintFormMiddlewareProps>][]
): React.FC<BlueprintFormMiddlewareProps>[] {
  return list.map(([name, Component]) => {
    return (props: BlueprintFormMiddlewareProps) => {
      if (get(props.extraProps, 'component') !== name) return props.next(props);
      return <Component {...props} />;
    };
  });
}

export const ExtraPropsMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const {
    next,
    schemaPath,
    formProps: { extraProps },
  } = props;
  const ep = schemaPath.length ? get(extraProps, schemaPath) : extraProps;
  return ep === props.extraProps ? next(props) : next({ ...props, extraProps: ep });
};

export default ExtraPropsMw;
