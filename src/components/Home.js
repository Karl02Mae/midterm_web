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

import Header from "../components/Header";
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

// ****** TOP STUDENT ******
    topStudentContainer: {
        padding: 5,
    },
    textTopStudent: {
        color: "white",
        fontSize: "18px",
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginLeft: 7.5,
        marginBottom: 2,
    },

// ****** STUDENT LIST ******

    studentListContainer: {
        
    },
}

export default function Home() {
    const [studentcards, setStudentcards] = useState(STUDENT_CARDS);
    return (
        <Box sx={style.root}>
            <Header />
            <Box sx={style.topStudentContainer}>
                <Typography sx={style.textTopStudent}> Top Student </Typography>
                <StudentCardList studentcards={studentcards} />
            </Box>

            <Box sx={style.studentListContainer}>

            </Box>
            
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
