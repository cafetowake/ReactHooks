const UserSearch = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [users] = React.useState([
        {
            name: "Michael Scott",
            description: "Me gusta hacer impersonaciones de Austin Powers y ser el mejor jefe del mundo"
        },
        {
            name: "Dwight Schrute",
            description: "Asistente al Jefe Regional y experto en cultivo de remolacha"
        },
        {
            name: "Jim Halpert",
            description: "Fanático de hacer bromas a Dwight y jugar al básquet"
        },
        {
            name: "Pam Beesly",
            description: "Artista y ex recepcionista que ahora es vendedora"
        }
    ]);

    const filteredUsers = React.useMemo(() => {
        console.log("Recalculando filtro...");
        return users.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, users]);



    return (
        <div className="container">
            <h1>Búsqueda de Personajes - The Office</h1>
            
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Buscar personajes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="user-list">
                <h2>Personajes ({filteredUsers.length})</h2>
                {filteredUsers.map((user, index) => (
                    <div key={index} className="user-card">
                        <h3>{user.name}</h3>
                        <p>{user.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserSearch />);