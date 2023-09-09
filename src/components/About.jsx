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
                        Hello, I'm a recent Computing Science graduate from the University of Alberta.
                        I'm currently looking for my first job as a fresh grad and am excited to gain
                        more industry experience.
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
