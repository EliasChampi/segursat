import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { AuthContext } from "context/consumer";
import { Container } from "./components";
import cache from "helpers/cache";
const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
  center: {
    justifyContent: "center",
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();
  const { setUser } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = (data) => {
    setTimeout(() => {
      // borrar.
      cache.setItem("user", data)
      setUser(data);
      console.log(data);
      history.push("/");
    }, 1000);
  };

  return (
    <Container
      title="Iniciar Sesión"
      subtitle="Ingrese sus credenciales de autenticación para acceder"
      back="/recuperar"
      backname="Olvide mi Contraseña"
    >
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmitForm)}
        autoComplete="off"
      >
        <TextField
          fullWidth
          variant="outlined"
          className={classes.textField}
          error={!!errors.username}
          helperText={errors.username && errors.username.message}
          label="Usuario"
          name="username"
          inputRef={register({
            required: "Este campo es requerido",
          })}
        />
        <TextField
          fullWidth
          variant="outlined"
          className={classes.textField}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          label="Contraseña"
          name="password"
          type="password"
          inputRef={register({
            required: "Su contraseña es requerido",
            minLength: {
              value: 6,
              message: "contraseña posee mas caracteres",
            },
          })}
        />
        <Button
          className={classes.signInButton}
          color="primary"
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
};

export default Login;
