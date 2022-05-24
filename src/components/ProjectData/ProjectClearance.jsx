import React from 'react';

import scanData from "../../data/ProjectMedia/Clearance/clearanceCandidate.png"
import lineside from "../../data/ProjectMedia/Clearance/sideclearance_at_285_units.png"
import linetop from "../../data/ProjectMedia/Clearance/topclearance_at_285_units.png"
import ceiling from "../../data/ProjectMedia/Clearance/ceilingview_at_285_units.png"
import leftside from "../../data/ProjectMedia/Clearance/leftview_at_285_units.png"
import rightside from "../../data/ProjectMedia/Clearance/rightview_at_285_units.png"

export default function Project() {
    return (
        <div className="home">
            <div className='container'>
                <div className="mt-4">
                    <img className="img-fluid" src={scanData} alt="scan data" />
                </div>
                <h1 className="mt-5">Road Clearance Tool</h1>
                <p>
                    paragraph 1 example
                </p>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid" src={lineside} alt="side clearance line graph" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid" src={linetop} alt="overhead clearance line graph" />
                    </div>
                </div>
                <p>
                    paragraph 2 example
                </p>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <img className="img-fluid" src={leftside} alt="left view" />
                    </div>
                    <div className="col-12 col-lg-4">
                        <img className="img-fluid" src={ceiling} alt="ceiling view" />
                    </div>
                    <div className="col-12 col-lg-4">
                        <img className="img-fluid" src={rightside} alt="right view" />
                    </div>
                </div>
                <p>
                    paragraph 3 example
                </p>
                <p>
                    This project, including it's implementation, can be found
                    <a href="https://github.com/rchin157/Road-Clearance-Tool" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}
