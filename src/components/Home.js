import React, { useState } from 'react';
import {
    Box,
    Typography
} from '@mui/material';

// import Header from "../components/Header";
import StudentCardList from "../components/StudentCardList";
import StudentList from './StudentList';

// Icons
// import SearchIcon from '@mui/icons-material/Search';

// SVG Icons
// import {ReactComponent as GridIcon} from "../assets/svg/Grid.svg";
// import {ReactComponent as ProfileIcon} from "../assets/svg/Profile.svg";


const style = {
    root: {
        backgroundColor: "#131414",
        fontFamily: "Roboto",
        paddingLeft: 5,
        height: '200vh',
    },

    // ****** TOP STUDENT ******
    topStudentContainer: {
        paddingLeft: 11,
        paddingTop: 3,
        paddingBottom: 5,
        marginLeft: 4,
        marginRight: 'auto',
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
    const [studentcards, setStudentcards] = useState(TOP_STUDENT_CARDS);
    const [fullStudentCards, setFullStudentCards] = useState(FULL_STUDENT_CARDS);
    console.log(setStudentcards);
    console.log(setFullStudentCards);
    return (
        <Box sx={style.root}>
            {/* <Header /> */}
            <Box sx={style.topStudentContainer}>
                <Typography sx={style.textTopStudent}> Top Student </Typography>
                <StudentCardList studentcards={studentcards} />
            </Box>

            <Box sx={style.studentListContainer}>

            </Box>

            <Box>
                <StudentList fullStudentCards={fullStudentCards} />
            </Box>


        </Box>

    )
}

const TOP_STUDENT_CARDS = [
    {
        id: 1,
        img: '../assets/img/aldrin.png',
        name: 'Karl Samelo',
        Gender: 'Male',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 2,
        name: 'Sara Patatas',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 3,
        name: 'Arriane Baredo',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 4,
        name: 'Junnie Adriano',
        Gender: 'Male',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
]

const FULL_STUDENT_CARDS = [
    {
        id: 1,
        img: '../assets/img/aldrin.png',
        name: 'Karl Samelo',
        YnS: 'BSIT - 4A',
        Gender: 'Male',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 2,
        name: 'Sara Patatas',
        YnS: 'BSIT - 4A',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 3,
        name: 'Arriane Baredo',
        YnS: 'BSIT - 4A',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 4,
        name: 'Junnie Adriano',
        YnS: 'BSIT - 4A',
        Gender: 'Male',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
    {
        id: 5,
        name: 'Russel May Limas',
        YnS: 'BSIT - 4A',
        Gender: 'Female',
        Birthday: '',
        Address: '',
        Nickname: '',
        Skills: '',
        Reviews: 0,
    },
]