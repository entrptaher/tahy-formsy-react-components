/* eslint-env node, browser */

import React, {Component} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';

/* eslint-disable import/extensions, import/no-unresolved, import/no-extraneous-dependencies */
import {
  Form,
  Input,
  File,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Textarea,
} from 'formsy-react-components';
/* eslint-enable */

class App extends Component {
  componentDidMount() {
    this.inputRef.element.focus();

    /* eslint-disable no-console */
    console.info(this.inputRef.element);
    console.info(this.fileRef.element);
    console.info(this.radiosRef.elements);
    console.info(this.checkboxRef.element);
    console.info(this.checkboxesRef.elements);
    console.info(this.selectRef.element);
    console.info(this.textareaRef.element);
    /* eslint-enable no-console */
  }

  render() {
    const multiOptions = [
      {label: 'Option 1', value: 'one'},
      {label: 'Option 2', value: 'two'},
      {label: 'Option 3', value: 'three'},
    ];

    return (
      <div>
        <h1>
          <code>refs</code> Example
        </h1>
        <p>
          The first input is initially focussed by accessing the form control
          via <code>refs</code>.
        </p>
        <p>
          Check the browser console for the form control elements that are
          exposed as refs.
        </p>
        <Form>
          <Input
            label="Text"
            name="input"
            componentRef={component => {
              this.inputRef = component;
            }}
          />
          <File
            label="File picker"
            name="file"
            componentRef={component => {
              this.fileRef = component;
            }}
          />
          <RadioGroup
            label="Radio buttons"
            name="radios"
            options={multiOptions}
            componentRef={component => {
              this.radiosRef = component;
            }}
          />
          <Checkbox
            label="Single checkbox"
            valueLabel="One option"
            name="checkbox"
            componentRef={component => {
              this.checkboxRef = component;
            }}
          />
          <CheckboxGroup
            label="Checkbox group"
            name="checkboxes"
            options={multiOptions}
            componentRef={component => {
              this.checkboxesRef = component;
            }}
          />
          <Select
            label="Select"
            name="select"
            options={multiOptions}
            componentRef={component => {
              this.selectRef = component;
            }}
          />
          <Textarea
            label="Textarea"
            name="textarea"
            componentRef={component => {
              this.textareaRef = component;
            }}
          />
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
