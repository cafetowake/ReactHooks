function CartaElementos() {
  const [randomNumber, setRandomNumber] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  const createRandom = React.useCallback(() => {
    const num = Math.floor(Math.random() * 100);
    console.log("Generando número aleatorio:", num);
    setRandomNumber(num);
  }, []);

  const addCounter = () => {
    console.log("Incrementando contador");
    setCounter(prev => prev + 1);
  };

  return (
    <div className="card">
      <h2>Carta de Elementos</h2>
      <p><strong>Número aleatorio:</strong> {randomNumber}</p>
      <p><strong>Contador:</strong> {counter}</p>

      <BotonOptimizado onClick={createRandom} />
      <BotonNormal onClick={addCounter} />
    </div>
  );
}

const BotonNormal = ({ onClick }) => {
  console.log("BotonNormal renderizado");
  return <button onClick={onClick}>Aumentar contador</button>;
};

const BotonOptimizado = React.memo(({ onClick }) => {
  console.log("BotonOptimizado renderizado");
  return <button onClick={onClick}>Generar número aleatorio</button>;
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartaElementos />);
