import React from "react";
import "../styles/newtrainingform.css";

function TrainingForm({ closePopup }) {
  return (
    <div className="trainingentryform_overlay">

      <div className="trainingentryform_modal">

        {/* Header */}

        <div className="trainingentryform_header">

          <h2 className="trainingentryform_title">
            Training Application
          </h2>

          <button
            className="trainingentryform_close_button"
            onClick={closePopup}
          >
            ✕
          </button>

        </div>

        {/* Form Grid */}

        <div className="trainingentryform_grid">

          <div className="trainingentryform_field">
            <label className="trainingentryform_label">
              Training Category
            </label>

            <select className="trainingentryform_select">
              <option>Please Select Here</option>
            </select>
          </div>

          <div className="trainingentryform_field">
            <label className="trainingentryform_label">
              Trainer Name
            </label>

            <input
              type="text"
              className="trainingentryform_input"
            />
          </div>

          <div className="trainingentryform_field">
            <label className="trainingentryform_label">
              Training Date
            </label>

            <input
              type="date"
              className="trainingentryform_input"
            />
          </div>

          <div className="trainingentryform_field">
            <label className="trainingentryform_label">
              Candidate Name
            </label>

            <input
              type="text"
              className="trainingentryform_input"
            />
          </div>

          <div className="trainingentryform_field">
            <label className="trainingentryform_label">
              Technology
            </label>

            <input
              type="text"
              className="trainingentryform_input"
            />
          </div>

          <div className="trainingentryform_field">
            <label className="trainingentryform_label">
              Duration
            </label>

            <input
              type="text"
              className="trainingentryform_input"
            />
          </div>

        </div>

        {/* Remarks */}

        <div className="trainingentryform_remarks_wrapper">

          <label className="trainingentryform_label">
            Remarks
          </label>

          <textarea
            className="trainingentryform_textarea"
            placeholder="Enter Remarks"
          />

        </div>

        {/* Upload Section */}

        <div className="trainingentryform_upload_grid">

          <div className="trainingentryform_upload_card">

            <input
              type="file"
              id="trainingResume"
              className="trainingentryform_hidden_input"
            />

            <label
              htmlFor="trainingResume"
              className="trainingentryform_upload_label"
            >
              Upload Resume
            </label>

          </div>

          <div className="trainingentryform_upload_card">

            <input
              type="file"
              id="trainingR2R"
              className="trainingentryform_hidden_input"
            />

            <label
              htmlFor="trainingR2R"
              className="trainingentryform_upload_label"
            >
              Upload R2R
            </label>

          </div>

          <div className="trainingentryform_upload_card">

            <input
              type="file"
              id="trainingLicense"
              className="trainingentryform_hidden_input"
            />

            <label
              htmlFor="trainingLicense"
              className="trainingentryform_upload_label"
            >
              Driving License
            </label>

          </div>

          <div className="trainingentryform_upload_card">

            <input
              type="file"
              id="trainingVisa"
              className="trainingentryform_hidden_input"
            />

            <label
              htmlFor="trainingVisa"
              className="trainingentryform_upload_label"
            >
              Visa Status
            </label>

          </div>

          <div className="trainingentryform_upload_card">

            <input
              type="file"
              id="trainingMsa"
              className="trainingentryform_hidden_input"
            />

            <label
              htmlFor="trainingMsa"
              className="trainingentryform_upload_label"
            >
              MSA Copy
            </label>

          </div>

        </div>

        {/* Footer */}

        <div className="trainingentryform_footer">

          <button
            className="trainingentryform_cancel_button"
            onClick={closePopup}
          >
            Cancel
          </button>

          <button
            className="trainingentryform_save_button"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default TrainingForm;