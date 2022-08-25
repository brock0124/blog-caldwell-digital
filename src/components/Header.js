import React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import ParcelLogo from '../img/parcel-logo.svg';

const Header = () => (
    <Box
        sx={{
            width: "100%",
            marginBottom: "5rem"
        }}
        className="blue-back"
        >
            <Typography
                variant="h1"
                p="20px 100px"
                color="#fff"
                fontSize="3rem"
            >
                Brock's Blog
            </Typography>

    </Box>
);

export default Header;