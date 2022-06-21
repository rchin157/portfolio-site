import React from "react";
import Banner from "./BannerPatterns/Banner";
import SC from "./BannerPatterns/SimplexColours";

import nsercrapaper from "../data/32dafaad-c032-4dd1-9d10-4dd607e6d179.pdf";

export default function Home() {
    return (
        <div className="home">
            <div style={{ height: "45vh" }}>
                <Banner pattern={new SC()} />
                <div className="position-relative p-3 top-50 start-50 translate-middle bg-white rounded shadow" style={{ width: "max-content" }}>
                    <h1 className="display-1 text-center">Rylan Chin</h1>
                </div>
            </div>
            <div className="container">
                <div className="p-3">
                    <h1>Education</h1>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h4>University of Alberta</h4>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h4 className="text-lg-end">Fall 2018-Present(Spring 2023 Graduation)</h4>
                        </div>
                    </div>
                    <p>
                        Bachelor of Science with Specialization<br />
                        Computing Science - Software Practice Specialization<br />
                        Cumulative GPA: 3.86
                    </p>
                </div>
                <div className="p-3">
                    <h1>Experience</h1>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h4>Research Assistant</h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-lg-center">Centre for Smart Transportation</h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-lg-end">September 2021-April 2022</h4>
                        </div>
                    </div>
                    <ul>
                        <li>Worked on a number of academic papers, both on editing the papers themselves as well as their underlying software projects.</li>
                        <li>Worked on and improved long-running projects.</li>
                        <li>Reimplemented a project for finding road clearance and improved runtime from tens of hours to minutes.</li>
                        <li>Created a tool for computing pointcloud features such as planarity, gradient, etc.</li>
                        <li>Peer reviewed academic papers semi-regularly.</li>
                    </ul>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h4>Computer Science Undergrad TA</h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-lg-center">University of Alberta</h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-lg-end">September 2020-June 2021</h4>
                        </div>
                    </div>
                    <ul>
                        <li>Served as a teaching assistant for CMPUT 175 and 201, focusing on fundamentals and C programming respectively.</li>
                        <li>Instructed lab sessions and provided help with programming excercises to students.</li>
                        <li>Wrote and/or co-wrote major algorithm assignment solutions (CMPUT 201).</li>
                        <li>Assisted 100+ students via class forums.</li>
                    </ul>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h4>Undergrad Researcher</h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-lg-center">University of Alberta</h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-lg-end">May 2020-August 2020</h4>
                        </div>
                    </div>
                    <ul>
                        <li>NSERC undergrad research grant position.</li>
                        <li>
                            Implemented the groups research paper as both an exact algorithm and it's proposed FPTAS which used dynamic
                            programming and employed the sparsing technique. Standard C was used throughout.
                        </li>
                        <li>Optimized for different aspects such as memory and runtime.</li>
                        <li>Supervised junior team member who particpated as part of the Highschool Internship Program.</li>
                        <li>The paper went on to be published and can be viewed 
                            <a href={nsercrapaper} target="_blank" rel="noopener noreferrer"> here</a>.
                        </li>
                    </ul>
                </div>
                <div className="p-3">
                    <h1>Languages and Technologies</h1>
                    <h4>Languages</h4>
                    <ul className="list-unstyled">
                        <li className="list-item">
                            Python<br />
                        </li>
                        <li className="list-item">
                            Javascript
                        </li>
                        <li className="list-item">
                            Java
                        </li>
                        <li className="list-item">
                            Matlab
                        </li>
                        <li className="list-item">
                            C
                        </li>
                        <li className="list-item">
                            SQL
                        </li>
                        <li className="list-item">
                            HTML/CSS
                        </li>
                        <li className="list-item">
                            VBA
                        </li>
                        <li className="list-item">
                            Assembly
                        </li>
                        <li className="list-item">
                            Lisp
                        </li>
                    </ul>
                    <h4>Technologies</h4>
                    <ul className="list-unstyled">
                        <li className="list-item">
                            React
                        </li>
                        <li className="list-item">
                            Git
                        </li>
                        <li className="list-item">
                            Continuous Integration
                        </li>
                        <li className="list-item">
                            OOP
                        </li>
                        <li className="list-item">
                            Visual Studio
                        </li>
                        <li className="list-item">
                            MS Office
                        </li>
                        <li className="list-item">
                            Android Studio
                        </li>
                        <li className="list-item">
                            UML
                        </li>
                        <li className="list-item">
                            General Linux
                        </li>
                        <li className="list-item">
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
