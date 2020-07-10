import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import userGetData from "../hooks/useGetData";

const App = () => {
	const data = userGetData();
	console.log(data);
	return (
		<Main>
			<Sidebar>
				<About></About>
			</Sidebar>
			<Info>
				<Education></Education>
				<Experience></Experience>
				<Certificates></Certificates>
				<Skills></Skills>
			</Info>
		</Main>
	);
};

export default App;
