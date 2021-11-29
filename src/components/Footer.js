import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

import { ReactComponent as Twitter } from "../assets/svg/Twitter.svg";
import { ReactComponent as Discord } from "../assets/svg/Discord.svg";
import { ReactComponent as Facebook } from "../assets/svg/Facebook.svg";

const style = {
    root: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'column',
        height: '180px',
        backgroundColor: "#131414",
        borderTop: '1px solid #1E1F20',
        boxShadow: 10,
    },
    texts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 2,
    },
    space: {
        width: '30px'
    },
    contact: {
        fontSize: '12px',
        fontWeight: '300',
        color: '#62666D',
        paddingRight: 1,
        letterSpacing: 2,
    },
    contactText: {
        color: '#26CE8D',
        fontSize: '12px',
        fontWeight: '300',
        paddingBottom: 1,
        letterSpacing: 2,
    },
    ARR: {
        paddingBottom: 1,
        fontSize: '12px',
        fontWeight: '300',
        color: '#62666D',
        paddingRight: 1,
        letterSpacing: 2,
    },
    line: {
        paddingBottom: 1,
        fontSize: '12px',
        fontWeight: '300',
        color: '#62666D',
        paddingRight: 1,
        paddingLeft: 1,
        letterSpacing: 2,
    },
    terms: {
        color: '#26CE8D',
        fontSize: '12px',
        fontWeight: '300',
        paddingBottom: 1,
        letterSpacing: 2,
    }
}

export default function Footer() {
    return (
        <Box sx={style.root}>
            <Box sx={style.icons}>
                <Twitter sx={style.twitter} />
                <Box sx={style.space} />
                <Discord sx={style.discord} />
                <Box sx={style.space} />
                <Facebook sx={style.facebook} />
            </Box>

            <Box sx={style.texts}>
                <Box sx={style.top}>
                    <Typography sx={style.contact}>Contact us:</Typography>
                    <Typography sx={style.contactText}>support@studentreview.com</Typography>
                </Box>
                <Typography sx={style.ARR}>© 2021 Student Review. All Rights Reserved.</Typography>
                <Box sx={style.bottom}>
                    <Typography sx={style.terms}>Terms of Services</Typography>
                    <Typography sx={style.line}>|</Typography>
                    <Typography sx={style.terms}>Privacy Policy</Typography>
                </Box>
            </Box>
        </Box>
    )
}
