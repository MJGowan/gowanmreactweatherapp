import React, {useState} from 'react';
import './default.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import fetch from '../../scripts/fetch';

export default function Default() {
    const searchCity = async event => {
        event.preventDefault();
        const response = await fetch(input);
        console.log(response);
    }
    
 
    const [input, setInput] = useState ('');

    return (
        <div>
            <Container>
                <br />
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicSearch">
                                <Form.Control type="text" placeholder="Search" className='input' onChange={e => setInput(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" onClick={searchCity}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <br/>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div className='daily'>

                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='favorites'>
                        <p>Favorite Cities</p>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div className='fiveDays'>
                            
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='fiveDays'>

                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='fiveDays'>

                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='fiveDays'>

                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div className='fiveDays'>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}