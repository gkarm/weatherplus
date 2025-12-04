import { useState } from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import { auth } from "/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login");
        } catch (err) {
            console.error("Error signing up:", err);
            alert("Failed to sign up. Please try again.");
        }
    };

    return (
        <main className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

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

                <button type="submit">Sign Up</button>

                <p>
                    Already registered? <Link to="/login">Login</Link>
                </p>
            </form>
        </main>
    );
};

export default SignUpForm;