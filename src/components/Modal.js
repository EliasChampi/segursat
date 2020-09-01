import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from "@material-ui/core";

const Modal = ({ open, close, title, children, handleConfirm, fullWidth }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      fullWidth={fullWidth}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={close} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="secondary" autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default Modal;
