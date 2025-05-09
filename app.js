function CartaElementos() {

  const [counter] = React.useState(0);

  return (
    <div className="carta-elementos">
      <h2>Carta de Elementos</h2>
      <p><strong>Contador:</strong> {counter}</p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartaElementos />);
