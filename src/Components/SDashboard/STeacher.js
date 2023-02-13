import React from "react";
import Sidebar from "../TDashboard/Sidebar/Sidebar";
import BasicTable from "../TDashboard/MainDash/Table/Table";

function STeacher() {
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
        <div className="Stud-Mainbody">
          <div className="Mainbody-head">
            <h1>Teacher's List</h1>
          </div>
          <div className="Mainbody-table">
            <BasicTable header={null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default STeacher;
