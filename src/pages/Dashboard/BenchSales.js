import { useEffect, useState } from "react";
import "../../styles/Dashboard/benchsales.css";
import Loader from "./Loader";
import NewBenchSalesForm from "../../forms/NewBenchSalesForm";
import { getApplications } from "../../api/applicationApi";
import Pagination from "./Pagination";

function BenchSales() {
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
        debouncedSearch
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
            BenchSales Application List
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
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="e2e_benchsales_table_wrapper">
        <table className="e2e_benchsales_table">
          <thead className="e2e_benchsales_thead">
            <tr className="e2e_benchsales_head_row">
              <th className="e2e_benchsales_th_id">#</th>
              <th className="e2e_benchsales_th_submission">Submission Date</th>
              <th className="e2e_benchsales_th_candidate">Candidate Details</th>
              <th className="e2e_benchsales_th_poc">POC</th>
              <th className="e2e_benchsales_th_client">Client</th>
              <th className="e2e_benchsales_th_action">Action</th>
            </tr>
          </thead>
          <tbody className="e2e_benchsales_tbody">
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
                <tr
                  key={item.id}
                  className="e2e_benchsales_row"
                >
                  <td className="e2e_benchsales_td_id">{index + 1} </td>
                  <td className="e2e_benchsales_td_submission">{item.date_created}</td>
                  <td className="e2e_benchsales_td_candidate">
                    <div className="e2e_benchsales_details">
                      <p>Name : <strong>{item.candidate_name}</strong></p>
                      <p>Technology :<strong>{item.technology}</strong></p>
                    </div>
                  </td>
                  <td className="e2e_benchsales_td_poc">{item.poc}</td>
                  <td className="e2e_benchsales_td_client">{item.client}</td>
                  <td className="e2e_benchsales_td_action">
                    <div className="e2e_benchsales_actions">
                      <button className="e2e_benchsales_view_btn">View</button>
                      <button className="e2e_benchsales_edit_btn">Edit</button>
                      <button className="e2e_benchsales_delete_btn">Delete</button>
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
      {
        showPopup && (
          <NewBenchSalesForm
            closePopup={() =>
              setShowPopup(false)
            }
          />
        )
      }
    </div>
  );
}

export default BenchSales;