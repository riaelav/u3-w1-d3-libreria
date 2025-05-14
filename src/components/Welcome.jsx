import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <div className="rust-text d-flex justify-content-center align-items-center gap-3">
            <h1>Epibooks</h1>
            <p className="m-0">Your Epic Bookstore!</p>
          </div>
        </Col>
      </Row>
      <Alert variant="warning" className="text-center">
        Scorri per vedere i nostri libri
      </Alert>
    </Container>
  );
};
export default Welcome;
