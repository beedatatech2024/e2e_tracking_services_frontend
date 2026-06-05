import "../../styles/Dashboard/navbar.css";
import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/recruiting": "Recruiting",
    "/dashboard/benchsales": "Bench Sales",
    "/dashboard/hotlist": "Hot List",
    "/dashboard/jobs": "Jobs",
    "/dashboard/vendors": "Prime Vendors",
    "/dashboard/clients": "Clients",
    "/dashboard/candidates": "Candidates",
    "/dashboard/training": "Training",
    "/dashboard/candidate-onboarding":
      "Candidate Onboarding",
    "/dashboard/employee-status":
      "Employee Status Report",
    "/dashboard/vendor-onboarding":
      "Vendor Onboarding",
  };

  return (
    <div className="e2e_navbar_container">
      <div>
        <h2 className="e2e_navbar_title">
          {pageTitles[location.pathname] ||
            "Dashboard"}
        </h2>

        <p className="e2e_navbar_subtitle">
          Welcome to E2E Tracking Services
        </p>
      </div>

      <div className="e2e_navbar_right">
        <input
          type="text"
          placeholder="Search anything..."
          className="e2e_navbar_search"
        />

        <div className="e2e_navbar_notification">
          <FaBell />
        </div>

        <div className="e2e_navbar_profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <div>
            <h4>Kiran Majji</h4>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;