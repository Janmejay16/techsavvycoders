import styled from "styled-components";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaLinkedin } from "react-icons/fa";
import {faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

export const Wrapper = styled.footer`
	padding: 1em 2vw;
	background-color: #081329;
`;

export const ParentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	margin-inline: auto;
	width: 70%;

	@media screen and (max-width: 1500px) {
		width: 80%;
	}

	@media screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const Logo = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.25rem;
	color: #fff;

	@media screen and (max-width: 1200px) {
		font-size: 1rem;
	}
`;

export const Team = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
`;

export const TeamContainer = styled.div`
	display: flex;
	gap: 5em;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
`;

export const Heading = styled.h2`
	font-family: "Poppins", sans-serif;
	font-size: 1.5em;
	color: #fff;
`;

export const Name = styled.h3`
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 1.25rem;
	color: #f2f3f4;
`;

export const Email = styled.p`
	color: #b9b9b9;
`;

export const Phone = styled.p`
	color: #b9b9b9;
`;

export const IconContainer = styled.div`
	font-size: 1.5rem;
	color: #b9b9b9;
	display: flex;
	justify-content: center;
	gap: 1em;
`;

// export const Icon1 = styled(faLinkedin)`
// 	cursor: pointer;
// `;

// export const Icon2 = styled(faInstagram)`
// 	cursor: pointer;
// `;
