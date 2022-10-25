import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CrewsPage from "./pages/CrewsPage/CrewsPage";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import HomePage from "./pages/HomePage/HomePage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crews" element={<CrewsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
