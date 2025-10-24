// src/api/contacts.js

const contactsData = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '111-222-3333' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '444-555-6666' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '777-888-9999' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', phone: '123-456-7890' },
  { id: 5, name: 'Eve Adams', email: 'eve@example.com', phone: '987-654-3210' },
];

export const fetchContacts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(contactsData);
    }, 500); // Simulate network delay
  });
};

export const addContact = (newContact) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = contactsData.length > 0 ? Math.max(...contactsData.map(c => c.id)) + 1 : 1;
      const contactWithId = { ...newContact, id };
      contactsData.push(contactWithId);
      resolve(contactWithId);
    }, 300);
  });
};