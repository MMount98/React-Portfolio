import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bar from "./components/Navbar";
import AboutMe from "./components/pages/About-Me";

function App() {
  return (
    <>
      <Router>
        <Bar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
