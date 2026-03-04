import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSession } from "./hooks/context/SessionContext";

function App() {
    const { user } = useSession();

    return (
        <Routes>
            <Route
                path="/login"
                element={
                    !user
                        ? <LoginForm />
                        : user.role === "ADMIN"
                            ? <Navigate to="/admin" />
                            : <Navigate to="/profile" />
                }
            />

            <Route
                path="/"
                element={
                    !user
                        ? <Navigate to="/login" />
                        : user.role === "ADMIN"
                            ? <Navigate to="/admin" />
                            : <Navigate to="/profile" />
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute allowedRole={"USER"} >
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin"
                element={
                    <ProtectedRoute allowedRole={"ADMIN"} >
                        <Admin />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;