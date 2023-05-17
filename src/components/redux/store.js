import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './index';


export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});


