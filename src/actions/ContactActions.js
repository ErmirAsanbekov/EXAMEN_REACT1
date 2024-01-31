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

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))