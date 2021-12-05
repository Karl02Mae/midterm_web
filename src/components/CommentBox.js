import React, { useState } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Rating
} from '@mui/material';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Comment from './Comment';

const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        // height: '214px',
        width: '926px',
        backgroundColor: '#1E1F20',
        border: 'solid 1px #303336',
        borderRadius: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '200px',
        color: '#D1D4C9',
    },
    top: {
        display: 'flex',
        paddingLeft: 3,
        paddingTop: 3,
    },
    topText: {
        display: 'flex',
        marginLeft: 2,
        flexDirection: 'column',
        textAlign: 'left',
    },
    commentID: {
        fontSize: '14px',
        fontWeight: '500',
    },
    commentTime: {
        fontSize: '12px',
        fontWeight: '300',
        lineHeight: '16px',
        color: '#62666D',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 2,
        marginLeft: 10,
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        float: 'right',
    },
    commentButton: {
        display: 'flex',
    },
    reportButton: {
        display: 'flex',
        marginLeft: 3,
    },
    down: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 2,
        marginRight: 5,
        paddingBottom: 3,
    },
    commentButton__text: {
        cursor: 'pointer',
        '&:hover': {
            color: "#26CE8D",
        }
    },
    comment: {
        fontSize: '12px',
        fontWeight: '300',
        lineHeight: '16px',
        color: '#D1D4C9',
    },
    commentDisplay: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    comments: {
        display: 'flex',
    },
    butCon: {
        float: 'right',
    }
}

export default function CommentBox() {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const handleModal = () => {
        if (show === true) {
            setShow(false);
        } else if (show === false) {
            setShow(true);
        }
    }
    return (
        <Box sx={style.root}>
            {/* Data from COMMENT BOX should be replaced by data from array */}
            <Box sx={style.top}>
                <Avatar>K</Avatar>
                <Box sx={style.topText}>
                    <Typography sx={style.commentID}>
                        karlsamelo@gmail.com
                    </Typography>
                    <Typography sx={style.commentTime}>
                        Uploaded 3hrs ago
                    </Typography>
                </Box>
            </Box>
            <Box sx={style.bottom}>
                <Box sx={style.commentDisplay}>
                    <Rating name="addRate"
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <Typography sx={style.comment}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Box>
                <Box sx={style.down}>
                    <Box sx={style.butCon}>
                        <Box sx={style.buttons}>
                            <Box sx={style.commentButton}>
                                <ChatBubbleOutlineIcon />
                                <Typography onClick={handleModal} sx={style.commentButton__text}>
                                    Comment
                                </Typography>
                            </Box>
                            <Box sx={style.reportButton}>
                                <ReportGmailerrorredRoundedIcon />
                                <Typography sx={style.reportButton__text}>
                                    Report
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={style.comments}>
                        <Comment onClose={() => setShow(false)} show={show} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
