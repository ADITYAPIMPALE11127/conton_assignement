import React from 'react';
import './GuestList.css'; 


import guestImage1 from '../assets/TNP-2.jpeg';
import guestImage2 from '../assets/TNP-3.jpeg'; 
import guestImage3 from '../assets/TNP-5.jpeg'; 

const GuestList = () => {
    return (
        <div className="guest-list-container">
            <h2>Guest List</h2>
            <p>Here are some images related to the guest list:</p>
            <div className="guest-images">
                <div className="guest-item">
                    <img src={guestImage1} alt="Dr. Manish Kumar" className="guest-image" />
                    <p style={{marginTop:20,fontWeight:500}}>Dr. Manish Kumar</p>
                </div>
                <div className="guest-item">
                    <img src={guestImage2} alt="Dr. Judith Nagar" className="guest-image" />
                    <p style={{marginTop:20,fontWeight:500}}>Dr. Judith Nagar</p>
                </div>
                <div className="guest-item">
                    <img src={guestImage3} alt="Mr. Revati Raman Dewangan" className="guest-image" />
                    <p style={{marginTop:20,fontWeight:500}}>Mr. Revati Raman Dewangan</p>
                </div>
            </div>
        </div>
    );
};

export default GuestList;
