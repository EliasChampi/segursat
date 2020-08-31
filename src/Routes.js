import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { WsbRoute } from "./components/Routes";
import * as pages from "./pages"

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <WsbRoute path='/dashboard' component={pages.DashboardPage} />
        <WsbRoute path='/events' component={pages.EventsPage} />
        <WsbRoute path='/history_events' component={pages.HistoryEvent} />
        <WsbRoute path='/checkpoints' component={pages.CheckpointPage} />
        <WsbRoute path='/drivers' component={pages.DriversPage} />
        <WsbRoute path='/units' component={pages.UnitsPage} />
        
        {/* 
        <Route path='*' component={pages.NotFound}></Route>
        */}
      </Switch>
    );
  }
}

export default Routes;
