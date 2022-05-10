import React from "react";
import Banner from "./BannerPatterns/Banner";
import SC from "./BannerPatterns/SimplexColours";

export default function Home() {
    return (
        <div className="home">
            {/*
            <div className="main-masthead mb-3" style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/pw/AM-JKLVeLzJ9GtiOSqmwtHOLzlT6CYBGyIim38_dHXeVIQ7viIO-EB-MnNK75TSq5-iCxmK5_Q2AXUl-0PG353LwzxsaSVgvFUt3J2L7tcklWo4M2qml0fSHwbgS6d1rwibH-9fYjPk7dbQzKqO6dtiQ9V1ejQ=w1080-h533-no')",
                height: "50vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}>
                    <div className="position-relative top-50 start-50 translate-middle text-white">
                        <h1 className="display-1 text-center">Rylan Chin</h1>
                    </div>
            </div>
            */}
            <div style={{ height: "50vh" }}>
                <Banner pattern={new SC()} />
                <div className="position-relative p-3 top-50 start-50 translate-middle bg-white rounded shadow" style={{ width: "max-content" }}>
                    <h1 className="display-1 text-center">Rylan Chin</h1>
                </div>
            </div>
            <div className="container">
                <div className="p-3 mb-3">
                    <h1>Education</h1>
                    <p>
                        Education Stuff
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc erat nisi, porta quis blandit vitae, luctus quis erat.
                        Pellentesque mollis a tortor eget facilisis. In id aliquam magna.
                        Maecenas id dui hendrerit, laoreet dui ut, tempor purus.
                        Curabitur in dui porttitor, aliquet mauris at, tincidunt nibh.
                        Donec non lorem at neque dignissim viverra.
                        Phasellus consectetur mauris eget nisl egestas volutpat.
                        Mauris interdum metus ut libero tristique dapibus. Fusce et dapibus libero.
                    </p>
                </div>
                <div className="p-3 mb-3">
                    <h1>Work Experience</h1>
                    <p>
                        Work Stuff
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla molestie ex ipsum, non viverra ligula rhoncus ut.
                        Vestibulum vestibulum facilisis mauris eu euismod.
                        Donec elementum lacinia aliquet. Vestibulum hendrerit orci at sapien consectetur, nec pulvinar tellus facilisis.
                        Maecenas dapibus commodo tellus, at lacinia erat iaculis et.
                    </p>
                </div>
            </div>
        </div>
    );
}
