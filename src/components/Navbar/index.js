import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to ="/home" activeStyle >
                        Home
                    </NavLink>
                    <NavLink to ="/todo" activeStyle >
                        TodoList
                    </NavLink>
                    <NavLink to ="/calendar" activeStyle >
                        Calendar
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;