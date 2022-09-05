import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    ProjectIndex,
    Projects,
    Project,
    About,
    NoMatch,
  } from './components';
import ScrollToTop from "./components/utils/ScrollToTop";

export default function App() {
    return (
        <HashRouter>
            <Navigation />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Projects" element={<ProjectIndex />}>
                        <Route path="" element={<Projects />} />
                        <Route path=":projShort" element={<Project />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                    <Route path="/About" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </HashRouter>
    );
}