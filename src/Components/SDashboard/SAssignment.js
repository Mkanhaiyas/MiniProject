import React from "react";
import Sidebar from "../TDashboard/Sidebar/Sidebar";

function SAssignment() {
  return (
    <div className="Dash">
      <div className="DashGlass">
        <Sidebar
          dashboard="/SDashboard"
          student="/STeacher"
          changeSHead="Teachers"
          assignment="/SAssignment"
          chat="/SChat"
          analytics="/SAnalytics"
        />
      </div>
    </div>
  );
}

export default SAssignment;
