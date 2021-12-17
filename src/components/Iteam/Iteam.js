import React from 'react';
import './Iteam.css';
import {Col, Card, Button, Container, Row } from 'react-bootstrap';
import CatalogIteam  from '../../catalog-iteam.json';



function Iteam() {
  function blok (props) {
    
  }
  return (
    <div className="Iteam">
     <h1>Catolog</h1>
     <Container className='mt-10'>
       <Row>
         <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
         </Col>
       </Row>
     </Container>
    </div>
  );
}

export default Iteam;
