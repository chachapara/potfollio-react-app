import { Link } from 'react-scroll';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import logo from '../assets/images/sagar-logo.png'
export default function Navs() {

    return (
        <>
            <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end" // this makes it slide in from the right
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <Nav.Link onClick={() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' })}>
                                About
                            </Nav.Link>
                            <Nav.Link onClick={() => document.getElementById('Skills').scrollIntoView({ behavior: 'smooth' })}>
                                Skills
                            </Nav.Link>
                            <Nav.Link onClick={() => document.getElementById('Project').scrollIntoView({ behavior: 'smooth' })}>
                                Project
                            </Nav.Link>
                            <Nav.Link onClick={() => document.getElementById('support').scrollIntoView({ behavior: 'smooth' })}>
                                Support
                            </Nav.Link>
                            <Nav.Link onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                <button className='contect-btn'>CONTACT ME</button>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </>
    )
}