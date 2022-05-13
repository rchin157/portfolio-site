import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <footer className="py-5 bg-light bottom">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-5">
                            <h5>About this site</h5>
                            <p>
                                This site serves as a web development learning exercise, a showcase of that learning, and of course as a personal portfolio site.
                                Reactjs was chosen as the framework due to its popularity in industry at the time.

                            </p>
                        </div>
                        <div className="col-6 col-lg-2 offset-lg-3">
                            <h5>Navigation</h5>
                            <ul className="list-unstyled">
                                <li className="nav-item mb-2">
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/Projects">
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/About">
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h5>My Links</h5>
                            <ul className="list-unstyled">
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/rchin157">GitHub</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://www.linkedin.com/in/rylan-chin-06475b1a3/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
