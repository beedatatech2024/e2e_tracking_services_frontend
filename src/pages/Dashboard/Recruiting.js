import { useEffect, useState } from "react";

import "../../styles/Dashboard/recruiting.css";

import NewApplicationForm from "../../forms/NewApplicationForm";
import Loader from "./Loader";
import Pagination from "./Pagination";

import { getApplications } from "../../api/applicationApi";

function Recruiting() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [entries, setEntries] = useState(5);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [initialLoading, setInitialLoading] = useState(true);
const [tableLoading, setTableLoading] = useState(false);

  const fetchCandidates = async () => {
  try {
    if (initialLoading) {
      setInitialLoading(true);
    } else {
      setTableLoading(true);
    }

    const response = await getApplications(
      currentPage,
      entries,
      debouncedSearch,
      2
    );

    setTableData(response.data || []);

    setTotalPages(
      response.total_pages || 1
    );
  } catch (error) {
    console.error(
      "Error fetching candidates:",
      error
    );
  } finally {
    setInitialLoading(false);
    setTableLoading(false);
  }
};

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
  fetchCandidates();
}, [
  currentPage,
  entries,
  debouncedSearch,
]);


  if (initialLoading) {
  return <Loader />;
}

  return (
    <div className="e2e_recruiting_page">
      <div className="e2e_recruiting_top">
        <div className="e2e_recruiting_left">
          <h2>
            Recruiters Application List
          </h2>

          <div className="e2e_recruiting_heading_line"></div>
        </div>

        <div className="e2e_recruiting_right">
          <button
            className="e2e_recruiting_add_btn"
            onClick={() =>
              setShowPopup(true)
            }
          >
            + Add New
          </button>
        </div>
      </div>

      <div className="e2e_recruiting_filters">
        <div className="e2e_recruiting_filter_right">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(
                e.target.value
              );

              setCurrentPage(1);
            }}
          />
        </div>

        <select
          value={entries}
          className="e2e_pagination_number"
          onChange={(e) => {
            setEntries(
              Number(e.target.value)
            );

            setCurrentPage(1);
          }}
        >
          <option value={5}>
            5
          </option>
          <option value={10}>
            10
          </option>

          <option value={25}>
            25
          </option>

          <option value={50}>
            50
          </option>

          <option value={100}>
            100
          </option>
        </select>
      </div>

      <div className="e2e_recruiting_table_wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>
                Submission Date
              </th>
              <th>
                Recruiter Name
              </th>
              <th>
                Candidate Name
              </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
  {tableLoading ? (
    <tr>
      <td
        colSpan="5"
        style={{
          textAlign: "center",
          padding: "30px",
        }}
      >
        Loading...
      </td>
    </tr>
  ) : tableData.length > 0 ? (
    tableData.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    {(currentPage - 1) *
                      entries +
                      index +
                      1}
                  </td>

                  <td>
                    {item.date_created}
                  </td>

                  <td>
                    {item.employee_name}
                  </td>

                  <td>
                    {item.candidate_name}
                  </td>

                  <td>
                    <div className="e2e_recruiting_actions">
                      <button className="viewBtn">
                        View
                      </button>

                      <button className="editBtn">
                        Edit
                      </button>

                      <button className="deleteBtn">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
  ) : (
    <tr>
      <td
        colSpan="5"
        style={{
          textAlign: "center",
          padding: "30px",
        }}
      >
        No Records Found
      </td>
    </tr>
  )}
</tbody>
        </table>
      </div>

      <Pagination
        currentPage={
          currentPage
        }
        totalPages={
          totalPages
        }
        onPageChange={
          setCurrentPage
        }
      />

      {showPopup && (
        <NewApplicationForm
          closePopup={() =>
            setShowPopup(false)
          }
        />
      )}
    </div>
  );
}

export default Recruiting;