import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import { nikeReducer } from "../features/nikes/nikeSlice";
import logger from "redux-logger";
import { createStore } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     nikes: nikeReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
// });

// console.log("store", store.getState());

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  nikes: nikeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([logger]),
});

const persistor = persistStore(store);

export { store, persistor };

console.log("state in store", store.getState());
