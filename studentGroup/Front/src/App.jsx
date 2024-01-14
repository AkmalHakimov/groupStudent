import React from "react";
import { Route,Routes,Link } from "react-router-dom";
import Group from "./components/Group";
import StudentGroup from "./components/studentGroup";
import Student from "./components/student";
function App() {
  
  
  return (
    <div >
      <Link to={"/group"}><button className="btn btn-dark">Groups</button></Link>
      <Link to={"/student"}><button className="btn btn-dark">Students</button></Link>
      <Routes>
        <Route path={"/group"} element={<Group />} />
        <Route path={"/student"} element={<Student />} />
        <Route path={"/group/:groupId"} element={<StudentGroup />} />
      </Routes>
    </div>
  );
}

export default App;
