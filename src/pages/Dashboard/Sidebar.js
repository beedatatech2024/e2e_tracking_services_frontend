import "../../styles/Dashboard/sidebar.css";

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
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="e2e_sidebar_container">

      {/* LOGO */}

      <div>

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

          <div className="e2e_sidebar_menu_item e2e_sidebar_active">
            <FaHome className="menuIcon" />
            <span>Dashboard</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaUsers className="menuIcon purpleIcon" />
            <span>Recruiting</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaClipboardList className="menuIcon blueIcon" />
            <span>Bench Sales</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaFire className="menuIcon redIcon" />
            <span>Hot List</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaBriefcase className="menuIcon orangeIcon" />
            <span>Jobs</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaHandshake className="menuIcon pinkIcon" />
            <span>Prime Vendors</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaBuilding className="menuIcon greenIcon" />
            <span>Clients</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaUserTie className="menuIcon violetIcon" />
            <span>Candidates</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaGraduationCap className="menuIcon yellowIcon" />
            <span>Training</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaLaptopCode className="menuIcon cyanIcon" />
            <span>Recruiters Interview</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaComments className="menuIcon tealIcon" />
            <span>Benchsales Interview</span>
          </div>

          <div className="e2e_sidebar_menu_item">
            <FaIdBadge className="menuIcon indigoIcon" />
            <span>Employee Status Record</span>
          </div>

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