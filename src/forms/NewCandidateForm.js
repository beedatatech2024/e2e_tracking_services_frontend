import React from "react";
import "../styles/newcandidateform.css";

function NewCandidateForm({ closePopup }) {
  return (
    <div className="candidateentryform_overlay">

      <div className="candidateentryform_modal">

        {/* Header */}

        <div className="candidateentryform_header">

          <h2 className="candidateentryform_title">
            Candidate Submission
          </h2>

          <button
            className="candidateentryform_close_button"
            onClick={closePopup}
          >
            ✕
          </button>

        </div>

        {/* Form Grid */}

        <div className="candidateentryform_grid">

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              Category
            </label>

            <select className="candidateentryform_select">
              <option>Please Select Here</option>
            </select>
          </div>

          <div></div>
          <div></div>

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              Recruiter Name
            </label>

            <select className="candidateentryform_select">
              <option>Please Select Here</option>
            </select>
          </div>

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              Submission Date
            </label>

            <input
              type="date"
              className="candidateentryform_input"
            />
          </div>

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              Candidate Name
            </label>

            <input
              type="text"
              className="candidateentryform_input"
            />
          </div>

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              Client Name
            </label>

            <input
              type="text"
              className="candidateentryform_input"
            />
          </div>

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              POC Name
            </label>

            <input
              type="text"
              className="candidateentryform_input"
            />
          </div>

          <div className="candidateentryform_field">
            <label className="candidateentryform_label">
              Feedback
            </label>

            <input
              type="text"
              className="candidateentryform_input"
            />
          </div>

        </div>

        {/* Remarks */}

        <div className="candidateentryform_remarks_wrapper">

          <label className="candidateentryform_label">
            Remarks
          </label>

          <textarea
            className="candidateentryform_textarea"
            placeholder="Enter Remarks"
          />

        </div>

        {/* Uploads */}

        <div className="candidateentryform_upload_grid">

          <div className="candidateentryform_upload_card">

            <input
              type="file"
              id="candidateResume"
              className="candidateentryform_hidden_input"
            />

            <label
              htmlFor="candidateResume"
              className="candidateentryform_upload_label"
            >
              Upload Resume
            </label>

          </div>

          <div className="candidateentryform_upload_card">

            <input
              type="file"
              id="candidateR2R"
              className="candidateentryform_hidden_input"
            />

            <label
              htmlFor="candidateR2R"
              className="candidateentryform_upload_label"
            >
              Upload R2R
            </label>

          </div>

          <div className="candidateentryform_upload_card">

            <input
              type="file"
              id="candidateDrivingLicense"
              className="candidateentryform_hidden_input"
            />

            <label
              htmlFor="candidateDrivingLicense"
              className="candidateentryform_upload_label"
            >
              Driving License
            </label>

          </div>

          <div className="candidateentryform_upload_card">

            <input
              type="file"
              id="candidateVisaStatus"
              className="candidateentryform_hidden_input"
            />

            <label
              htmlFor="candidateVisaStatus"
              className="candidateentryform_upload_label"
            >
              Visa Status
            </label>

          </div>

          <div className="candidateentryform_upload_card">

            <input
              type="file"
              id="candidateMsaCopy"
              className="candidateentryform_hidden_input"
            />

            <label
              htmlFor="candidateMsaCopy"
              className="candidateentryform_upload_label"
            >
              MSA Copy
            </label>

          </div>

        </div>

        {/* Buttons */}

        <div className="candidateentryform_footer">

          <button
            className="candidateentryform_cancel_button"
            onClick={closePopup}
          >
            Cancel
          </button>

          <button
            className="candidateentryform_save_button"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default NewCandidateForm;