import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface DebtModalProps {
    isOpen?: boolean;
    children?: React.ReactNode;
    ref?: any
}

const DebtModal: React.FC<DebtModalProps> = React.forwardRef(({ isOpen = false, children }, ref: any) => {
    const [modalIsOpen, setOpen] = React.useState(isOpen);

    const toggleModalState = () => {
        setOpen(!modalIsOpen);
    };

    React.useImperativeHandle(ref, () => ({ toggleModalState }));

    return (
        <Dialog open={modalIsOpen} onClose={toggleModalState} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Debt</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your information to create a new debt.
                </DialogContentText>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleModalState} color="secondary">
                    Cancel
                </Button>
                <Button onClick={toggleModalState} variant="contained" color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default DebtModal;