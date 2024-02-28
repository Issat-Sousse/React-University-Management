import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'; // Ajout de l'icône pour les activités extrascolaires

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to}></Link>
        </MenuItem>
    )
}

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                backgroundColor: "#680000",
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: isCollapsed ? "50px" : "250px",
                zIndex: 999,
                transition: "width 0.2s ease",

                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                    color: "#ffff !important"
                },
                "& .pro-inner-item:hover": {
                    fontSize: "18px",
                    color: "#fff"
                },
                "& .pro-menu-item.active": {
                    color: "#fff !important",
                    boxShadow: "0 0 5px rgba(255, 0, 0, 0.7) inset"
                },
                "& .pro-sidebar-inner": {
                    background: "linear-gradient(180deg, #1B61B3 0%, #071F3C 99.96%, #061E39 99.97%, #061C35 99.98%, #051A33 99.99%, rgba(32, 98, 176, 0) 100%, rgba(32, 98, 176, 0) 100%) !important",
                    boxShadow: "0 0 10px rgba(0, 0, 255, 0.5) !important"
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/*logo and menu item*/}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon style={{ color: "#fff" }}></MenuOutlinedIcon> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: "white",
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography>Sahar Youssef</Typography>
                                <IconButton>
                                    <MenuOutlinedIcon style={{ color: "white" }}></MenuOutlinedIcon>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*User*/}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box textAlign="center">
                            <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    color="white"
                                    sx={{ m: "10px 0 0 0" }}
                                >Etudiant</Typography>

                            </Box>
                        </Box>
                    )}

                    {/*Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Tableau de bord"
                            to="/dashboardEtudiant"
                            icon={<HomeOutlinedIcon></HomeOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Presence"
                            to="/presenceEtudiant"
                            icon={<EventNoteOutlinedIcon></EventNoteOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Notes"
                            to="/noteEtudiant"
                            icon={<ReceiptOutlinedIcon></ReceiptOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Cours"
                            to="/coursEtudiant"
                            icon={<SchoolOutlinedIcon></SchoolOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Vie Estudiantine"
                            to="/vieEstudiantine"
                            icon={<SportsEsportsOutlinedIcon></SportsEsportsOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Calendrier"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Bibliothéque"
                            to="/bibliotheque"
                            icon={<LibraryBooksOutlinedIcon></LibraryBooksOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Emplois"
                            to="/emplois"
                            icon={<WorkOutlineOutlinedIcon></WorkOutlineOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                        <Item
                            title="Actualités"
                            to="/actualites"
                            icon={<AnnouncementOutlinedIcon></AnnouncementOutlinedIcon>}
                            selected={selected}
                            setSelected={setSelected}>
                        </Item>
                    </Box>

                    {/* Quitter logo */}
                    <MenuItem
                        icon={<ExitToAppOutlinedIcon />}
                        style={{
                            margin: "0 0 10px 0",
                            color: "white",
                            bottom: "0",
                            position: "absolute",
                        }}
                    >
                        <NavLink to="/"></NavLink>
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </Box>
    )
};

export default Sidebar;
