import {useSession} from "../hooks/context/SessionContext.jsx";
import {USERS} from "../assets/user-data.js";
import Table from "../components/Table.jsx";
import CustomButton from "../components/CustomButton.jsx";

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

            <Table arr={USERS} />
            <CustomButton fun={logout} type={'negative'} />
        </div>
    );
}

export default Admin;