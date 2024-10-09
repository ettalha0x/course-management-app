import { userAgent } from "next/server";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Dashboard = (props) => {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [instructor, setInstructor] = useState("");
    const [description, setDescription] = useState("");
    const [schedule, setSchedule] = useState("");
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const[isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch("http://localhost:8000/api/auth/user", {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include"
                    });

                    if (response.ok) {
                        const content = await response.json();
                        setUsername(content.name);
                    } else {
                        await router.push("/");
                    }
                } catch (error) {
                    console.error("Error loading the user:", error);
                    await router.push("/");
                } finally {
                    setIsLogin(false);
                }
            }
        )();
    }, []);

    if (isLogin) {
        return(
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/courses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, instructor, description, schedule })
            });
            
            if (response.ok) {
                const content = await response.json();
                console.log(content);
                setShowSuccessToast(true);
                // Reset the form fields
                setTitle("");
                setInstructor("");
                setDescription("");
                setSchedule("");
                
                // Hide the success toast after 3 seconds
                setTimeout(() => {
                    setShowSuccessToast(false);
                }, 3000);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || "Failed to add course");
                setShowErrorToast(true);
                // Hide the error toast after 3 seconds
                setTimeout(() => {
                    setShowErrorToast(false);
                }, 3000);
            }
        } catch (error) {
            console.error("Error adding course:", error);
            setErrorMessage("An error occurred while adding the course");
            setShowErrorToast(true);
            // Hide the error toast after 3 seconds
            setTimeout(() => {
                setShowErrorToast(false);
            }, 3000);
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/auth/logout", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
            });

            if (response.ok) {
                await router.push("/");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link href="/dashboard" className={router.pathname === '/dashboard' ? "nav-link active" : "nav-link"} >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/courses" className={router.pathname === '/courses' ? "nav-link active" : "nav-link"} >Courses</Link>
                            </li>
                        </ul>
                </header>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <span><h3>Welcome, {username}</h3></span>
                    </div>
                    <div>
                        <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="instructor" className="form-label">Instructor</label>
                        <input type="text" className="form-control" id="instructor" value={instructor} onChange={e => setInstructor(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="schedule" className="form-label">Schedule</label>
                        <input type="text" className="form-control" id="schedule" placeholder="Tuesday 10:00" value={schedule} onChange={e => setSchedule(e.target.value)} />
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button type="submit" className="btn btn-success">Add course</button>
                    </div>
                </form>
            </div>
            {showSuccessToast && (
                <div className="toast align-items-center text-bg-success border-0 show" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
                    <div className="d-flex">
                        <div className="toast-body">
                            Course added successfully.
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowSuccessToast(false)} aria-label="Close"></button>
                    </div>
                </div>
            )}
            {showErrorToast && (
                <div className="toast align-items-center text-bg-danger border-0 show" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
                    <div className="d-flex">
                        <div className="toast-body">
                            {errorMessage}
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowErrorToast(false)} aria-label="Close"></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;