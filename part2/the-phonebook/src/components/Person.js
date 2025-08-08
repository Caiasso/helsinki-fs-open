const Person = ({ persons }) => {
  return (
    <tr>
      <td>{persons.name}</td>
      <td>{persons.number}</td>
    </tr>
  );
};

export default Person;
