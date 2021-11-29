import React from "react";
import Flashcard from "../components/StudentCard";
import { Box } from "@mui/material";

const style = {
    root: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "30px",
        marginRight: '30px',
        flexWrap: 'wrap',
        paddingBottom: 2,
    },
}

export default function StudentCardList({ studentcards }) {
    return (
        <Box sx={style.root}>
            {studentcards.map(studentcard => {
                return <Flashcard studentcard={studentcard} key={studentcard.id} />
            })}
        </Box>
    )
}