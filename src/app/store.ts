import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import debtsReducer from './Debt/debtSlice';
import toggleStrategySliceReducer from '../components/ToggleStrategy/toggleStrategySlice';

export const store = configureStore({
  reducer: {
    strategy: toggleStrategySliceReducer,
    debts: debtsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
