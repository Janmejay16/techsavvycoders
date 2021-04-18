import React from "react";
import { Wrapper, Container, Image, Heading, Skills } from "./ProfileComponents";
import UserImage from "../assets/user.jfif";

const Profile = () => {
	return (
		<>
			<Wrapper>
				<Image src={UserImage} alt="user-image" />
				<Container>
					<Heading>Name</Heading>
					<Skills>MongoDB, Express, React, Node</Skills>
				</Container>
			</Wrapper>
		</>
	);
};

export default Profile;
