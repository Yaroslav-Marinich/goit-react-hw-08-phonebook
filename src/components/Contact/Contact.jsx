import { deleteContact } from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import './styles.css';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className="contactCompContainer">
      <p className="contactCompText">
        {name} : {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))} className='contactCompBtn'>
        <FiTrash2/>
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
