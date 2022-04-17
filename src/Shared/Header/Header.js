import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand href="#home">Just Justice</Navbar.Brand>

                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>



                        <Nav.Link as={Link} to='/blogs'>
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about'>
                            About Me
                        </Nav.Link>
                        {user ? <button onClick={handleSignOut}>Log Out</button> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>}




                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;