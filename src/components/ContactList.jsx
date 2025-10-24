// src/components/ContactList.jsx
import React from 'react';
import ContactCard from './ContactCard';
import './ContactList.css';

function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;