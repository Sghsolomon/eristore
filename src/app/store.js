import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { nikeReducer } from "../features/nikes/nikeSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
    nikes: nikeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
