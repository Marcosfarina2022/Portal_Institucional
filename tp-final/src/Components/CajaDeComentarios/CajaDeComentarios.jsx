import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

class CajaDeComentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
    };
  }

  handleCommentChange = (event) => {
    this.setState({ newComment: event.target.value});
  };

  handleSubmit = () => {
    const { comments, newComment } = this.state;
    if (newComment.trim() !== '') {
      const currentTime = new Date();
      const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
      const commentWithTime = `${formattedTime} - ${newComment}`;
      comments.push(commentWithTime);
      this.setState({ comments: comments, newComment: '' });
    }
  };

  render() {
    const { comments, newComment } = this.state;
    return (
      <Container className="mt-5">
        <h2>Comentarios</h2>
        <Row className="mb-3">
          <Col>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={this.handleCommentChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={this.handleSubmit}>
              Enviar comentario
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3>Comentarios anteriores:</h3>
            <ListGroup>
              {comments.map((comment, index) => {const [time, text] = comment.split(' - ');
              return (
                <ListGroup.Item key={index}>
                  <strong>{time}</strong>: {text}
                </ListGroup.Item>
                );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CajaDeComentarios;