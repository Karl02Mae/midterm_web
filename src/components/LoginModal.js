import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
} from '@mui/material';

const style = {
    modal: {
        display: 'flex',
        position: 'fixed',
        color: '#D1D4C9',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '99',
    },
    modal_content: {
        width: '500px',
        backgroundColor: '#131414',
        border: 'solid 2px #282828',
        borderRadius: '10px',
    },
    modal_header: {
        padding: '10px',
    },
    modal_footer: {
        padding: '10px',
    },
    modal_title: {
        margin: 0,
    },
    modal_body: {
        padding: '10px',
        backgroundColor: '#131414',
        borderTop: 'solid 1px #2C2F31',
        borderBottom: 'solid 1px #2C2F31',
        alignItems: 'center',
    },
    usernameContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    username: {
        color: '#D1D4C9',
        border: 'solid 1px #282828',
        borderRadius: '5px',
    },
    passwordCOntainer: {
        display: 'flex',
        alignItems: 'center',
    },
    password: {
        color: '#D1D4C9',
        border: 'solid 1px #282828',
        borderRadius: '5px',
    }
}

export default function LoginModal(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userRef = useRef('');
    const passRef = useRef('');

    const userChange = () => {
        setUsername(userRef.current.value)
    }
    const passChange = () => {
        setPassword(passRef.current.value)
    }
    const login = (event) => {

        if (username === 'admin' && password === 'admin123') {
            alert('Successfully Logged In!')
        }
    }

    if (props.show === false) {
        return null
    }


    return (
        <Box sx={style.modal}>
            <Box sx={style.modal_content}>
                <Box sx={style.modal_header}>
                    <Typography sx={style.modal_title}>
                        Login
                    </Typography>
                </Box>
                <Box sx={style.modal_body}>
                    <Box sx={style.usernameContainer}>
                        <Typography sx={style.label}>Username:</Typography>
                        <TextField
                            variant='standard'
                            sx={style.username}
                            id="username"
                            onChange={userChange}
                            InputProps={{ disableUnderline: true }}
                            inputRef={userRef}
                        />
                    </Box>
                    <Box sx={style.passwordCOntainer}>
                        <Typography sx={style.label}>Password:</Typography>
                        <TextField
                            variant='standard'
                            sx={style.password}
                            type="password"
                            id="password"
                            onChange={passChange}
                            InputProps={{ disableUnderline: true }}
                            inputRef={passRef}
                        />
                    </Box>
                </Box>
                <Box sx={style.modal_footer}>
                    <Button onClick={() => { login(); props.onClose(); }}>Login</Button>
                    <Button onClick={props.onClose}>Cancel</Button>
                </Box>
            </Box>
        </Box>
    )
}
