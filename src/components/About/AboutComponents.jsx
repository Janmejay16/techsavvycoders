import styled from "styled-components";

export const Heading = styled.h1`
	font-family: "Poppins", sans-serif;
	font-weight: 800;
	font-size: clamp(3.5rem, 8vw, 5rem);
	color: #3f100a;
`;

export const ParentContainer = styled.div`
	margin: 5vh 5vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Text = styled.p`
	font-size: clamp(1.5rem, 3vw, 2rem);
	line-height: 1.5;
	max-width: 45ch;
	color: #3f100a;
`;

export const Image = styled.img`
	@media screen and (max-width: 1500px) {
		display: none;
	}
`;

export const Container = styled.div``;
