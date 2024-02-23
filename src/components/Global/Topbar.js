import React from "react";
import { Link } from 'react-router-dom';
import { Box, IconButton } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {

    return (
        <Box display="flex" justifyContent="flex-end" p="1.5" marginTop="20px">

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search "
                    inputProps={{ 'aria-label': 'search ' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <IconButton>
                <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
            </IconButton>

            <IconButton>
                <SettingsOutlinedIcon></SettingsOutlinedIcon>
            </IconButton>

            <Link to="/profil">
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Link>
        </Box>
    );
};

export default Topbar;
