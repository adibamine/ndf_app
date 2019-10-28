import React from 'react';
import Input from '@material-ui/core/Input';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'


export default class ExpenseFormCmp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: undefined,
      name: '',
      description: '',
      paymentMethod: '',
      amount: ''
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePmChange = this.handlePmChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(value) {
    this.setState({date: value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }


  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }


  handlePmChange(event) {
    this.setState({paymentMethod: event.target.value});
  }


  handleAmountChange(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmit(event) {
    this.props.addExpense(this.state)
  }

  render() {
    const classes = {marginTop: '10px', display: 'flex',  justifyContent:'center'}
    return (
      <div style={classes}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          format="dd/MM/yyyy"
          name="date"
          onChange={this.handleDateChange}
          value={this.state.date}
        />
        </MuiPickersUtilsProvider>
        <Input
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <Input
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <Select
          name="paymentMethod"
          value={this.state.paymentMethod}
          onChange={this.handlePmChange}
      >
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="Carte">Carte</MenuItem>
          <MenuItem value="Cheque">Chèque</MenuItem>
      </Select>
        <Input
          placeholder="Amount"
          name="amount"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Add
      </Button>
      </div>
    );
  }
}