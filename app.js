function CartaElementos() {

  const [counter, setCounter] = React.useState(0);
  
  const addCounter = () => {
    console.log("Incrementando contador");
    setCounter(prev => prev + 1);
  };

  return (
    <div className="carta-elementos">
      <h2>Carta de Elementos</h2>
      <p><strong>Contador:</strong> {counter}</p>
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
