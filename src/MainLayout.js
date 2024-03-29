import React from 'react';
import { Switch, Route} from "react-router-dom";
import CustomersPage from 'pages/Customers';
import DashboardPage from 'pages/Dashboard';
import AlertsPage from 'pages/Alerts';

export default function() {
    return(
        <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/customers/" component={CustomersPage} />
            <Route path="/alerts/" component={AlertsPage} />
      </Switch>
    );
}