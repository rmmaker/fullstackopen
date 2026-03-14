import Person from "./Person";

const Persons = ({ array }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {array.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
};

export default Persons;
