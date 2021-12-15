import React, { useState } from 'react';
import { ReactComponent as RoundedAvatar } from '../assets/svg/RoundProfile.svg';
import aldrin from "../assets/img/aldrin.png";
import {
    Box,
    Typography,
    Rating,
    Avatar,
} from "@mui/material";
import {Link} from "react-router-dom";

const style = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        color: '#D1D4C9',
        border: "2px solid #282828",
        borderRadius: '10px',
        backgroundColor: "#1E1F20",
        boxShadow: 5,
        marginBottom: 2,
        alignItems: 'center',
        padding: '10px',
        width: '870px'
    },
    numbering: {
        paddingLeft: 5,
        color: '#62666D',
        font: 'roboto',
        fontWeight: '500',
        fontSize: '12px',
    },
    name: {
        fontSize: '18px',
        fontWeight: '400',
        paddingLeft: 2,
        color: "white",
        textDecoration: "none",
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
    },
    ratings: {
        paddingRight: 3,
        size: 'large',
        color: "#26CE8D"
    },
    reviews: {
        paddingRight: 3,
    },
    YnS: {
        paddingRight: 3,
        color: '#62666D',
    },
    avatarCont: {
        paddingLeft: 3,
        height: '37.33px',
        width: '37.33px',
    },
    avatar: {
        height: '37.33px',
        width: '37.33px',
    }
}

export default function StudentListCard({ student }) {
    const [value, setValue] = useState(0);
    
    if (window.innerWidth > 800) {
        return (
            <Box sx={style.root}>
                <Box sx={style.left}>
                    <Typography sx={style.numbering}>{student.id}</Typography>
                    <Box sx={style.avatarCont}>
                        <Avatar sx={style.avatar} variant="rounded">
                            <img src={student.img} height="38px" width="38px" />
                        </Avatar>
                    </Box>
                    <Link to={{
                        pathname: `/studentevaluation/${student.id}`,
                        state: { ...student }
                    }} style={{ textDecoration: 'none' }}>
                        <Typography sx={style.name} >{student.name}</Typography>
                    </Link>
                </Box>
                <Box sx={style.right}>
                    <Typography sx={style.YnS}>{student.yns}</Typography>
                    <Typography sx={style.reviews}>{student.reviews}</Typography>
                    <Rating sx={style.ratings} name="totalRate"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        readOnly
                    />
                </Box>
            </Box>
        );
    } else if (window.innerWidth <= 800) {
        return (
            <h1>TRY</h1>
        );
    }
}
