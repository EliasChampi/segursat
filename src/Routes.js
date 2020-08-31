import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { WsbRoute } from "./components/Routes";
import * as pages from "./pages"

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <WsbRoute title="Dashboard" path='/dashboard' component={pages.DashboardPage} />
        <WsbRoute title="Eventos" path='/events' component={pages.EventsPage} />
        <WsbRoute title="Historico" path='/history_events' component={pages.HistoryEvent} />
        <WsbRoute title="Checkpoint" path='/checkpoints' component={pages.CheckpointPage} />
        <WsbRoute title="Conductores" path='/drivers' component={pages.DriversPage} />
        <WsbRoute title="Unidades" path='/units' component={pages.UnitsPage} />

        {/* 
        <Route path='*' component={pages.NotFound}></Route>
        */}
      </Switch>
    );
  }
}

export default Routes;
