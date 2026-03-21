import { useEffect, useRef, useState } from "react";
import Filter from "./components/Filter";
import Heading from "./components/Heading";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addNewPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    const newPersonObject = {
      name: newName,
      number: newNumber,
    };

    const clearInputFields = () => {
      setNewName("");
      setNewNumber("");
      nameInputRef.current.focus();
    };

    if (nameExists || newName === "") {
      alert(`No input provided or ${newName} is already in the phonebook`);
      clearInputFields();
    } else {
      personService.create(newPersonObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        clearInputFields();
      });
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
        nameInputRef={nameInputRef}
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
