import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel, MenuItem, FormControl,
  FormControlProps, Select, FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles({
  menu: {
    height: '50vh',
  },
});
export interface ItemProps {
  label: string;
  value: string | number | object;
}

export interface FieldSelectProps extends FormControlProps {
  name: string;
  value?: string,
  label?: string;
  required?: boolean;
  items: ItemProps[];
}

/**
 * Creates a react-final-form compatible select field
 * @param name
 * @param items An array object to be rendered as selectables
 * @param value Selected
 * @param label
 * @param required
 * @param otherProps An exposed Material-UI's FormControlProps
 */
const FieldSelect = ({
  name,
  label,
  items,
  value,
  required,
  ...otherProps
}: FieldSelectProps) => {
  const classes = useStyles();
  const requireValidation = <T extends string>(val: Record<string, T>) => (required && (val ? undefined : 'Required'));
  return (
    <FormControl
      {...otherProps}
      variant="outlined"
      fullWidth
    >
      <Field name={name} validate={requireValidation}>
        {({ input, meta: { touched, error, submitError } }) => (
          <Fragment>
            <InputLabel>{label}</InputLabel>
            <Select
              MenuProps={{ className: classes.menu }}
              label={label}
              value={input.value}
              onChange={(e) => input.onBlur(e.target.value as any)}
              {...input}
            >
              {items.map((item, key) => (
                <MenuItem key={key} value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
            {touched && (error || submitError)
              && <FormHelperText error>{error || submitError}</FormHelperText>}
          </Fragment>
        )}
      </Field>
    </FormControl>
  );
};

export default FieldSelect;
