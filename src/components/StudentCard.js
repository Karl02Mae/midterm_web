import React, {useState} from "react";
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Link, 
    Typography, 
    Grid, 
    Avatar, 
    IconButton, 
    Rating,
} from "@mui/material";

const style = {
    root: {
        display: "flex",
        marginTop: "5px",
        flexDirection: "column",
        backgroundColor: "#1E1F20",
        alignItems: "center",
        height: "120px",
        width: "250px",
        color: "white",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "10px",
        border: "2px solid #282828",
        justifyContent: "center",
        marginLeft: "15px",
        marginRight: "15px",
    },
    name: {
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
    },

}

export default function StudentCard({studentcard}) {
    const [value, setValue] = useState("");
    return (
        <Box sx={style.root}>
            <Typography sx={style.name}>{studentcard.name}</Typography>
            <Typography>35 review</Typography>
            <Typography component="legend"></Typography>
            <Rating name="totalRate"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
        </Box>
    );
}
