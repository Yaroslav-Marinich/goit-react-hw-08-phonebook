import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="heroContainer">
      <h1 className="heroTitle">Welcome to the ContactBook</h1>
      {!isLoggedIn && (
        <div className="heroNav">
          <Link to="/register" className="heroNavLink">
            Register
          </Link>
          <Link to="/login" className="heroNavLink">
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
