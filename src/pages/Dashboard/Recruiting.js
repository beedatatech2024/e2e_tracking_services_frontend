import { useEffect, useState } from "react";

import "../../styles/Dashboard/recruiting.css";
import NewApplicationForm from "../../forms/NewApplicationForm";

import Loader from "./Loader";

function Recruiting() {

  const [loading, setLoading] =
    useState(true);
  const [showPopup,setShowPopup] =
useState(false); 
  const [searchTerm, setSearchTerm] =
    useState("");

  const [entries, setEntries] =
    useState(10);

  const [category, setCategory] =
    useState("Recruiting");

  const [tableData, setTableData] =
    useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id:1,
          date:"2026-02-13",
          recruiter:"Jones",
          candidate:"Sowmya",
        },

        {
          id:2,
          date:"2025-12-23",
          recruiter:"Mike",
          candidate:"Jaganadham",
        },

        {
          id:3,
          date:"2025-05-14",
          recruiter:"Kiran",
          candidate:"Rahul",
        },

        {
          id:4,
          date:"2025-05-14",
          recruiter:"Anjali",
          candidate:"Mahesh",
        },

        {
          id:5,
          date:"2025-05-14",
          recruiter:"Ravi",
          candidate:"Lokesh",
        },

        {
          id:6,
          date:"2025-05-14",
          recruiter:"John",
          candidate:"Sandeep",
        },

        {
          id:7,
          date:"2025-05-14",
          recruiter:"Robert",
          candidate:"Vamsi",
        },

        {
          id:8,
          date:"2025-05-14",
          recruiter:"Priya",
          candidate:"Sai",
        },

        {
          id:9,
          date:"2025-05-14",
          recruiter:"David",
          candidate:"Naresh",
        },

        {
          id:10,
          date:"2025-05-14",
          recruiter:"Kumar",
          candidate:"Rakesh",
        },

        {
          id:11,
          date:"2025-05-14",
          recruiter:"Surya",
          candidate:"Ajay",
        },

        {
          id:12,
          date:"2025-05-14",
          recruiter:"Mahesh",
          candidate:"Tarun",
        },

      ]);

      setLoading(false);

    }, 1000);

  }, []);

  /* SEARCH FILTER */

  const filteredData = tableData
    .filter(

      (item)=>

        item.recruiter
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        item.candidate
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

    <div className="e2e_recruiting_page">

      {/* TOP */}

      <div className="e2e_recruiting_top">

        {/* LEFT */}

        <div className="e2e_recruiting_left">

          <h2>
            Recruiters Application List
          </h2>

          <div className="e2e_recruiting_heading_line"></div>

        </div>

        {/* RIGHT */}

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

      {/* FILTERS */}

      <div className="e2e_recruiting_filters">

        {/* SEARCH */}

        <div className="e2e_recruiting_filter_right">

          <input
            type="text"
            placeholder="Search recruiter or candidate..."
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
                  {item.date}
                </td>

                <td>
                  {item.recruiter}
                </td>

                <td>
                  {item.candidate}
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

            ))}

          </tbody>

        </table>

      </div>
{
  showPopup && (

    <NewApplicationForm
      closePopup={() =>
        setShowPopup(false)
      }
    />

  )
}
    </div>
  );
}

export default Recruiting;