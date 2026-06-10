import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getDashboardSummary } from "../../api/applicationApi";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import Clients from "./Clients";
import DashboardCards from "./DashboardCards";
import DashboardGraphs from "./DashboardGraphs";
import DashboardTable from "./DashboardTable";
import Candidates from "./Candidates";
import PrimeVendors from "./PrimeVendors";
import Recruiting from "./Recruiting";
import BenchSales from "./BenchSales";
import HotList from "./HotList";
import Jobs from "./Jobs";
import Training from "./Training";
import CandidateOnboarding from "./CandidateOnboarding";
import EmployeeStatusReport from "./EmpStatus";
// import Resources from "./Resources"; 

import "../../styles/Dashboard/index.css";

import {
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {
  const [cards, setCards] = useState([]);

  const dummyTableData = [
    {
      id: 1,
      submissionDate: "28 May 2026",
      recruiterName: "Kiran",
      candidateName: "Rahul Kumar",
    },
    {
      id: 2,
      submissionDate: "28 May 2026",
      recruiterName: "Anjali",
      candidateName: "Suresh Reddy",
    },
    {
      id: 3,
      submissionDate: "27 May 2026",
      recruiterName: "Priya",
      candidateName: "Vamsi Krishna",
    },
    {
      id: 4,
      submissionDate: "27 May 2026",
      recruiterName: "Rohit",
      candidateName: "Mahesh Babu",
    },
  ];

  const [tableData, setTableData] =
    useState(dummyTableData);

  useEffect(() => {
  const fetchDashboardSummary = async () => {
    try {
      const summary =
        await getDashboardSummary();

      setCards([
        {
          title: "Today's Submissions",
          count:
            summary.today_submissions || 0,
          growth: "8%",
          icon: <FaBriefcase />,
        },
        {
          title: "Weekly Submissions",
          count:
            summary.weekly_submissions || 0,
          growth: "10%",
          icon: <FaChartLine />,
        },
        {
          title: "Interviews",
          count: summary.interviews || 0,
          growth: "5%",
          icon: <FaUsers />,
        },
        {
          title: "Placements",
          count: summary.placements || 0,
          growth: "0%",
          icon: <FaUserTie />,
        },
      ]);
    } catch (error) {
      console.error(
        "Failed to load dashboard summary",
        error
      );
    }
  };

  fetchDashboardSummary();
}, []);


  return (
    <div className="e2e_dashboard_main_layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="e2e_dashboard_right_section">

        <Navbar />

        <div className="e2e_dashboard_scroll_content">

          <Routes>

            {/* Dashboard Home */}
            <Route
              index
              element={
                <>
                  <DashboardCards
                    cards={cards}
                  />

                  <DashboardGraphs />

                  <DashboardTable
                    tableData={tableData}
                  />
                </>
              }
            />

            <Route
              path="recruiting"
              element={<Recruiting />}
            />

            <Route
              path="bench-sales"
              element={<BenchSales />}
            />

            <Route
              path="hotlist"
              element={<HotList />}
            />

            <Route
              path="jobs"
              element={<Jobs />}
            />

            <Route
              path="vendors"
              element={<PrimeVendors />}
            />

            <Route
              path="clients"
              element={<Clients />}
            />
            <Route
              path="candidates"
              element={<Candidates />}
            />

            <Route
              path="training"
              element={<Training />}
            />

            <Route
              path="candidate-onboarding"
              element={<CandidateOnboarding />}
            />

            <Route
              path="employee-status"
              element={<EmployeeStatusReport />}
            />

          </Routes>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;