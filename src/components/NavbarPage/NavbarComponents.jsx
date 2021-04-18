import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
	font-family: "Poppins", sans-serif;
	padding: 0 2vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-inline: auto;
	width: 70%;

	@media screen and (max-width: 1500px) {
		width: 80%;
	}

	@media screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #2b6777;
	font-size: ${(props) => (props.logo ? "1.5rem" : "1.25rem")};
	padding: 0.3em 0.8em;
	cursor: pointer;
	transition: all 150ms ease-in;

	span {
		font-weight: 300;
	}

	&:hover {
		text-decoration: ${(props) => (props.logo ? "none" : "underline")};
	}

	&.active {
		transition: all 150ms ease-in;
		color: ${(props) => (props.logo ? "#2b6777" : "#25ab98")};
	}

	@media screen and (max-width: 1200px) {
		font-size: ${(props) => (props.logo ? "1.25rem" : "1rem")};
	}

	@media screen and (max-width: 800px) {
		display: ${(props) => (props.logo ? "" : "none")};
	}
`;

export const Bars = styled(FaBars)`
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
		font-size: 1.5rem;
		position: absolute;
		top: 0.8em;
		right: 1.8em;
		cursor: pointer;
		outline: none;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	font-weight: 600;
	font-size: 1.5rem;
	gap: 2em;
`;
