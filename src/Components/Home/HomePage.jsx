import React, { useEffect } from "react";
import Events from "../Events/Events";
import Header from "../Header/Header";
import LatestMembers from "../LatestMembers/LatestMembers";
import Aheader from "../Aheader/Aheader";
import Navbar2 from "../Navbar/Navbar2";

function HomePage (props) {
    const token=props.token
    return (
        <>
            <Aheader token={token}/>
            <Navbar2 />
            <Header />
            <Events />
            <LatestMembers />
        </>
    );
};


export default HomePage;
