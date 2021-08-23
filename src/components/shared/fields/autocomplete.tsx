import React, { Fragment } from 'react';
import {
  TextField, FormControl,
  FormControlProps, FormHelperText,
} from '@material-ui/core';
import Autocomplete, { AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete';
import { Field } from 'react-final-form';

interface optionProps {
  name:string;
  value:any;
}

export interface InputProps extends FormControlProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?:string;
  options?:optionProps[];
}

/**
 * Creates a react-final-form compatible autocomplete
 * @param name
 * @param placeholder
 * @param options
 * @param label
 * @param required
 */
const FieldAutocomplete = ({
  name, placeholder, label, options, required,
}: InputProps) => {
  const requireValidation = (value:any) => (required && (value ? undefined : 'Required'));

  return (
    <FormControl fullWidth>
      <Field name={name} validate={requireValidation}>
        {({ input: { onChange }, meta: { touched, error, submitError } }) => (
          <Fragment>
            <Autocomplete
              options={options}
              getOptionLabel={(option: optionProps) => option.name}
              style={{ width: '100%' }}
              onChange={(event:any, value:any) => {
                onChange(value.value);
              }}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField
                  {...params}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
            {touched && (error || submitError)
              && <FormHelperText error>{error || submitError}</FormHelperText>}
          </Fragment>
        )}
      </Field>
    </FormControl>
  );
};

export default FieldAutocomplete;
