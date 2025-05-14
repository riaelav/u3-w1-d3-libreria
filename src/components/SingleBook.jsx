import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    isCardSelected: false,
  };

  cardToggle = () => {
    console.log("card cliccata");

    if (this.state.isCardSelected === true) {
      this.setState({ isCardSelected: false });
    } else {
      this.setState({ isCardSelected: true });
    }
  };

  render() {
    let cardClass = "singleCard";
    if (this.state.isCardSelected) {
      cardClass += " border border-2 border-danger";
    }

    return (
      <Card className={cardClass} onClick={this.cardToggle}>
        <Card.Img className="singleCardImg" variant="top" src={this.props.book.img} />
        <Card.Body className="text-center">
          <Card.Title className="singleCardTitle overflow-hidden">{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

/*const SingleBook = function (props) {
  return (
    <Card className="singleCard">
      <Card.Img className="singleCardImg" variant="top" src={props.book.img} />
      <Card.Body className="text-center">
        <Card.Title className="singleCardTitle overflow-hidden">{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;*/
