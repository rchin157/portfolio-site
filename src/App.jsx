import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    ProjectIndex,
    Projects,
    Project,
    NoMatch,
  } from './components';

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<ProjectIndex />}>
                    <Route path="" element={<Projects />} />
                    <Route path=":projShort" element={<Project />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}