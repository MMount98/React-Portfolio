import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bar from "./components/Navbar";
import AboutMe from "./components/pages/About-Me";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Bar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
