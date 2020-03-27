import { FixedObjectMw, FixedArrayMw, LocalRefMw } from './core';

import DatePickerMw from './middlewares/DatePickerMw';
import { ExtraPropsMw, withName } from './middlewares/ExtraPropsMw';
import FormGroupTemplateMw from './middlewares/FormGroupTemplateMw';
import NotSupportedMw from './middlewares/NotSupportedMw';
import { InputMw, TextAreaMw } from './middlewares/InputMw';
import NumericInputMw from './middlewares/NumericInputMw';
import FieldsetTemplateMw from './middlewares/FieldsetTemplateMw';
import CheckboxGroupMw from './middlewares/CheckboxGroupMw';
import HTMLSelectMw from './middlewares/HTMLSelectMw';
import { SubmitButtonWithValidationMw } from './middlewares/SubmitButtonMw';
import RadioGroupMw from './middlewares/RadioGroupMw';
import CheckboxMw from './middlewares/CheckboxMw';
import SwitchMw from './middlewares/SwitchMw';
import SliderMw from './middlewares/SliderMw';

export const schemaMws = [FixedObjectMw, FixedArrayMw];

export const basicFormControlMws = [CheckboxGroupMw, CheckboxMw, HTMLSelectMw, InputMw, NumericInputMw, NotSupportedMw];

export const advancedFormControlMws = withName([
  ['DatePicker', DatePickerMw],
  ['RadioGroup', RadioGroupMw],
  ['Slider', SliderMw],
  ['Switch', SwitchMw],
  ['TextArea', TextAreaMw],
]);

export const formControlMws = [...advancedFormControlMws, ...basicFormControlMws];

export const presetMws = [
  SubmitButtonWithValidationMw,
  ExtraPropsMw,
  LocalRefMw,
  FieldsetTemplateMw,
  ...schemaMws,
  FormGroupTemplateMw,
  ...formControlMws,
  NotSupportedMw,
];

export default presetMws;
