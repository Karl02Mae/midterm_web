import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

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
        paddingLeft: 4.5,
        paddingTop: 3,
        paddingBottom: 5,
        marginRight: 'auto',
    },
    textTopStudent: {
        color: '#D1D4C9',
        fontSize: "18px",
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginLeft: 15,
        marginBottom: 2,
    },

    // ****** STUDENT LIST ******

    studentListContainer: {

    },
}

export default function Home() {
    //const [studentcards, setStudentcards] = useState(STUDENT_INFO);
    const [students, setStudents] = useState([]);
    const usersCollectionRef = collection(db, "students");
    useEffect(() => {
        const getStudent = async () => {
            const data = await getDocs(usersCollectionRef);
            setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getStudent();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <Box sx={style.root}>

            <Helmet>
                <title>Student Review - Student List </title>
                <meta
                    name="description"
                    content="You're currently viewing the Student List page."
                    data-react-helmet="true"
                />
                <meta
                    property="og:description"
                    content="You're currently viewing the Student Evaluation page."
                    data-react-helmet="true"
                />
                <meta
                    name="keywords"
                    content="Student Review, Feedback, Student List"
                    data-react-helmet="true"
                />
                <meta
                    property="og:title"
                    content="Student Review-Student List"
                    data-react-helmet="true"
                />
            </Helmet>

            <center><Box sx={style.topStudentContainer}>
                <Typography sx={style.textTopStudent}> Top Student </Typography>
                <StudentCardList students={students} />
            </Box></center>
            <center><Box>
                <StudentList students={students} />
            </Box></center>


        </Box>

    )
}


