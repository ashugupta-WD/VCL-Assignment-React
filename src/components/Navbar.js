import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sampleContext from '../context/sampleContext'

export default function Navbar() {
    const methods = useContext(sampleContext);
    const location = useLocation();
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">VCL Assignment</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {(methods.studentAllowed) && <Link className={`nav-link ${location.pathname === '/' ? 'active':''}`} aria-current="page" to="/">Student</Link>}
                            {(methods.staffAllowed) && <Link className={`nav-link ${location.pathname === '/' ? 'active':''}`} aria-current="page" to="/">Staff</Link>}
                            {(!methods.staffAllowed && !methods.studentAllowed) && <Link className={`nav-link ${location.pathname === '/' ? 'active':''}`} aria-current="page" to="/">Login</Link>}
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active':''}`} aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {(methods.staffAllowed || methods.studentAllowed) && <button className='logOut btn btn-primary ms-2' onClick={()=>{methods.logOut()}}>Log out</button>}
                </div>
            </div>
        </nav>
    )
}
