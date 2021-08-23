import React, { Fragment } from 'react';
import {
  FormControl, FormControlProps, FormHelperText,
} from '@material-ui/core';
import { Field } from 'react-final-form';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';

export interface InputProps extends FormControlProps {
  name: string;
  label: string;
  required?:boolean;
  disablePast?:boolean;
}

/**
 * Creates a react-final-form compatible datepicker
 * @param name
 * @param label
 * @param required
 */
const FieldDateTimePicker = ({
  name, label, required, disablePast,
}:InputProps) => {
  const requireValidation = (value:any) => (required && (value ? undefined : 'Required'));

  return (
    <FormControl fullWidth>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Field name={name} validate={requireValidation}>
          {({ input, meta: { touched, error, submitError } }) => (
            <Fragment>
              <DateTimePicker
                margin="normal"
                name={name}
                label={label}
                inputVariant="outlined"
                format="MM/dd/yyyy HH:mm:ss"
                disablePast={disablePast}
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

export default FieldDateTimePicker;
