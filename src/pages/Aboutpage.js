import "../styles/aboutpage.css";

import {
  FaUsers,
  FaHandshake,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

function AboutPage() {
  const services = [
    "Recruiting",
    "Bench Sales",
    "Prime Vendors",
    "Clients",
    "Jobs",
    "Training",
  ];

  return (
    <div className="e2e_about_container">
      {/* HERO */}

      <section className="e2e_about_hero">
        <div className="e2e_about_overlay"></div>

        <div className="e2e_about_content">
          <span className="e2e_about_badge">
            ABOUT E2E TRACKING SERVICES
          </span>

          <h1 className="e2e_about_title">
            Empowering Recruitment &
            Workforce Management
          </h1>

          <p className="e2e_about_description">
            E2E Tracking Services helps organizations manage recruiting,
            submissions, vendors, clients, jobs, onboarding and workforce
            operations through one centralized platform.
          </p>

          <button className="e2e_about_btn">
            Explore Platform
          </button>
        </div>
      </section>

      {/* STATS */}

      <section className="e2e_about_stats_section">

        <div className="e2e_about_stat_card">
          <FaUsers />
          <h2>12,540+</h2>
          <p>Candidates</p>
        </div>

        <div className="e2e_about_stat_card">
          <FaBriefcase />
          <h2>320+</h2>
          <p>Active Jobs</p>
        </div>

        <div className="e2e_about_stat_card">
          <FaHandshake />
          <h2>500+</h2>
          <p>Clients</p>
        </div>

        <div className="e2e_about_stat_card">
          <FaChartLine />
          <h2>96%</h2>
          <p>Success Rate</p>
        </div>

      </section>

      {/* COMPANY */}

      <section className="e2e_about_company">

        <div className="e2e_about_company_left">
          <h2>Who We Are</h2>

          <p>
            We provide end-to-end staffing and recruitment management
            solutions that help organizations streamline candidate sourcing,
            client management, vendor coordination and workforce tracking.
          </p>

          <ul>
            <li><FaCheckCircle /> End-to-End Recruitment Tracking</li>
            <li><FaCheckCircle /> Bench Sales Management</li>
            <li><FaCheckCircle /> Vendor Collaboration</li>
            <li><FaCheckCircle /> Client Management</li>
            <li><FaCheckCircle /> Employee Status Monitoring</li>
          </ul>
        </div>

        <div className="e2e_about_company_right">

          <div className="e2e_about_glass_card">
            <h3>Our Mission</h3>

            <p>
              Deliver innovative workforce management solutions that
              simplify recruiting and staffing operations.
            </p>
          </div>

          <div className="e2e_about_glass_card">
            <h3>Our Vision</h3>

            <p>
              Become the most trusted staffing operations platform globally.
            </p>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="e2e_about_services">

        <h2 className="e2e_about_section_title">
          Service Modules
        </h2>

        <div className="e2e_about_services_grid">

          {services.map((item, index) => (
            <div
              key={index}
              className="e2e_about_service_card"
            >
              <h3>{item}</h3>

              <p>
                Powerful management tools for {item}.
              </p>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
}

export default AboutPage;