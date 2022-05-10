import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    ProjectIndex,
    Projects,
    Project,
  } from './components';

export default function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<ProjectIndex />}>
                    <Route path="" element={<Projects />} />
                    <Route path=":projShort" element={<Project />} />
                    <Route path="*" element={<Home />} />
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}