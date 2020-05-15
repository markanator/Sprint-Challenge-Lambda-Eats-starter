import React from "react";
import "../App.css";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

function NavBar() {
    return (
        <div className="Navbar">
            <Navbar color="light" light expand="md">
                <Nav>
                    <NavbarBrand>Lambda Eats</NavbarBrand>
                    <NavItem>
                        <Link to="/">
                            <NavLink>Home</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/Pizza">
                            <NavLink>Order</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;
