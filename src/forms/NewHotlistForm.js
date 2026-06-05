import { useState } from "react";
import "../styles/newhotlistform.css";

function NewHotlistForm({ closePopup }) {
  const [hotlistData, setHotlistData] = useState({
    consultantName: "",
    technology: "",
    experience: "",
    visaStatus: "",
    currentLocation: "",
    relocation: "",
    rate: "",
    availability: "",
    phoneNumber: "",
    emailAddress: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setHotlistData({
      ...hotlistData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(hotlistData);

    alert("Hotlist Saved Successfully");

    closePopup();
  };

  return (
    <div className="hotlist_form_overlay" onClick={closePopup}>
      <div className="hotlist_form_modal" onClick={(e) => e.stopPropagation()}>
        <div className="hotlist_form_header">
          <h2 className="hotlist_form_title">New Hotlist Candidate</h2>

          <button className="hotlist_form_close_btn" onClick={closePopup}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="hotlist_form_grid">
            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Consultant Name</label>

              <input
                type="text"
                name="consultantName"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Technology</label>

              <input
                type="text"
                name="technology"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Experience</label>

              <input
                type="text"
                name="experience"
                className="hotlist_form_input"
                placeholder="8 Years"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Visa Status</label>

              <input
                type="text"
                name="visaStatus"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Current Location</label>

              <input
                type="text"
                name="currentLocation"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Relocation</label>

              <select
                name="relocation"
                className="hotlist_form_select"
                onChange={handleChange}
              >
                <option value="">Select</option>

                <option value="Yes">Yes</option>

                <option value="No">No</option>
              </select>
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Hourly Rate</label>

              <input
                type="text"
                name="rate"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Availability</label>

              <input
                type="text"
                name="availability"
                className="hotlist_form_input"
                placeholder="Immediate"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Phone Number</label>

              <input
                type="text"
                name="phoneNumber"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>

            <div className="hotlist_form_group">
              <label className="hotlist_form_label">Email Address</label>

              <input
                type="email"
                name="emailAddress"
                className="hotlist_form_input"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="hotlist_form_remarks_wrapper">
            <label className="hotlist_form_label">Remarks</label>

            <textarea
              name="remarks"
              className="hotlist_form_textarea"
              placeholder="Additional Notes..."
              onChange={handleChange}
            />
          </div>

          <div className="hotlist_form_upload_section">
            <div className="hotlist_form_upload_card">
              <label htmlFor="resumeFile" className="hotlist_form_upload_text">
                Upload Resume
              </label>

              <input
                id="resumeFile"
                type="file"
                className="hotlist_form_hidden_file"
              />
            </div>

            <div className="hotlist_form_upload_card">
              <label htmlFor="r2rFile" className="hotlist_form_upload_text">
                Upload R2R
              </label>

              <input
                id="r2rFile"
                type="file"
                className="hotlist_form_hidden_file"
              />
            </div>

            <div className="hotlist_form_upload_card">
              <label htmlFor="licenseFile" className="hotlist_form_upload_text">
                Upload Driving License
              </label>

              <input
                id="licenseFile"
                type="file"
                className="hotlist_form_hidden_file"
              />
            </div>

            <div className="hotlist_form_upload_card">
              <label htmlFor="visaFile" className="hotlist_form_upload_text">
                Upload Visa Copy
              </label>

              <input
                id="visaFile"
                type="file"
                className="hotlist_form_hidden_file"
              />
            </div>
          </div>

          <div className="hotlist_form_button_section">
            <button type="submit" className="hotlist_form_save_btn">
              Save
            </button>

            <button
              type="button"
              className="hotlist_form_cancel_btn"
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

export default NewHotlistForm;
