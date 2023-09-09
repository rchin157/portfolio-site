import Project1 from "./ProjectFeatures";
import Project2 from "./ProjectClearance";
import ProjectMechs from "./ProjectMechsGame";
import ProjectGJnov from "./ProjectGJnov2020";
import ProjectBook from "./ProjectBookApp";
import ProjectReschedule from "./ProjectRescheduling";
import ProjectCapstone from "./ProjectCapstone";

import clearanceImg from "../../data/ProjectMedia/Clearance/rightview_at_285_units_short_thumbnail.png";
import featureImg from "../../data/ProjectMedia/FeatureProcessor/clearanceThumbnail.png";
import gjn2020 from "../../data/ProjectMedia/Gamejam-nov-2020/gamejam-nov-2020.png";
import bookappimg from "../../data/ProjectMedia/BookApp/BookApp.png";
import reschedulerTimes from "../../data/ProjectMedia/rescheduling/nsercjobscheduler.png";
import gameImg from "../../data/ProjectMedia/MechGame/mechgame.png";
import capstonemain from "../../data/ProjectMedia/Capstone/capstonedashboard.png";

// list of all projects, used for rendering
let projs = [
    {
        name: "University Capstone Project",
        desc: <span>My university capstone group project. An online dashboard meant for tracking and monitoring student progress
            in a university capstone course. This was a fullstack project built with Svelte, FastAPI, and MongoDB.
            The dashboard is in active use for the Univserity of Alberta's CMPUT 401 capstone course.
        </span>,
        time: "Fall 2022",
        id: "capstone",
        lang: "Svelte, FastAPI, MongoDB",
        image: capstonemain,
        rcomp: <ProjectCapstone />
    },
    {
        name: "Javascript Game",
        desc: <span>A javascript game created for this website.</span>,
        time: "Q2 2022",
        id: "mechsGame",
        lang: "Javascript",
        image: gameImg,
        rcomp: <ProjectMechs />
    },
    {
        name: "Python Pointcloud Feature Processor",
        desc: <span>A small python project for calculating features such as gradient and curvature for each point in a given cloud.
            This is more or less a practical implementation of the geometric features outlined in
            <a href="https://ethz.ch/content/dam/ethz/special-interest/baug/igp/photogrammetry-remote-sensing-dam/documents/pdf/timo-jan-cvpr2016.pdf" target="_blank" rel="noopener noreferrer"> "Contour detection in unstructured 3D point clouds", Hackel et al, 2016 </a>
            as well as <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.7059&rep=rep1&type=pdf" target="_blank" rel="noopener noreferrer"> "Three-dimensional surface curvature estimation using quadric surface patches", I. Douros and B. Buxton</a>.
        </span>,
        time: "Q1 2022",
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
        time: "Q1 2022",
        id: "clearance",
        image: clearanceImg,
        lang: "Matlab",
        rcomp: <Project2 />
    },
    {
        name: "Android Book Lending App",
        desc: <span>Software Engineering semester long 6 person term project. An android app that tracks books in realtime for lending and borrowing.</span>,
        time: "Fall 2020",
        id: "BookApp",
        image: bookappimg,
        lang: "Java",
        rcomp: <ProjectBook />
    },
    {
        name: "48-hour Game Jam",
        desc: <span>One of the few Game Jam projects I've been a part of, this was a small co-op survival game programmed by myself and one other.</span>,
        time: "November 2020",
        id: "gamejam-nov-2020",
        image: gjn2020,
        lang: "Godot",
        rcomp: <ProjectGJnov />
    },
    {
        name: "NSERC Undergrad Research Project",
        desc: <span>Undergrad research regarding a rejection-allowed multiprocessor rescheduling approximation scheme. I did general work on the research paper
            with this project in particular being an actual implemention of the paper's proposed algorithm. Alongside it, the naive algorithm was also
            produced for comparison. Since working with the team, the paper has gone on to be published in the Journal of Combinatorial Optimization.
        </span>,
        time: "Summer 2020 (Paper Published in March 2022)",
        id: "nserc-rescheduling",
        image: reschedulerTimes,
        lang: "Standard C (C99)",
        rcomp: <ProjectReschedule />
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