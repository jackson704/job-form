import React from 'react'
import { Button, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import MainForm from './MainForm';

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a >

              <Navbar.Brand className='text-white'>Todo-List</Navbar.Brand>
            </a>

          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-light text-danger" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" style={{ textDecoration: 'none' }}>

                <Nav.Link href='/' className='text-white'>Home</Nav.Link>

              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>

                <Nav.Link href="/gf" className='text-white'>Link</Nav.Link>

              </Link>
              {/* <NavDropdown className='text-white' title="Link" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3" className='text-black'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className='text-black'>Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className='text-black'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Link to="/read-todos" style={{ textDecoration: 'none' }}>

                <Nav.Link href='/read-todos' className='text-white'>
                  Read Todos
                </Nav.Link>


              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>




    </ >
  )
}

export default MainNavbar   