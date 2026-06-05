import { useEffect, useState } from "react";

import "../../styles/Dashboard/primevendors.css";
import PrimeVendorForm from "../../forms/NewPrimeVendorForm";
import Loader from "./Loader";

function PrimeVendors() {
  const [showPrimeVendorPopup, setShowPrimeVendorPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [entries, setEntries] = useState(10);

  const [category, setCategory] = useState("Prime Vendors");

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTableData([
        {
          id: 1,
          vendor: "Ryden Global",
          recruiter: "Daniel T",
          phone: "9259688330",
        },

        {
          id: 2,
          vendor: "Eliassen",
          recruiter: "Bardley",
          phone: "7042378237",
        },

        {
          id: 3,
          vendor: "The Proven Method",
          recruiter: "Joe Conners",
          phone: "404 238 8491",
        },

        {
          id: 4,
          vendor: "Apex Systems And Lab Support",
          recruiter: "Pat Rangus",
          phone: "804-237-8355",
        },

        {
          id: 5,
          vendor: "Apex Systems",
          recruiter: "Sara Pine",
          phone: "804-545-7757",
        },

        {
          id: 6,
          vendor: "Bc Forward",
          recruiter: "Jessica Jackson",
          phone: "317-715-3440",
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  /* FILTER */

  const filteredData = tableData

    .filter(
      (item) =>
        item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.recruiter.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    .slice(0, entries);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="e2e_prime_page">
      {/* TOP */}

      <div className="e2e_prime_top">
        <div className="e2e_prime_left">
          <h2>Prime Vendors Application List</h2>

          <div className="e2e_prime_heading_line"></div>
        </div>
        <div className="e2e_prime_right">
          <button
            onClick={() => {
              console.log("button clicked");
              setShowPrimeVendorPopup(true);
            }}
          >
            + Add New
          </button>
        </div>
      </div>

      {/* FILTERS */}

      <div className="e2e_prime_filters">
        {/* SEARCH */}

        <div className="e2e_prime_filter_right">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}

      {/* TABLE */}

      <div className="e2e_prime_table_wrapper">
        <table className="e2e_prime_table">
          {/* TABLE HEAD */}

          <thead className="e2e_prime_table_head">
            <tr className="e2e_prime_table_head_row">
              <th className="e2e_prime_th e2e_prime_th_id">#</th>

              <th className="e2e_prime_th e2e_prime_th_vendor">Vendor Name</th>

              <th className="e2e_prime_th e2e_prime_th_recruiter">
                Recruiter Name
              </th>

              <th className="e2e_prime_th e2e_prime_th_phone">Phone Number</th>

              <th className="e2e_prime_th e2e_prime_th_action">Action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}

          <tbody className="e2e_prime_table_body">
            {filteredData.map((item, index) => (
              <tr key={item.id} className="e2e_prime_table_row">
                {/* ID */}

                <td className="e2e_prime_td e2e_prime_td_id">{index + 1}</td>

                {/* VENDOR */}

                <td className="e2e_prime_td e2e_prime_td_vendor">
                  <div className="e2e_prime_details">
                    <p className="e2e_prime_text">
                      Name :<strong>{item.vendor}</strong>
                    </p>

                    <p className="e2e_prime_text">
                      Applied for :<strong>Prime Vendors</strong>
                    </p>
                  </div>
                </td>

                {/* RECRUITER */}

                <td className="e2e_prime_td e2e_prime_td_recruiter">
                  {item.recruiter}
                </td>

                {/* PHONE */}

                <td className="e2e_prime_td e2e_prime_td_phone">
                  {item.phone}
                </td>

                {/* ACTION */}

                <td className="e2e_prime_td e2e_prime_td_action">
                  <div className="e2e_prime_actions">
                    <button className="viewBtn">View</button>

                    <button className="editBtn">Edit</button>

                    <button className="deleteBtn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPrimeVendorPopup && (
  <PrimeVendorForm
    closePopup={() => setShowPrimeVendorPopup(false)}
  />
)}
    </div>
  );
}

export default PrimeVendors;
