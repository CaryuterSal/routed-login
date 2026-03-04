import { Navigate } from "react-router-dom";
import {useSession} from "../hooks/context/SessionContext.jsx";

const ProtectedRoute = ({ children }) => {
    const { user } = useSession();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;