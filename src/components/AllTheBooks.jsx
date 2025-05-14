import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import hystory from "../data/history.json";

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="cols-2 cols-md-3 cols-lg-4 cols-xl-6 gy-4">
        {fantasy.map((book) => (
          <Col className="column" key={`slide-${book.asin}`}>
            <Card className="carta">
              <Card.Img className="fit" variant="top" src={book.img} />
              <Card.Body>
                <Card.Title className="title text-truncate fs-6">{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button className="rust-button">Compra ora</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
