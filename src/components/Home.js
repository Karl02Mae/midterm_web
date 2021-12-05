import React, { useState } from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import { Helmet } from 'react-helmet';

import StudentCardList from "../components/StudentCardList";
import StudentList from './StudentList';

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
        color: '#D1D4C9',
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
    const [studentcards, setStudentcards] = useState(STUDENT_INFO);
    const [fullStudentCards, setFullStudentCards] = useState(STUDENT_INFOS);
    console.log(setStudentcards);
    console.log(setFullStudentCards);
    return (
        <Box sx={style.root}>

            <Helmet>
                <title>Student Review - Student List </title>
                <meta
                    name="description"
                    content="You're currently viewing the Student List page."
                />
                <meta
                    name="og:description"
                    content="You're currently viewing the Student Evaluation page."
                />
                <meta
                    name="keywords"
                    content="Student Review, Feedback, Student List"
                />
                <meta
                    property="og:title"
                    content="Student Review-Student List"
                />
            </Helmet>

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


const STUDENT_INFOS = [

    {
        id: 1,
        name: 'Karl Samelo',
        gender: 'Male',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        reviews: 35,
    },
    {
        id: 2,
        name: 'Sara Patatas',
        gender: 'Female',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        reviews: 36,
    },
    {
        id: 3,
        name: 'Arriane Baredo',
        gender: 'Female',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        reviews: 33,
    },
    {
        id: 4,
        name: 'Junnie Adriano',
        gender: 'Male',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        reviews: 45,
    },
    {
        id: 5,
        name: 'Mae Limas',
        gender: 'Female',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        reviews: 38,
    },
]

const STUDENT_INFO = [

    {
        id: 1,
        name: 'Karl Samelo',
        gender: 'Male',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        rating: 3.5,
        reviews: 25,
    },
    {
        id: 2,
        name: 'Junnie Adriano',
        gender: 'Male',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        rating: 4.5,
        reviews: 30,

    },
    {
        id: 3,
        name: 'Arriane Baredo',
        gender: 'Female',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        rating: 3.0,
        reviews: 22,
    },
    {
        id: 4,
        name: 'Sara Patatas',
        gender: 'Female',
        birthday: '',
        address: '',
        nickname: '',
        skills: '',
        rating: 3.0,
        reviews: 20,
    },
]