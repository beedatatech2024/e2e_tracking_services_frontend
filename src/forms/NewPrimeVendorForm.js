import React from "react";
import "../styles/primevendorform.css";

function PrimeVendorForm({ closePopup }) {
  return (
    <div className="joblist_form_overlay">
      <div className="joblist_form_modal">

        {/* Header */}
        <div className="joblist_form_header">
          <h2 className="joblist_form_title">
            Candidate Submission
          </h2>

          <button
            className="joblist_form_close_btn"
            onClick={closePopup}
          >
            ✕
          </button>
        </div>

        {/* Grid */}
        <div className="joblist_form_grid">

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              Category
            </label>

            <select className="joblist_form_select">
              <option>Please select here</option>
              <option>Prime Vendor</option>
              <option>Implementation Partner</option>
              <option>Direct Client</option>
            </select>
          </div>

          <div></div>
          <div></div>

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              Recruiter Name
            </label>

            <select className="joblist_form_select">
              <option>Please select here</option>
            </select>
          </div>

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              Submission Date
            </label>

            <input
              type="date"
              className="joblist_form_input"
            />
          </div>

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              Candidate Name
            </label>

            <input
              type="text"
              className="joblist_form_input"
            />
          </div>

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              Client Name
            </label>

            <input
              type="text"
              className="joblist_form_input"
            />
          </div>

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              POC Name
            </label>

            <input
              type="text"
              className="joblist_form_input"
            />
          </div>

          <div className="joblist_form_group">
            <label className="joblist_form_label">
              Feedback
            </label>

            <input
              type="text"
              className="joblist_form_input"
            />
          </div>

        </div>

        {/* Remarks */}

        <div className="joblist_form_remarks_section">
          <label className="joblist_form_label">
            Remarks
          </label>

          <textarea
            className="joblist_form_textarea"
            placeholder="(Optional)"
          />
        </div>

        {/* Files */}

        <div className="joblist_form_upload_section">

  <div className="joblist_form_upload_card">
    <input
      type="file"
      id="resume"
      className="joblist_hidden_file"
    />

    <label
      htmlFor="resume"
      className="joblist_upload_label"
    >
      📄 Upload Resume
    </label>
  </div>

  <div className="joblist_form_upload_card">
    <input
      type="file"
      id="r2r"
      className="joblist_hidden_file"
    />

    <label
      htmlFor="r2r"
      className="joblist_upload_label"
    >
      Upload R2R
    </label>
  </div>

  <div className="joblist_form_upload_card">
    <input
      type="file"
      id="license"
      className="joblist_hidden_file"
    />

    <label
      htmlFor="license"
      className="joblist_upload_label"
    >
       Driving License
    </label>
  </div>

  <div className="joblist_form_upload_card">
    <input
      type="file"
      id="visa"
      className="joblist_hidden_file"
    />

    <label
      htmlFor="visa"
      className="joblist_upload_label"
    >
      Visa Copy
    </label>
  </div>

  <div className="joblist_form_upload_card">
    <input
      type="file"
      id="msa"
      className="joblist_hidden_file"
    />

    <label
      htmlFor="msa"
      className="joblist_upload_label"
    >
       MSA Copy
    </label>
  </div>

</div>

        {/* Footer */}

        <div className="joblist_form_button_section">

          <button
            className="joblist_form_cancel_btn"
            onClick={closePopup}
          >
            Cancel
          </button>

          <button
            className="joblist_form_save_btn"
          >
            Save
          </button>

        </div>

      </div>
      
    </div>
  );
}

export default PrimeVendorForm;