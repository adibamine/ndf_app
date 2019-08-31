import React from 'react';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import useStyles from './styles';
import Copyright from 'components/Copyright'
import Container from '@material-ui/core/Container';
import CustomersPage from 'pages/Customers';
import DashboardPage from 'pages/Dashboard';
import AlertsPage from 'pages/Alerts';


const AppRoute = ({ component: Component, ...rest }) => {
  const classes = useStyles();
  return (
    <div>
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={clsx(classes.menuButton, classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              MEDINA-NDFS
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper),
          }}
        >
          <div className={classes.toolbarIcon}>

          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/customers/" component={CustomersPage} />
            <Route path="/alerts/" component={AlertsPage} />
          </Switch>
          <Copyright />
        </Container>
        </main>
      </div>
    </Router>
    </div>
)}
;


export default AppRoute