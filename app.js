const UserSearch = () => {
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

    return (
        <div className="container">
            <h1>Búsqueda de Personajes - The Office</h1>
            <div className="user-list">
                <h2>Personajes</h2>
                {users.map((user, index) => (
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