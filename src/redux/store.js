import { contactsReducer } from './contactsSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice.js';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';



export const store = configureStore({
  reducer: {
    contacts:   contactsReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

