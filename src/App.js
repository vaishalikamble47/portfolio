import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro"
import "./App.css"
import Skill from "./Components/Skill/Skill";
import About from "./Components/About/About";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Project from "./Components/Project/Project";
function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
