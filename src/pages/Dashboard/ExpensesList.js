import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import ExpenseForm from './ExpenseForm';
import Title from 'components/Title';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { addExpense, openModal, closeModal } from 'pages/Dashboard/behavior';
import { connect } from 'react-redux';
import format from 'date-fns/format';

const shortid = require('shortid');

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  fab: {
    margin: theme.spacing(1),
  },
  button: {
    textAlign: 'center',
  }
}));

export function ExpensesListCmp({expenses, addExpense, openModal, closeModal, isModalOpen}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Expenses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(row => (
            <TableRow key={shortid.generate()}>
              <TableCell>{format(row.date,'dd/MM/yyyy')}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.button}>
        <Fab color="primary" aria-label="add" className={classes.fab}  onClick={() => openModal()} >
            <AddIcon/>
        </Fab>
      </div>
      <Modal open={isModalOpen}>
        <ExpenseForm onSubmit={(values) => addExpense(values)} closeModal={() => closeModal()}/>
      </Modal>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.dashboard.isModalOpen,
  }
} 

export default connect(mapStateToProps, { addExpense, openModal, closeModal })(ExpensesListCmp);