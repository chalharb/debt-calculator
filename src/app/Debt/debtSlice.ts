import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Debt } from './model';

const initialState: Array<Debt> = [
    { id: 0, name: 'American Express', payment: 100, rate: 1.25, balance: 500 },
    { id: 1, name: 'Student Loans', payment: 200, rate: 2.25, balance: 600 },
    { id: 2, name: 'Car Payment', payment: 300, rate: 3.25, balance: 700 },
    { id: 3, name: 'Hospital Bill', payment: 400, rate: 4.25, balance: 800 },
];

export const debtsSlice = createSlice({
    name: 'debts',
    initialState,
    reducers: {
        addDebt: (state, action: PayloadAction<Debt>) => {
            state.push(action.payload);
        },
        updateDebt: (state, action: PayloadAction<Debt>) => {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.name,
                        rate: action.payload.rate,
                        payment: action.payload.payment,
                        balance: action.payload.balance,
                    };
                }

                return item;
            });
        },
        deleteDebt: (state, action: PayloadAction<Debt>) => {
            return state.filter(debt => debt.id !== action.payload.id)
        }
    }
});

export const { addDebt, updateDebt, deleteDebt } = debtsSlice.actions;
export const selectDebts = (state: RootState) => {
    let debts = [...state.debts];

    if (state.strategy === 'snowball') {
        return debts.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
    }

    if (state.strategy === 'avalanche') {
        return debts.sort((a, b) => (a.rate > b.rate) ? 1 : -1)
    }

    return debts;
}

export default debtsSlice.reducer;