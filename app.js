function App() {

    return (

            <div className="app">
                <h1>Selector claro o oscuro</h1>
                <ThemeDisplay />
                <ThemeToggle />
            </div>
    );
}

function ThemeToggle() {
    return (
        <button className="theme-button">
            Cambiar Tema
        </button>
    );
}

function ThemeDisplay() {
    return (
        <div className="theme-display">
            Tema actual: 🌞 Claro o 🌚 Oscuro
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);