import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {USERS} from "../assets/user-data.js";
import {useSession} from "../hooks/context/SessionContext.jsx";
import CustomButton from "./CustomButton.jsx";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { login } = useSession();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  function handleLogin(e) {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, password);

    const userFound = USERS.find(
        (u) => u.username === username && u.password === password
    );

    if (!userFound) {
      setError("Credenciales incorrectas");
      return;
    }

    login(userFound);

    if (userFound.role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  }
  return (
      <div
          style={{
            flexGrow: 1,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f4f6f8",
          }}
      >
        <form
            onSubmit={handleLogin}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "40px",
              width: "320px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "10px" , color: "black" }}>
            Login
          </h1>

          {error && (
              <p
                  style={{
                    color: "#e63946",
                    backgroundColor: "#ffe5e5",
                    padding: "8px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
              >
                {error}
              </p>
          )}

          <input
              ref={usernameRef}
              type="text"
              placeholder="Correo"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
          />

          <input
              ref={passwordRef}
              type="password"
              placeholder="Contraseña"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
          />

            <CustomButton type={'positive'} fun={login} />
        </form>
      </div>
  );
}

export default LoginForm;