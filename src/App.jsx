// src/App.jsx
import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm'; // Optional
import { fetchContacts, addContact } from './api/contacts';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setLoading(true);
        const data = await fetchContacts();
        setContacts(data);
        setFilteredContacts(data);
      } catch (err) {
        setError('Failed to fetch contacts.');
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };
    getContacts();
  }, []);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredContacts(results);
  }, [searchTerm, contacts]); // Re-filter whenever searchTerm or contacts change

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddContact = async (newContactData) => {
    try {
      const added = await addContact(newContactData);
      setContacts((prevContacts) => [...prevContacts, added]);
      // The useEffect for filtering will automatically update filteredContacts
    } catch (err) {
      alert('Failed to add contact.');
      console.error('Error adding contact:', err);
    }
  };

  if (loading) return <div className="loading">Loading contacts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app-container">
      <h1>My Contact List</h1>
      <AddContactForm onAddContact={handleAddContact} /> {/* Optional */}
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;