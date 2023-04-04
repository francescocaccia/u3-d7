import SingleBook from "./SingleBook";
import { Alert, Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = props => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState("");

  const changeSelectedBook = asin => {
    setSelectedBook(asin);
  };

  {
    return (
      <>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className="display-6">Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              {props.books
                .filter(b => b.title.toLowerCase().includes(searchQuery))

                .map(b => (
                  <Col xs={12} md={3} key={b.asin}>
                    <SingleBook book={b} selectedBook={selectedBook} changeSelectedBook={changeSelectedBook} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={6}>
            {selectedBook ? (
              <CommentArea asin={selectedBook} />
            ) : (
              <Alert variant="info">Seleziona un libro per visualizzare i commenti</Alert>
            )}
          </Col>
        </Row>
      </>
    );
  }
};
export default BookList;
