import React from "react";
import {
	Wrapper,
	Logo,
	ParentContainer,
	Team,
	TeamContainer,
	Heading,
	Container,
	Name,
	Email,
	Phone,
	IconContainer,
	Icon1,
	Icon2,
} from "./FooterComponents";

const Footer = () => {
	return (
		<>
			<Wrapper>
				<ParentContainer>
					<Logo>© 2021 TechSavvyCoders. All Rights Reserved</Logo>
					<Team>
						<Heading>Team</Heading>
						<TeamContainer>
							<Container>
								<Name>Vatsal Sakariya</Name>
								<Email>vsakariya8@gmail.com</Email>
								<Phone>9484695551</Phone>
								<IconContainer>
									{/* <Icon1 to="" />
									<Icon2 to="" /> */}
								</IconContainer>
							</Container>
							<Container>
								<Name>Vatsal Sakariya</Name>
								<Email>vsakariya8@gmail.com</Email>
								<Phone>9484695551</Phone>
								<IconContainer>
									{/* <Icon1 to="" />
									<Icon2 to="" /> */}
								</IconContainer>
							</Container>
							<Container>
								<Name>Vatsal Sakariya</Name>
								<Email>vsakariya8@gmail.com</Email>
								<Phone>9484695551</Phone>
								<IconContainer>
									{/* <Icon1 to="" />
									<Icon2 to="" /> */}
								</IconContainer>
							</Container>
						</TeamContainer>
					</Team>
				</ParentContainer>
			</Wrapper>
		</>
	);
};

export default Footer;
