import React from "react";
import ApplicationView from "./ApplicationView";
import BenchSales from "./BenchSales";
import "./index.css"

const FormView = ({
    formTitle,
  setOpenForm,
  openForm,
  applicationId
}) => {

  const renderForms = () => {
    console.log(formTitle);
    
    switch (openForm) {
      case "bench":
        return (
          <BenchSales
            onClose={() => setOpenForm(null)}
          />
        );

        case "benchView":
        return (
          <ApplicationView
            onClose={() => setOpenForm(null)}
            applicationId={applicationId}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {openForm && (
        <div className="tf-form-popup-overlay">
          <div className="tf-form-popup">
            <div className="tf-form-popup-header">
                <h1 className="form-title">{formTitle}</h1>
              <button className="tfm-close-button" onClick={() => setOpenForm(null)}>
                X
              </button>
            </div>
            {renderForms()}
          </div>
        </div>
      )}
    </>
  );
};

export default FormView;