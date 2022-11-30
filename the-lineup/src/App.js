import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pending from "./Pending";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Pending />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
