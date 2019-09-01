import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import {
    DatePicker
  } from '@material-ui/pickers';

  export function renderTextField ({
    label,
    input,
    ...custom
  }) { return (
    <TextField
      label={label}
      placeholder={label}
      {...input}
      {...custom}
    />
  )
  }

  export function renderSelectField ({
    input,
    label,
    children,
    ...custom
  }) {
    return <FormControl>
      <InputLabel htmlFor="age-native-simple">Payment Method</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'paymentMethod',
          id: 'age-native-simple'
        }}
      >
        {children}
      </Select>
    </FormControl>
  }
  
export function renderDateField(props) {
  const {
  label,
  input: { onChange, value },
  } = props;
    return (
      <div>
        <DatePicker
          label={label}
          margin="normal"
          value={value}
          onChange={onChange}
          format="dd/MM/yyyy"
          error={false}
          helperText={null}
        />
      </div>
    );
  };
