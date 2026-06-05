import { useEffect, useState } from "react";
import NewJobListForm from "../../forms/NewJoblistForm";
import "../../styles/Dashboard/jobs.css";

import Loader from "./Loader";

function Jobs() {

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");
const [showJobPopup, setShowJobPopup] =
  useState(false);
  const [entries, setEntries] =
    useState(10);

  const [category, setCategory] =
    useState("Job/Candidates");

  const [tableData, setTableData] =
    useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id:1,
          date:"2021-12-27",
          requirement:"Nagapratima Chappidi",
          client:"cnpratima@gmail.com",
          applied:"Jobs",
        },

        {
          id:2,
          date:"2021-12-27",
          requirement:"Nagapratima Chappidi",
          client:"cnpratima@gmail.com",
          applied:"Job/Candidates",
        },

        {
          id:3,
          date:"2021-12-23",
          requirement:"Nisha Gajjar",
          client:"nbpatel440@gmail.com",
          applied:"Jobs",
        },

        {
          id:4,
          date:"2021-12-23",
          requirement:"Nisha Gajjar",
          client:"nbpatel440@gmail.com",
          applied:"Job/Candidates",
        },

        {
          id:5,
          date:"2021-12-17",
          requirement:"Todd Asmussen",
          client:"todd.asmussen@outlook.com",
          applied:"Jobs",
        },

      ]);

      setLoading(false);

    }, 1000);

  }, []);

  /* FILTER */

  const filteredData = tableData

    .filter(

      (item)=>

        item.requirement
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        item.client
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    )

    .slice(0, entries);

  if(loading){

    return <Loader />;
  }

  return (

    <div className="e2e_jobs_page">

      {/* TOP */}

      <div className="e2e_jobs_top">

        <div className="e2e_jobs_left">

          <h2>
            Jobs Application List
          </h2>

          <div className="e2e_jobs_heading_line"></div>

        </div>

        <div className="e2e_jobs_right">

          <button
  onClick={() =>
    setShowJobPopup(true)
  }
>
  + Add New
</button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="e2e_jobs_filters">
        <div className="e2e_jobs_filter_right">

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e)=>
              setSearchTerm(
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* TABLE */}

      <div className="e2e_jobs_table_wrapper">

        <table>

          <thead>

            <tr>

              <th>#</th>

              <th>
                Requirement Date
              </th>

              <th>
                Requirement Name
              </th>

              <th>
                Client Name
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredData.map(
              (item,index)=>(

              <tr key={item.id}>

                <td>
                  {index+1}
                </td>

                <td>

                  <div className="e2e_jobs_details">

                    <p>
                      Name :
                      <strong>
                        {item.date}
                      </strong>
                    </p>

                    <p>
                      Applied for :
                      <strong>
                        {item.applied}
                      </strong>
                    </p>

                  </div>

                </td>

                <td>
                  {item.requirement}
                </td>

                <td>
                  {item.client}
                </td>

                <td>

                  <div className="e2e_jobs_actions">

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

            ))}

          </tbody>

        </table>

      </div>
{showJobPopup && (
  <NewJobListForm
    closePopup={() =>
      setShowJobPopup(false)
    }
  />
)}
    </div>
  );
}

export default Jobs;