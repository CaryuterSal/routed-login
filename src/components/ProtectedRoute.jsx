import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/context/SessionContext.jsx";

const ProtectedRoute = ({ children, allowedRole }) => {
    const { user } = useSession();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRole && user.role !== allowedRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;