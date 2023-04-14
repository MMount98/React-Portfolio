import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://twitter.com/MMount98"
              role="button"
            >
              <i class="fa-brands fa-twitter"></i>
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.linkedin.com/in/mmount98/"
              role="button"
            >
             
              <i class="fa-brands fa-linkedin"></i>
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://github.com/MMount98"
              role="button"
            >
              <i class="fa-brands fa-github"></i>
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </>
  );
}

export default Footer;
