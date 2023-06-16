import { findContact } from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const name = e => {
    dispatch(findContact(e.currentTarget.value.toLowerCase()));
  };

  return (
    <div>
      <label>
        Find contact by name
        <input type="text" name="filter" value={filter} onChange={name} />
      </label>
    </div>
  );
};
