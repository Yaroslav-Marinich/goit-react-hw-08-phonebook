import React, { useState, useEffect } from 'react';
import defaultContacts from './defaultContacts.json';
import { ContactForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

const getDefaultContacts = () => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (parsedContacts) {
    return parsedContacts;
  }
  return defaultContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getDefaultContacts);
  const [filter, setFilter] = useState('');

  const addContact = (contact, name) => {
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    } else {
      const newContact = { ...contact, id: nanoid() };
      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const findContact = evt => {
    setFilter(evt.currentTarget.value.toLowerCase().trim());
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactsToShow = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ContactForm onAdd={addContact} />
      <Filter value={filter} onChange={findContact} />
      <ContactsList contacts={contactsToShow} onDelete={deleteContact} />
      <Toaster />
    </div>
  );
}
