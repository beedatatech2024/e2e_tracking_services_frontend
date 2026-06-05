import { useEffect, useState } from "react";

import "../../styles/Dashboard/client.css";
import NewClientForm from "../../forms/NewClientForm";
import Loader from "./Loader";

function Clients() {

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [entries, setEntries] =
    useState(10);
const [showClientPopup, setShowClientPopup] = useState(false);
  const [category, setCategory] =
    useState("Clients");

  const [tableData, setTableData] =
    useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTableData([

        {
          id:1,
          client:"Amtexsystems",
          recruiter:"Puneet",
          email:"puneet@amtexsystems.com",
        },

        {
          id:2,
          client:"Ramyinfotech",
          recruiter:"",
          email:"",
        },

        {
          id:3,
          client:"Intime-info",
          recruiter:"",
          email:"",
        },

        {
          id:4,
          client:"Vastika",
          recruiter:"",
          email:"",
        },

        {
          id:5,
          client:"Rangam",
          recruiter:"",
          email:"",
        },

      ]);

      setLoading(false);

    }, 1000);

  }, []);

  /* FILTER */

  const filteredData = tableData

    .filter(

      (item)=>

        item.client
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        item.recruiter
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

    <div className="e2e_clients_page">

      {/* TOP */}

      <div className="e2e_clients_top">

        <div className="e2e_clients_left">

          <h2>
            Clients Application List
          </h2>

          <div className="e2e_clients_heading_line"></div>

        </div>

        <div className="e2e_clients_right">

          <button
  onClick={() => setShowClientPopup(true)}
>
  + Add New
</button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="e2e_clients_filters">

        {/* SEARCH */}

        <div className="e2e_clients_filter_right">

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

      <div className="e2e_clients_table_wrapper">

        <table className="e2e_clients_table">

          {/* HEAD */}

          <thead className="e2e_clients_table_head">

            <tr className="e2e_clients_table_head_row">

              <th className="e2e_clients_th e2e_clients_th_id">
                #
              </th>

              <th className="e2e_clients_th e2e_clients_th_client">
                Client Name
              </th>

              <th className="e2e_clients_th e2e_clients_th_recruiter">
                Recruiter Name
              </th>

              <th className="e2e_clients_th e2e_clients_th_email">
                Recruiter Email Id
              </th>

              <th className="e2e_clients_th e2e_clients_th_action">
                Action
              </th>

            </tr>

          </thead>

          {/* BODY */}

          <tbody className="e2e_clients_table_body">

            {filteredData.map(
              (item,index)=>(

              <tr
                key={item.id}
                className="e2e_clients_table_row"
              >

                {/* ID */}

                <td className="e2e_clients_td e2e_clients_td_id">

                  {index+1}

                </td>

                {/* CLIENT */}

                <td className="e2e_clients_td e2e_clients_td_client">

                  <div className="e2e_clients_details">

                    <p className="e2e_clients_text">

                      Name :

                      <strong>
                        {item.client}
                      </strong>

                    </p>

                  </div>

                </td>

                {/* RECRUITER */}

                <td className="e2e_clients_td e2e_clients_td_recruiter">

                  {item.recruiter}

                </td>

                {/* EMAIL */}

                <td className="e2e_clients_td e2e_clients_td_email">

                  {item.email}

                </td>

                {/* ACTION */}

                <td className="e2e_clients_td e2e_clients_td_action">

                  <div className="e2e_clients_actions">

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
{showClientPopup && (
  <NewClientForm
    closePopup={() => setShowClientPopup(false)}
  />
)}
    </div>
  );
}

export default Clients;