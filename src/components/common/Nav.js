import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { handleLogout } from '../../actions/authedUser'
 
const Navigation = (props) => {

    const dispatch = useDispatch()

    const handleLogoutRequest = (e) => {
        e.preventDefault()

        // If Not Logged In 
        // Don't dispatch logout action
        if(props.isLoggedIn)
            dispatch(handleLogout())
    }   

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link as={Link} to="/add">Add</Nav.Link>
                        <Nav.Link onClick={(e) => handleLogoutRequest(e)}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation