import { useEffect, useState } from "react";

import "../../styles/Dashboard/empstatus.css";

import Loader from "./Loader";

function EmployeeStatusReport() {

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
          empId: "EMP001",
          employeeName: "Kiran Kumar",
          email: "kiran@company.com",
          requestSent: "Yes",
        },

        {
          id: 2,
          empId: "EMP002",
          employeeName: "Rahul Kumar",
          email: "rahul@company.com",
          requestSent: "No",
        },

        {
          id: 3,
          empId: "EMP003",
          employeeName: "Anjali Sharma",
          email: "anjali@company.com",
          requestSent: "Yes",
        },

        {
          id: 4,
          empId: "EMP004",
          employeeName: "Vamsi Krishna",
          email: "vamsi@company.com",
          requestSent: "Pending",
        },

      ]);

      setLoading(false);

    }, 1000);

  }, []);

  const filteredData = tableData

    .filter(
      (item) =>

        item.employeeName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

        ||

        item.empId
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

        ||

        item.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )

    .slice(0, entries);

  if (loading) {

    return <Loader />;

  }

  return (

    <div className="e2e_empstatus_page">

      <div className="e2e_empstatus_top">

        <div>

          <h2>
            Employee Status Report
          </h2>

          <div className="e2e_empstatus_heading_line"></div>

        </div>

        <button className="e2e_empstatus_add_btn">

          + Add New

        </button>

      </div>

      <div className="e2e_empstatus_filters">

        

        <div className="e2e_empstatus_filter_right">

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="e2e_empstatus_search"
          />

        </div>

      </div>

      

      <div className="e2e_empstatus_table_wrapper">

        <table className="e2e_empstatus_table">

          <thead className="e2e_empstatus_thead">

            <tr className="e2e_empstatus_head_row">

              <th>#</th>

              <th>Employee ID</th>

              <th>Employee Name</th>

              <th>Email</th>

              <th>Request Sent</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody className="e2e_empstatus_tbody">

            {filteredData.map(
              (item, index) => (

                <tr
                  key={item.id}
                  className="e2e_empstatus_row"
                >

                  <td>

                    {index + 1}

                  </td>

                  <td>

                    {item.empId}

                  </td>

                  <td>

                    {item.employeeName}

                  </td>

                  <td>

                    {item.email}

                  </td>

                  <td>

                    <span
                      className={
                        item.requestSent === "Yes"
                          ? "e2e_empstatus_yes"
                          : item.requestSent === "No"
                          ? "e2e_empstatus_no"
                          : "e2e_empstatus_pending"
                      }
                    >

                      {item.requestSent}

                    </span>

                  </td>

                  <td>

                    <div className="e2e_empstatus_actions">

                      <button className="e2e_empstatus_view_btn">

                        View

                      </button>

                      <button className="e2e_empstatus_edit_btn">

                        Edit

                      </button>

                      <button className="e2e_empstatus_delete_btn">

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

export default EmployeeStatusReport;