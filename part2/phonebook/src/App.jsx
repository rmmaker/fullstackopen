import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    const newPersonObject = {
      id: persons.length + 1,
      name: newName,
    };

    if (nameExists || newName === "") {
      alert(`No input provided or ${newName} is already in the phonebook`);
    } else {
      setPersons(persons.concat(newPersonObject));
      setNewName("");
    }
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </>
  );
};

export default App;
