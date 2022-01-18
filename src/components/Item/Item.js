import React from 'react';
import './Item.css';
import CatalogIteam from '../../catalog-iteam.json';

function Item() {
    
    const items = CatalogIteam.map((elem) => 
        <li>
            {elem.title}
        </li>
    ) 
  return (
    <div className="Item">
       <div>
        <ul>
            {items}   
        </ul> 
       </div>
    </div>
  );
}

export default Item;
