/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import format from 'date-fns/format';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function DepositsCmp({ expenses }) {
  const total = expenses.reduce((a, b) => +a + +b.amount, 0);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Expenses</Title>
      <Typography component="p" variant="h4">
        {total}DH
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {format(new Date(),'dd MMM, yyyy')}
      </Typography>
      <div>
        <Link to="/" color="primary">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

