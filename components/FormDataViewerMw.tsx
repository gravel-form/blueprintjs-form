import * as React from 'react';
import { TextArea, FormGroup } from '@blueprintjs/core';
import { BlueprintFormMiddlewareProps } from '../src';
import { Icon, Tooltip } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const JsonEditor: React.FC<{ value: any; onChange?: any }> = ({ value, onChange }) => {
  const [editingValue, setEditingValue] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return (
    <TextArea
      style={{ width: '100%' }}
      value={focus ? editingValue : JSON.stringify(value, null, 2)}
      onChange={(e) => {
        setEditingValue(e.target.value);
        try {
          onChange(JSON.parse(editingValue));
        } catch (e) {}
      }}
      onFocus={() => {
        setEditingValue(JSON.stringify(value, null, 2));
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
    />
  );
};

export const FormDataViewerMw: React.ComponentType<BlueprintFormMiddlewareProps> = (props) => {
  const { data, parent, onChange, next } = props;

  if (parent) return next(props);
  return (
    <>
      <FormGroup
        label={
          <Tooltip content={'Try to hide this component by removing "FormDataViewerMw" form the "middlewares" array.'}>
            <span>
              Form Data <Icon icon={IconNames.INFO_SIGN} />
            </span>
          </Tooltip>
        }
        style={{ paddingBottom: 12 }}
      >
        <JsonEditor value={data} onChange={onChange} />
      </FormGroup>
      {next(props)}
    </>
  );
};

export default FormDataViewerMw;
