import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./NavbarPage/index";
import Sidebar from "./Sidebar/index.jsx";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";
import Explore from "./pages/Explore.jsx";
import Footer from "./Footer/index.jsx";

// Import fonts or download in production

const Vatsal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="main">
			<Router>
				<div className="main-content">
					<Sidebar isOpen={isOpen} toggle={toggle} />
					<Nav toggle={toggle} />
					<Switch>
						<Route path="/explore" component={Explore} />
						<Route path="/login" component={LogIn} />
						<Route path="/register" component={Register} />
						<Route path="/" component={Home} />
						<Redirect to="/" />
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
};

export default Vatsal;