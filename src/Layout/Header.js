import { Link } from 'react-scroll';
import { Container, Navbar, Nav, Button, } from 'react-bootstrap';
import logo from '../assets/images/sagar-logo.png'
export default function Navs() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                        </Nav>
                        <Nav.Link onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            <button className='contect-btn'>CONTACT ME</button>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}