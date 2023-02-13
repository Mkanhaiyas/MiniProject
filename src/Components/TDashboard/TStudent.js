import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import BasicTable from "./MainDash/Table/Table";

function TStudent() {
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
        <div className="Stud-Mainbody">
          <div className="Mainbody-head">
            <h1>Student List</h1>
          </div>
          <div className="Mainbody-table">
            <BasicTable header={null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TStudent;
