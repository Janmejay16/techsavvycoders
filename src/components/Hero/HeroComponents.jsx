import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0 2vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-items: space-between;
	margin-inline: auto;
	width: 70%;

	@media screen and (max-width: 1500px) {
		width: 80%;
	}

	@media screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const Container = styled.div``;

export const Heading = styled.h1`
	font-family: "Poppins", sans-serif;
	font-size: clamp(2rem, 5vw, 3.5rem);
	font-weight: 700;
	color: #2b6777;
`;

export const SubHeading = styled.h2`
	font-size: clamp(1rem, 3vw, 1.5rem);
	font-weight: 300;
	line-height: 1.5;
	max-width: 45ch;
	margin-bottom: 1em;
`;

export const Button = styled.button`
	padding: 1em 3em;
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: clamp(0.75em, 1.5vw, 1rem);
	color: #fff;
	letter-spacing: 1.5px;
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 8px;
	background-color: #2b6777;
	transition: all 150ms ease-out;

	&:hover {
		transition: all 150ms ease-in;
		background-color: #25ab98;
	}
`;

export const Image = styled.img`
	width: 40%;

	@media screen and (max-width: 1200px) {
		display: none;
	}
`;
