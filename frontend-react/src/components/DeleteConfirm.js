import React from "react";

function DeleteConfirm({ actionOnClick, id }) {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        This action cannot be undone.
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
          onClick={() => actionOnClick(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default DeleteConfirm;
