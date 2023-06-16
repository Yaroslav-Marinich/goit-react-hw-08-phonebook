import { useDispatch, useSelector } from 'react-redux';
import { createContactThunk } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { selectContacts } from '../../redux/selectors';

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
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validation={ContactValidation}
        onSubmit={(values, actions) => {
          if (contacts.find(contact => contact.name === values.name)) {
            toast.error(`${values.name} is already in contacts.`);
            return;
          }
          dispatch(createContactThunk(values, values.name));
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
