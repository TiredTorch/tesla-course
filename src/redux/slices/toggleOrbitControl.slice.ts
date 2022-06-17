import { createSlice } from "@reduxjs/toolkit"

export type ToggleOrbitControl = {
  isActive: boolean
}

const initialState: ToggleOrbitControl = {
  isActive: true
}

export const toggleOrbitControlSlice = createSlice({
  name: 'toggleOrbitControl',
  initialState,
  reducers: {
    toggleIsActive: (state) => {
      state.isActive = !state.isActive;
    }
  }
})

export const {
  toggleIsActive
} = toggleOrbitControlSlice.actions;

export default toggleOrbitControlSlice.reducer;