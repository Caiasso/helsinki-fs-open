import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [person, setPerson] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "") return;

    const personObject = { name: newName };

    setPerson(person.concat(personObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>The Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {person.map((x) => (
          <Person key={x.name} person={x}></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
