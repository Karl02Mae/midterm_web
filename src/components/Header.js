import React, { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Link,
    Typography,
    Input,
    InputAdornment,
} from '@mui/material';

import LoginModal from './LoginModal';


// Icons
import SearchIcon from '@mui/icons-material/Search';

// SVG Icons
import { ReactComponent as GridIcon } from "../assets/svg/Grid.svg";
import { ReactComponent as ProfileIcon } from "../assets/svg/Profile.svg";


const style = {
    // ****** HEADER ******
    container: {
        display: "flex",
        flexDirection: "row",
        position: 'sticky',
        justifyContent: 'space-between',
        boxShadow: 10,
        zIndex: 99,
        top: 0,
        maxWidth: '100vw',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mid: {
        display: 'flex',
        flexDirection: 'row',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
    },
    textHeader: {
        paddingRight: "20px",
        fontSize: "23px",
        fontWeight: 700,
    },
    tabReview: {
        color: "white",
        fontWeight: 600,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: "14px",
        "&:hover": {
            color: "#26CE8D",
        },
    },
    searchBar: {
        color: '#D1D4C9',
        background: "#131414",
        border: "1px solid #2C2F31",
        boxSizing: "border-box",
        height: "50px",
        borderRadius: "8px",
        width: 250,
        marginLeft: 3,
        marginRight: 4,
    },
    SearchIcon: {
        fill: 'white',
        paddingLeft: 1,
    },
    profIcon: {
        height: '20px',
        width: '20px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
}

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <Box sx={style.root}>
            <AppBar position="static" sx={{ backgroundColor: "#1E1F20" }}>
                <Toolbar sx={style.container}>
                    <Box sx={style.left}>
                        <Typography sx={style.textHeader}> Student Review </Typography>
                        <GridIcon style={{ height: 20, width: 30 }} />
                    </Box>

                    <Box sx={style.mid} >
                        <Link href="/" underline="none">
                            <Typography sx={style.tabReview}> Student List </Typography>
                        </Link>
                     
                            <Typography sx={style.tabReview}> Student Evaluation </Typography>
                      
                        <Link href="#" underline="none">
                            <Typography sx={style.tabReview}> Blog </Typography>
                        </Link>
                    </Box>

                    <Box sx={style.right}>
                        <ProfileIcon sx={style.profIcon} onClick={() => setShow(true)} />
                        <Input sx={style.searchBar} id="searchBar"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon sx={style.SearchIcon} />
                                </InputAdornment>
                            } />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={style.modal}>
                <LoginModal onClose={() => setShow(false)} show={show} />
            </Box>
        </Box>
    )
}

