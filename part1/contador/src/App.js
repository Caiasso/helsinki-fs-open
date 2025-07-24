import { useState } from "react";

const Exibir = ({ contador }) => <div>{contador}</div>;

const Botao = ({ onClick, texto }) => {
  return (
    <div>
      <button onClick={onClick}>{texto}</button>
    </div>
  );
};

const App = () => {
  const [contador, setContador] = useState(0);

  const aumentarEmUm = () => setContador(contador + 1);

  const diminuirEmUm = () => setContador(contador - 1);

  const zerarContador = () => setContador(0);

  return (
    <div>
      <Exibir contador={contador} />
      <Botao onClick={aumentarEmUm} texto="mais+" />
      <Botao onClick={zerarContador} texto="zerar" />
      <Botao onClick={diminuirEmUm} texto="menos-" />
    </div>
  );
};

export default App;
