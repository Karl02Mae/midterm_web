import React from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
} from '@mui/material';
import StudentListCard from './StudentListCard';

const style = {
    root: {
        display: 'flex',
    },
    sortFilt: {
        display: 'flex',
        position: 'absolute',
        right: 0,
        marginRight: '240px',
    },
    sortCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 3,
    },
    sortText: {
        display: 'flex',
        color: 'white',
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        paddingRight: 1,
    },
    sortSelect: {
        display: 'flex',
        color: 'white',
        borderRadius: 2,
        border: "2px solid #282828",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        height: '34px',
        width: '130px',
    },
    filterCont: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 3,
    },
    filterText: {
        display: 'flex',
        color: 'white',
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        paddingRight: 1,
    },
    filterSelect: {
        display: 'flex',
        color: 'white',
        borderRadius: 2,
        border: "2px solid #282828",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        height: '34px',
        width: '100px',
    },
    StudentListContainer: {
        marginTop: 15,
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 74,
        paddingBottom: 3,
    },
    labelYnS: {
        fontWeight: '400',
        fontSize: '14px',
        color: '#62666D',
    },
    labelReviews: {
        paddingLeft: 10,
        fontWeight: '400',
        fontSize: '14px',
        color: '#62666D',
    },
    labelRatings: {
        paddingLeft: 15,
        fontWeight: '400',
        fontSize: '14px',
        color: '#62666D',
    }
}

export default function StudentList({ fullStudentCards }) {
    return (
        <Box sx={style.root}>
            <Box sx={style.sortFilt}>
                <Box sx={style.sortCont} >
                    <Typography sx={style.sortText}>Sort by:</Typography>
                    <Select sx={style.sortSelect}
                        labelId='sortBy'
                        id='sortBy'
                        placeholder='Most Recent'
                        onChange={''}
                        value='Most Recent'
                    >
                        <MenuItem value='Most Recent'>Most Recent</MenuItem>
                        <MenuItem value='Name'>Name</MenuItem>
                    </Select>
                </Box>

                <Box sx={style.filterCont} >
                    <Typography sx={style.filterText}>Filter by: </Typography>
                    <Select sx={style.filterSelect}
                        labelId='filterBy'
                        id='filterBy'
                        value='No Filter'
                    >
                        <MenuItem value='No Filter'>No Filter</MenuItem>
                    </Select>
                </Box>
            </Box>

            <Box sx={style.StudentListContainer}>
                <Box sx={style.label}>
                    <Typography sx={style.labelYnS}>Year and Section</Typography>
                    <Typography sx={style.labelReviews}>Reviews</Typography>
                    <Typography sx={style.labelRatings}>Ratings</Typography>
                </Box>
                {fullStudentCards.map(fullStudentCards => {
                    return <StudentListCard fullStudentCards={fullStudentCards} key={fullStudentCards.id} />
                })}
            </Box>
        </Box>
    )
}
