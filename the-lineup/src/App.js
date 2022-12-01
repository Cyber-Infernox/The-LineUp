import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pending from "./Pending";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Pending />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
