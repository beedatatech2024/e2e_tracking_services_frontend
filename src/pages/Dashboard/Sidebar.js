import "../../styles/Dashboard/sidebar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaBriefcase,
  FaClipboardList,
  FaUserTie,
  FaSignOutAlt,
  FaFire,
  FaHandshake,
  FaBuilding,
  FaGraduationCap,
  FaComments,
  FaLaptopCode,
  FaIdBadge,
  FaDatabase,
} from "react-icons/fa";

function Sidebar() {
  const getClassName = ({ isActive }) =>
    `e2e_sidebar_menu_item ${
      isActive ? "e2e_sidebar_active" : ""
    }`;

  return (
    <div className="e2e_sidebar_container">
      <div>
        {/* LOGO */}

        <div className="e2e_sidebar_logo_section">
          <img
            src="/logo.png"
            alt="logo"
            className="e2e_sidebar_logo"
          />

          <div>
            <h2>E2E TRACKING</h2>
            <p>SERVICES</p>
          </div>
        </div>

        {/* MENU */}

        <div className="e2e_sidebar_menu">

          <NavLink
            to="/dashboard"
            end
            className={getClassName}
          >
            <FaHome className="menuIcon" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/recruiting"
            className={getClassName}
          >
            <FaUsers className="menuIcon purpleIcon" />
            <span>Recruiting</span>
          </NavLink>

          <NavLink
            to="/dashboard/benchsales"
            className={getClassName}
          >
            <FaClipboardList className="menuIcon blueIcon" />
            <span>Bench Sales</span>
          </NavLink>

          <NavLink
            to="/dashboard/hotlist"
            className={getClassName}
          >
            <FaFire className="menuIcon redIcon" />
            <span>Hot List</span>
          </NavLink>

          <NavLink
            to="/dashboard/jobs"
            className={getClassName}
          >
            <FaBriefcase className="menuIcon orangeIcon" />
            <span>Jobs</span>
          </NavLink>

          <NavLink
            to="/dashboard/vendors"
            className={getClassName}
          >
            <FaHandshake className="menuIcon pinkIcon" />
            <span>Prime Vendors</span>
          </NavLink>

          <NavLink
            to="/dashboard/clients"
            className={getClassName}
          >
            <FaBuilding className="menuIcon greenIcon" />
            <span>Clients</span>
          </NavLink>

          {/* <NavLink
            to="/dashboard/resources"
            className={getClassName}
          >
            <FaDatabase className="menuIcon" />
            <span>Resources</span>
          </NavLink> */}

          <NavLink
            to="/dashboard/candidates"
            className={getClassName}
          >
            <FaUserTie className="menuIcon violetIcon" />
            <span>Candidates</span>
          </NavLink>

          <NavLink
            to="/dashboard/training"
            className={getClassName}
          >
            <FaGraduationCap className="menuIcon yellowIcon" />
            <span>Training</span>
          </NavLink>

          <NavLink
            to="/dashboard/candidate-onboarding"
            className={getClassName}
          >
            <FaLaptopCode className="menuIcon cyanIcon" />
            <span>Candidate Onboarding</span>
          </NavLink>

          <NavLink
            to="/dashboard/vendor-onboarding"
            className={getClassName}
          >
            <FaComments className="menuIcon tealIcon" />
            <span>Vendor Onboarding</span>
          </NavLink>

          <NavLink
            to="/dashboard/employee-status"
            className={getClassName}
          >
            <FaIdBadge className="menuIcon indigoIcon" />
            <span>Emp Status Report</span>
          </NavLink>

        </div>
      </div>

      {/* LOGOUT */}

      <div className="e2e_sidebar_logout">
        <FaSignOutAlt className="logoutIcon" />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;