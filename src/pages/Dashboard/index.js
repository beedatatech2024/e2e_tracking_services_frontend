import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

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
  const dummyCards = [
    {
      title: "Total Submissions",
      count: "1,245",
      growth: "+12%",
      icon: <FaUsers />,
    },
    {
      title: "Today's Submissions",
      count: "22",
      growth: "+8%",
      icon: <FaBriefcase />,
    },
    {
      title: "Weekly Submissions",
      count: "116",
      growth: "+18%",
      icon: <FaChartLine />,
    },
    {
      title: "Placements",
      count: "10",
      growth: "+22%",
      icon: <FaUserTie />,
    },
  ];

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

  const [cards, setCards] =
    useState(dummyCards);

  const [tableData, setTableData] =
    useState(dummyTableData);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/dashboard-cards"
      )
      .then((res) => {
        if (
          res.data &&
          res.data.length > 0
        ) {
          setCards(res.data);
        }
      })
      .catch(() => {
        console.log(
          "Cards API not connected. Using dummy data."
        );
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/dashboard-table"
      )
      .then((res) => {
        if (
          res.data &&
          res.data.length > 0
        ) {
          setTableData(res.data);
        }
      })
      .catch(() => {
        console.log(
          "Table API not connected. Using dummy data."
        );
      });
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
              path="benchsales"
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