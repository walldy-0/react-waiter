import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <Navbar bg="primary" expand="lg" variant="dark" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand as={Link} to="/">Waiter.app</Navbar.Brand>
        <Nav className="text-end">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;