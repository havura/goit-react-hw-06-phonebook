import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

let schema = yup.object().shape({
  name: yup
    .string()
    .min(4)
    .max(30)
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .number()
    .min(11)
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const initialValues = {
    id: nanoid(),
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmitForm = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmitForm}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className={css.input}
            />
            <ErrorMessage component="div" name="name" className={css.message} />
          </label>
          <label htmlFor="number" className={css.label}>
            Number
            <Field
              type="tel"
              name="number"
              id="number"
              placeholder="Enter your phone number"
              className={css.input}
            />
            <ErrorMessage
              component="div"
              name="number"
              className={css.message}
            />
          </label>
          <button type="sumbit" className={css.btn}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};


