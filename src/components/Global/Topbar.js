import React from "react";
import { Link } from 'react-router-dom';
import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {

    return (
        <Box display="flex" justifyContent="flex-end" p="1.5" marginTop="20px">

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
