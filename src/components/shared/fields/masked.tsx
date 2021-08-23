import React, { Fragment } from 'react';
import {
  TextField, FormControl,
  FormControlProps, FormHelperText,
  InputProps as inputProps,
} from '@material-ui/core';
import { Field } from 'react-final-form';
import InputMask from 'react-input-mask';

export interface InputProps extends FormControlProps {
  name: string;
  label: string;
  defaultValue?: string;
  InputProps?: inputProps;
  type?: string;
  mask?: string | (string | RegExp)[];
  value?:string;
  placeholder?:string;
  required?:boolean;
  disabled?:boolean;
}

/**
 * Creates a react-final-form compatible masked text field
 * @param name
 * @param label
 * @param defaultValue
 * @param readOnly
 * @param InputProps
 * @param type type of text input
 * @param mask type of masking for text
 * @param required
 * @param placeholder
 * @param value text input
 */
const FieldMasked = (props: InputProps) => {
  const {
    name, label, mask, placeholder, required, disabled,
  } = props;
  const requireValidation = <T extends string>(value: Record<string, T>) => (required && (value ? undefined : `${label} is Required`));

  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <Field name={name} validate={requireValidation}>
        {({ input: { onChange, value }, meta: { touched, error, submitError } }) => (
          <Fragment>
            <InputMask
              mask={mask}
              value={value}
              onChange={onChange}
              disabled={disabled}
              readOnly={disabled}
              alwaysShowMask
            >
              {() => (
                <TextField
                  name={name}
                  label={label}
                  variant="outlined"
                  placeholder={placeholder}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              )}
            </InputMask>
            {touched && (error || submitError)
              && <FormHelperText error>{error || submitError}</FormHelperText>}
          </Fragment>
        )}
      </Field>
    </FormControl>
  );
};

export default FieldMasked;
