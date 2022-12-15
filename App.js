import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import BoardMembers from "./pages/BoardMembers";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from './pages/AboutUs';
import OurPartners from "./pages/OurPartners";
import Events from "./pages/Events";
import Upcoming from "./pages/Upcoming";
import Facilitators from './pages/Facilitators';
import Workshop from './pages/Workshop';
import DigitalMarketing from './pages/DigitalMarketing';
import News from "./pages/News";
import NewsDaily from './pages/NewsDaily'
import NewsLetter from './pages/NewsLetter'
import PhotoGallery from './pages/PhotoGallery'
import VideoGallery from './pages/VideoGallery'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Jobs from './pages/Jobs'
import GetNews from "./pages/GetNews";
import GetJob from "./pages/GetJob";
import { Toaster } from 'react-hot-toast';
import Advert from "./components/Advert";
import SocialBanner from "./components/SocialBanner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialBanner/>
      <div className="Everything">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/board" element={<BoardMembers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/facilitators" element={<Facilitators />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdaily" element={<NewsDaily />} />
          <Route path="/newsletters" element={<NewsLetter />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news/:newsId" element={<GetNews />} />
          <Route path="/jobs/:jobId" element={<GetJob />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer/>
      <Advert/>
      <div className="bar"></div>
      <Toaster position="bottom-right"/>
    </div>
  );
}

export default App;
