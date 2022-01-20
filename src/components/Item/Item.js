import React from 'react';
import './Item.css';
import CatalogIteam from '../../catalog-iteam.json';
import {Card, Col, Container, Row, Button} from 'react-bootstrap';



function Item() {
    console.log(CatalogIteam)
    const items = CatalogIteam.map((elem) => 
    <Container className='mt-10'>
    <Row>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={elem.image} />
                <Card.Body>
                    <Card.Title>{elem.title}</Card.Title>
                    <Card.Text>{elem.price}</Card.Text>
                    <Button variant="primary"></Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
    ) 
    console.log(items.id)
  return (
    <div className="Item">
        {items}
    </div>
  );
}

export default Item;
