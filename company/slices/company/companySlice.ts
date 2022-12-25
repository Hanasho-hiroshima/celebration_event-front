import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '~/lib/redux/store'
import { CompanyDetail } from '~/types/company/api'

export type CompanyState = {
  company: CompanyDetail | null
}

const initialState: CompanyState = {
  company: null,
}

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<CompanyDetail>) => {
      state.company = action.payload
    },
    resetCompany: (state) => {
      state.company = null
    },
  },
})

export const { setCompany, resetCompany } = companySlice.actions
export const companyState = (state: RootState) => state.company.company

export default companySlice.reducer
