import React, { useState } from 'react';
import {
    Box,
    Typography,
    Rating,
    Button,
    TextField
} from '@mui/material';

import { useDispatch } from "react-redux";
import { review } from "../redux/actions/setReviewAction";

const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1E1F20',
        height: '556px',
        width: '400px',
        marginTop: 3,
        marginBottom: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid #303336',
        borderRadius: '10px',
        color: '#D1D4C9',
    },
    ratingText: {
        fontSize: '14px',
        fontWeight: '400',
        paddingTop: 3,
        paddingBottom: 3,
        marginLeft: 22,
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
    },
    rate: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    texts: {
        marginBottom: 3,
        fontSize: '14px',
        textAlign: 'left',
    },
    ratings: {
        marginBottom: 2,
        color: "#26CE8D",

    },
    comment: {
        display: 'flex',
        flexDirection: 'column',
    },
    commentBox: {
        display: 'flex',
        height: '100px',
        width: '336px',
        backgroundColor: '#131414',
        border: 'solid 1px #303336',
        borderRadius: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    commentText: {
        paddingTop: 3,
        paddingBottom: 2,
        fontSize: '14px',
        fontWeight: '400',
        marginLeft: 16,
    },
    submit: {
        backgroundColor: '#26CE8D',
        height: '44px',
        width: '143px',
        marginTop: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '14px',
        color: '#D1D4C9',
        '&:hover': {
            backgroundColor: '#D1D4C9',
            color: 'black',
        }
    }
}

export default function RatingBox() {
    const dispatch = useDispatch();
    const [value1, setValue1] = useState({
        value1: 0,
    });
    const [value2, setValue2] = useState({
        value2: 0,
    });
    const [value3, setValue3] = useState({
        value3: 0,
    });
    const [value4, setValue4] = useState({
        value4: 0,
    });
    const [value5, setValue5] = useState({
        value5: 0,
    });

    return (
        <Box sx={style.root}>
            <Typography sx={style.ratingText}>
                Rating
            </Typography>
            <Box sx={style.container}>
                <Box sx={style.text}>
                    <Typography sx={style.texts}>
                        Teamwork
                    </Typography>
                    <Typography sx={style.texts}>
                        Creativity
                    </Typography>
                    <Typography sx={style.texts}>
                        Adaptability
                    </Typography>
                    <Typography sx={style.texts}>
                        Leadership
                    </Typography>
                    <Typography sx={style.texts}>
                        Persuasion
                    </Typography>
                </Box>
                <Box sx={style.rate}>
                    <Rating sx={style.ratings}
                        name="totalRate"
                        value={value1}
                        size='large'
                        onChange={(event, newValue) => {
                            setValue1(newValue);
                        }}
                    />
                    <Rating sx={style.ratings}
                        name="totalRate"
                        value={value2}
                        size='large'
                        onChange={(event, newValue) => {
                            setValue2(newValue);
                        }}
                    />
                    <Rating sx={style.ratings}
                        name="totalRate"
                        value={value3}
                        size='large'
                        onChange={(event, newValue) => {
                            setValue3(newValue);
                        }}
                    />
                    <Rating sx={style.ratings}
                        name="totalRate"
                        value={value4}
                        size='large'
                        onChange={(event, newValue) => {
                            setValue4(newValue);
                        }}
                    />
                    <Rating sx={style.ratings}
                        name="totalRate"
                        value={value5}
                        size='large'
                        onChange={(event, newValue) => {
                            setValue5(newValue);
                        }}
                    />
                </Box>
            </Box>
            <Box sx={style.comment}>
                <Typography sx={style.commentText}>
                    Share your thoughts!
                </Typography>
                <TextField sx={style.commentBox}
                    label=""
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                />
                <Button sx={style.submit}>Submit</Button>
            </Box>
        </Box>
    )
}
