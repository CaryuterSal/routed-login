import {useSession} from "../hooks/context/SessionContext.jsx";
import {USERS} from "../assets/user-data.js";


function Admin() {
    const { user } = useSession();

    return (
        <div>
            <h2>Admin: {user.fullName}</h2>

            <table border="1">
                <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                </tr>
                </thead>
                <tbody>
                {USERS.map((u) => (
                    <tr key={u.username}>
                        <td>{u.username}</td>
                        <td>{u.fullName}</td>
                        <td>{u.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;