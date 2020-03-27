import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormMiddlewareProps } from '../core';

export class ChangeToBlur2Mw extends React.Component<FormMiddlewareProps> {
  state = { value: this.props.data };
  element: Element | null | Text = null;
  focus = false;

  onFocus = () => {
    const { data } = this.props;
    this.focus = true;
    this.setState({ value: data });
  };

  onBlur = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    this.focus = false;
    onChange(value);
  };

  componentDidMount() {
    const { schema } = this.props;
    if (typeof schema === 'boolean' || schema.type === 'object' || schema.type === 'array') return;
    this.element = ReactDOM.findDOMNode(this);
    if (this.element) {
      this.element.addEventListener('focus', this.onFocus, true);
      this.element.addEventListener('blur', this.onBlur, true);
    }
  }
  componentWillUnmount() {
    if (this.element) {
      this.element.removeEventListener('focus', this.onFocus);
      this.element.removeEventListener('blur', this.onBlur);
    }
  }

  render() {
    const { data, next, onChange } = this.props;
    const { value } = this.state;
    return next({
      ...this.props,
      data: this.focus ? value : data,
      onChange: this.focus
        ? (value: any) => {
            this.setState({ value });
          }
        : onChange,
    });
  }
}
export default ChangeToBlur2Mw;
