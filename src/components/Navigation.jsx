import React from "react";
import { NavLink } from "react-router-dom";

import githubico from "../data/Icons/GitHub-Mark-120px-plus.png";
import linkedinico from "../data/Icons/LI-In-Bug.png";

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
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item px-2 pt-1">
                                <a classname="nav-link" href="https://github.com/rchin157" target="_blank" rel="noreferrer">
                                    <img className="" src={githubico} alt="" height="25" />
                                </a>
                            </li>
                            <li className="nav-item px-2 pt-1">
                                <a classname="nav-link" href="https://www.linkedin.com/in/rylan-chin-06475b1a3/" target="_blank" rel="noreferrer">
                                    <img className="" src={linkedinico} alt="" height="25" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
