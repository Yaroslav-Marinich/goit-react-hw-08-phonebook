import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsToShow, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/operations';

export const ContactsList = () => {
  const contactsToShow = useSelector(selectContactsToShow);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contactsToShow.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      {!contactsToShow?.length && !error && (
        <div>There are no available contacts in the Phonebook.</div>
      )}

      {error && <div>{error}</div>}
    </div>
  );
};
