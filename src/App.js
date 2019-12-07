import React from "react";
import logo from "./logo.svg";
import "./App.css";

import LoginApp from "./component/LoginApp";
import InstructorApp from "./component/InstructorApp";
import ListCoursesComponent from "./component/ListCoursesComponent";

function App() {
  return (
    <form>
      <div className="container">
        <LoginApp />
      </div>
      <div className="container">
        <InstructorApp />
      </div>
      <div className="container">
        <ListCoursesComponent />
      </div>
    </form>
  );
}

export default App;
