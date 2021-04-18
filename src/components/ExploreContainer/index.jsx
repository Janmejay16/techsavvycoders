import React from "react";
import { FormControlLabel, FormGroup, Checkbox, withStyles } from "@material-ui/core";
import Profile from "../ProfilePage/index";
import Project from "../Project/index";
import {
	Wrapper,
	LeftContainer,
	RightContainer,
	Container,
	CategoryHeading,
	Heading,
} from "./ExploreContainerComponents";

const ExploreContainer = () => {
	const GreenCheckbox = withStyles({
		root: {
			color: "#25ab98",
			"&$checked": {
				color: "#2b6777",
			},
		},
		checked: {},
	})((props) => <Checkbox color="default" {...props} />);

	return (
		<div>
			<Wrapper>
				<LeftContainer>
					<CategoryHeading>Category</CategoryHeading>
					<FormGroup>
						<FormControlLabel
							control={<GreenCheckbox name="checkbox" />}
							label="Development and IT"
						/>
						<FormControlLabel
							control={<GreenCheckbox name="checkbox" />}
							label="Design and Creative"
						/>
						<FormControlLabel
							control={<GreenCheckbox name="checkbox" />}
							label="Sales and Marketing"
						/>
						<FormControlLabel
							control={<GreenCheckbox name="checkbox" />}
							label="Writing and Translation"
						/>
						<FormControlLabel
							control={<GreenCheckbox name="checkbox" />}
							label="Admin and Customer Support"
						/>
						<FormControlLabel
							control={<GreenCheckbox name="checkbox" />}
							label="Finance and Accounting"
						/>
					</FormGroup>
				</LeftContainer>
				<RightContainer>
					<Heading>Projects</Heading>
					<Container>
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
					</Container>
					<Heading>Profiles</Heading>
					<Container>
						<Profile />
						<Profile />
						<Profile />
						<Profile />
						<Profile />
						<Profile />
					</Container>
				</RightContainer>
			</Wrapper>
		</div>
	);
};

export default ExploreContainer;
