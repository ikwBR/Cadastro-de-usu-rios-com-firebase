import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Usuário criado com sucesso!");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: "100%" }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%" }}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Register;
