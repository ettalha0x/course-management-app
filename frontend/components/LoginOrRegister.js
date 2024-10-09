import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginOrRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/auth/register", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                toggleForm();
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/auth/login", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                await router.push("/dashboard");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    const [isLogin, setIsLogin] = useState(true);
    const [swipeDirection, setSwipeDirection] = useState("");

    const toggleForm = () => {
        setSwipeDirection(isLogin ? "swipe-left" : "swipe-right");
        setTimeout(() => {
            setIsLogin(!isLogin);
            setSwipeDirection("");
        }, 200);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={`card ${swipeDirection}`}>
                        <div className="card-body">
                            {!isLogin && (
                                <form className="text-center" onSubmit={handleRegister}>
                                    <h1 className="h3 mb-3 fw-normal">
                                        Create an account
                                    </h1>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingName"
                                            placeholder="John Doe" required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label htmlFor="floatingName">Full Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button className="btn btn-primary w-100 py-2" type="submit">
                                        Register
                                    </button>
                                </form>
                            )}
                            {isLogin && (
                                <form className="text-center" onSubmit={handleLogin}>
                                    <h1 className="h3 mb-3 fw-normal">
                                        Login
                                    </h1>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button className="btn btn-primary w-100 py-2" type="submit">
                                        Login
                                    </button>
                                </form>
                            )}
                            <p className="mt-3 text-center">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <a href="#" onClick={toggleForm}>
                                    {isLogin ? "Register" : "Login"}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card {
                    transition: transform 0.2s ease-in-out;
                }
                .swipe-left {
                    transform: translateX(-100%);
                    opacity: 0;
                }
                .swipe-right {
                    transform: translateX(100%);
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default LoginOrRegister;