import React, { useState, useEffect } from 'react';
import { ReactComponent as RoundedAvatar } from '../assets/svg/RoundProfile.svg';
import {
    Box,
    Typography,
    Avatar,
    Rating
} from '@mui/material';
import { useParams } from "react-router-dom";
import { db } from '../utils/firebase';


const style = {
    root: {
        display: 'flex',
        color: '#D1D4C9',
        backgroundColor: '#1E1F20',
        border: '1px solid #303336',
        borderRadius: '10px',
        maxWidth: '916px',
        height: '260px',
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-around',
    },
    stud__Profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
    },
    stud__Profile__text: {
        display: 'flex',
        alignItems: 'center',
    },
    stud__Profile__text__Rating: {
        fontSize: '12px',
        fontWeight: '500',
        padding: 0.5,
    },
    stud__Profile__text__Reviews: {
        fontSize: '12px',
        fontWeight: '500',
        padding: 0.5,
    },
    stud__Details__name: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2,
    },
    stud__Details__nameText: {
        fontSize: '24px',
        fontWeight: '400',
    },
    stud__Details__section: {
        fontSize: '12px',
        fontWeight: '400',
    },
    stud__Details__Details: {
        display: 'flex',
    },
    stud__Details__left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
    },
    stud__Details__middle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'right',
    },
    stud__Details__text: {
        fontSize: '12px',
        fontWeight: '400',
        paddingBottom: 1,
    },
    data: {
        color: '#D1D4C9',
        fontSize: '12px',
        fontWeight: '400',
        paddingBottom: 1,
    },
    stud__Details__right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        textAlign: 'left',
        paddingLeft: 10,
    },
    right__text__text: {
        color: '#D1D4C9',
        fontSize: '12px',
        fontWeight: '400',
        paddingBottom: 1,
    },
    stud__Details__SocialMedia: {
        display: 'flex',
    },
    Social: {
        paddingTop: 2,
        paddingRight: 3,
        fontSize: '12px',
        fontWeight: '400',
        paddingBottom: 1,
    },
    avatar: {
        height: '100px',
        width: '100px',
        marginBottom: 1,
    },
    avatarInner: {
        height: '95px',
        width: '95px',
    }
}

export default function IndividualStudent() {
    const [value, setValue] = useState(0);
    const [students, setStudents] = useState('');
    const { id } = useParams();

    db.collection('students').doc(id).get().then(snapshot => setStudents(snapshot.data()));

    return (
        <Box sx={style.root} >
            <Box sx={style.stud__Profile} >
                <Avatar sx={style.avatar} variant="rounded">
                    <RoundedAvatar sx={style.avatarInner} />
                </Avatar>
                <Rating name="totalRate"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Box sx={style.stud__Profile__text}>
                    {/* value at the bottom should be replaced by Data from array */}
                    <Typography>
                    </Typography>
                    <Typography sx={style.stud__Profile__text__Rating}>
                        Overall Rating
                    </Typography>
                    {/* value at the bottom should be replaced by Data from array */}
                    <Typography>
                        2000
                    </Typography>
                    <Typography sx={style.stud__Profile__text__Reviews}>
                        Reviews
                    </Typography>
                </Box>
            </Box>

            <Box sx={style.stud__Details} >
                <Box sx={style.stud__Details__name}>
                    <Typography sx={style.stud__Details__nameText}>
                        {students.name}
                    </Typography>
                    <Typography sx={style.stud__Details__section}>
                        {students.yns}
                    </Typography>
                </Box>
                <Box sx={style.stud__Details__Details} >
                    <Box sx={style.stud__Details__left} >
                        <Typography sx={style.stud__Details__text}>
                            Gender:
                        </Typography>
                        <Typography sx={style.stud__Details__text}>
                            Birthday:
                        </Typography>
                        <Typography sx={style.stud__Details__text}>
                            Address:
                        </Typography>
                        <Typography sx={style.stud__Details__text}>
                            Nickname:
                        </Typography>
                        <Typography sx={style.stud__Details__text}>
                            Skills/Languages:
                        </Typography>
                    </Box>
                    {/* ALL TEXT IN STUD__DETAILS__MIDDLE should be replaced by data from array */}
                    <Box sx={style.stud__Details__middle}>
                        <Typography sx={style.data}>
                            {students.gender}
                        </Typography>
                        <Typography sx={style.data}>
                            {students.birthday}
                        </Typography>
                        <Typography sx={style.data}>
                            {students.address}
                        </Typography>
                        <Typography sx={style.data}>
                            {students.nickname}
                        </Typography>
                        <Typography sx={style.data}>
                            {students.skills}
                        </Typography>
                    </Box>
                    <Box sx={style.stud__Details__right} >
                        <Box sx={style.right__text}>
                            <Typography sx={style.right__text__text}>
                                Teamwork:
                            </Typography>
                            <Typography sx={style.right__text__text}>
                                Creativity:
                            </Typography>
                            <Typography sx={style.right__text__text}>
                                Adaptability:
                            </Typography>
                            <Typography sx={style.right__text__text}>
                                Leadership:
                            </Typography>
                            <Typography sx={style.right__text__text}>
                                Persuasion:
                            </Typography>
                        </Box>
                        <Box sx={style.right__data}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={style.stud__Details__SocialMedia}>
                    <Typography sx={style.Social}>
                        Github
                    </Typography>
                    <Typography sx={style.Social}>
                        Facebook
                    </Typography>
                    <Typography sx={style.Social}>
                        Linkedin
                    </Typography>
                    <Typography sx={style.Social}>
                        Twitter
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
