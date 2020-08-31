import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import EventsPage from './pages/EventsPage';
import CheckpointPage from './pages/CheckpointPage';
import DriversPage from './pages/DriversPage';
import UnitsPage from './pages/UnitsPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/checkpoints' component={CheckpointPage} />
        <Route path='/drivers' component={DriversPage} />
        <Route path='/units' component={UnitsPage} />
      </Switch>
    );
  }
}

export default Routes;
