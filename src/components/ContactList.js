import React, { useState, useEffect } from 'react';
import { fetchContacts, deleteContact } from '../actions/ContactActions';
import contactStore from '../stores/ContactStore';

const ContactList = () => {
  const [contacts, setContacts] = useState(contactStore.getAll());

  useEffect(() => {
    contactStore.on('change', getContacts);
    if (contacts.length === 0) {
      fetchContacts().then(({ data }) => setContacts(data));
    }
    return () => contactStore.removeListener('change', getContacts);
  }, [contacts]);

  const getContacts = () => {
    setContacts(contactStore.getAll());
  };

  const handleDelete = (id) => {
    deleteContact(id).then(() => setContacts(contacts.filter(contact => contact.id !== id)));
  };

  return (
    <div>
      <h2>Список контактов</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => handleDelete(contact.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
