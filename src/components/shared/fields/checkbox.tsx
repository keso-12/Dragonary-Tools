import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import {
  FormControl, FormLabel, FormControlLabel, FormGroup,
  Checkbox, CheckboxProps, FormControlProps, FormHelperText,
} from '@material-ui/core';

export type InputProps = FormControlProps & CheckboxProps & {
  name?: string;
  title?: string;
  label?: string;
  className?: string;
  onChangeValue?: (checked: boolean) => void;
  defaultChecked?: boolean;
};

/**
 * Creates a react-final-form compatible checkbox
 * @param name
 * @param title
 * @param label
 */
const FieldCheckbox = ({
  name,
  label,
  title,
  className,
  onChangeValue,
  defaultChecked = false,
  ...rest
}: InputProps) => (
  <FormControl component="fieldset" className={className} fullWidth>
    <FormLabel component="legend">{title}</FormLabel>
    <FormGroup>
      <Field name={name} type="checkbox" key={name}>
        {({ input: { value, onChange }, meta: { touched, error, submitError } }) => (
          <Fragment>
            <FormControlLabel
              control={
                (
                  <Checkbox
                    defaultChecked={defaultChecked}
                    name={name}
                    value={value}
                    {...rest}
                    onChange={
                      (e) => {
                        onChange(e);
                        if (onChangeValue) {
                          onChangeValue(e.target.checked);
                        }
                      }
                    }
                  />
                )
              }
              label={label}
            />
            {touched && (error || submitError)
              && <FormHelperText error>{error || submitError}</FormHelperText>}
          </Fragment>
        )}
      </Field>
    </FormGroup>
  </FormControl>
);

export default FieldCheckbox;
