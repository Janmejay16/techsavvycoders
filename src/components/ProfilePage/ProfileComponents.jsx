import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1vw;
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1vw;
	border-radius: 8px;
	background-color: #fff;

	@media screen and (max-width: 1500px) {
		width: 22%;
	}

	@media screen and (max-width: 1300px) {
		width: 20%;
	}
`;
export const Container = styled.div``;
export const Image = styled.img`
	width: 25%;
	padding: 1vw;
	border: 2px solid #25ab98;
	border-radius: 50%;

	@media screen and (max-width: 1500px) {
		width: 25%;
		height: 25%;
	}

	// @media screen and (max-width: 1300px) {
	// 	width: 5rem;
	// 	height: 5rem;
	// }
`;
export const Heading = styled.h2`
	font-family: "Poppins", sans-serif;
	font-weight: 600;
`;
export const Skills = styled.div`
	color: #585858;
`;
