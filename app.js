function Stopwatch() {
    
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [sessions, setSessions] = React.useState([]);
  const intervalRef = React.useRef(null);

  React.useEffect(
    () => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((seg) => seg + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    } 

    return () => clearInterval(intervalRef.current);}, [running]
  );

  const toggleRunning = () => setRunning((seg) => !seg);
  
  const resetTime = () => {
    setRunning(false);
    setTime(0);
  };

  const saveSession = () => {
    setSessions((prev) => [...prev, time]);
  };


  return (
    <div className="container">
      <h1>Cronómetro</h1>
      <div className="time">{time}s</div>
      <div className="buttons">
        <button onClick={toggleRunning}>
          {running ? "Pausar" : "Iniciar"}
        </button>
        <button onClick={resetTime}>Reiniciar</button>
        <button onClick={saveSession}>Guardar Sesión</button>
      </div>
      
      <h2>Sesiones</h2>
      <ul>
        {sessions.map((t, index) => (
          <li key={index}>
            Sesión {index + 1}: {t}s
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stopwatch />);
