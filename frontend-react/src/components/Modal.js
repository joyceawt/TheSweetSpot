/* CITATION FOR THE MODAL CODE
   DATE: 5/12/2023
   COPIED FROM /OR/ ADAPTED ON /OR/ BASED ON:
   SOURCE URL: https://dev.to/hryggrbyr/using-slots-in-react-pcp
*/
import React from "react";

/*
                            <div className="alert alert-primary d-flex align-items-center" role="alert">
                                <div>
                                Please fill in all of the required information below.
                                </div>
                            </div>

*/

function Modal({ trigger, content, btnClasses, buttonName, title }) {
  //NOTE
  // hash trigger is needed for data-bs-target. because data-bs-target requires it to be in the form of "#triggername"
  let hashTrigger = "#" + trigger;
  return (
    <>
      <button
        type="button"
        className={btnClasses}
        data-bs-toggle="modal"
        data-bs-target={hashTrigger}
      >
        {buttonName}
      </button>

      <div className="modal fade" id={trigger} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content bg-white">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
