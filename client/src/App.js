import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/About-Me";
import Portfolio from "./components/pages/Portfolio";
import ContactForm from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <>
      <Router>
        <Bar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
