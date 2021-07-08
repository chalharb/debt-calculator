import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Strategy } from './types';

const initialState = 'snowball' as Strategy;

export const toggleStrategySlice = createSlice({
    name: 'strategy',
    initialState,
    reducers: {
        updateStrategy: (state, action: PayloadAction<Strategy>) => {
            return state = action.payload;
        },
    }
});

export const { updateStrategy } = toggleStrategySlice.actions;
export const selectStrategy = (state: RootState) => state.strategy;

export default toggleStrategySlice.reducer;