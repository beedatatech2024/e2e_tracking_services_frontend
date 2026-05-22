import "../../styles/Dashboard/graphs.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import {
  FaCode,
  FaDatabase,
  FaPython,
  FaAws,
  FaArrowRight,
} from "react-icons/fa";

/* =========================
   PIE DATA
========================= */

const candidateData = [
  { name: "Active", value: 4520, color: "#4285F4" },
  { name: "Submitted", value: 3250, color: "#8E54FF" },
  { name: "On Hold", value: 2180, color: "#F9A826" },
  { name: "Rejected", value: 1870, color: "#FF5B6E" },
  { name: "Placed", value: 720, color: "#52C56B" },
];

/* =========================
   SKILLS
========================= */

const skills = [
  {
    name: "React.js",
    value: 85,
    color: "#4285F4",
    icon: <FaCode />,
  },
  {
    name: "JavaScript",
    value: 72,
    color: "#F9A826",
    icon: <FaCode />,
  },
  {
    name: "Node.js",
    value: 61,
    color: "#52C56B",
    icon: <FaDatabase />,
  },
  {
    name: "Python",
    value: 54,
    color: "#8E54FF",
    icon: <FaPython />,
  },
  {
    name: "AWS",
    value: 43,
    color: "#FF5B6E",
    icon: <FaAws />,
  },
];

function DashboardGraphs() {

  return (

    <div className="e2e_dashboard_grid">

      {/* =========================
          CANDIDATES OVERVIEW
      ========================= */}

      <div className="e2e_card">

        <h3 className="e2e_card_title">
          Candidates Overview
        </h3>

        <div className="e2e_chart_layout">

          <div className="e2e_chart_wrapper">

            <ResponsiveContainer width="100%" height={180}>

              <PieChart>

                <Pie
                  data={candidateData}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                >

                  {candidateData.map((item, index) => (

                    <Cell
                      key={index}
                      fill={item.color}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

            <div className="e2e_chart_center">

              <h2>12,540</h2>

              <p>Total</p>

            </div>

          </div>

          <div className="e2e_chart_legend">

            {candidateData.map((item, index) => (

              <div
                className="e2e_legend_item"
                key={index}
              >

                <div className="e2e_legend_left">

                  <span
                    className="e2e_dot"
                    style={{ background: item.color }}
                  ></span>

                  <p>{item.name}</p>

                </div>

                <span>{item.value}</span>

              </div>

            ))}

          </div>

        </div>

        <button className="e2e_view_btn">

          View Details

          <FaArrowRight />

        </button>

      </div>

      {/* =========================
          TOP SKILLS
      ========================= */}

      <div className="e2e_card">

        <div className="e2e_card_header">

          <h3 className="e2e_card_title">
            Top Skills
          </h3>

          <button className="e2e_view_all">
            View All
          </button>

        </div>

        <div className="e2e_skills_list">

          {skills.map((item, index) => (

            <div
              className="e2e_skill_item"
              key={index}
            >

              <div className="e2e_skill_left">

                <div
                  className="e2e_skill_icon"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                  }}
                >

                  {item.icon}

                </div>

                <p>{item.name}</p>

              </div>

              <div className="e2e_skill_bar_wrapper">

                <div className="e2e_skill_bar_bg">

                  <div
                    className="e2e_skill_bar_fill"
                    style={{
                      width: `${item.value}%`,
                      background: item.color,
                    }}
                  ></div>

                </div>

                <span>{item.value}%</span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =========================
          SOURCE PERFORMANCE
      ========================= */}

      <div className="e2e_card">

        <h3 className="e2e_card_title">
          Source Performance
        </h3>

        <div className="e2e_chart_layout">

          <div className="e2e_chart_wrapper">

            <ResponsiveContainer width="100%" height={180}>

              <PieChart>

                <Pie
                  data={candidateData}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                >

                  {candidateData.map((item, index) => (

                    <Cell
                      key={index}
                      fill={item.color}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

            <div className="e2e_chart_center">

              <h2>12,540</h2>

              <p>Total</p>

            </div>

          </div>

          <div className="e2e_chart_legend">

            {candidateData.map((item, index) => (

              <div
                className="e2e_legend_item"
                key={index}
              >

                <div className="e2e_legend_left">

                  <span
                    className="e2e_dot"
                    style={{ background: item.color }}
                  ></span>

                  <p>{item.name}</p>

                </div>

                <span>{item.value}</span>

              </div>

            ))}

          </div>

        </div>

        <button className="e2e_view_btn">

          View Details

          <FaArrowRight />

        </button>

      </div>

    </div>

  );
}

export default DashboardGraphs;