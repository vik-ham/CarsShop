import React from 'react';
import {Container, Form, FormControl, Nav, Navbar, Button} from 'react-bootstrap';
import {Routes, Route,} from 'react-router-dom';
import './Header.css';

import Catalog from '../Catalog/Catalog';
import News from '../News/News';
import Home from '../Home/Home';
import About from '../About/About';

function Header() {
  return (
    <div className="Header">
        <Navbar collapseOnSelect exppand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse className='nav-col' id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/news'>Новини</Nav.Link>
                        <Nav.Link href='/catalog'>Каталог</Nav.Link>
                        <Nav.Link href='/about'>О нас</Nav.Link>
                    </Nav>
                    <Form inline className='nav-form'>
                        <FormControl 
                            type='text'
                            placeholder='Search'
                            className='mr-sm-2'
                        />
                        <Button variant='outline-info'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
    </div>
  );
}

export default Header;
