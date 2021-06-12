import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Debt } from './model';

const initialState: Array<Debt> = [];

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
export const selectDebts = (state: RootState) => state.debts;

export default debtsSlice.reducer;