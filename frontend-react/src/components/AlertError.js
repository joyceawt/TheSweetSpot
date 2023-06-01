import React from "react";
import { Alert, Button } from "react-bootstrap";

function AlertError({ error, setShow }) {
  return (
    <Alert variant="danger">
      <Alert.Heading>{error.heading}</Alert.Heading>
      <p>{error.message}</p>
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="secondary">
          Back
        </Button>
      </div>
    </Alert>
  );
}

export default AlertError;
