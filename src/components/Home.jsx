import React from "react";

export default function Home() {
    return (
        <div className="home">
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
            <div className="container">
                <div className="p-3 mb-3">
                    <h1>Education</h1>
                    <p>
                        Education Stuff
                    </p>
                </div>
                <div className="p-3 mb-3">
                    <h1>Work Experience</h1>
                    <p>
                        Work Stuff
                    </p>
                </div>
            </div>
        </div>
    );
}
