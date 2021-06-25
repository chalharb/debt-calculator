import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface DebtModal {
    isOpen?: boolean;
    onClick?: () => void;
}

const DebtModal:React.FC<DebtModal> = ({ isOpen = false }) => {
    const [open, setOpen] = React.useState(isOpen);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add Debt
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Debt</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your information to create a new debt.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DebtModal;