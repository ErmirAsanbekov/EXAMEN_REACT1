import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import axios from 'axios';

export const fetchContacts = () => {
  return axios.get('http://localhost:3001/contacts');
};

export const addContact = (contact) => {
  return axios.post('http://localhost:3001/contacts', contact);
};

export const deleteContact = (id) => {
  return axios.delete(`http://localhost:3001/contacts/${id}`);
};