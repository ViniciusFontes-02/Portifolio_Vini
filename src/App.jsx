import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import DarkMode from "./components/DarkMode";

import Home from "./pages/Home";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <DarkMode />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="*" element={<NotFound/>}/>  */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
