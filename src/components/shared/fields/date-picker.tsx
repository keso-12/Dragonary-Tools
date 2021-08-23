import React, { Fragment } from 'react';
import {
  FormControl, FormControlProps, FormHelperText,
} from '@material-ui/core';
import { Field } from 'react-final-form';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export interface InputProps extends FormControlProps {
  name: string;
  label: string;
  required?: boolean;
  minDate?: Date;
  handleChange?: (date: Date, value?: string) => void;
  disableFuture?: boolean;
  dateValue?: Date;
  disabled?: boolean;
}

/**
 * Creates a react-final-form compatible datepicker
 * @param name
 * @param label
 * @param required
 */
const FieldDatePicker = ({
  name, label, required, /** minDate, handleChange, dateValue, disabled, disableFuture = false, */
}: InputProps) => {
  const requireValidation = <T extends {}>(value: Record<string, T>) => (required && (value ? undefined : 'Required'));

  return (
    <FormControl fullWidth>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Field name={name} validate={requireValidation}>
          {({ input, meta: { touched, error, submitError } }) => (
            <Fragment>
              {/* <KeyboardDatePicker
                margin="normal"
                name={name}
                label={label}
                inputVariant="outlined"
                format="yyyy/MM/dd"
                disableFuture={disableFuture}
                InputLabelProps={{
                  shrink: true,
                }}
                {...input}
                fullWidth
                inputProps={{
                  readOnly: true,
                }}
                minDate={minDate}
                onChange={(e) => {
                  if (handleChange !== undefined) {
                    handleChange(e);
                  }
                }}
                value={dateValue}
                disabled={disabled}
              /> */}
              <KeyboardDatePicker
                margin="normal"
                name={name}
                label={label}
                inputVariant="outlined"
                format="yyyy/MM/dd"
                InputLabelProps={{
                  shrink: true,
                }}
                {...input}
                fullWidth
              />
              {touched && (error || submitError)
                && <FormHelperText error>{error || submitError}</FormHelperText>}
            </Fragment>
          )}
        </Field>
      </MuiPickersUtilsProvider>
    </FormControl>
  );
};

export default FieldDatePicker;
