import { useParams } from "react-router-dom";
import { getProject } from "../ProjectData/ProjData";
import NoMatch from "../NoMatch";

// this component serves to take in the desired project name and return the renderable project page
export default function Project() {
    let { projShort } = useParams();

    let result = getProject(projShort);
    return result ? result.rcomp : <NoMatch />;
}