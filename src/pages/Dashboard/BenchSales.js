import { useEffect, useState } from "react";
import "../../styles/Dashboard/benchsales.css";
import Loader from "./Loader";
import NewBenchSalesForm from "../../forms/NewBenchSalesForm";
function BenchSales() {

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [entries, setEntries] = useState(10);

  const [tableData, setTableData] = useState([]);
  const [showPopup, setShowPopup] =
useState(false);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id: 1,
          submissionDate: "28-May-2026",
          candidateName: "John Smith",
          technology: ".NET Developer",
          poc: "Kiran",
          client: "Tech Mahindra",
        },

        {
          id: 2,
          submissionDate: "27-May-2026",
          candidateName: "Rahul Kumar",
          technology: "Java Developer",
          poc: "Priya",
          client: "Infosys",
        },

        {
          id: 3,
          submissionDate: "26-May-2026",
          candidateName: "David Miller",
          technology: "DevOps Engineer",
          poc: "Anjali",
          client: "TCS",
        },

        {
          id: 4,
          submissionDate: "25-May-2026",
          candidateName: "Suresh Reddy",
          technology: "React Developer",
          poc: "Vamsi",
          client: "Wipro",
        },

        {
          id: 5,
          submissionDate: "24-May-2026",
          candidateName: "Mahesh Babu",
          technology: "Python Developer",
          poc: "Sai",
          client: "Accenture",
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

        ||

        item.poc
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )

    .slice(0, entries);

  if (loading) {

    return <Loader />;

  }

  return (

    <div className="e2e_benchsales_page">

      {/* TOP */}

      <div className="e2e_benchsales_top">

        <div>

          <h2>
            Bench Sales Application List
          </h2>

          <div className="e2e_benchsales_heading_line"></div>

        </div>

        <button
  className="e2e_benchsales_add_btn"
  onClick={() => setShowPopup(true)}
>
  + Add New
</button>

      </div>

      {/* FILTERS */}

      <div className="e2e_benchsales_filters">

        <div className="e2e_benchsales_filter_left">
    

        </div>

        <div className="e2e_benchsales_filter_right">

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="e2e_benchsales_search"
          />

        </div>

      </div>

      {/* SHOW ENTRIES */}

      <div className="e2e_benchsales_show_row">

        <div>

          Show

          <select
            className="e2e_benchsales_entries"
            value={entries}
            onChange={(e) =>
              setEntries(
                Number(
                  e.target.value
                )
              )
            }
          >

            <option value={10}>
              10
            </option>

            <option value={25}>
              25
            </option>

            <option value={50}>
              50
            </option>

          </select>

          entries

        </div>

      </div>

      {/* TABLE */}

      <div className="e2e_benchsales_table_wrapper">

        <table className="e2e_benchsales_table">

          <thead className="e2e_benchsales_thead">

            <tr className="e2e_benchsales_head_row">

              <th className="e2e_benchsales_th_id">
                #
              </th>

              <th className="e2e_benchsales_th_submission">
                Submission Date
              </th>

              <th className="e2e_benchsales_th_candidate">
                Candidate Details
              </th>

              <th className="e2e_benchsales_th_poc">
                POC
              </th>

              <th className="e2e_benchsales_th_client">
                Client
              </th>

              <th className="e2e_benchsales_th_action">
                Action
              </th>

            </tr>

          </thead>

          <tbody className="e2e_benchsales_tbody">

            {filteredData.map(
              (item, index) => (

                <tr
                  key={item.id}
                  className="e2e_benchsales_row"
                >

                  <td className="e2e_benchsales_td_id">

                    {index + 1}

                  </td>

                  <td className="e2e_benchsales_td_submission">

                    {item.submissionDate}

                  </td>

                  <td className="e2e_benchsales_td_candidate">

                    <div className="e2e_benchsales_details">

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

                  <td className="e2e_benchsales_td_poc">

                    {item.poc}

                  </td>

                  <td className="e2e_benchsales_td_client">

                    {item.client}

                  </td>

                  <td className="e2e_benchsales_td_action">

                    <div className="e2e_benchsales_actions">

                      <button className="e2e_benchsales_view_btn">

                        View

                      </button>

                      <button className="e2e_benchsales_edit_btn">

                        Edit

                      </button>

                      <button className="e2e_benchsales_delete_btn">

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