import React, { useState } from 'react';
import { addContact } from '../actions/ContactActions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h2>Добавить контакт</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default ContactForm;
