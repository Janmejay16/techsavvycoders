import React from "react";
import {
	Container,
	Icon,
	CloseIcon,
	Wrapper,
	Menu,
	SidebarLink,
	SocialMenu,
	Icon1,
	Icon2,
} from "./SidebarComponents";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<Container isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<Wrapper>
				<Menu>
					<SidebarLink to="explore" onClick={toggle} activeClassName="active">
						Explore
					</SidebarLink>
					<SidebarLink to="login" onClick={toggle} activeClassName="active">
						LogIn
					</SidebarLink>
					<SidebarLink to="register" onClick={toggle} activeClassName="active">
						Register
					</SidebarLink>
				</Menu>
				<SocialMenu>
					<Icon1 to="" />
					<Icon2 to="" />
				</SocialMenu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;
