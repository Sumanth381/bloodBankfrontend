import { configureStore } from "@reduxjs/toolkit";
import notificationslice from './notificationslice'


export const store = configureStore({
  reducer: {
    notification: notificationslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;