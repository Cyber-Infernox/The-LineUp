import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pending from "./Pending";
import Create from "./Create";
import TaskDetails from "./TaskDetails";
import Completed from "./Completed";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Pending />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
