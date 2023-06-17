import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import './styles.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className='userMenuContainer'>
      <p className='userMenuText'>Welcome,{user.name} </p>
      <button type="button" className='userMenuBtn' onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
