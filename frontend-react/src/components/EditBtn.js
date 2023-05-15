import React from "react";
import Modal from "./Modal";
function EditButton({ title, triggerName, content, buttonName }) {
  return (
    <>
      <Modal
        trigger={triggerName}
        buttonName={buttonName}
        btnclasses="btn btn-light btn-outline-primary"
        content={content}
        title={title}
      />
    </>
  );
}

export default EditButton;
