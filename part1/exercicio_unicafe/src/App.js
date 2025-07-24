import { useState } from "react";

const Botao = ({ handleClique, text }) => {
  return <button onClick={handleClique}>{text}</button>;
};

const Resultado = ({ type, score, adicional }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>
        {isNaN(score) ? 0 : score}
        {adicional}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad > 0)
    return (
      <table>
        <tbody>
          <Resultado type={"good  "} score={good}></Resultado>

          <Resultado type={"neutral  "} score={neutral}></Resultado>

          <Resultado type={"bad  "} score={bad}></Resultado>

          <Resultado type={"all "} score={good + neutral + bad}></Resultado>

          <Resultado type={"average  "} score={good / 3}></Resultado>

          <Resultado
            type={"positive"}
            score={(good / (good + neutral + bad)) * 100}
            adicional={"%"}
          ></Resultado>
        </tbody>
      </table>
    );
  return <p>No feedback given</p>;
};

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Botao text={"good"} handleClique={() => setGood(good + 1)}></Botao>
        <Botao
          text={"neutral"}
          handleClique={() => setNeutral(neutral + 1)}
        ></Botao>
        <Botao text={"bad"} handleClique={() => setBad(bad + 1)}></Botao>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  );
};

export default App;
