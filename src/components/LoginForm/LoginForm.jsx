import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import './styles.css'

const LogInScheme = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters as min')
    .matches(/[a-zA-Z]/, 'Password must contain at least one Latin letter')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginFormContainer">
      <h1 className="loginFormTitle">Log In form</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LogInScheme}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off" className="loginForm">
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
            Log In
          </button>
        </Form>
      </Formik>

      <p className="loginText">
        Is it your first time here? Please,
        <Link to="/register" className="loginTextLink">
          Register!
        </Link>
      </p>
    </div>
  );
};
