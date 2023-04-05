import css from '../Contact/ContactList.module.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ul className={css.wrapper}>
      <li className={css.item}>
        <span>
          {name}: {number}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};
