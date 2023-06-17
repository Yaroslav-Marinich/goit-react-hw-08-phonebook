import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from './contactsOperations';
import { contactsInitialState } from './contactsInitialState';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.contacts = action.payload;
  state.error = '';
};

const handleFulfilledCreate = (state, action) => {
  state.isLoading = false;
  state.contacts.push(action.payload);
  state.error = '';
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleFulfilledGet)
      .addCase(createContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getContacts.pending,
          createContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          createContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export default contactsSlice.reducer;
