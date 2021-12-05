import React, { useState } from "react";
import { ReactComponent as RoundedAvatar } from '../assets/svg/RoundProfile.svg';
import {
    Box,
    Typography,
    Rating,
    Avatar,
} from "@mui/material";

const style = {
    root: {
        display: "flex",
        marginTop: "5px",
        flexDirection: "row",
        backgroundColor: "#1E1F20",
        alignItems: "center",
        height: "111px",
        width: "201px",
        color: '#D1D4C9',
        marginLeft: "14px",
        marginRight: "14px",
        borderRadius: "10px",
        border: "2px solid #282828",
        justifyContent: "center",
        boxShadow: 5,
    },
    name: {
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
    },
    avatar: {
        marginRight: "10px",
    }

}

export default function StudentCard({ studentcard }) {
    const [value, setValue] = useState(0);
    return (
        <Box sx={style.root}>
            <Box sx={style.left}>
                <Avatar sx={style.avatar} variant="rounded">
                    <RoundedAvatar />
                </Avatar>
            </Box>
            <Box sx={style.right}>
                <Typography sx={style.name}>{studentcard.name}</Typography>
                <Typography>{studentcard.reviews} reviews</Typography>
                <Typography component="legend"></Typography>
                <Rating name="totalRate"
                    value={studentcard.rating}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{color: "#26CE8D"}}
                    precision={0.5}
                />
            </Box>
        </Box>
    );
}
