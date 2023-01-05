import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: "any",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
