import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const styles = {
  img: {
    maxWidth: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  h1: {
    fontSize: "5rem",
    textAlign: "center",
    margin: "2rem",
  },
};

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <>
      <h1 style={styles.h1}>Recent Projects:</h1>
      <Row xs={1} md={2} className=" m-4 p-2">
        <Col>
          <Card className=" m-4 p-2">
            <Card.Img
              variant="top"
              src="./Images/Jate.jpeg"
              style={styles.img}
            />
            <Card.Body>
              <Card.Title>Jate</Card.Title>
              <Card.Text>
                <strong>Just Another Text Editor:</strong> Online Text Editor
                that can be used in-case of loss of Internet Connection. <br />
                <strong>Tools:</strong>HTML, Bootstrap, Service-Worker, WPA
              </Card.Text>
              <Link to="https://fast-meadow-68844.herokuapp.com/">
                <Button variant="outline-dark" size="lg">
                  Check It Out!
                </Button>
              </Link>
              <Link
                className="pl-5"
                to="https://github.com/MMount98/Text-Editor-App"
              >
                <Button variant="outline-dark" size="lg">
                  GitHub Repo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" m-4 p-2">
            <Card.Img
              variant="top"
              src="./Images/Tech-Blog.jpeg"
              style={styles.img}
            />
            <Card.Body>
              <Card.Title>Tech Blog</Card.Title>
              <Card.Text>
                <strong>Tech Blog:</strong> A Simple Blog To Allow users to
                Create Posts and leave Comments on others!
                <br />
                <strong>Tools:</strong>HTML, Bootstrap, Node, SQL
              </Card.Text>
              <Link to="https://dry-garden-70856.herokuapp.com/">
                <Button variant="outline-dark" size="lg">
                  Check It Out!
                </Button>
              </Link>
              <Link className="pl-5" to="https://github.com/MMount98/Tech-Blog">
                <Button variant="outline-dark" size="lg">
                  GitHub Repo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" m-4 p-2">
            <Card.Img
              variant="top"
              src="./Images/NoteTaker.jpeg"
              style={styles.img}
            />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                <strong>Note Taker:</strong> A Simple Web App that Allows for
                saving Notes in Json File.
                <br />
                <strong>Tools:</strong>HTML, Custom CSS, Bootstrap, Javascript
              </Card.Text>
              <Link to="https://tranquil-retreat-10835.herokuapp.com/">
                <Button variant="outline-dark" size="lg">
                  Check It Out!
                </Button>
              </Link>
              <Link
                className="pl-5"
                to="https://github.com/MMount98/Note-Taker"
              >
                <Button variant="outline-dark" size="lg">
                  GitHub Repo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" m-4 p-2">
            <Card.Img
              variant="top"
              src="./Images/SocialNetwork.jpeg"
              style={styles.img}
            />
            <Card.Body>
              <Card.Title>Social Network </Card.Title>
              <Card.Text>
                <strong>Social Network API:</strong> An API that routes for
                basic CRUD operations for posting, commenting, Users, and
                Friends List!
                <br />
                <strong>Tools:</strong> Node, MongoDB, Insomnia
              </Card.Text>
              <Link
                className="pl-1"
                to="https://github.com/MMount98/Social-Network-API"
              >
                <Button variant="outline-dark" size="lg">
                  GitHub Repo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" m-4 p-2">
            <Card.Img
              variant="top"
              src="./Images/Employee-Tracker.jpeg"
              style={styles.img}
            />
            <Card.Body>
              <Card.Title>Employee System Tracker </Card.Title>
              <Card.Text>
                <strong>Employee System Tracker:</strong> CLI application that
                stores an Employees information on Department, Manager, Title,
                and Salary.
                <br />
                <strong>Tools:</strong> JavaScript, Node, SQL
              </Card.Text>
              <Link
                className="pl-1"
                to="https://github.com/MMount98/Employee-Tracker-CMS"
              >
                <Button variant="outline-dark" size="lg">
                  GitHub Repo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" m-4 p-2">
            <Card.Img
              variant="top"
              src="./Images/JSQuiz.jpeg"
              style={styles.img}
            />
            <Card.Body>
              <Card.Title>JS Quiz</Card.Title>
              <Card.Text>
                <strong>JavaScript Quiz:</strong> A Simple Web Application that
                host a 10 question Quiz and Stores Score Data in Local Storage.
                <br />
                <strong>Tools:</strong>HTML, Custom CSS, JavaScript
              </Card.Text>
              <Link to="https://mmount98.github.io/Javascript_Quiz/">
                <Button variant="outline-dark" size="lg">
                  Check It Out!
                </Button>
              </Link>
              <Link
                className="pl-5"
                to="https://github.com/MMount98/Javascript_Quiz"
              >
                <Button variant="outline-dark" size="lg">
                  GitHub Repo
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Portfolio;
