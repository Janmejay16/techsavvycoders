import React from "react";
import { Checkbox, FormControlLabel, withStyles } from "@material-ui/core";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Container, Bookmark, Heading, Text } from "./ProjectComponents";

const Project = () => {
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
		<>
			<Container>
				<Bookmark>
					<FormControlLabel
						control={
							<GreenCheckbox
								icon={<BsBookmark />}
								checkedIcon={<BsBookmarkFill />}
								name="checkedH"
							/>
						}
					/>
				</Bookmark>
				<Heading>Heading</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, excepturi?
				</Text>
			</Container>
		</>
	);
};

export default Project;
