import { useState } from "react";
import Filter from "./components/Filter";
import Heading from "./components/Heading";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    const newPersonObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (nameExists || newName === "") {
      alert(`No input provided or ${newName} is already in the phonebook`);
    } else {
      setPersons(persons.concat(newPersonObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <>
      <Heading text={"Phonebook"} />
      <Filter value={filterName} onChange={handleFilterChange} />
      <Heading text={"add a new"} />
      <PersonForm
        onSubmit={addNewPerson}
        nameValue={newName}
        nameChange={handleNewNameChange}
        numberValue={newNumber}
        numberChange={handleNewNumberChange}
        buttonType={"submit"}
      />
      <Heading text={"Numbers"} />
      <Persons array={personsToShow} />
    </>
  );
};

export default App;
