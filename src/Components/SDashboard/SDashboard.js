import "./SDashboard.css";
import MainDash from "../TDashboard/MainDash/MainDash";
import RightSide from "../TDashboard/RightSide/RightSide";
import Sidebar from "../TDashboard/Sidebar/Sidebar";

function SDashboard() {
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
        <MainDash dashname="Student's" tablehead="Teacher List" />
        <RightSide />
      </div>
    </div>
  );
}

export default SDashboard;
