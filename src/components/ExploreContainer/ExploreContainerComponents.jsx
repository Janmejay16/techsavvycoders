import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0 2vw;
	margin-block: 5vh;
	min-height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-items: space-between;
	gap: 1em;
	margin-inline: auto;
	width: 70%;

	@media screen and (max-width: 1500px) {
		width: 80%;
	}

	@media screen and (max-width: 1300px) {
		width: 100%;
	}

	@media screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const LeftContainer = styled.div`
	width: 20%;
	position: sticky;
	top: 0;
	left: 20vw;
	border-radius: 8px;
	background-color: #fff;

	@media screen and (max-width: 1000px) {
		width: 40%;
	}
`;

export const RightContainer = styled.div`
	width: 70%;
	padding: 0 1em;
	margin-left: 30%;

	@media screen and (max-width: 1000px) {
		width: 100%;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
`;

export const CategoryHeading = styled.h2`
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	color: #25ab98;
`;

export const Heading = styled.h1`
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	font-size: 2rem;
	color: #2b6777;
`;
