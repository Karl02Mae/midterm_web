import React from 'react';
import './TopStudents.css';


import TopStudentCard from './TopStudentCard';

function TopStudents() {
    return (
        <div className="topStudents__container">
            <div className="topStudents__Title">
                <h2>Top Students</h2>
            </div>
            <div className="topStudents__cardContainer">
                <TopStudentCard />
                <TopStudentCard />
                <TopStudentCard />
                <TopStudentCard />
            </div>
        </div>
    )
}

export default TopStudents
