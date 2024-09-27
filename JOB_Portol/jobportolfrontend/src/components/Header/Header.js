import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ role, isLoggedIn, handleLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Job Portal
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/landing">
                                Home
                            </a>
                        </li>
                        {role === 'job_seeker' && (
                            <li className="nav-item">
                                <a className="nav-link" href="/jobs">
                                    Find Jobs
                                </a>
                            </li>
                        )}
                        {role === 'employer' && (
                            <li className="nav-item">
                                <a className="nav-link" href="/addJob">
                                    Post a Job
                                </a>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                        {isLoggedIn ? (
                            <li className="nav-item">
                                <button className="btn btn-outline-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="btn btn-primary" href="/login">
                                    Login
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
