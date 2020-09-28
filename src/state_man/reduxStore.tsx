import React, { PropsWithChildren } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AsyncStorage  from '@react-native-community/async-storage'

import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleWare from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import {rootReducer} from './reducers';
import { Provider } from 'react-redux';
import { rootSaga } from './sagas';
import { Platform } from 'react-native';

// DEBUGGING NATIVE ASYNC STORAGE ISSUE
AsyncStorage.setItem("www", "www", (e) => {
  if (e) throw e;
});



const persistConfig = {
    key: 'root',
    storage: Platform.OS == "web" ? storage : AsyncStorage,
    whitelist: ['auth', 'test'] // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createPersisterAndStore = () => {
  const sagaMiddleware = createSagaMiddleWare()

  let store = createStore(persistedReducer,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
    )
  let persistor = persistStore(store)
  return { sagaMiddleware, store, persistor }
}



const { sagaMiddleware, store, persistor } = createPersisterAndStore()

sagaMiddleware.run(rootSaga);

export const PersistedProvider = ({children }: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       {children}
      </PersistGate>
    </Provider>
  );
};