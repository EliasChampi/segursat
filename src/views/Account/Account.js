import React from "react";
import { Grid } from "@material-ui/core";
import { Profile, Password } from "./components";

const Account = ({ history }) => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} xl={4} xs={12}>
        <Profile />
      </Grid>
      <Grid item lg={8} md={6} xl={8} xs={12}>
        <Password goToHome={() => history.push("/dashboard")} />
      </Grid>
    </Grid>
  );
};

export default Account;
