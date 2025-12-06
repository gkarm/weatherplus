import { useState } from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/WeatherPlusAPP");
            console.log("Login successfully");
        } catch (err) {
            console.error("Login failed:", err);
        }
    };
    return (
        <main className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

                <p>
                    Don’t have an account? <Link to="/signup">Register</Link>
                </p>
            </form>
        </main>
    );
};

export default LoginForm;