import Project1 from "./Project1";
import Project2 from "./Project2";

import clearanceImg from "../../data/ProjectMedia/Clearance/rightview_at_285_units.png";
import featureImg from "../../data/ProjectMedia/FeatureProcessor/clearanceThumbnail.png";

let projs = [
    {
        name: "Python Pointcloud Feature Processor",
        desc: "project 1 description!",
        id: "project1",
        image: featureImg,
        rcomp: <Project1 />
    },
    {
        name: "Road Clearance Tool",
        desc: "project 2 description!",
        id: "project2",
        image: clearanceImg,
        rcomp: <Project2 />
    },
];

export function getProject(id) {
    return projs.find(
        (proj) => proj.id === id
    );
}

export function getProjs() {
    return projs;
}