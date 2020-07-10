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
    return data - length === 0 ? (
        <h1>Loading...</h1>
    ) : (
        <Main>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}
                ></About>
            </Sidebar>
            <Info>
                <Education data={data.education}></Education>
                <Experience data={data.experience}></Experience>
                <Certificates data={data.certificates}></Certificates>
                <Skills data={data.skills}></Skills>
            </Info>
        </Main>
    );
};

export default App;
