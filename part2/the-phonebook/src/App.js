import { useState } from "react";
import Person from "./components/Person";
import Input from "./components/Input";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const personsToShow =
    newSearch === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newSearch.toLowerCase())
        );

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "") return;

    if (
      persons.some((x) => {
        return x.name.toLocaleLowerCase() === newName.toLowerCase();
      })
    ) {
      alert(`${newName} is already added to The PhoneBook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    var ids = persons.reduce(function (idList, currentId) {
      idList.push(currentId.id);
      return idList;
    }, []);

    const newId = Math.max(...ids) + 1;

    const personObject = { name: newName, number: newNumber, id: newId };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <h2>The Phonebook</h2>
      <Input
        handler={handleSearchChange}
        text={"filter shown with"}
        value={newSearch}
      ></Input>
      <div>
        <h2>add a new</h2>
      </div>
      <form onSubmit={addPerson}>
        <Input
          handler={handleNameChange}
          text={"number:"}
          value={newName}
        ></Input>
        <Input
          handler={handleNumberChange}
          text={"number:"}
          value={newNumber}
        ></Input>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {personsToShow.map((x) => (
            <Person key={x.id} persons={x}></Person>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
