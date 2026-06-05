import { useState } from "react";

import "../styles/newbenchsalesform.css";

function NewBenchSalesForm({
    closePopup,
}) {

    const [formData, setFormData] =
        useState({
            category: "",
            submissionDate: "",
            benchsalesName: "",
            candidateName: "",
            vendor: "",
            pocName: "",
            feedback: "",
            clientName: "",
            locationType: "",
            ratePerHour: "",
            role: "",
            location: "",
            remarks: "",
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        alert(
            "Bench Sales Application Saved Successfully"
        );

        closePopup();
    };

    return (

        <div
            className="e2e_benchsales_form_overlay"
            onClick={closePopup}
        >

            <div
                className="e2e_benchsales_form_modal"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                {/* HEADER */}

                <div className="e2e_benchsales_form_header">

                    <div>

                        <h2>
                            New Application
                        </h2>

                        <p>
                            Create Bench Sales Application
                        </p>

                    </div>

                    <button
                        className="e2e_benchsales_form_close"
                        onClick={closePopup}
                    >
                        ✕
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="e2e_benchsales_form_grid">

                        <div className="e2e_benchsales_form_field">
                            <label>Category</label>

                            <select
                                name="category"
                                onChange={handleChange}
                            >
                                <option>
                                    Bench Sales
                                </option>
                            </select>
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Submission Date
                            </label>

                            <input
                                type="date"
                                name="submissionDate"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Benchsales Name
                            </label>

                            <select
                                name="benchsalesName"
                                onChange={handleChange}
                            >
                                <option>
                                    Please Select
                                </option>
                            </select>
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Candidate Name
                            </label>

                            <input
                                type="text"
                                name="candidateName"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Vendor
                            </label>

                            <input
                                type="text"
                                name="vendor"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                POC Name
                            </label>

                            <input
                                type="text"
                                name="pocName"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Feedback
                            </label>

                            <input
                                type="text"
                                name="feedback"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Client Name
                            </label>

                            <input
                                type="text"
                                name="clientName"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                HYD or Vizag
                            </label>

                            <input
                                type="text"
                                name="locationType"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Rate per Hour ($)
                            </label>

                            <input
                                type="text"
                                name="ratePerHour"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Role
                            </label>

                            <input
                                type="text"
                                name="role"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="e2e_benchsales_form_field">
                            <label>
                                Location
                            </label>

                            <input
                                type="text"
                                name="location"
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    {/* REMARKS */}

                    <div className="e2e_benchsales_form_remarks">

                        <label>
                            Remarks
                        </label>

                        <textarea
                            name="remarks"
                            placeholder="Optional"
                            onChange={handleChange}
                        />

                    </div>

                    {/* UPLOADS */}

                    <div className="e2e_benchsales_upload_section">

                        <div className="e2e_benchsales_upload_card">

  <label
    htmlFor="resume"
    className="e2e_upload_label"
  >
     Upload Resume
  </label>

  <input
    id="resume"
    type="file"
    className="e2e_hidden_file"
  />

</div>

<div className="e2e_benchsales_upload_card">

  <label
    htmlFor="r2r"
    className="e2e_upload_label"
  >
     Upload R2R
  </label>

  <input
    id="r2r"
    type="file"
    className="e2e_hidden_file"
  />

</div>

<div className="e2e_benchsales_upload_card">

  <label
    htmlFor="license"
    className="e2e_upload_label"
  >
     Upload Driving License
  </label>

  <input
    id="license"
    type="file"
    className="e2e_hidden_file"
  />

</div>

<div className="e2e_benchsales_upload_card">

  <label
    htmlFor="visa"
    className="e2e_upload_label"
  >
     Upload Visa Copy
  </label>

  <input
    id="visa"
    type="file"
    className="e2e_hidden_file"
  />

</div>

                    </div>

                    {/* BUTTONS */}

                    <div className="e2e_benchsales_form_buttons">

                        <button
                            type="submit"
                            className="e2e_benchsales_save_btn"
                        >
                            Save
                        </button>

                        <button
                            type="button"
                            className="e2e_benchsales_cancel_btn"
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

export default NewBenchSalesForm;