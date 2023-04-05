import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contact/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const STORAGE_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const addContact = newContact => {
    const contact = {
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    };
    
    setContacts(contacts => {
      return contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
        ? alert(`${newContact.name} is already in contacts`)
        : [contact, ...contacts];
    });
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ width: '450px', margin: '0 auto' }}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onFilter={onFilter} />
      <ContactList
        contacts={filterContactsList}
        deleteContact={deleteContact}
      />
    </div>
  );
}
