import { useParams } from "react-router-dom";
import { getProject } from "../ProjectData/ProjData";

export default function Project() {
    let { projShort } = useParams();

    return getProject(projShort).rcomp;
}