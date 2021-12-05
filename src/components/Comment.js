import React, { useState, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

const style = {
    commentModal: {

    },
    commentContainer: {
        marginTop: 3,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        width: '775px',
        backgroundColor: '#2C2F31',
        border: 'solid 1px #303336',
        borderRadius: '10px',
        boxShadow: '20px',
    },
    commentList: {
        marginTop: 3,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '790px',
        backgroundColor: '#2C2F31',
        border: 'solid 1px #303336',
        borderRadius: '10px',
        boxShadow: '20px',
    },
    top: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 1,
    },
    down: {
        display: 'flex',
        alignItems: 'center',
    },
    commentField: {
        backgroundColor: '#131414',
        height: '68px',
        width: '609px',
        border: 'solid 1px #303336',
        borderRadius: '10px',
    },
    add: {
        fontSize: '12px',
        fontWeight: '400',
        color: '#62666D',
        marginLeft: 1,
    },
    commentButton: {
        height: '44px',
        width: '143px',
        backgroundColor: '#26CE8D',
        color: 'white',
        marginLeft: 2,
        '&:hover': {
            backgroundColor: '#62666D'
        }
    },
    text: {
        fontSize: '12px',
        fontWeight: '300',
        color: '#62666D',
        paddingLeft: 1,
    },
    Comments: {
        paddingLeft: 3,
        fontSize: '12px',
        fontWeight: '300',
        lineHeight: '16px',
        color: '#D1D4C9',
        paddingBottom: 1,
    },
}

export default function Comment(props) {

    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);
    const commentRef = useRef('');

    const commentChange = () => {
        setComment(commentRef.current.value);
    }

    if (props.show === false) {
        return null;
    } else if (props.show === true) {
        return (
            <Box sx={style.commentModal}>
                <Box sx={style.commentContainer}>
                    <Box sx={style.top}>
                        <ReplyIcon />
                        <Typography sx={style.add}>Add your comment</Typography>
                    </Box>
                    <Box sx={style.down}>
                        <TextField
                            variant='standard'
                            sx={style.commentField}
                            id="commentField"
                            onChange={commentChange}
                            InputProps={{ disableUnderline: true }}
                            inputRef={commentRef}
                        />
                        <Button onClick={() => setCommentList(comment)} sx={style.commentButton}>Submit</Button>
                    </Box>
                </Box>
                <Box sx={style.commentList}>
                    <Box sx={style.top}>
                        <ReplyIcon />
                        <Typography sx={style.text}>username</Typography> {/* put the username data here from login */}
                        <Typography sx={style.text}>3 hrs ago</Typography>
                    </Box>
                    <Box sx={style.down}>
                        <Typography sx={style.Comments}>{commentList}</Typography> {/* map the commentList array */}
                    </Box>
                </Box>
            </Box>
        )
    }
}
