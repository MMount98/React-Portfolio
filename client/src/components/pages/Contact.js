import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const getValue = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else if (inputType === "lastName") {
      setLastName(inputValue);
    }
  };

  const validate = (e) => {
    e.preventDefault();

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      document
        .getElementById("formEmail")
        .setAttribute("class", "form-control border border-danger");

      return;
    } else if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      document
        .getElementById("formEmail")
        .setAttribute("class", "form-control");

      return;
    }
  };

  const findFormErrors = () => {
    const { firstName, lastName, message } = Form;
    const newErrors = {};
    
    if (!firstName || firstName === "") newErrors.name = "cannot be blank!";
    if (!lastName || lastName === "") newErrors.name = "cannot be blank";
    if(!message || message === "") newErrors.name = "cannot be Blank";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } 
  };
  

  return (
    <Form className="p-5">
      <Form.Group className="mb-2" controlId="formFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          value={firstName}
          onChange={getValue}
          name="firstName"
          type="text"
          placeholder="Michael"
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          value={lastName}
          onChange={getValue}
          name="lastName"
          type="text"
          placeholder="Mount"
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          value={email}
          onChange={getValue}
          onClick={validate}
          name="email"
          type="email"
          placeholder="Mount.Photos@gmail.com"
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formMessage">
        <Form.Label>Message:</Form.Label>
        <Form.Control
        name="message"
        type="message"
          as="textarea"
          rows={3}
          placeholder="What can I do for you?"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Say Hi!
      </Button>
    </Form>
  );
}

export default ContactForm;
