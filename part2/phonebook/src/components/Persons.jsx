import Person from "./Person";

const Persons = ({ array, deletePerson }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {array.map((person) => (
        <Person
          key={person.id}
          person={person}
          deletePerson={() => deletePerson(person.id)}
        />
      ))}
    </ul>
  );
};

export default Persons;
