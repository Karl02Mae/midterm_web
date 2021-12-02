import React from 'react';
import {
    Box,
    // Typography
} from '@mui/material';

import IndividualStudent from './IndividualStudent';

const style = {
    root: {
        height: '200vh',
        backgroundColor: "#131414",
        fontFamily: 'roboto',
        paddingLeft: 5,
        paddingRight: 5,
    },
}

export default function IndividualStudentList() {
    return (
        <Box sx={style.root}>
            <Box sx={style.top}>
                <IndividualStudent />
            </Box>
            <Box sx={style.bottom}>

            </Box>
        </Box>
    )
}
