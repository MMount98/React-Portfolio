import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

document.title = 'Portfolio'

const styles = {
  img: {
    maxHeight: "15rem",
    padding: "1rem",
    overflow: "hidden",
    objectFit: "cover",
  },
  h2: {
    textAlign: "center",
    fontSize: "4rem",
    padding: "2rem"
  },
};

function Portfolio() {
  return (
    <>
      <h2 style={styles.h2}>Past Projects:</h2>
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="mx-auto flex-wrap">
          <Col lg={4}>
            <a href="https://fast-meadow-68844.herokuapp.com/">
              <Image
                src="./images/Jate.jpeg"
                alt="Link to Text Editor App"
                style={styles.img}
              />
            </a>
          </Col>
          <Col lg={4}>
            <a href="https://tranquil-retreat-10835.herokuapp.com/">
              <Image
                src="./images/NoteTaker.jpeg"
                alt="Link to Note Taker Web App"
                style={styles.img}
              />
            </a>
          </Col>
          <Col lg={4}>
            <a href="https://dry-garden-70856.herokuapp.com/">
              <Image
                src="./images/Tech-Blog.jpeg"
                alt="Link to Tech-Blog App"
                style={styles.img}
              />
            </a>
          </Col>
          <Col lg={4}>
            <a href="https://mmount98.github.io/Javascript_Quiz/">
              <Image
                src="./images/JSQuiz.jpeg"
                alt="Link to Javascript Quiz Web App"
                style={styles.img}
              />
            </a>
          </Col>
          <Col lg={4}>
            <a href="https://github.com/MMount98/Social-Network-API">
              <Image
                src="./images/SocialNetwork.jpeg"
                alt="Link to Social Network Mongo Database"
                style={styles.img}
              />
            </a>
          </Col>
          <Col lg={4}>
            <a href="https://github.com/MMount98/Employee-Tracker-CMS">
              <Image
                src="./images/Employee-Tracker.jpeg"
                alt="Link to Employee SQL Database"
                style={styles.img}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
