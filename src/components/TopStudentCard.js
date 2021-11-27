import { Typography } from '@mui/material'
import React, { useState } from 'react';
import { Rating } from '@mui/material';
import './TopStudentCard.css';

function TopStudentCard() {
    const [value, setValue] = useState("");

    return (
        <div className="topStudentCard__container">
            <h3 className="topStudentCard__name">Karl Samelo</h3>
            <img className="topStudentCard__profile" src="" alt="studentprofile" />
            <p className="topStudentCard__reviews">30 reviews</p>
            <div className="topStudentCard__rating__container">
                <Typography component="legend"></Typography>
                <Rating name="totalRate"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
        </div>
    )
}

export default TopStudentCard
