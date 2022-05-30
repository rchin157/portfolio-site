import Project1 from "./ProjectFeatures";
import Project2 from "./ProjectClearance";
import ProjectMechs from "./ProjectMechsGame"

import clearanceImg from "../../data/ProjectMedia/Clearance/rightview_at_285_units_short_thumbnail.png";
import featureImg from "../../data/ProjectMedia/FeatureProcessor/clearanceThumbnail.png";

let projs = [
    {
        name: "Javascript Game",
        desc: <span>A javascript game created for this website.</span>,
        id: "mechsGame",
        lang: "Javascript",
        image: featureImg,
        rcomp: <ProjectMechs />
    },
    {
        name: "Python Pointcloud Feature Processor",
        desc: <span>A small python project for calculating features such as gradient and curvature for each point in a given cloud.
                This is more or less a practical implementation of the geometric features outlined in
                <a href="https://ethz.ch/content/dam/ethz/special-interest/baug/igp/photogrammetry-remote-sensing-dam/documents/pdf/timo-jan-cvpr2016.pdf" target="_blank" rel="noopener noreferrer"> "Contour detection in unstructured 3D point clouds", Hackel et al, 2016 </a>
                as well as <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.7059&rep=rep1&type=pdf" target="_blank" rel="noopener noreferrer"> "Three-dimensional surface curvature estimation using quadric surface patches", I. Douros and B. Buxton</a>.
            </span>,
        id: "featureprocessor",
        lang: "Python",
        image: featureImg,
        rcomp: <Project1 />
    },
    {
        name: "Road Clearance Tool",
        desc: <span>A tool for calculating and visualizing roadside and overhead clearance, usually targeting overpasses and the like.
                    Due to the extremely long processing times of a previous work for this task, this project was revisited and completely redone from scratch.
                    The resulting project has a much more palatable run time of just a few minutes, down from around 24 hours, while producing the same if not better results.
            </span>,
        id: "clearance",
        image: clearanceImg,
        lang: "Matlab",
        rcomp: <Project2 />
    },
];

//this function is unused
export function getProject(id) {
    return projs.find(
        (proj) => proj.id === id
    );
}

export function getProjs() {
    return projs;
}