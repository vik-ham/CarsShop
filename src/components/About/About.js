import React from 'react';
import './About.css'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

function About() {
  return (
    <div className="About"> 
        <Container>
            <Tab.Container id='let-tabs-example' defaultActiveKey='first'>
                <Row>
                   <Col sm={3}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Bis</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth'>Vik</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>Him</Nav.Link>
                            </Nav.Item>
                        </Nav>
                   </Col> 
                   <Col sm={9}>
                       <Tab.Content  className='met-3'>
                           <Tab.Pane eventKey='first'>
                                <p>Design</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey='second'>
                                <p>Team</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey='third'>
                                <p>Bis</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey='fourth'>
                                <p>Vik</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey='fifth'>
                                <p>Him</p>
                           </Tab.Pane>
                       </Tab.Content>
                   </Col>
                </Row>
            </Tab.Container>
        </Container>
    </div>
  );
}

export default About;
