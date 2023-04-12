import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-2" controlId="formFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" placeholder="Michael" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" placeholder="Mount" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Mount.Photos@gmail.com" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {" "}
        Say Hi!
      </Button>
    </Form>
  );
}

export default ContactForm;
