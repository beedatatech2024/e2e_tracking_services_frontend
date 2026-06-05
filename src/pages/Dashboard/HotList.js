import { useEffect, useState } from "react";

import "../../styles/Dashboard/hotlist.css";
import NewHotlistForm from "../../forms/NewHotlistForm";
import Loader from "./Loader";

function HotList() {

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [entries, setEntries] =
    useState(10);

  const [category, setCategory] =
    useState("Hot List");
const [showHotlistPopup, setShowHotlistPopup] =
  useState(false);
  const [tableData, setTableData] =
    useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id:1,
          date:"2025-03-14",
          candidate:"Kevin",
          phone:"Jagannadham Vemula",
          technology:"EPSoft Technologies LLC",
          location:"Phani",
          visa:"Submitted",
        },

        {
          id:2,
          date:"2024-10-04",
          candidate:"Steven",
          phone:"Kishore",
          technology:"USM Systems",
          location:"Piyush",
          visa:"Submitted",
        },

        {
          id:3,
          date:"2022-03-05",
          candidate:"Simon",
          phone:"Madhan",
          technology:"KTEK",
          location:"H1-B",
          visa:"Submitted",
        },

      ]);

      setLoading(false);

    }, 1000);

  }, []);

  /* FILTER */

  const filteredData = tableData

    .filter(

      (item)=>

        item.candidate
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        item.technology
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

    <div className="e2e_hotlist_page">

      {/* TOP */}

      <div className="e2e_hotlist_top">

        <div className="e2e_hotlist_left">

          <h2>
            Application List
          </h2>

          <div className="e2e_hotlist_heading_line"></div>

        </div>

        <div className="e2e_hotlist_right">

          <button
  onClick={() =>
    setShowHotlistPopup(true)
  }
>
  + Add New
</button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="e2e_hotlist_filters">
          
        {/* SEARCH */}

        <div className="e2e_hotlist_filter_right">

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

      <div className="e2e_hotlist_table_wrapper">

        <table>

          <thead>

            <tr>

              <th>#</th>

              <th>
                Candidate Details
              </th>

              <th>
                Technology
              </th>

              <th>
                Location & Visa Status
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

                  <div className="e2e_hotlist_details">

                    <p>
                      Name :
                      <strong>
                        {item.date}
                      </strong>
                    </p>

                    <p>
                      Applied for :
                      <strong>
                        Hot List
                      </strong>
                    </p>

                    <p>
                      Email Address :
                      <strong>
                        {item.candidate}
                      </strong>
                    </p>

                    <p>
                      Phone Number :
                      <strong>
                        {item.phone}
                      </strong>
                    </p>

                  </div>

                </td>

                <td>
                  {item.technology}
                </td>

                <td>

                  <div className="e2e_hotlist_location">

                    <p>
                      Current Location :
                      <strong>
                        {item.location}
                      </strong>
                    </p>

                    <p>
                      Visa Status :
                      <strong>
                        {item.visa}
                      </strong>
                    </p>

                  </div>

                </td>

                <td>

                  <div className="e2e_hotlist_actions">

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
{showHotlistPopup && (
  <NewHotlistForm
    closePopup={() =>
      setShowHotlistPopup(false)
    }
  />
)}
    </div>
  );
}

export default HotList;