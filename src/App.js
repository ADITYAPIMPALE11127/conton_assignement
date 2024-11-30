import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import IEERegistration from './components/registerForm';
import SectionNavigation from './components/SectionNavigation';
import Events from './components/Events';
import GuestList from './components/GuestList'; 
import Blog from './components/Blog'; // Import Blog component

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Navbar2 />
                <div className="navigation-buttons">
                    <Link to="/events">
                        <button className="navigate-button">View Events</button>
                    </Link>
                    <Link to="/registration">
                        <button className="navigate-button">Register for IEE</button>
                    </Link>
                    <Link to="/blog"> {/* Add Link to Blog */}
                        <button className="navigate-button">Event Report Blog</button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<SectionNavigation />} />
                    <Route path="/registration" element={<IEERegistration />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/guest-list" element={<GuestList />} />
                    <Route path="/blog" element={<Blog />} /> {/* New route for Blog */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
