import { useParams } from "react-router-dom";
import { getProject } from "../ProjectData/ProjData";
import NoMatch from "../NoMatch";

export default function Project() {
    let { projShort } = useParams();

    let result = getProject(projShort);
    return result ? result.rcomp : <NoMatch />;
}