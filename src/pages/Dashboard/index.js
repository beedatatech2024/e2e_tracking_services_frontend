import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardCards from "./DashboardCards";
import DashboardGraphs from "./DashboardGraphs";
import DashboardTable from "./DashboardTable";

import "../../styles/Dashboard/index.css";

function Dashboard() {
  return (
    <div className="e2e_dashboard_main_layout">
      <Sidebar />

      <div className="e2e_dashboard_right_section">
        <Navbar />

        <div className="e2e_dashboard_scroll_content">
          <DashboardCards />

          <DashboardGraphs />

          <DashboardTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;