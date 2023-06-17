import { NavLink } from 'react-router-dom';
import './styles.css'

export const AuthNav = () => {
  return (
    <div id="authBar">
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Log In
      </NavLink>
    </div>
  );
};
