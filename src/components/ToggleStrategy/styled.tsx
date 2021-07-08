import {
    createStyles,
    Theme,
    withStyles,
} from '@material-ui/core/styles';

import {
    Switch,
} from '@material-ui/core';

export const StyledSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 35,
            height: 16,
            padding: 0,
            display: 'flex',
        },
        switchBase: {
            padding: 2,
            color: theme.palette.common.white,
            '&$checked': {
                transform: 'translateX(19px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                },
            },
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: 'none',
        },
        track: {
            border: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
        },
        checked: {},
    }),
)(Switch);