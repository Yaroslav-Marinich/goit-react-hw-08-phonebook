import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../../components/defaultContacts.json';
import toast from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    initContacts: initialContacts,
  },
  reducers: {
    addContact(state, action) {
      if (
        state.initContacts.find(contact => contact.name === action.payload.name)
      ) {
        toast.error(`${action.payload.name} is already in contacts.`);
        return;
      }

      state.initContacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.initContacts = state.initContacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;

export default contactsSlice.reducer;
