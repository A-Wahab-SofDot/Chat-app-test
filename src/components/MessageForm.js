import React from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { parseDateToISO } from "../utils";

function MessageForm() {
  const [chatMessage, setChatMessage] = React.useState("");
  const { user } = React.useContext(AuthContext);
  const channel = new BroadcastChannel("app-data");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      author: user.name,
      text: chatMessage,
      createdDate: parseDateToISO(new Date()),
    };
    channel.postMessage(message);
    setChatMessage("");
  };

  const handleOnChange = ({ target }) => {
    setChatMessage(target.value);
  };

  return (
    <Form className="w-100" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message to send"
          onChange={handleOnChange}
          value={chatMessage}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}
export default MessageForm;
