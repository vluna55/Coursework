import { useState } from "react";
import "./App.css";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}

export default App;
