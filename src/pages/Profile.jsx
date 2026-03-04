import { useSession } from "../hooks/context/SessionContext.jsx";

function Profile() {
    const { user, logout } = useSession();

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5"
        }}>
            <div style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                width: "300px"
            }}>
                <h2 style={{
                    marginBottom: "20px",
                    color: "#333"
                }}>
                    Bienvenido {user.fullName}
                </h2>

                <button
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}

export default Profile;