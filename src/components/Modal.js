import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from "@material-ui/core";

const nop = () => {
  // this is nop :)
}

const Modal = ({ open, close, title, children, handleConfirm, fullWidth, closeButton, maxWidth }) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {closeButton && <Button onClick={close} color="secondary">
          Cancelar
        </Button>}
        <Button onClick={handleConfirm} color="secondary" autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.defaultProps = {
  fullWidth: false,
  fullScreen: false,
  closeButton: true,
  maxWidth: "sm",
  close: nop(),
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.string,
  closeButton: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default Modal;
