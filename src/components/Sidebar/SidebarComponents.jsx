import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaTimes, FaLinkedin } from "react-icons/fa";

export const Container = styled.div`
	background-color: #fff;
	position: fixed;
	top: 0;
	left: ${(props) => (props.isOpen ? "0%" : "200%")};
	width: 100%;
	height: 100%;
	transition: all 150ms ease-in-out;
	opacity: ${(props) => (props.isOpen ? "1" : "0")};
	z-index: 10;
`;

export const CloseIcon = styled(FaTimes)`
	color: #111827;
`;

export const Icon = styled.div`
	font-size: 1.5rem;
	position: absolute;
	top: 0.8em;
	right: 1.8em;
	cursor: pointer;
	outline: none;
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const SidebarLink = styled(Link)`
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	font-weight: bold;
	color: #2b6777;
	text-decoration: none;
	text-align: center;
	padding: 0.3em 0.8em;
	transition: all 150ms ease-in;

	&.active {
		color: #25ab98;
		transition: all 150ms ease-in;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const SocialMenu = styled.div`
	display: flex;
	justify-content: center;
	gap: 1em;
	margin-top: 2em;
	font-size: 3rem;
`;

export const Icon1 = styled(FaLinkedin)`
	color: #111827;
	cursor: pointer;
`;

export const Icon2 = styled(AiFillInstagram)`
	color: #111827;
	cursor: pointer;
`;
