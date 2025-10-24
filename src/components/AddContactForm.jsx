// src/components/AddContactForm.jsx
import React, { useState } from 'react';
import './AddContactForm.css';

function AddContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }
    onAddContact({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <h3>Add New Contact</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactForm;