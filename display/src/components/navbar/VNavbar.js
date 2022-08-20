import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";


export const VNavbar = () => {
    return(
     <> 
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img 
            src="https://i.ibb.co/mDw7VQ4/33193787.png" 
            width="65"
            height="50"
            className="d-inline-block align-top"
            alt="Valorant Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Recent Matches</Nav.Link>
              <Nav.Link as={Link} to="/lineups">Lineups</Nav.Link>
              <Nav.Link as={Link} to="/crosshairs">Crosshairs</Nav.Link>
        </Nav>
        </Navbar.Collapse>
     </Container>
    </Navbar>
</>  
    )
}