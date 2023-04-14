import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Resume() {
    useEffect(() => {
        document.title = "Resume";
      }, []);
  return (
    <>
      <Container>
        <Row className="d-flex">
          <Col>
            <h1>Michael Mount</h1>
            <h2>Full-Stack Web Developer</h2>
          </Col>
          <Col className="">
            <a href="/Files/MountResume.pdf" download>
              <Button variant="secondary">Download PDF</Button>
            </a>
          </Col>
        </Row>

        <Row>
          <h2 className="py-4">Education</h2>
          <Col>
            <h3>
              Certificate of Completion, University of Denver - Denver, CO
            </h3>
            <p>Jan 2023 - April 2023</p>
            <ul>
              <li>Field of Study: Full-Stack Web Development</li>
            </ul>
          </Col>
          <Col>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
          <Row>
            <Col lg={5}>
              <h3>
                Bachelor of Arts, University of Northern Colorado - Greeley, CO
              </h3>
              <p>Aug 2016 - Aug 2020</p>
              <ul>
                <li>Field of Study: Theater Studies</li>
              </ul>
            </Col>
          </Row>
        </Row>
        <Row>
          <h2 className="py-4">Experience</h2>
          <Col>
            <h3>Associate, It's Coffee - Centennial, CO</h3>
            <p>Jan 2023 - Present</p>
            <ul>
              <li>Daily Cash Audits and Balanced Drawers</li>
              <li>Created a positive work environment </li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Introduced New Method for Auditing the Draw</li>
            </ul>
          </Col>
          <Col className="p-5">
            <h3>Shift Lead, Dutch Bros - Parker, CO</h3>
            <p>Dec 2022 - Jan 2023</p>
            <ul>
              <li>Lead 2 Meetings Monthly</li>
              <li>Moved And Cataloged Weekly Stock</li>
              <li>Handled Multiple Store Operations</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Recognized by Clients for exemplary Customer Service</li>
              <li>Promoted in 6 Months</li>
            </ul>
          </Col>
          <Col className="p-5">
            <h3>Supervisor, Nordstrom - Lone Tree, CO</h3>
            <p>May 2022 - Dec 2022</p>
            <ul>
              <li>Worked Closely with Clients</li>
              <li>Lead Floor Progression</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Promoted in 6 Months</li>
            </ul>
          </Col>
          <Col className="p-5">
            <h3>Front Desk Agent, Marriott Hotel - Denver, CO</h3>
            <p>May 2019 - Aug 2019</p>
            <ul>
              <li>Handled Customer Request and Interactions</li>
              <li>Performed Daily Audits on Guest Rooms and Vacancy </li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Recognized by Clients for exemplary Customer Service</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Resume;
