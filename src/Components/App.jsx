import { useState ,useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { flushSync } from 'react-dom';
import HomePage from "./Home/HomePage";
import Profile from "./Profile/Profile"; 
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Chapters from "../Components/Chapters/Chapters";
import CeoMessage from "../Components/CeoMessage/CeoMessage";
import Jobs from "../Components/Jobs/Jobs";
import EventsPage from "../Components/EventsPage/EventsPage";
import NotableAlumni from "../Components/NotableAlumni/NotableAlumni";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";

function App() {
    const [userData, setUserData] = useState(null);
    const [user,setUser]=useState(localStorage.getItem("token"))
    console.log(user);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserData(null);
        setUser(null);
    };

    return (
        <>
            <Routes>
                {!user && <Route path="/" element={<HomePage />} />}
                {!user && <Route path="/signup" element={<Signup />} />}
                {!user && <Route path="/login" element={<Login onUserData={setUser}/>} />}
                {!user && <Route path="/Chapters" element={<Chapters />} />}
                {!user && <Route path="/CeoMessage" element={<CeoMessage />} />}
                {!user && <Route path="/Jobs" element={<Jobs />} />}
                {!user && <Route path="/EventsPage" element={<EventsPage />} />}
                {!user && <Route path="/NotableAlumni" element={<NotableAlumni />} />}
                {!user && <Route path="/AboutUs" element={<AboutUs />} />}
                {!user && <Route path="/Contactus" element={<ContactUs />} />}
                
                {user && <Route path="/" element={<HomePage token={user}/>} />}
                {user && <Route path="/profile" element={<Profile onLogout={handleLogout} />} />}
                {user && <Route path="/Chapters" element={<Chapters />} />}
                {user && <Route path="/CeoMessage" element={<CeoMessage />} />}
                {user && <Route path="/Jobs" element={<Jobs />} />}
                {user && <Route path="/EventsPage" element={<EventsPage />} />}
                {user && <Route path="/NotableAlumni" element={<NotableAlumni />} />}
                {user && <Route path="/AboutUs" element={<AboutUs />} />}
                {user && <Route path="/Contactus" element={<ContactUs />} />}
            </Routes>
        </>
    );
}

export default App;
