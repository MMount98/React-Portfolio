import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Portfolio() {
  return (
    <>
      <Container>
        <h2>Past Projects:</h2>
        <Row>
          <Col>
            <a href="https://fast-meadow-68844.herokuapp.com/">
              <Image src="./images/Jate.jpeg" alt="Link to Text Editor App" />
            </a>
          </Col>
          <Col>
            <a href="https://tranquil-retreat-10835.herokuapp.com/">
              <Image
                src="./images/NoteTaker.jpeg"
                alt="Link to Note Taker Web App"
              />
            </a>
          </Col>
          <Col>
            <a href="https://dry-garden-70856.herokuapp.com/">
              <Image
                src="./images/Tech-Blog.jpeg"
                alt="Link to Tech-Blog App"
              />
            </a>
          </Col>
          <Col>
            <a href="https://mmount98.github.io/Javascript_Quiz/">
              <Image
                src="./images/JSQuiz.jpeg"
                alt="Link to Javascript Quiz Web App"
              />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/MMount98/Social-Network-API">
              <Image
                src="./images/SocialNetwork.jpeg"
                alt="Link to Social Network Mongo Database"
              />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/MMount98/Employee-Tracker-CMS">
              <Image
                src="./images/Employee-Tracker.jpeg"
                alt="Link to Employee SQL Database"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
