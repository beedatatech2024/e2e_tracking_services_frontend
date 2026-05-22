import "../../styles/Dashboard/navbar.css";

import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="e2e_navbar_container">

      <div>
        <h2 className="e2e_navbar_title">
          Welcome back, Ramesh 
        </h2>

        <p className="e2e_navbar_subtitle">
          Here’s what’s happening with your business today.
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
            alt=""
          />

          <div>
            <h4>Ramesh Yadav</h4>
            <p>Admin</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;