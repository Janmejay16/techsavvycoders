import React from "react";
import { Heading, ParentContainer, Container, Text, Image } from "./AboutComponents";
import AboutImg from "../assets/about.svg";

const About = () => {
	return (
		<>
			<ParentContainer>
				<Container>
					<Heading>About</Heading>
					<Text>
						The app is made using React and it uses Edamam API for fetching the recipes from their
						server.
					</Text>
				</Container>
				<Image src={AboutImg} alt="HeroImg" />
			</ParentContainer>
		</>
	);
};

export default About;
