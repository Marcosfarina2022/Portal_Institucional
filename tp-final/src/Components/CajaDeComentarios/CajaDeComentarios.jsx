import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cajaDeComentarios.css'; // Asegúrate de que el nombre del archivo CSS coincida con el que proporcioné
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

class CajaDeComentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
    };
  }

  handleCommentChange = (event) => {
    this.setState({ newComment: event.target.value });
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
      <Container className="comment-box mt-12">
            <ListGroup>
              {comments.map((comment, index) => {
                const [time, text] = comment.split(' - ');
                return (
                  <ListGroup.Item key={index} className="comment-item">
                    <strong>{time}</strong>: {text}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            

        <div className='textarea'>
            <Form.Control
              as="textarea"
              rows={4}
              className="comment-input"
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={this.handleCommentChange}
            />
            <Button
              variant="primary"
              className="comment-submit"
              onClick={this.handleSubmit}
            >
              Enviar comentario
            </Button>
            </div>
      </Container>
    );
  }
}

export default CajaDeComentarios;
