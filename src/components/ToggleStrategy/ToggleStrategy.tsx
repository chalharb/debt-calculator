import React from 'react';
import { Strategy } from './types';

import { 
    createStyles,
    Theme, 
    withStyles, 
} from '@material-ui/core/styles';

import { 
    Grid, 
    Switch,
    Typography, 
} from '@material-ui/core';
import { StyledSwitch } from './styled';

// Redux
import { useAppDispatch } from '../../app/hooks';
import { updateStrategy } from './toggleStrategySlice';

const AntSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 28,
            height: 16,
            padding: 0,
            display: 'flex',
        },
        switchBase: {
            padding: 2,
            color: theme.palette.common.white,
            '&$checked': {
                transform: 'translateX(12px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
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

const ToggleStrategy = () => {
    const dispatch = useAppDispatch();
    const [state, setState] = React.useState({
        toggleValue: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        let strategy: Strategy = state.toggleValue ? 'snowball' : 'avalanche';
        dispatch(updateStrategy(strategy));
    };
    return (
        <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Snowball</Grid>
                <Grid item>
                    <StyledSwitch checked={state.toggleValue} onChange={handleChange} name="toggleValue" />
                </Grid>
                <Grid item>Avalanche</Grid>
            </Grid>
        </Typography>
    );
};

export default ToggleStrategy;