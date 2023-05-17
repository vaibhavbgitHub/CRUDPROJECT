import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./component/AddUser";
import UserTable from "./component/UserTable";
import EditUser from "./component/EditUser";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserTable />} />
          <Route exact path="/user" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
