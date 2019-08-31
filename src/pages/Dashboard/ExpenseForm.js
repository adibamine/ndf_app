import React from 'react';
import { Field, reduxForm } from 'redux-form'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';

  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    form: {
      textAlign: 'center',
    },
    button: {
      marginTop: '10px',
    }
  }));

  const renderTextField = ({
    label,
    input,
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      {...input}
      {...custom}
    />
  )

  const renderSelectField = ({
    input,
    label,
    children,
    ...custom
  }) => (
    <FormControl>
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
  )

export const renderDateField = props => {
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

function ExpenseFormCmp({ handleSubmit, closeModal }) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">New Expense</h2>
            <div className={classes.form}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Field name="name" component ={renderTextField} label="Name" />
                  <Field name="description" component={renderTextField} label="Description"/>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field name="date" component={renderDateField} label="Date"/>
                  </MuiPickersUtilsProvider>
                  <Field
                    name="paymentMethod"
                    component={renderSelectField}
                    label="Payment Method"
                  >
                    <option value="" />
                    <option value={'Cash'}>Cash</option>
                    <option value={'Carte'}>Carte</option>
                    <option value={'Cheque'}>Chèque</option>
                  </Field>
                  <Field name="amount" component={renderTextField} label="Amount" />
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      Add
                  </Button>
                  <Button onClick={closeModal} variant="contained" color="secondary" className={classes.button}>
                      Cancel
                  </Button>
                </FormControl>
              </form>
            </div>
      </div>
    );
}

export default reduxForm({
  form: 'ExpenseForm',
})(ExpenseFormCmp)