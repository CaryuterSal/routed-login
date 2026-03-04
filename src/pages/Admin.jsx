import {useSession} from "../hooks/context/SessionContext.jsx";
import {USERS} from "../assets/user-data.js";

function Admin() {
    const { user , logout} = useSession();

    return (
        <div style={{
            padding: "30px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f4f6f9",
            minHeight: "100vh",
            color: "black",
        }}>
            <h2 style={{
                marginBottom: "20px",
                color: "#1d3557"
            }}>
                Admin: {user.fullName}
            </h2>

            <table style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff"
            }}>
                <thead>
                <tr style={{backgroundColor: "#3a86ff", color: "white"}}>
                    <th style={{padding: "12px"}}>Usuario</th>
                    <th style={{padding: "12px"}}>Nombre</th>
                    <th style={{padding: "12px"}}>Rol</th>
                </tr>
                </thead>

                <tbody>
                {USERS.map((u) => (
                    <tr key={u.username} style={{
                        textAlign: "center",
                        borderBottom: "1px solid #e0e0e0"
                    }}>
                        <td style={{padding: "10px"}}>{u.username}</td>
                        <td style={{padding: "10px"}}>{u.fullName}</td>
                        <td style={{padding: "10px"}}>{u.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={logout} >CERRAR SESION</button>
        </div>
    );
}

export default Admin;