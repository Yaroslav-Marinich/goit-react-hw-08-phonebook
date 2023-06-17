import { ThreeDots } from 'react-loader-spinner';
import './styles.css'

const Loader = () => {
  return (
    <div className='loderContainer'>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ff7628"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
