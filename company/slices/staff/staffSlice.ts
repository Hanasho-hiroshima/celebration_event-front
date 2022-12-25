import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '~/lib/redux/store'
import { StaffDetail } from '~/types/staff/api'

export type StaffState = {
  staff: StaffDetail | null
}

const initialState: StaffState = {
  staff: null,
}

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setStaff: (state, action: PayloadAction<StaffDetail>) => {
      state.staff = action.payload
    },
    resetStaff: (state) => {
      state.staff = null
    },
  },
})

export const { setStaff, resetStaff } = staffSlice.actions
export const staffState = (state: RootState) => state.staff.staff

export default staffSlice.reducer
