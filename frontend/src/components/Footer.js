import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App d-flex flex-column">
      <Container className="flex-grow-1 ">
      </Container>
      <footer className="footer text-light text-center py-3">
        <Container>
          <Row>
            <Col>
              &copy; 2024 CITE BANK
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App;
