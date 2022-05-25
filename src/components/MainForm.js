import React from 'react'
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
const MainForm = () => {
  return (
    <div>
      <Form action='/' method="get">
        <Container fluid className="bg-light rounded-3 my-4">

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formbasicName">
                <Form.Label className="form-label">Enter Name</Form.Label>
                <Form.Control type="text" placeholder="Name" className="" />

              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="form-label">Enter Email</Form.Label>
                <Form.Control type="email" placeholder="Email" className="" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="form-label">Mobile No.</Form.Label>
                <Form.Control type="tel" placeholder="Mobile" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit" className='my-3'>
            Add Todo
          </Button>
        </Container>
      </Form>


    </div>
  )
}

export default MainForm