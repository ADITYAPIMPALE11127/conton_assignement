import React, { useState } from 'react';
import data from '../data/data.json';
import './SectionNavigation.css';
import S1Image from '../assets/S1.jpg';
import P1Image from '../assets/P1.png';
import TNP1Image from '../assets/TNP-1.png';
import TNP2Image from '../assets/TNP-2.jpeg';
import TNP3Image from '../assets/TNP-3.jpeg';
import TNP4Image from '../assets/TNP-4.png';
import TNP5Image from '../assets/TNP-5.jpeg';
import TNP6Image from '../assets/TNP-6.jpeg';
import TNP7Image from '../assets/TNP-7.jpeg';
import TNP8Image from '../assets/TNP-8.jpeg';
import TNP9Image from '../assets/TNP-9.jpeg';

const SectionNavigation = () => {
    const [currentSection, setCurrentSection] = useState('staff');

    const renderStaffSection = () => (
        <div className="card mb-3">
            <img src={S1Image} alt={data.staff_person.name} className="card-img-top" style={{ width: '400px', height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{data.staff_person.name}</h5>
                <p className="card-text">Position: {data.staff_person.position}</p>
                <p className="card-text">Employee ID: {data.staff_person.Employee_ID}</p>
                <p className="card-text">Date of Joining: {data.staff_person.Date_of_joining}</p>
                <p className="card-text">Nature of Association: {data.staff_person.Nature_of_Association}</p>
            </div>
        </div>
    );

    const renderPlacementSection = () => (
        <div className="card mb-3">
            <img src={P1Image} alt={data.Vice_Principal.name} className="card-img-top" style={{ width: '400px', height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{data.Vice_Principal.name}</h5>
                <p className="card-text">Position: {data.Vice_Principal.position}</p>
                <p className="card-text">Phone: {data.Vice_Principal.Phone}</p>
                <p className="card-text">Mobile: {data.Vice_Principal.Mobile}</p>
                <p className="card-text">Email: {data.Vice_Principal.Email}</p>
            </div>

            <div className="card-body">
                <div className="row">
                    {data.TIP_Members.map((member, index) => {
                        const images = [
                            TNP1Image, TNP2Image, TNP3Image, TNP4Image, TNP5Image,
                            TNP6Image, TNP7Image, TNP8Image, TNP9Image
                        ];
                        return (
                            <div key={member.name} className="col-md-4 mb-3">
                                <div className="card">
                                    <img src={images[index]} alt={member.name} className="card-img-top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">{member.name}</h6>
                                        <p className="card-text">Department: {member.Department}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="section-navigation mb-4">
                <button className="btn btn-primary" onClick={() => setCurrentSection('staff')}>Staff</button>
                <button className="btn btn-primary" onClick={() => setCurrentSection('placement')}>Placement TnP Team</button>
            </div>
            {currentSection === 'staff' ? renderStaffSection() : renderPlacementSection()}
        </div>
    );
};

export default SectionNavigation;
