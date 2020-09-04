import React from 'react'
import { Modal } from 'components';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
const CreateDialog = ({ open, onClose }) => {

    return (
        <Modal open={open} fullWidth maxWidth="md" title="Nueva unidad" close={onClose} handleConfirm={onClose}>
            <Typography>
                Lorem Ipsum d  enim, consectetur adipiscing elit non mi port
            </Typography>
        </Modal>
    )
}

CreateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired
}


export default CreateDialog;