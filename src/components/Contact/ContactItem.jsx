import css from '../Contact/ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.wrapper}>
      <li className={css.item}>
        <span>
          {name}: {number}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};
