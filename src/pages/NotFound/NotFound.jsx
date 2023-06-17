import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='errorPageContainer'>
      <h1 className='errorPageTitle'>Page not found</h1>
      <p className='errorPageText'>404 Error</p>
      <Link to="/" className='errorPageBtn'>Back to HomePage</Link>
    </div>
  );
};

export default NotFound;
