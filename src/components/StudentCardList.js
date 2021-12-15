import React from "react";
import Flashcard from "../components/StudentCard";
import { Box } from "@mui/material";

const style = {
    root: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "110px",
        marginRight: '30px',
        flexWrap: 'wrap',
        paddingBottom: 2,
    },
}

export default function StudentCardList({ students }) {
    return (
        <Box sx={style.root}>

            {students.map((student) => {
                if (student.id < 5) {
                    return <Flashcard student={student} key={student.id} />
                } else
                    return null;
            })}
        </Box>
    )
}