import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import logger from 'redux-logger';
import sagaConfigure from './configureSaga';
import { persistedReducer } from './configureReducer';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewares: Array<any> = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // 참고 https://velog.io/@beberiche/220813-%EA%B3%B5%ED%86%B5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80
      serializableCheck: false
    }).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production'
});

sagaConfigure(sagaMiddleware);

export default store;
