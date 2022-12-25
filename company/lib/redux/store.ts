import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import staffReducer from '~/slices/staff/staffSlice'
import companyReducer from '~/slices/company/companySlice'

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    company: companyReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
