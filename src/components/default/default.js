import React from 'react';
import './default.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Default() {
    return (
        <div>
            <Container>
                <Row>
                    <Form>
                    </Form>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicSearch">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>

                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>

                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}