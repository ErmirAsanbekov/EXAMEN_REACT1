import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Контактная книга</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;

