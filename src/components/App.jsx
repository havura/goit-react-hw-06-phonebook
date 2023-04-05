import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contact/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';



const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filter.status);

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ width: '450px', margin: '0 auto' }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filterContactsList} />
    </div>
  );
};
export default App;
