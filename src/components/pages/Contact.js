import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const styles = {
  button: {
    marginTop: 20,
    backgroundColor: "#6fa758",
    border: "none",
  },
  text: {
    color: "rgb(58, 69, 102)",
    fontSize: 25,
    fontWeight: "bold",
  },
  card: {
    width: "22rem",
    backgroundColor: "#a6a09f",
    padding: 20,
    margin: 10,
  },
};

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
      <Container className="d-flex justify-content-center flex-wrap">
        <Card style={styles.card}>
          <Form onSubmit={handleSubmit}>
            <Col>
              <Form.Group>
                <Form.Label style={styles.text} htmlFor="name">
                  Name:
                </Form.Label>
                <Form.Control type="text" id="name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label style={styles.text} htmlFor="email">
                  Email:
                </Form.Label>
                <Form.Control type="email" id="email" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label style={styles.text} htmlFor="message">
                  Message:
                </Form.Label>
                <Form.Control as="textarea" rows={3} id="message" required />
              </Form.Group>
            </Col>
            <Button
              variant="primary"
              size="lg"
              style={styles.button}
              type="submit"
            >
              {status}
            </Button>
          </Form>
        </Card>
        <Card style={styles.card}>
          <Form.Label style={styles.text}>
            Please don't hesitate to send me a message if your curious about my
            portfolio or have any questions. I look forward to hearing from you!
          </Form.Label>
        </Card>
      </Container>
  );
};

export default Contact;
