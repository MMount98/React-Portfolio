import { useEffect } from "react";
// import { Mailer } from "../../utlis/helper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  // const [firstName, setFirstName] = userState("");
  // const [lastName, setLastName] = userState("");
  // const [email, setEmail] = useState("");

  // const handleInputChange = (e) => {
  //     const {target} = e;
  // }
  useEffect(() => {
    document.title = "Contact Me";
  }, []);

  return (
    <Form className="p-5">
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
      <Form.Group className="mb-2" controlId="formMessage">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="What can I do for you?"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Say Hi!
      </Button>
    </Form>
  );
}

export default ContactForm;
