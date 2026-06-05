import React from "react";
import "../styles/newclientform.css";

function NewClientForm({ closePopup }) {
  return (
    <div className="newclientform_overlay">
      <div className="newclientform_modal">

        <div className="newclientform_header">
          <h2 className="newclientform_title">New Client Form</h2>

          <button
            className="newclientform_close_btn"
            onClick={closePopup}
          >
            ✕
          </button>
        </div>

        <div className="newclientform_grid">

          <div className="newclientform_group">
            <label className="newclientform_label">
              Client Category
            </label>

            <select className="newclientform_select">
              <option>Select Category</option>
            </select>
          </div>

          <div className="newclientform_group">
            <label className="newclientform_label">
              Client Name
            </label>

            <input
              type="text"
              className="newclientform_input"
            />
          </div>

          <div className="newclientform_group">
            <label className="newclientform_label">
              Contact Person
            </label>

            <input
              type="text"
              className="newclientform_input"
            />
          </div>

          <div className="newclientform_group">
            <label className="newclientform_label">
              Email
            </label>

            <input
              type="email"
              className="newclientform_input"
            />
          </div>

          <div className="newclientform_group">
            <label className="newclientform_label">
              Phone Number
            </label>

            <input
              type="text"
              className="newclientform_input"
            />
          </div>

          <div className="newclientform_group">
            <label className="newclientform_label">
              Location
            </label>

            <input
              type="text"
              className="newclientform_input"
            />
          </div>

        </div>

        <div className="newclientform_remarks_section">
          <label className="newclientform_label">
            Remarks
          </label>

          <textarea
            className="newclientform_textarea"
            placeholder="Enter remarks..."
          />
        </div>

        <div className="newclientform_upload_section">

  {/* Resume */}

  <div className="newclientform_upload_card">
    <input
      type="file"
      id="resumeFile"
      className="newclientform_hidden_file"
    />

    <label
      htmlFor="resumeFile"
      className="newclientform_upload_label"
    >
      📄 Upload Resume
    </label>
  </div>

  {/* R2R */}

  <div className="newclientform_upload_card">
    <input
      type="file"
      id="r2rFile"
      className="newclientform_hidden_file"
    />

    <label
      htmlFor="r2rFile"
      className="newclientform_upload_label"
    >
       Upload R2R
    </label>
  </div>

  {/* Driving License */}

  <div className="newclientform_upload_card">
    <input
      type="file"
      id="drivingLicenseFile"
      className="newclientform_hidden_file"
    />

    <label
      htmlFor="drivingLicenseFile"
      className="newclientform_upload_label"
    >
       Upload Driving License
    </label>
  </div>

  {/* Visa Status */}

  <div className="newclientform_upload_card">
    <input
      type="file"
      id="visaStatusFile"
      className="newclientform_hidden_file"
    />

    <label
      htmlFor="visaStatusFile"
      className="newclientform_upload_label"
    >
       Upload Visa Status
    </label>
  </div>

  {/* MSA Copy */}

  <div className="newclientform_upload_card">
    <input
      type="file"
      id="msaCopyFile"
      className="newclientform_hidden_file"
    />

    <label
      htmlFor="msaCopyFile"
      className="newclientform_upload_label"
    >
      Upload MSA Copy
    </label>
  </div>

</div>

        <div className="newclientform_button_section">

          <button
            className="newclientform_cancel_btn"
            onClick={closePopup}
          >
            Cancel
          </button>

          <button
            className="newclientform_save_btn"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default NewClientForm;