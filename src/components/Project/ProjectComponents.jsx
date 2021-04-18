import styled from "styled-components";

export const Container = styled.div`
	width: 25%;
	border-radius: 8px;
	padding: 1vw;
	position: relative;
	background-image: url("https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
	background-color: rgba(0, 0, 0, 0.5);
	background-blend-mode: multiply;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	@media screen and (max-width: 1500px) {
		width: 22rem;
		height: 20vh;
	}

	@media screen and (max-width: 1300px) {
		width: 20rem;
		height: 18vh;
	}
`;
export const Bookmark = styled.div`
	position: absolute;
	right: 0;
	top: 1em;
`;
export const Heading = styled.h2`
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	color: #fff;
	font-size: 1.5rem;
`;
export const Text = styled.p`
	color: #dadada;
`;
