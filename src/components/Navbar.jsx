import React from 'react'
const Navbar = () => {
    return (
        <nav id='navbar' className="navbar navbar-expand-lg border-bottom border-4 border-primary " data-bs-theme="dark">

            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active px-4 bg-white rounded-5 text-dark text-bolder" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link px-4 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link" href="#">Videos</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link" href="#">Student Login</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="text-white new-batch bg-primary p-2">
                    <a className="nav-link" href="#">NEW BATCH</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar