const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState('light');
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

function App() { 

        return (
            <ThemeProvider>
                <div className="app">
                    <h1>Selector claro o oscuro</h1>
                    <ThemeDisplay />
                    <ThemeToggle />
                </div>
            </ThemeProvider>
        );
}

function ThemeDisplay() {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div className="theme-display">
            Tema actual: {theme === 'light' ? '🌞 Claro' : '🌚 Oscuro'}
        </div>
    );
}

function ThemeToggle() {
    const { toggleTheme } = React.useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className="theme-button">
            Cambiar Tema
        </button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);