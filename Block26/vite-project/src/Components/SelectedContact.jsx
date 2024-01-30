import React, { useEffect, useState } from "react";
const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
  const [contact, setContact] = useState([null]);
  console.log(contact);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  return (
    contact && (
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    )
  );
};

export default SelectedContact;
