import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsToShow,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import './styles.css'

export const ContactsList = () => {
  const contactsToShow = useSelector(selectContactsToShow);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className='contactsContainer'>
      <h2 className='contactsTitle'>Contacts</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className='contactsList'>
          {contactsToShow.map(contact => (
            <li key={contact.id} className='contactsItem'>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
      {!contactsToShow?.length && !error && !isLoading && (
        <div className='noContactsText'>There are no contacts in your Phonebook.</div>
      )}

      {error && <div>{error}</div>}
    </div>
  );
};
