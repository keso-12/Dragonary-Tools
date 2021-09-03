import React, { ChangeEvent, ReactNode } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

export type InputProps = {
  name: string,
  type?: string,
  label?: string,
  value?: string | number,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  icon?: ReactNode
  helperText?:string,
  minimum?: number,
  maximum?: number,
}

const TextInput = ({
  name,
  label,
  type,
  value,
  icon,
  minimum,
  maximum,
  onChange,
  helperText = '',
}: InputProps) => (
  <TextField
    name={name}
    helperText={helperText}
    type={type}
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    style={{ margin: '0.4em' }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      ),
      inputProps: {
        max: maximum, min: minimum,
      },
    }}
    fullWidth
  />
);

export default TextInput;
