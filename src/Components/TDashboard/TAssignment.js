import React from "react";
import Sidebar from "./Sidebar/Sidebar";

function TAssignment() {
  return (
    <div className="Dash">
      <div className="DashGlass">
        <Sidebar
          dashboard="/TDashboard"
          student="/TStudent"
          changeSHead="Students"
          assignment="/TAssignment"
          chat="/TChat"
          analytics="/TAnalytics"
        />
      </div>
    </div>
  );
}

export default TAssignment;
