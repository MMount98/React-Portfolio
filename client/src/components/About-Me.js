import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { TypeAnimation } from "react-type-animation";

const styles = {
  img: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

function AboutMe() {
  return (
    <>
      <Container className="td-flex flex-column">
        <Row className="align-items-center">
          <Col>
            <span style={{ fontSize: "5em" }}>
              <span>I am </span>{" "}
              <TypeAnimation
                sequence={[
                  "a Full-Stack Web Developer",
                  2000,
                  "a Back-End Developer",
                  2000,
                  "a JS Developer",
                  2000,
                  "a Photographer",
                  2000,
                  "an Actor",
                  2000,
                  "a Teamplayer",
                  2000,
                ]}
                repeat={Infinity}
              />
            </span>
          </Col>
          <Col>
            <Image
              src="./images/AboutMe.jpg"
              style={styles.img}
              alt="Michael Mount Headshot"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>
              Hello, my name is Michael Mount! I am a current Denver Univeristy
              student enrolled in their full-stack flex program. It is a 13 week
              long course that covers what it means to be a full-stack engineer
              in the industry. I started my coding journey 2 months prior to
              starting the program. I have been self teaching with a focus in
              HTML, CSS, and Javascript. Prior to joining DU, I attended the
              University of Northern Colordo and completed my bacholors degree
              in performing Arts and Theatre Studies. I was on the Deans List
              for 3 years and graduated with an overall GPA of 3.8. Once I
              finish with my courses I attend to join the web development
              industry with a high hopes to start a new career in life. Hoping
              to join a team and work with fellow devlopers in building a new
              project!
            </p>
          </Col>
          <Col>
                <h2>Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>React</li>
                    </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
