import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pending from "./Pending";
import Create from "./Create";
import TaskDetails from "./TaskDetails";
import Completed from "./Completed";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Pending />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
