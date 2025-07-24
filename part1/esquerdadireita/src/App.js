import { useEffect, useState } from "react";

const Historico = (props) => {
  if (props.todosOsCliques.length === 0) {
    return <div>Clique em um dos botões para usar a aplicação!</div>;
  }
  return (
    <div>Histórico de cliques nos botões: {props.todosOsCliques.join(" ")}</div>
  );
};

const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>{texto}</button>
);

const App = () => {
  const [esquerda, setEsquerda] = useState(0);
  const [direita, setDireita] = useState(0);
  const [todosOsCliques, setTodos] = useState([]);
  /* const [total, setTotal] = useState(0); */

  /* const [cliques, setCliques] = useState({
    esquerda: 0,
    direita: 0,
  }); */

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat("E"));
    const atualizaEsquerda = esquerda + 1;
    setEsquerda(atualizaEsquerda);
    /* setTotal(atualizaEsquerda + direita); */
  };

  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat("D"));
    const atualizaDireita = direita + 1;
    setDireita(atualizaDireita);
    /* setTotal(esquerda + atualizaDireita); */
  };

  return (
    <div>
      {esquerda}
      <Botao handleClique={handleCliqueEsquerda} texto={"Esquerda"}></Botao>
      <Botao handleClique={handleCliqueDireita} texto={"Direita"}></Botao>
      {direita}
      <Historico todosOsCliques={todosOsCliques}></Historico>
    </div>
  );
};

export default App;
