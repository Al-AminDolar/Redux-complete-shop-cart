import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import cartSlice from "./slice/cartSlice";

const reducers = combineReducers({
  user: userSlice,
  cart: cartSlice,
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
