import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'components';
import PropTypes from 'prop-types';
import { Grid,Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CreateDialog = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Modal open={open} fullWidth maxWidth="sm" title="Nueva unidad" close={onClose} handleConfirm={onClose}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Placa</InputLabel>
              <FilledInput
                id="license_plate"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Operador Logistico</InputLabel>
              <FilledInput
                id="logistic_operator"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Proveedor</InputLabel>
              <FilledInput
                id="provider"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Tipo de servicio</InputLabel>
              <FilledInput
                id="service_type"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">
            Guardar
          </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  )
}

CreateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired
}


export default CreateDialog;