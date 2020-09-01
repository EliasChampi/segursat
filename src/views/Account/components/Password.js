import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  IconButton,
  DialogContentText,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { PASS } from "constants/global";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Modal } from "components";

const Password = ({ user, goToHome }) => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = (payload) => {
   /**
    * here look
    */
  };

  const openModal = () => {
    setVisible(false);
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          subheader="Actualizar mi Contraseña"
          title="Seguridad"
          action={
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setVisible(!visible)}
            >
              {visible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          }
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                label="Contraseña actual"
                name="password"
                variant="outlined"
                type={visible ? "text" : "password"}
                inputRef={register({
                  required: "Ingrese su contraseña actual",
                })}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={!!errors.newPassword}
                helperText={errors.newPassword && errors.newPassword.message}
                label="Nueva contraseña"
                name="newPassword"
                variant="outlined"
                type={visible ? "text" : "password"}
                inputRef={register({
                  required: "Este campo es requerido",
                  pattern: {
                    value: PASS,
                    message:
                      "Se requiere al menos 6 letras, una mayuscula y un numero",
                  },
                })}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={!!errors.confirm}
                helperText={errors.confirm && "Su contraseña no coincide"}
                label="Confirmar contraseña"
                name="confirm"
                variant="outlined"
                type={visible ? "text" : "password"}
                inputRef={register({
                  validate: (value) => value === getValues("newPassword"),
                })}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="secondary" onClick={handleSubmit(openModal)}>
            Guardar Cambios
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        close={() => setOpen(false)}
        title="Confirmar"
        handleConfirm={handleSubmit(onSubmit)}
      >
        <DialogContentText id="alert-dialog-description">
          ¿Estas seguro de modificar tu contraseña?
        </DialogContentText>
      </Modal>
    </React.Fragment>
  );
};

Password.propTypes = {
  goToHome: PropTypes.func.isRequired,
};

export default Password;
