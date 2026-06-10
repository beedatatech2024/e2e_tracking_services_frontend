import "../../styles/Dashboard/navbar.css";
import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/recruiting": "Recruiting",
    "/dashboard/bench-sales": "Bench Sales",
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
          {pageTitles[location.pathname] || "Dashboard"}
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
  <div className="e2e_navbar_avatar">
    {user?.nick_name?.charAt(0)?.toUpperCase() || "U"}
  </div>

  <div className="e2e_navbar_profile_info">
    <h4>{user?.nick_name || "User"}</h4>
    <p>{user?.email || "Employee"}</p>
  </div>
</div>
      </div>
    </div>
  );
}

export default Navbar;