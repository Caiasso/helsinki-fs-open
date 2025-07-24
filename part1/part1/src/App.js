const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Olá, {props.nome}. Você tem {props.idade} anos.
      </p>
    </div>
  );
};

const App = () => {
  const nome = "Geroge Lucas";
  const idade = 60;

  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome={nome} idade={idade} />
    </div>
  );
};

export default App;
