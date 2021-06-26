import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { Debt } from '../../app/Debt/model'
import { NumberField, PercentField } from '../../helpers/numberFormatter';

const DebtForm = () => {
    const [debt, setDebt] = React.useState<Debt>({
        id: 0,
        name: "",
        rate: 3.7,
        payment: 12.22,
        balance: 2500
    });

    const handleChange = (prop: keyof Debt) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setDebt({ ...debt, [prop]: event.target.value });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="debt-name"
                    label="Account Name"
                    variant="outlined"
                    value={debt.name}
                    onChange={handleChange('name')}
                    autoFocus={true}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Interest Rate"
                    value={debt.rate}
                    variant="outlined"
                    onChange={handleChange('rate')}
                    name="numberformat"
                    id="debt-rate"
                    InputProps={{
                        inputComponent: PercentField as any,
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Minimum Payment"
                    value={debt.payment}
                    variant="outlined"
                    onChange={handleChange('payment')}
                    name="numberformat"
                    id="debt-payment"
                    InputProps={{
                        inputComponent: NumberField as any,
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Account Balance"
                    value={debt.balance}
                    variant="outlined"
                    onChange={handleChange('balance')}
                    name="numberformat"
                    id="debt-balance"
                    InputProps={{
                        inputComponent: NumberField as any,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default DebtForm;