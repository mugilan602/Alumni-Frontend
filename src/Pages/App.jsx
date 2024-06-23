import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Profile from "./Profile/Profile";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ChaptersPage from "./Chapters/Chapters";
import CeoMessagePage from "./CeoMessage/CeoMessage";
import JobsPage from "./Jobs/Jobs";
import EventsPage from "./EventsPage/EventsPage";
import NotableAlumniPage from "./NotableAlumni/NotableAlumni";
import AboutUsPage from "./AboutUs/AboutUs";
import ContactUsPage from "./ContactUs/ContactUs";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/ceomessage" element={<CeoMessagePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/eventspage" element={<EventsPage />} />
            <Route path="/notablealumni" element={<NotableAlumniPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
    );
}

export default App;
