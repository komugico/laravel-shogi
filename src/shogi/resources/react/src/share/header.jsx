import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, ButtonGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    constructor() {
        super();
    }

    tagNavbarContent() {
        if (this.props.username != null) {
            return (
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Application" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Coming Soon...</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            );
        }
        else {
            return (
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            );
        }
    }

    render() {
        let navbarContent = this.tagNavbarContent();

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Web Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navbarContent}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById("header")
);