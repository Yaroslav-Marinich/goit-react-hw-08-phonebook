import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import { Link  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import '../LoginForm/styles.css';

const RegistrationScheme = Yup.object({
  name: Yup.string()
    .min(3, 'Name should contain 3 characters as min')
    .max(10, 'Name should contain 10 characters as max')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters as min')
    .matches(/[a-zA-Z]/, 'Password must contain at least one Latin letter')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginFormContainer">
      <h1 className="loginFormTitle">Registration form</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationScheme}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off" className="loginForm">
          <label className="loginFormLabel">
            Username
            <Field
              type="text"
              name="name"
              placeholder="John"
              className="loginFormInput"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="loginFormError"
            />
          </label>
          <label className="loginFormLabel">
            Email
            <Field
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="loginFormInput"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="loginFormError"
            />
          </label>
          <label className="loginFormLabel">
            Password
            <Field
              type="password"
              name="password"
              placeholder="********"
              className="loginFormInput"
            />
            <ErrorMessage
              name="password"
              component="span"
              className="loginFormError"
            />
          </label>
          <button type="submit" className="loginFormBtn">
            Register
          </button>
        </Form>
      </Formik>

      <p className="loginText">
        Already have an account? Let's{' '}
        <Link to="/login" className="loginTextLink">
          Log In!
        </Link>
      </p>
    </div>
  );
};
