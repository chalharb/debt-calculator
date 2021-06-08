import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import debtsReducer from '../features/debts/debtsSlice';

export const store = configureStore({
  reducer: {
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
