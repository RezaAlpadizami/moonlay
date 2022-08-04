import Header from "./Component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Starship from "./Views/Starship";
import Planet from "./Views/Planet";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="planet" element={<Planet />} />
            <Route path="starship" element={<Starship />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
