import React, { useState } from 'react';
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Link, 
    Typography, 
    Grid, 
    Avatar, 
    IconButton, 
    Rating
} from '@mui/material';
import StudentCardList from "../components/StudentCardList";

// Icons
import SearchIcon from '@mui/icons-material/Search';

// SVG Icons
import {ReactComponent as GridIcon} from "../assets/svg/Grid.svg";
import {ReactComponent as ProfileIcon} from "../assets/svg/Profile.svg";


const style = {
    root: {
        backgroundColor: "#131414",
        fontFamily: "Roboto",
    },

// ****** HEADER ******
    textHeader: {
        paddingRight: "20px",
        fontSize: "23px",
        fontWeight: 700, 
    },
    tabReview: {
        color: "white",
        fontWeight: 600,
        fontSize: "14px",
        marginLeft: 5,
        "&:hover": {
            color: "#26CE8D",
        },
    },
    search: {
        background: "#131414",
        border: "1px solid #2C2F31",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: 150,
    },

// ****** TOP STUDENT ******
    studentCardTop: {
        display: "inline",
    },
}

export default function Home() {
    const [studentcards, setStudentcards] = useState(STUDENT_CARDS);
    return (
        <Box sx={style.root}>
            <AppBar position="static" sx={{backgroundColor: "#1E1F20"}}>
                <Toolbar sx={{padding: 1}}>
                    <Typography sx={style.textHeader}> Student Review </Typography>

                    <GridIcon style={{height: 20, width: 30, marginRight: 75}}/>

                    <Link href="#" underline="none">
                        <Typography sx={style.tabReview}> Student List </Typography>
                    </Link>
                    <Link href="#" underline="none">
                        <Typography sx={style.tabReview}> Student Evaluation </Typography>
                    </Link>
                    <Link href="#" underline="none">
                        <Typography sx={style.tabReview}> Blog </Typography>
                    </Link>
                    <ProfileIcon style={{height: 20, width: 30, marginLeft: 120}}/>
                    <Box sx={style.search}>
                        <SearchIcon  style={{height: 20, width: 30, marginTop: 5,}} />
                    </Box>
                </Toolbar>
            </AppBar>
            <StudentCardList sx={style.studentCardTop} studentcards={studentcards} />
        </Box>
    )
}

const STUDENT_CARDS = [
    {
        id: 1,
        img: '../assets/img/aldrin.png',
        name: 'Karl Samelo',
        Gender: 'Male',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
    },
    {
        id: 1,
        name: 'Sara Patatas',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
    },
    {
        id: 1,
        name: 'Arriane Baredo',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
    },
    {
        id: 1,
        name: 'Junnie Adriano',
        Gender: 'Male',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
    },
]
