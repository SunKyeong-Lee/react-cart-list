/** redux-persist : 로컬/세션 스토리지에 저장해 데이터 유지 */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 로컬스토리지
import storageSession from "redux-persist/lib/storage/session"; // 세션스토리지

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from "../slice/cartSlice";

const reducers = combineReducers({
  cartlist: cartSliceReducer,
  // ...
});

const persistConfig = {
  key: "cartlist",
  // 로컬스토리지에 저장, 세션스토리지는 storage: storageSession
  storage,
  // 적용 대상목록 - reducer이름을 문자열로 넣어준다.
  whitelist: ["cartlist"],
  // 제외 대상목록은 blacklist: [""],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export default store;
