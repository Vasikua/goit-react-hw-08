import  contactsReducer  from './contacts/slice';
import  filterReducer  from './filter/slice';
import authReducer from './auth/slice';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

