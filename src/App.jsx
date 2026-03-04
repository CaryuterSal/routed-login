import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import {SessionProvider} from "./hooks/context/SessionContext.jsx";

function App() {
    return (
        <SessionProvider>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<LoginForm />} />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
        </SessionProvider>
    );
}

export default App;