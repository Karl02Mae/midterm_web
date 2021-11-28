import React from "react";
import Flashcard from "../components/StudentCard";
import {Box} from "@mui/material";

const style = {
    root: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "50px",
    },
}

export default function StudentCardList({studentcards}) {
    return (
        <Box sx={style.root}>
            {studentcards.map(studentcard => {
                return <Flashcard studentcard={studentcard} key={studentcard.id} />
            })}
        </Box>
    )
}