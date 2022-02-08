import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Attualitaepolitica from "./pages/Attualitaepolitica";
import Internazionale from "./pages/Internazionale";
import Societa from "./pages/Societa";
import Ambiente from "./pages/Ambiente";
import Profili from "./pages/Profili";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Attualitaepolitica />} path="/attualitaepolitica" />
        <Route element={<Internazionale />} path="/internazionale" />
        <Route element={<Societa />} path="/societa" />
        <Route element={<Ambiente />} path="/ambiente" />
        <Route element={<Profili />} path="/profili" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
