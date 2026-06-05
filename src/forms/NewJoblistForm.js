import { useState } from "react";
import "../styles/newjoblist.css";

function NewJobListForm({ closePopup }) {

  const [jobData, setJobData] = useState({
    category: "",
    candidateName: "",
    emailAddress: "",
    phoneNumber: "",
    technology: "",
    currentLocation: "",
    visaStatus: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(jobData);

    alert("Job Application Saved Successfully");

    closePopup();
  };

  return (
    <div
      className="joblist_form_overlay"
      onClick={closePopup}
    >
      <div
        className="joblist_form_modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="joblist_form_header">

          <h2 className="joblist_form_title">
            New Job Application
          </h2>

          <button
            className="joblist_form_close_btn"
            onClick={closePopup}
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="joblist_form_grid">

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Category
              </label>

              <select
                name="category"
                className="joblist_form_select"
                onChange={handleChange}
              >
                <option value="">
                  Please select here
                </option>

                <option value="Jobs">
                  Jobs
                </option>

                <option value="Recruiting">
                  Recruiting
                </option>
              </select>
            </div>

            <div></div>
            <div></div>

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Candidate Name
              </label>

              <input
                type="text"
                name="candidateName"
                className="joblist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Email Address
              </label>

              <input
                type="email"
                name="emailAddress"
                className="joblist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Phone Number
              </label>

              <input
                type="text"
                name="phoneNumber"
                className="joblist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Technology
              </label>

              <input
                type="text"
                name="technology"
                className="joblist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Current Location
              </label>

              <input
                type="text"
                name="currentLocation"
                className="joblist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="joblist_form_group">
              <label className="joblist_form_label">
                Visa Status
              </label>

              <input
                type="text"
                name="visaStatus"
                className="joblist_form_input"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="joblist_form_remarks_section">

            <label className="joblist_form_label">
              Remarks
            </label>

            <textarea
              name="remarks"
              className="joblist_form_textarea"
              placeholder="(Optional)"
              onChange={handleChange}
            />

          </div>

          <div className="joblist_form_upload_section">

            <div className="joblist_form_upload_card">
              <label
                htmlFor="jobResume"
                className="joblist_form_upload_text"
              >
                Resume
              </label>

              <input
                id="jobResume"
                type="file"
                className="joblist_form_hidden_file"
              />
            </div>

            <div className="joblist_form_upload_card">
              <label
                htmlFor="jobR2R"
                className="joblist_form_upload_text"
              >
                R2R
              </label>

              <input
                id="jobR2R"
                type="file"
                className="joblist_form_hidden_file"
              />
            </div>

            <div className="joblist_form_upload_card">
              <label
                htmlFor="jobLicense"
                className="joblist_form_upload_text"
              >
                Driving License
              </label>

              <input
                id="jobLicense"
                type="file"
                className="joblist_form_hidden_file"
              />
            </div>

            <div className="joblist_form_upload_card">
              <label
                htmlFor="jobVisa"
                className="joblist_form_upload_text"
              >
                Visa Copy
              </label>

              <input
                id="jobVisa"
                type="file"
                className="joblist_form_hidden_file"
              />
            </div>

          </div>

          <div className="joblist_form_button_section">

            <button
              type="submit"
              className="joblist_form_save_btn"
            >
              Save
            </button>

            <button
              type="button"
              className="joblist_form_cancel_btn"
              onClick={closePopup}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default NewJobListForm;