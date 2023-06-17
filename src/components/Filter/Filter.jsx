import { findContact } from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import './styles.css'

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const name = e => {
    dispatch(findContact(e.currentTarget.value.toLowerCase()));
  };

  return (
    <div className='filterContainer'>
      <label className='filterLabel'>
        Find contact by name
        <input type="text" className='filterInput' name="filter" value={filter} onChange={name} />
      </label>
    </div>
  );
};
