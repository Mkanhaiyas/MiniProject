import "./TDashboard.css";
import MainDash from "./MainDash/MainDash";
import RightSide from "./RightSide/RightSide";
import Sidebar from "./Sidebar/Sidebar";

function TDashboard() {
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
        <MainDash dashname="Teacher's" tablehead="Student List" />
        <RightSide />
      </div>
    </div>
  );
}

export default TDashboard;
