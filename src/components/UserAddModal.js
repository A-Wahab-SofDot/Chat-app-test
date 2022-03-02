import React, { useContext, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../authCalls";

function UserAddModal() {
  const { isFetching, dispatch } = useContext(AuthContext);
  const name = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ name: name.current.value }, dispatch);
  };

  return (
    <Modal
      show
      centered
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="example-custom-modal-styling-title">
          What is your name?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleClick}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="string"
              placeholder="Enter Full Name"
              ref={name}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isFetching}>
            Enter
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default UserAddModal;
