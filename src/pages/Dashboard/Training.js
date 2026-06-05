import { useEffect, useState } from "react";

import "../../styles/Dashboard/training.css";
import TrainingForm from "../../forms/NewTrainingForm";
import Loader from "./Loader";

function Training() {

  const [loading, setLoading] =
    useState(true);
const [showTrainingPopup, setShowTrainingPopup] = useState(false);
  const [searchTerm, setSearchTerm] =
    useState("");

  const [entries, setEntries] =
    useState(10);

  const [category, setCategory] =
    useState("Training");

  const [tableData, setTableData] =
    useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id:1,
          candidate:"Chandini",
          email:"",
          phone:"",
        },

        {
          id:2,
          candidate:"Umarani",
          email:"",
          phone:"",
        },

        {
          id:3,
          candidate:"Rituja",
          email:"",
          phone:"",
        },

        {
          id:4,
          candidate:"Deepika Kilari",
          email:"",
          phone:"",
        },

        {
          id:5,
          candidate:"Bahjs",
          email:"",
          phone:"",
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
    )

    .slice(0, entries);

  if(loading){

    return <Loader />;
  }

  return (

    <div className="e2e_training_page">

      {/* TOP */}

      <div className="e2e_training_top">

        <div className="e2e_training_left">

          <h2>
            Training Application List
          </h2>

          <div className="e2e_training_heading_line"></div>

        </div>

        <div className="e2e_training_right">

          <button onClick={() => setShowTrainingPopup(true)}>
  + Add New
</button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="e2e_training_filters">

        <div className="e2e_training_filter_right">

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

      {/* SHOW */}

     

  

      {/* TABLE */}

      <div className="e2e_training_table_wrapper">

        <table className="e2e_training_table">

          {/* HEAD */}

          <thead className="e2e_training_table_head">

            <tr className="e2e_training_table_head_row">

              <th className="e2e_training_th e2e_training_th_id">
                #
              </th>

              <th className="e2e_training_th e2e_training_th_candidate">
                Candidate Name
              </th>

              <th className="e2e_training_th e2e_training_th_email">
                Email ID
              </th>

              <th className="e2e_training_th e2e_training_th_phone">
                Phone Number
              </th>

              <th className="e2e_training_th e2e_training_th_action">
                Action
              </th>

            </tr>

          </thead>

          {/* BODY */}

          <tbody className="e2e_training_table_body">

            {filteredData.map(
              (item,index)=>(

              <tr
                key={item.id}
                className="e2e_training_table_row"
              >

                {/* ID */}

                <td className="e2e_training_td e2e_training_td_id">

                  {index+1}

                </td>

                {/* CANDIDATE */}

                <td className="e2e_training_td e2e_training_td_candidate">

                  <div className="e2e_training_details">

                    <p className="e2e_training_text">

                      Name :

                      <strong>
                        {item.candidate}
                      </strong>

                    </p>

                    <p className="e2e_training_text">

                      Applied for :

                      <strong>
                        Training
                      </strong>

                    </p>

                  </div>

                </td>

                {/* EMAIL */}

                <td className="e2e_training_td e2e_training_td_email">

                  {item.email}

                </td>

                {/* PHONE */}

                <td className="e2e_training_td e2e_training_td_phone">

                  {item.phone}

                </td>

                {/* ACTION */}

                <td className="e2e_training_td e2e_training_td_action">

                  <div className="e2e_training_actions">

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
{showTrainingPopup && (
  <TrainingForm
    closePopup={() => setShowTrainingPopup(false)}
  />
)}
    </div>
  );
}

export default Training;