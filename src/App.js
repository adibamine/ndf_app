import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import useStyles from './styles';
import Copyright from 'components/Copyright'
import Container from '@material-ui/core/Container';
import MainLayout from './MainLayout';
import AppHeader from 'widgets/AppHeader';
import AppSideBar from 'widgets/AppSideBar';

const AppRoute = ({ component: Component, ...rest }) => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppHeader />
        <AppSideBar />
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <MainLayout />
          <Copyright />
        </Container>
        </main>
      </div>
    </Router>
)}
;


export default AppRoute