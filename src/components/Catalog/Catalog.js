import React from 'react';
import './Catalog.css';
import CatalogIteam from '../../catalog-iteam.json'
import {Card, Col, Container, Row, Button, CardGroup} from 'react-bootstrap';

const items = CatalogIteam.map((elem) => 
       <li>
         <Card.Img variant="top" src={elem.image} />
         <p>{elem.title}</p>
       </li>
) 

function catalogRows() {
  console.log(CatalogIteam.length)
}

function Catalog() {
  catalogRows()
  return (
    <div className="Catalog">
      <h1>Catalog</h1> 
      <div>
        <ul>
        {items}  
        </ul>
      </div>     
    </div>
  )
}
  
export default Catalog;
