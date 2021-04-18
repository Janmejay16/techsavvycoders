import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarComponents";

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavLink to="/" logo="true">
					<h1>
						Fiver<span>Clone</span>
					</h1>
				</NavLink>
				<Bars onClick={toggle} />
				<NavMenu>
					<NavLink to="/explore" activeClassName="active">
						Explore
					</NavLink>
					<NavLink to="/login" activeClassName="active">
						LogIn
					</NavLink>
					<NavLink to="/register" activeClassName="active">
						Register
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
