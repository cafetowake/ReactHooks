function Stopwatch() {
    
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);
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

  const toggleRunning = () => setRunning(!running);

  return (
    <div className="container">
      <h1>Cronómetro</h1>
      <div className="time">{time}s</div>
      <div className="buttons">
        <button onClick={toggleRunning}>
          {"Iniciar"}
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stopwatch />);
