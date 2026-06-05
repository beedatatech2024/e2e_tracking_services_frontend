import { useEffect, useState } from "react";

import "../../styles/Dashboard/candidateonboarding.css";

import Loader from "./Loader";

function CandidateOnboarding() {

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [entries, setEntries] =
    useState(10);

  const [tableData, setTableData] =
    useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id: 1,
          joiningDate: "01-Jun-2026",
          candidateName: "Rahul Kumar",
          technology: "Java Developer",
          client: "Infosys",
          status: "Completed",
        },

        {
          id: 2,
          joiningDate: "03-Jun-2026",
          candidateName: "John Smith",
          technology: ".NET Developer",
          client: "TCS",
          status: "Pending",
        },

        {
          id: 3,
          joiningDate: "05-Jun-2026",
          candidateName: "David Miller",
          technology: "DevOps Engineer",
          client: "Wipro",
          status: "In Progress",
        },

        {
          id: 4,
          joiningDate: "06-Jun-2026",
          candidateName: "Suresh Reddy",
          technology: "React Developer",
          client: "Accenture",
          status: "Completed",
        },

      ]);

      setLoading(false);

    }, 1000);

  }, []);

  const filteredData = tableData

    .filter(
      (item) =>
        item.candidateName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

        ||

        item.client
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )

    .slice(0, entries);

  if (loading) {

    return <Loader />;

  }

  return (

    <div className="e2e_onboarding_page">

      <div className="e2e_onboarding_top">

        <div>

          <h2>
            Candidate Onboarding
          </h2>

          <div className="e2e_onboarding_heading_line"></div>

        </div>

        <button className="e2e_onboarding_add_btn">

          + Add New

        </button>

      </div>

      <div className="e2e_onboarding_filters">

        {/* <div className="e2e_onboarding_filter_left">

          <label>
            Category :
          </label>

          <select className="e2e_onboarding_select">

            <option>
              Candidate Onboarding
            </option>

          </select>

          <button className="e2e_onboarding_report_btn">

            Generate Report

          </button>

        </div> */}

        <div className="e2e_onboarding_filter_right">

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="e2e_onboarding_search"
          />

        </div>

      </div>

      <div className="e2e_onboarding_show_row">

        <div>

          Show

          <select
            className="e2e_onboarding_entries"
            value={entries}
            onChange={(e) =>
              setEntries(
                Number(
                  e.target.value
                )
              )
            }
          >

            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>

          </select>

          entries

        </div>

      </div>

      <div className="e2e_onboarding_table_wrapper">

        <table className="e2e_onboarding_table">

          <thead className="e2e_onboarding_thead">

            <tr className="e2e_onboarding_head_row">

              <th className="e2e_onboarding_th_id">
                #
              </th>

              <th className="e2e_onboarding_th_joining">
                Joining Date
              </th>

              <th className="e2e_onboarding_th_candidate">
                Candidate Details
              </th>

              <th className="e2e_onboarding_th_client">
                Client
              </th>

              <th className="e2e_onboarding_th_status">
                Status
              </th>

              <th className="e2e_onboarding_th_action">
                Action
              </th>

            </tr>

          </thead>

          <tbody className="e2e_onboarding_tbody">

            {filteredData.map(
              (item, index) => (

                <tr
                  key={item.id}
                  className="e2e_onboarding_row"
                >

                  <td className="e2e_onboarding_td_id">

                    {index + 1}

                  </td>

                  <td className="e2e_onboarding_td_joining">

                    {item.joiningDate}

                  </td>

                  <td className="e2e_onboarding_td_candidate">

                    <div className="e2e_onboarding_details">

                      <p>

                        Name :

                        <strong>
                          {item.candidateName}
                        </strong>

                      </p>

                      <p>

                        Technology :

                        <strong>
                          {item.technology}
                        </strong>

                      </p>

                    </div>

                  </td>

                  <td className="e2e_onboarding_td_client">

                    {item.client}

                  </td>

                  <td className="e2e_onboarding_td_status">

                    <span
                      className={
                        item.status === "Completed"
                          ? "e2e_onboarding_status_completed"
                          : item.status === "Pending"
                          ? "e2e_onboarding_status_pending"
                          : "e2e_onboarding_status_progress"
                      }
                    >

                      {item.status}

                    </span>

                  </td>

                  <td className="e2e_onboarding_td_action">

                    <div className="e2e_onboarding_actions">

                      <button className="e2e_onboarding_view_btn">
                        View
                      </button>

                      <button className="e2e_onboarding_edit_btn">
                        Edit
                      </button>

                      <button className="e2e_onboarding_delete_btn">
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default CandidateOnboarding;