import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { connect } from 'react-redux';
import format from 'date-fns/format';

function createData(date, amount) {
  return { date, amount };
}


export function ChartCmp({ expensesList }) {
  const data = [];
  expensesList.forEach(element => {
    const formattedDate = format(element.date, 'dd/MM/yyyy');
    var found = data.find(elem => elem.date === formattedDate);
    if(found) {
      found.amount += 1;
    } else {
      data.push(createData(formattedDate, 1));
    }
  });
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export function mapStateToProps(state) {
  return {
    expensesList: state.dashboard.expensesList,
  }
}

export default connect(mapStateToProps)(ChartCmp);