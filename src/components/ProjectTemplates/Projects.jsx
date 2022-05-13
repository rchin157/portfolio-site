import React from "react";
import { Link } from "react-router-dom";
import Boids from "../BOIDProject/Manager";
import { getProjs } from "../ProjectData/ProjData";

export default function Projects() {
    let projects = getProjs();
    return (
        <div className="home">
            <div style={{height: "45vh"}}>
                <Boids />
                <div className="position-relative p-3 top-50 start-50 translate-middle bg-white rounded shadow" style={{width: "max-content"}}>
                    <h1 className="display-1 text-center">Projects</h1>
                </div>
            </div>
            <div className="container">
                {projects.map((proj) => (
                    <div key={proj.id}>
                        <Link to={`/Projects/${proj.id}`}>
                            <div className='row align-items-center my-5'>
                                <div className='col-lg-7'>
                                    <img
                                        className='img-fluid rounded mb-4 mb-lg-0'
                                        src={proj.image}
                                        alt=""
                                    />
                                </div>
                                <div className='col-lg-5'>
                                    <h1 className='font-weight-light'>{proj.name}</h1>
                                    <p>
                                        {proj.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
