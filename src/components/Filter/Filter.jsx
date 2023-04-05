import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);

    return (
      <label className={css.label}>
        Find contacts by name:
        <input type="text" value={ filter} onChange={e =>dispatch(setFilter(e.currentTarget.value))} className={css.input} />
      </label>
    );
  };

  Filter.propTypes = {
    value: PropTypes.string,
  
  }