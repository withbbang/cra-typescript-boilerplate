import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import common, { CommonState } from 'middlewares/reduxToolkits/commonSlice';

const rootReducer = combineReducers({
  common
  // add others...
});

/**
 * 새로고침 해도 state 변화 없도록 방지
 * key, storage필수
 * storage: localStorage를 사용하여 state 값 유지
 * whitelist: 유지하고 싶은 state값들
 * blacklist: 유지하지 않을 state값들
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['common'] // add others...
};

/**
 * store에 넣을 새로운 persist reducer 반환
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

interface PropState {
  common: CommonState;
  // add others...
}

export { persistedReducer, PropState };
