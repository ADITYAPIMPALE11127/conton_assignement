import React from 'react';
import './Blog.css'; // Add appropriate CSS styling
import heroImage from '../assets/hero-image.webp'; // Replace with actual hero image path
import { FaCalendarAlt, FaInfoCircle } from 'react-icons/fa'; // Import icons for better visuals


const BlogPage = () => {
    return (
        <div className="blog-page">
            {/* Hero Section */}
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>Bhilai Institute of Technology</h1>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
                <h2>About BIT</h2>
                <p>
                    37 years ago, few stalwarts in the public domain transformed their spirited vision 
                    and dream to reality in the shape of Bhilai Institute of Technology in the loving memory 
                    of Seth Balkrishan, a renowned philanthropist of the region. Fired with the zeal of promoting 
                    the cause of technical education, the college was set up at Durg under the benign auspices of 
                    the Bhilai Institute of Technology Trust in 1986. BIT, set up as the first self-financed Engineering 
                    College in the erstwhile Madhya Pradesh has now shaped as one of the most sought after professional 
                    institutes in the central region. BIT is standing tall and steadfast in its commitment to provide 
                    qualitative education for the students.
                </p>
            </div>

            {/* Events Section */}
            <div className="events-section">
                <h2>Upcoming Events</h2>
                <div className="event-card">
                    <h3><FaCalendarAlt /> Engineers Day Paper Presentation 2024</h3>
                    <p><strong>Date:</strong> September 15, 2024</p>
                    <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
                    <p><strong>Description:</strong> Join us to celebrate Engineers Day with innovative presentations from students.</p>
                    <button className="event-button">Learn More <FaInfoCircle /></button>
                </div>
                {/* Add more event cards as needed */}
            </div>
        </div>
    );
};

export default BlogPage;
