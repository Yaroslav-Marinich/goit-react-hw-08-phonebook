import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const ContactValidation = Yup.object().shape({
  name: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Required!'),
  number: Yup.string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validation={ContactValidation}
        onSubmit={(values, actions) => {
          dispatch(addContact(values, values.name));
          actions.resetForm();
        }}
      >
        <Form action="">
          <label htmlFor="">
            Name
            <Field name="name" placeholder="Jane Doe" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label htmlFor="">
            Number
            <Field name="number" placeholder="000-00-00" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
