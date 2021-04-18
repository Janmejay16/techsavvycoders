import React from "react";
import { Wrapper, Container, Heading, SubHeading, Button, Image } from "./HeroComponents";
import HeroImage from "../assets/Hero.svg";

const Hero = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<Heading>Find your job and make sure goal!</Heading>
					<SubHeading>
						A platform where people can find projects to work on, find people to work with together
						for projects or freelancing work.
					</SubHeading>
					<Button>Get Started</Button>
				</Container>
				<Image src={HeroImage} alt="hero" />
			</Wrapper>
		</div>
	);
};

export default Hero;
