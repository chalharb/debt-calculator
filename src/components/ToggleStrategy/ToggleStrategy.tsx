import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledSwitch } from './styled';
import ToggleStrategyTooltip from './ToggleStrategyTooltip';

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
                <Grid item>
                    Snowball <ToggleStrategyTooltip title="Debt Snowball" content="A debt payment strategy where accounts with the highest balances are paid first."/>
                </Grid>
                <Grid item>
                    <StyledSwitch checked={state.toggleValue} onChange={handleChange} name="toggleValue" />
                </Grid>
                <Grid item>
                    Avalanche <ToggleStrategyTooltip title="Debt Avalanche" content="A debt payment strategy where accounts with the highest interest rates are paid first."/>
                </Grid>
            </Grid>
        </Typography>
    );
};

export default ToggleStrategy;