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
}

const TextInput = ({
  name,
  label,
  type,
  value,
  icon,
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
    style={{ margin: '0.2em' }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      ),
    }}
    fullWidth
  />
);

export default TextInput;
