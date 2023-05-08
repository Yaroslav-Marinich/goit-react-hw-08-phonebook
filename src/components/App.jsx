import { Component } from 'react';
import defaultContacts from './defaultContacts.json';
import { ContactForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  addContact = newName => {
    if (this.state.contacts.find(contact => contact.name === newName.name)) {
      alert(`${newName.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = evt => {
    this.setState({
      filter: evt.currentTarget.value.toLocaleLowerCase().trim(),
    });
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const {
      addContact,
      findContact,
      deleteContact,
      state: { filter, contacts },
    } = this;

    const contactsToShow = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );

    return (
      <div>
        <ContactForm onAdd={addContact} />
        <Filter value={filter} onChange={findContact} />
        <ContactsList contacts={contactsToShow} onDelete={deleteContact} />
      </div>
    );
  }
}
