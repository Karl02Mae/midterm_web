import React from "react";
import Flashcard from "../components/StudentCard";
import {Box} from "@mui/material";


export default function StudentCardList({studentcards}) {
    return (
        <Box className="card-grid">
            {studentcards.map(studentcard => {
                return <Flashcard studentcard={studentcard} key={studentcard.id} />
            })}
        </Box>
    )
}