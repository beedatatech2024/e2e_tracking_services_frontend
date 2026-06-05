import { useState } from "react";

import "../styles/newapplicationform.css";

function NewApplicationForm({ closePopup }) {
  const [formData, setFormData] = useState({
    category: "",
    recruiterName: "",
    submissionDate: "",
    candidateName: "",
    clientName: "",
    pocName: "",
    feedback: "",
    remarks: "",
  });
  const [candidateData, setCandidateData] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [showCandidatePopup, setShowCandidatePopup] = useState(false);
  // const [candidateData, setCandidateData] = useState(null);
  const [candidatePopupData, setCandidatePopupData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    visaStatus: "",
    skills: "",
  });
  const [candidateList] = useState([
    "Swain",
    "Jones",
    "Steven",
    "Lilly",
    "Jasmine",
  ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Application Saved Successfully");

    closePopup();
  };

  return (
    <div className="e2e_new_application_overlay" onClick={closePopup}>
      <div
        className="e2e_new_application_modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}

        <div className="e2e_application_top_banner">
          <div>
            <h2>New Candidate Application</h2>

            <p>Create and manage candidate submissions</p>
          </div>

          <button className="e2e_application_close" onClick={closePopup}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="e2e_application_form_layout">
            {/* <div className="e2e_new_application_field">

              <label>Category</label>

            </div> */}

            <div className="e2e_new_application_field">
              <label>Submission Date</label>

              <input
                type="date"
                name="submissionDate"
                onChange={handleChange}
              />
            </div>
            <div className="e2e_new_application_field">
              <label>Candidate Details</label>

              <div className="candidate_row">
                <select
                  className="candidate_select"
                  value={candidateData?.name || ""}
                  onChange={(e) => {
                    if (e.target.value === "__add_new__") {
                      setShowCandidatePopup(true);
                      return;
                    }

                    setCandidateData({
                      ...candidateData,
                      name: e.target.value,
                    });
                  }}
                >
                  <option value="">Select Candidate</option>

                  <option value="Swain">Swain</option>

                  <option value="Jones">Jones</option>

                  <option value="Steven">Steven</option>

                  <option value="Lilly">Lilly</option>

                  <option value="Jasmine">Jasmine</option>

                  <option value="__add_new__">+ Add New Candidate</option>
                </select>
              </div>

              {/* {candidateData && (

    <div className="candidate_details_card">

      <p>
        Name :
        {candidateData.name}
      </p>

      <p>
        Visa :
        {candidateData.visaStatus}
      </p>

      <p>
        Skills :
        {candidateData.skills}
      </p>

    </div>

  )} */}
            </div>

            <div className="e2e_new_application_field">
              <label>POC Name</label>

              <input type="text" name="pocName" onChange={handleChange} />
            </div>

            <div className="e2e_new_application_field">
              <label>Feedback</label>

              <input type="text" name="feedback" onChange={handleChange} />
            </div>
          </div>

          {/* REMARKS */}

          <div className="e2e_new_application_remarks">
            <label>Remarks</label>

            <textarea
              name="remarks"
              placeholder="Enter remarks..."
              onChange={handleChange}
            />
          </div>

          {/* FILES */}
          <div className="e2e_new_application_files">
            <div className="e2e_new_application_upload_card">
              <label
                htmlFor="resume"
                className="e2e_new_application_upload_label"
              >
                Upload Resume
              </label>

              <input
                id="resume"
                type="file"
                className="e2e_new_application_hidden_file"
              />
            </div>

            <div className="e2e_new_application_upload_card">
              <label htmlFor="r2r" className="e2e_new_application_upload_label">
                Upload R2R
              </label>

              <input
                id="r2r"
                type="file"
                className="e2e_new_application_hidden_file"
              />
            </div>

            <div className="e2e_new_application_upload_card">
              <label
                htmlFor="license"
                className="e2e_new_application_upload_label"
              >
                Upload Driving License
              </label>

              <input
                id="license"
                type="file"
                className="e2e_new_application_hidden_file"
              />
            </div>

            <div className="e2e_new_application_upload_card">
              <label
                htmlFor="visa"
                className="e2e_new_application_upload_label"
              >
                Upload Visa Copy
              </label>

              <input
                id="visa"
                type="file"
                className="e2e_new_application_hidden_file"
              />
            </div>

            <div className="e2e_new_application_upload_card">
              <label htmlFor="msa" className="e2e_new_application_upload_label">
                Upload MSA Copy
              </label>

              <input
                id="msa"
                type="file"
                className="e2e_new_application_hidden_file"
              />
            </div>
          </div>

          {/* BUTTONS */}

          <div className="e2e_new_application_buttons">
            <button type="submit" className="e2e_new_application_save_btn">
              Save Application
            </button>

            <button
              type="button"
              className="e2e_new_application_cancel_btn"
              onClick={closePopup}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      {showCandidatePopup && (
        <div className="candidate_popup_overlay">
          <div className="candidate_popup">
            <h3>Add Candidate</h3>

            <input
              type="text"
              placeholder="Name"
              value={candidatePopupData.name}
              onChange={(e) =>
                setCandidatePopupData({
                  ...candidatePopupData,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={candidatePopupData.email}
              onChange={(e) =>
                setCandidatePopupData({
                  ...candidatePopupData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={candidatePopupData.phone}
              onChange={(e) =>
                setCandidatePopupData({
                  ...candidatePopupData,
                  phone: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Current Location"
              value={candidatePopupData.location}
              onChange={(e) =>
                setCandidatePopupData({
                  ...candidatePopupData,
                  location: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Visa Status"
              value={candidatePopupData.visaStatus}
              onChange={(e) =>
                setCandidatePopupData({
                  ...candidatePopupData,
                  visaStatus: e.target.value,
                })
              }
            />

            <textarea
              placeholder="Skills"
              value={candidatePopupData.skills}
              onChange={(e) =>
                setCandidatePopupData({
                  ...candidatePopupData,
                  skills: e.target.value,
                })
              }
            />

            {/* <div className="drag_drop_box">
              <input type="file" />

              <p>Drag & Drop Resume Here</p>
            </div> */}

            <div className="candidate_popup_buttons">
              <button
                type="button"
                onClick={() => {
                  if (
                    !candidatePopupData.name ||
                    !candidatePopupData.email ||
                    !candidatePopupData.phone ||
                    !candidatePopupData.location ||
                    !candidatePopupData.visaStatus ||
                    !candidatePopupData.skills
                  ) {
                    alert("Please fill all fields");
                    return;
                  }

                  setCandidateData(candidatePopupData);

                  alert("Candidate Added Successfully");

                  setShowCandidatePopup(false);
                }}
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => {
                  // Optional: clear popup fields
                  setCandidatePopupData({
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    visaStatus: "",
                    skills: "",
                  });

                  // Close popup and return to form
                  setShowCandidatePopup(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewApplicationForm;
