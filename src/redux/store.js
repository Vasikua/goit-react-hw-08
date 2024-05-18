import  {contactsReducer}  from './contacts/slice';
import  {filterReducer}  from './filter/slice';
import {authReducer} from './auth/slice';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], 
}
const persistAuthReducer =persistReducer(authPersistConfig,authReducer)


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: persistAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);