import React from "react";
import "../App.css";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, Row} from "reactstrap";

function NavBar() {
    return (
        <div className="Navbar">
            <Navbar color="light" light expand="md">
                <Nav justified={true}>
                    <NavbarBrand>Lambda Eats</NavbarBrand>
                    <Row>
                        <NavItem>
                            <Link to='/'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/pizza'>Order</Link>
                        </NavItem>
                    </Row>

                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;
