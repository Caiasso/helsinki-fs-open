const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].nome} exercise={parts[0].exercise1} />
      <Part part={parts[1].nome} exercise={parts[1].exercise1} />
      <Part part={parts[2].nome} exercise={parts[2].exercise1} />
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts[0].exercise1 + parts[1].exercise1 + parts[2].exercise1}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const parts = [
    {
      nome: "Fundamentos da biblioteca React",
      exercise1: 10,
    },
    {
      nome: "Usando props para acessar dados",
      exercise1: 7,
    },
    {
      nome: "Estado de um componente",
      exercise1: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
