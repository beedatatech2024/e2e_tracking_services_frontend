import React, {useState, useEffect} from "react";
import {
  FaUser,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaFilePdf,
  FaFileWord,
  FaIdCard,
  FaPassport,
  FaCalendarAlt,
} from "react-icons/fa";

import { getBenchSalesById } from "../api/applicationApi";
import "./ApplicationView.css";

const ApplicationView = ({ applicationId  }) => {
    const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplication();
  }, [applicationId]);

  const fetchApplication = async () => {
    try {
      setLoading(true);

      const response = await getBenchSalesById(applicationId);

      if (response.success) {
        setApplication(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch application:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!application) {
    return <div>No Data Found</div>;
  }

  const getFileIcon = (file) => {
    if (!file) return <FaFilePdf />;

    const ext = file.split(".").pop().toLowerCase();

    if (["doc", "docx"].includes(ext)) {
      return <FaFileWord />;
    }

    return <FaFilePdf />;
  };

  return (
    <div className="application-view">
      {/* Header */}
      <div className="candidate-header">
        <div className="candidate-avatar">
          <FaUser />
        </div>

        <div className="candidate-info">
          <h2>{application.candidate_name}</h2>
          <p>{application.role}</p>
        </div>

        <div className="status-badge">
          Submitted
        </div>
      </div>

      {/* Submission Info */}
      <div className="view-card">
        <h3>Submission Information</h3>

        <div className="info-grid">
          <div className="info-item">
            <FaCalendarAlt />
            <div>
              <label>Submission Date</label>
              <span>{application.date_created}</span>
            </div>
          </div>

          <div className="info-item">
            <FaBuilding />
            <div>
              <label>Vendor</label>
              <span>{application.vendor}</span>
            </div>
          </div>

          <div className="info-item">
            <FaUser />
            <div>
              <label>POC Name</label>
              <span>{application.poc}</span>
            </div>
          </div>

          <div className="info-item">
            <FaBuilding />
            <div>
              <label>Client Name</label>
              <span>{application.client}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="view-card">
        <h3>Job Details</h3>

        <div className="info-grid">
          <div className="info-item">
            <FaUser />
            <div>
              <label>Role</label>
              <span>{application.role}</span>
            </div>
          </div>

          <div className="info-item">
            <FaMoneyBillWave />
            <div>
              <label>Rate / Hour</label>
              <span>${application.rate}</span>
            </div>
          </div>

          {/* <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <label>Location Type</label>
              <span>{application.location_type}</span>
            </div>
          </div> */}

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <label>Location</label>
              <span>{application.candidate_loc}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="view-card">
        <h3>Feedback</h3>

        <div className="remarks-box">
          {application.feedback || "No Feedback Available"}
        </div>
      </div>

      {/* Remarks */}
      <div className="view-card">
        <h3>Remarks</h3>

        <div className="remarks-box">
          {application.remarks || "No Remarks Available"}
        </div>
      </div>

      {/* Documents */}
      <div className="view-card">
        <h3>Documents</h3>

        <div className="document-grid">
          <a
            href={application.resume}
            target="_blank"
            rel="noreferrer"
            className="document-card"
          >
            {getFileIcon(application.resume)}
            <span>Resume</span>
          </a>

          <a
            href={application.r2r}
            target="_blank"
            rel="noreferrer"
            className="document-card"
          >
            {getFileIcon(application.r2r)}
            <span>R2R</span>
          </a>

          <a
            href={application.driving_license}
            target="_blank"
            rel="noreferrer"
            className="document-card"
          >
            <FaIdCard />
            <span>Driving License</span>
          </a>

          <a
            href={application.visa_copy}
            target="_blank"
            rel="noreferrer"
            className="document-card"
          >
            <FaPassport />
            <span>Visa Copy</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplicationView;