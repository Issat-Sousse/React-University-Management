import React from "react";
import { Link } from 'react-router-dom';
import { Box, IconButton} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Topbar = () => {

    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            p="1.5"
            marginTop="0"
            marginBottom="1rem"
            height="3.5rem"
            marginRight="0"
            bgcolor='linear-gradient(to right, #f5f5f5, #ffffff)'
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
            position="relative"
            zIndex={1}
            sx={{
                "&:after": {
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background:'#fcfeff',
                    zIndex: -1,
                },
            }}
        >

            <Paper
                component="form"
                sx={{ p: '0.5rem 1rem', background:' #f5f5f5',display: 'flex', alignItems: 'center', width: "16rem" , height:"1.75rem"}}
            >
                
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
                <NotificationsOutlinedIcon />
            </IconButton>

            <IconButton>
                <SettingsOutlinedIcon />
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
