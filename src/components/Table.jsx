import {USERS} from "../assets/user-data.js";

function Table({arr}){
    return (
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
            {arr.map((u) => (
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
    )
}

export default Table;