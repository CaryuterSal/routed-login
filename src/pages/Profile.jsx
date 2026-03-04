import {useSession} from "../hooks/context/SessionContext.jsx";


function Profile() {
    const { user } = useSession();

    return (
        <div>
            <h2>Bienvenido {user.fullName}</h2>
        </div>
    );
}

export default Profile;
