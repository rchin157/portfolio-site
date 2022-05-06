import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation shadow">
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Rylan Chin
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Projects">
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
