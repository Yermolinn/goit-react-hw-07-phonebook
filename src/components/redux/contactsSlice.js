import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchContacts, addContacts, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContacts.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});





// // Експортуємо reducer щоб закинути в головний re ducer
export const contactsReducer = contactsSlice.reducer;







// __________________________________________________

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { initialState } from './initialState';


// // contactsSlice створюємо actions та reducers
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState.contacts,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         return [...state, action.payload];
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContacts(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });


// // Експортуємо actions
// export const { addContacts, deleteContacts } = contactsSlice.actions;

// // Експортуємо reducer щоб закинути в головний re ducer
// export const contactsReducer = contactsSlice.reducer;