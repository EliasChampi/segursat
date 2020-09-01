import React, { useContext } from "react";
import { Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth";
import { ProtectedRoute, PublicRoute } from "./components";
import * as v from "./views";

const Routes = () => {
  const { isAuthed, user } = useContext(AuthContext);

  return (
    <Switch>
      <ProtectedRoute path='/' exact component={v.Dashboard} isAuthed={isAuthed} />
      <ProtectedRoute
        path="/dashboard"
        component={v.Dashboard}
        title="Dashboard"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        path="/events"
        component={v.Event}
        title="Últimos eventos"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        path="/history-events"
        component={v.History}
        title="Histórico"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        path="/checkpoint"
        component={v.Checkpoint}
        title="Checkpoint"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        path="/drivers"
        component={v.Driver}
        title="Conductores"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        path="/units"
        component={v.Unit}
        title="Unidades"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        path="/about"
        component={v.About}
        title="Acerca de"
        isAuthed={isAuthed}
      />

      <ProtectedRoute
        path="/me"
        component={v.Account}
        title="Mi perfil"
        isAuthed={isAuthed}
      />

      <PublicRoute
        path="/login"
        component={v.Login}
        isAuthed={isAuthed}
      />
      <PublicRoute
        path="/recuperar"
        component={v.Recover}
        isAuthed={isAuthed}
      />

      <PublicRoute
        component={v.NotFound}
        isAuthed={isAuthed}
        path="/desconocido"
      />

      <Redirect to="/desconocido" />
    </Switch>
  );
};

export default Routes;
