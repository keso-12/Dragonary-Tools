import React, { Fragment, ClipboardEvent } from 'react';
import { Field } from 'react-final-form';
import {
  TextField, FormControl, FormControlProps, FormHelperText, LinearProgress,
} from '@material-ui/core';

export interface InputProps extends FormControlProps {
  name: string;
  type?: string;
  label?: string;
  value?: string;
  autoComplete?: string,
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  minimum?: number;
  maximum?: number;
  helperText?:string;
  disableCut?:boolean;
  disableCopy?:boolean;
  disablePaste?:boolean;
}

/**
 * Creates a react-final-form compatible text field
 * @param name
 * @param label
 * @param type type of text input
 * @param value text input
 * @param variant defaults to outlined
 * @param autoComplete
 * @param fullWidth defaults to true
 * @param disabled
 * @param otherProps An exposed Material-UI's FormControlProps
 */

const disableNormalFunction = (e: ClipboardEvent<HTMLDivElement>) => {
  e.preventDefault();
};
const FieldInput = ({
  name,
  variant = 'outlined',
  placeholder,
  label,
  autoComplete,
  fullWidth = true,
  type,
  multiline,
  minimum,
  maximum,
  rows,
  helperText = '',
  required,
  disabled,
  disableCut,
  disableCopy,
  disablePaste,
  ...otherProps
}: InputProps) => (
  <FormControl
    fullWidth={fullWidth}
    variant="outlined"
    {...otherProps}
  >
    <Field
      name={name}
      validate={(val) => {
        if (minimum && val && (val.length < minimum)) {
          return `${label} should have a minimum of ${minimum} characters.`;
        }
        if (maximum && val && (val.length > maximum)) {
          return `${label} should have a maximum of ${maximum} characters.`;
        }
        return undefined;
      }}
    >
      {({
        input,
        meta: {
          touched, error, submitError, data: { warning, loading },
        },
      }) => (
        <Fragment>
          <TextField
            {...input}
            disabled={disabled}
            autoComplete={autoComplete}
            multiline={multiline}
            rows={rows}
            helperText={helperText}
            type={type}
            label={label}
            variant={variant}
            placeholder={placeholder}
            inputProps={{
              minLength: minimum,
            }}
            onCut={disableCut && disableNormalFunction}
            onCopy={disableCopy && disableNormalFunction}
            onPaste={disablePaste && disableNormalFunction}
            required={required}
          />
          {touched && (error || submitError)
              && <FormHelperText error>{error || submitError}</FormHelperText>}
          {warning && <FormHelperText error>{warning}</FormHelperText>}
          {loading && <LinearProgress color="secondary" />}
        </Fragment>
      )}
    </Field>
  </FormControl>
);

export default FieldInput;
