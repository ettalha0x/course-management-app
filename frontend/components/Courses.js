import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Courses = (props) => {
    
    const router = useRouter();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showModal, setShowModal] = useState(false);
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

    const search = (search) => {
        props.setFilters({
            ...props.filters,
            search,
            page: 1
        });
    };

    const loadMore = () => {
        props.setFilters({
            ...props.filters,
            page: props.filters.page + 1
        });
    };


    const handleView = (course) => {
        setSelectedCourse(course); // Set selected course data
        setShowModal(true); // Show modal
    };

    const closeModal = () => {
        setShowModal(false); // Hide modal
    };

    let loadMoreButton;
    if (props.filters.page !== props.lastPage) {
        loadMoreButton = (
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-secondary" onClick={loadMore}>Load more</button>
            </div>
        );
    }

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
                <div className="col-md-12 mb-4 input-group">
                    <input type="text" className="form-control" placeholder="Search for a course" onKeyUp={e => search(e.target.value)} />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3">
                    {props.courses.map(course => (
                        <div className="col" key={course.id}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">{course.title}</h5>
                                        <button type="button" className="btn btn-sm btn-primary " onClick={() => handleView(course)}>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedCourse && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                    <div className="modal-dialog .modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedCourse.title}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
                                <p><strong>Description:</strong> {selectedCourse.description}</p>
                                <p><strong>Schedule:</strong> {selectedCourse.schedule}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {loadMoreButton}
        </>
    );
};

export default Courses;
