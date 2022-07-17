import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form, Button} from "react-bootstrap";

function Login() {
    return (

        <div className="App">
            <Container className="mt-5">
                <Row >
                    <Col lg={4} md={6} sm={12}>
                       
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group> 

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                               <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary btn-block" type="submit"> Login</Button>
                               
                        </Form>
                    </Col>
                    
                </Row>       
                           
            </Container>

        </div>
    );
}


export default Login;
