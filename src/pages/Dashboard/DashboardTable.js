import "../../styles/Dashboard/table.css";

import axios from "axios";
import { useEffect, useState } from "react";

function DashboardTable() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/dashboard-table")
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className="e2e_table_container">

      <div className="e2e_table_header">
        <h3>Recent Activities</h3>
      </div>

      <table className="e2e_dashboard_table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );
}

export default DashboardTable;