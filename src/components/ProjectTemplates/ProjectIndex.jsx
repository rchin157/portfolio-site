import React from "react";
import { Outlet } from "react-router-dom";

// serves as the root of the Projects page, serves sub routes
export default function ProjectIndex() {
    return (
        <Outlet />
    );
}