function App() {

    return (

            <div className="app">
                <h1>Selector claro o oscuro</h1>
                <ThemeDisplay />
            </div>
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