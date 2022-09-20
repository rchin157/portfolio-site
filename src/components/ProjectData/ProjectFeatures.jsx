import React from 'react';
import ComparisonSlider from '../utils/ComparisonSlider';

import sScanColour from "../../data/ProjectMedia/FeatureProcessor/ScolorShot.png";
import sScanGrad from "../../data/ProjectMedia/FeatureProcessor/SgradShot.png";

import sTrimLinearity from "../../data/ProjectMedia/FeatureProcessor/strimlinearity.png"
import sTrimCurvature from "../../data/ProjectMedia/FeatureProcessor/strimcurvature.png"

// this is the project page for the pointcloud feature processor
export default function Project() {
    return (
        <div className="home">
            <div className='container'>
                <div className="mt-4 text-center">
                    <ComparisonSlider 
                        topImg={{src: sScanColour, alt: "scan data colour"}}
                        botImg={{src: sScanGrad, alt: "scan data gradient"}}
                    />
                    <span><em>Colour scan data vs. Computed z-gradient values</em></span>
                </div>
                <h1 className="mt-3">Pointcloud Feature Processor</h1>
                <h3 className="text-muted">Python</h3>
                <p>
                    This project was created to calculate per point features over pointclouds.
                    Such functionality is offered by opensource pointcloud tools such as CloudCompare, but a cutdown standalone program just
                    for obtaining features was desired. After some initial success with finding gradients, the scope of the project expanded to
                    include a variety of features from curvature to linearity to roughness. At present, the project handles fairly large pointclouds (10+ million points)
                    fairly well.
                </p>
                <p>
                    The geometric features outlined in 
                    <a href="https://ethz.ch/content/dam/ethz/special-interest/baug/igp/photogrammetry-remote-sensing-dam/documents/pdf/timo-jan-cvpr2016.pdf" target="_blank" rel="noopener noreferrer"> this paper </a>
                    can be computed at the same time from a single set of eigen vectors and values. Other features such as gradient and curvature must be computed
                    individually which can be costly compared to just the previously mentioned eigenfeatures. Curvature both the mean and gaussian varieties, outlined 
                    <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.7059&rep=rep1&type=pdf" target="_blank" rel="noopener noreferrer"> here, </a>
                    is particularly expensive to calculate for every point.
                </p>
                <div className="row mb-2">
                    <div className="col-12 col-lg-6 text-center">
                        <img className="img-fluid" src={sTrimLinearity} alt="linearity" />
                        <span><em>Linearity</em></span>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <img className="img-fluid" src={sTrimCurvature} alt="gaussian curvature" />
                        <span><em>Gaussian Curvature</em></span>
                    </div>
                </div>
                <p>
                    Larger pointclouds are only feasibly handled in a reasonable amount of time through parallelization of the work as well as by preventing
                    redundant memory usage. This was done via python's provided
                    <a href="https://docs.python.org/3/library/concurrent.futures.html" target="_blank" rel="noopener noreferrer"> concurrent futures </a>
                    module for job handling as well as
                    <a href="https://docs.python.org/3/library/multiprocessing.shared_memory.html" target="_blank" rel="noopener noreferrer"> multiprocessing's shared memory </a>
                    functionality.
                </p>
                <p>
                    This project, including its implementation, can be found
                    <a href="https://github.com/rchin157/pointcloud-feature-processor" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}
