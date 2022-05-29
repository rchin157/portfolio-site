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
                <h3 className="text-muted">Matlab</h3>
                <p>
                    This project was created to determine side and overhead clearance as measured from the travel lane.
                    The output is visualized as both line graphs of the raw data as well as contour plots showing depth.
                    All the images on this page are of the same overpass, with the above being the input scan and below being output.
                    Since the unit of measurement is unspecified in lidar scan files (las files), the units for the output figures
                    are left unmarked and are assumed to be consistent with whatever unit the scan was taken in. This work was of
                    interest to groups transporting irregular/oversized loads.
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
                    Below are the contour plots showing depth in an easy to understand visual format. The bottom of this particular overpass
                    was smooth concrete which is why it appears as a solid colour. The side views show the bridge supports, the bottom of the overpass,
                    and the guardrails.

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
                    The main functionality of the project is achieved through the use of octrees and pyramid shaped queries into said octree.
                    This results in a much smaller amount of work compared to a previous work which would consider a majority of the points.
                    Performance is most closely tied to the desired resolution of the output.
                </p>
                <p>
                    This project, including it's implementation and thorough documentation, can be found
                    <a href="https://github.com/rchin157/Road-Clearance-Tool" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}
