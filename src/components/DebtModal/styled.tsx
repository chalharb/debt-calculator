import {
    createStyles,
    Theme,
    withStyles,
} from '@material-ui/core/styles';

import {
    Modal,
} from '@material-ui/core';

export const StyledDebtModal = withStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: '#f2f2f2',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
)(Modal);