import React from 'react';
import ComparisonSlider from '../utils/ComparisonSlider';

import sScanColour from "../../data/ProjectMedia/FeatureProcessor/ScolorShot.png";
import sScanGrad from "../../data/ProjectMedia/FeatureProcessor/SgradShot.png";

export default function Project() {
    return (
        <div className="home">
            <div className='container'>
                <ComparisonSlider 
                    topImg={{src: sScanColour, alt: "scan data colour"}}
                    botImg={{src: sScanGrad, alt: "scan data gradient"}}
                />
                <h1 className="mt-5">Pointcloud Feature Processor</h1>
                <p>
                    paragraph 1 example
                </p>
            </div>
        </div>
    );
}
