import PropTypes from 'prop-types';
import css from '../Contact/ContactList.module.css';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,


};
