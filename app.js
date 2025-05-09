function CartaElementos() {
  const [randomNumber] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  const addCounter = () => {
    console.log("Incrementando contador");
    setCounter(prev => prev + 1);
  };

  return (
    <div className="card">
      <h2>Carta de Elementos</h2>
      <p><strong>Número aleatorio:</strong> {randomNumber}</p>
      <p><strong>Contador:</strong> {counter}</p>

      <button>Generar número aleatorio</button>
      <BotonNormal onClick={addCounter} />
    </div>
  );
}

const BotonNormal = ({ onClick }) => {
  console.log("BotonNormal renderizado");
  return <button onClick={onClick}>Aumentar contador</button>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartaElementos />);
