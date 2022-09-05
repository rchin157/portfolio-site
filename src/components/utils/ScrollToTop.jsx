import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function ScrollToTop(props) {
    let [currentLocation, setCurrentLocation] = useState(useLocation().pathname);
    const location = useLocation();
    useEffect(() => {
        if (currentLocation !== location.pathname) {
            setCurrentLocation(location.pathname);
            window.scrollTo({top: 0, left: 0, behavior: "instant"});
        }

    }, [currentLocation, location.pathname]);

    return <>{props.children}</>
};

export default ScrollToTop;