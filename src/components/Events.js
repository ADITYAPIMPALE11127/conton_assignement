import React from 'react';
import './Event.css'; 
import oathTakingImage from '../assets/oath-taking-ceremony.jpg'; 
import companyFocusImage from '../assets/company-focus.jpg';
import engineersDayImage from '../assets/engineers-day.jpg';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className="events-container">
            <h2 className="events-title">Events Section</h2>


            <div className="event-card">
                <img src={oathTakingImage} alt="Oath Taking Ceremony" className="event-image" />
                <div className="event-details">
                    <h3>Oath Taking Ceremony</h3>
                    <p>Induction Program of MCA - 1st Semester 2024 Batch</p>
                </div>
            </div>

            <div className="event-card zoom-in">
                <img src={companyFocusImage} alt="Company in Focus" className="event-image" />
                <div className="event-details">
                    <h3>Company in Focus</h3>
                    <p>Explore the latest trends and innovations from leading companies.</p>
                </div>
            </div>
            <div className="event-card">
                <img src={engineersDayImage} alt="Engineers Day Paper Presentation" className="event-image" />
                <div className="event-details">
                    <h3>Engineers Day Paper Presentation 2024</h3>
                    <p>Date: September 15, 2024</p>
                    <p>Time: 10:00 AM - 4:00 PM</p>
                    <p>Registration List: Available at the venue.</p>
                    <p>Description: Join us to celebrate Engineers Day with innovative presentations from students.</p>
                </div>
            </div>
            <div className="event-card">
                <h3>Guest List</h3>
                <p>Check the guest list by the following link: 
                    <Link to="/guest-list">
                        <span className="view-guest-list"> View Guest List</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Events;
