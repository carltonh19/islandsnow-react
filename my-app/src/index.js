import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';

const IslandSnow = () => (
  <Container className="text-center">
    <h1>Island Snow!</h1>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);