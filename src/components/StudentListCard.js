import React, { useState } from 'react';
import { ReactComponent as RoundedAvatar } from '../assets/svg/RoundProfile.svg';
import {
    Box,
    Typography,
    Rating,
    Avatar,
} from "@mui/material";

const style = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#D1D4C9',
        border: "2px solid #282828",
        borderRadius: '10px',
        backgroundColor: "#1E1F20",
        boxShadow: 5,
        marginBottom: 2,
        height: '64px',
        width: '906px',
        alignItems: 'center',
        marginLeft: 20,
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
        paddingLeft: 1,
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

export default function StudentListCard({ fullStudentCards }) {
    const [value, setValue] = useState(0);
    return (
        <Box sx={style.root}>
            <Box sx={style.left}>
                <Typography sx={style.numbering}>{fullStudentCards.id}</Typography>
                <Box sx={style.avatarCont}>
                    <Avatar sx={style.avatar} variant="rounded">
                        <RoundedAvatar />
                    </Avatar>
                </Box>
                <Typography sx={style.name}>{fullStudentCards.name}</Typography>
            </Box>
            <Box sx={style.right}>
                <Typography sx={style.YnS}>{fullStudentCards.YnS}</Typography>
                <Typography sx={style.reviews}>{fullStudentCards.Reviews}</Typography>
                <Rating sx={style.ratings} name="totalRate"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
        </Box>
    );
}
