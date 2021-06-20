import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledSwitch } from './styled';

// Redux
import { useAppDispatch } from '../../app/hooks';
import { updateStrategy } from './toggleStrategySlice';

const ToggleStrategy = () => {
    const dispatch = useAppDispatch();
    const [state, setState] = React.useState({
        toggleValue: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        dispatch(updateStrategy(state.toggleValue ? 'snowball' : 'avalanche'));
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