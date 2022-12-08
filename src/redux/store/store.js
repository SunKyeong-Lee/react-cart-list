// redux-toolkit + redux-persist(로컬/세션 스토리지에 저장해 데이터 유지)

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
// 로컬스토리지에 저장
import storage from "redux-persist/lib/storage";
// 세션스토리지에 저장
// import storageSession from 'redux-persist/lib/storage/session

import cartSliceReducer from "../slice/cartSlice";

const reducers = combineReducers({
  cartlist: cartSliceReducer,
});

const persistConfig = {
  key: "cartlist",
  // 로컬스토리지에 저장, 세션스토리지는 storage: storageSession
  storage,
  // 적용 대상목록 - reducer를 넣는게 아니라 reducer이름을 문자열로 넣어
  whitelist: ["cartlist"],
  // blacklist: [""], // 제외 대상목록
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//   reducer: persistedReducer,
// });

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export default store;
