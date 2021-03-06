import React, { useState } from 'react';
import {
    Box,
    Typography,
    Rating,
    Select,
    MenuItem
} from '@mui/material';
import { Helmet } from 'react-helmet';

import IndividualStudent from './IndividualStudent';
import CommentBox from './CommentBox';
import RatingBox from './RatingBox';

const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: '#D1D4C9',
        // height: '300vh',
        backgroundColor: "#131414",
        fontFamily: 'roboto',
        paddingLeft: 5,
        paddingRight: 5,
    },
    addRating: {
        marginTop: 5,
        marginLeft: 73,
    },
    addYourRating: {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '24px',
    },
    sortfiltContainer: {
        display: 'flex',
        alignItems: 'center',
        float: 'right',
        marginRight: '175px',
        marginTop: 5,
        marginBottom: 3,
    },
    sortSelect: {
        display: 'flex',
        color: '#D1D4C9',
        borderRadius: 2,
        border: "2px solid #282828",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        height: '34px',
        width: '100px',
        maxWidth: '124px',
        marginLeft: 2,
    },
    filtSelect: {
        display: 'flex',
        color: '#D1D4C9',
        borderRadius: 2,
        border: "2px solid #282828",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        height: '34px',
        width: '100px',
        maxWidth: '124px',
        marginLeft: 2,
    },
    sortText: {
        fontSize: '12px',
        fontWeight: '500',
    },
    filtText: {
        marginLeft: 3,
        fontSize: '12px',
        fontWeight: '500',
    },
}

export default function IndividualStudentList() {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);

    return (
        <Box sx={style.root}>

            <Helmet>
                <title>Student Review - Student Evaluation </title>
                <meta
                    name="description"
                    content="You're currently viewing the Student Evaluation page."
                    data-react-helmet="true"
                />
                <meta
                    property="og:description"
                    content="You're currently viewing the Student Evaluation page."
                    data-react-helmet="true"
                />
                <meta
                    name="keywords"
                    content="Student Evaluation, Ratings, Comments"
                    data-react-helmet="true"
                />
                <meta
                    property="og:title"
                    content="Student Review-Student Evaluation"
                    data-react-helmet="true"
                />
            </Helmet>

            <Box sx={style.top}>
                <IndividualStudent />
            </Box>
            <Box sx={style.addRating}>
                <Typography sx={style.addYourRating}>
                    Add your rating
                </Typography>
                <Box onClick={() => setShow(true)}>
                    <Rating
                        readOnly
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{ color: "#26CE8D" }}
                    />
                </Box>
                
            </Box>
            <RatingBox onClose={() => setShow(false)} show={show} />
            <Box sx={style.commentSection}>
                <Box sx={style.sortfiltContainer}>
                    <Typography sx={style.sortText}>
                        Sort by:
                    </Typography>
                    <Select sx={style.sortSelect}
                        labelId="sortSelect"
                        id="sortSelect"
                        value='Name'
                        label="Sort By"
                        onChange=''
                    >
                        <MenuItem value='Name'>Name</MenuItem>
                        <MenuItem value='YnS'>Year and Section</MenuItem>
                        <MenuItem value='Rating'>Rating</MenuItem>
                    </Select>
                    <Typography sx={style.filtText}>
                        Filter by:
                    </Typography>
                    <Select sx={style.filtSelect}
                        labelId="filtSelect"
                        id="filtSelect"
                        value='NoFilter'
                        label="Filter By"
                        onChange=''
                    >
                        <MenuItem value='NoFilter'>No Filter</MenuItem>
                        <MenuItem value='YnS'>Year and Section</MenuItem>
                        <MenuItem value='Rating'>Rating</MenuItem>
                    </Select>
                </Box>
                <CommentBox />
            </Box>
        </Box>
    )
}