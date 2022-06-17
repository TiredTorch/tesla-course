import { configureStore } from "@reduxjs/toolkit";
import toggleOrbitControlReducer from "./slices/toggleOrbitControl.slice";

export const store = configureStore({
  reducer: {
    toggleOrbitControl: toggleOrbitControlReducer
  }
})

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;