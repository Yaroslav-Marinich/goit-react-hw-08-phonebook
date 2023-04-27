import PropTypes from 'prop-types';

export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
