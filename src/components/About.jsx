import profileBanner from "../data/MiscImages/20220822_110747_thin.png";

export default function About() {
    return (
        <div className="home">
            <div>
                <img src={profileBanner} alt="About Banner" className="img-fluid" />
            </div>
            <div className="container">
                <div className="pt-3">
                    <p>
                        Hello, my name is Rylan Chin. I'm a student at the University of Alberta in my final year of Computing Science.
                        I spent the last academic year on internship as a research assistant as part of a team from the faculty of civil engineering.
                        I'm currently looking for full-time employment in industry this coming spring.
                    </p>
                    <h5>Location</h5>
                    <p>Edmonton, Alberta, Canada</p>
                    <h5>Contact</h5>
                    <p>
                        rchin@ualberta.ca<br />
                        (780)-340-9978
                    </p>
                </div>
            </div>
        </div>
    );
}
