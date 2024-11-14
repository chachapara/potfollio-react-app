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
                            <Nav.Link href="#About-me">About me</Nav.Link>
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Project">Project</Nav.Link>
                        </Nav>
                        <button className='contect-btn'>CONTACT ME</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}