// src/components/ContactCard.jsx
import React from 'react';
import './ContactCard.css'; // We'll create this next

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
}

export default ContactCard;