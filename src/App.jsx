import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Offer from "./Components/Offer";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
