import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";
import { CssBaseline } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function Cours() {
  const [matiere, setMatiere] = React.useState("");

  const handleChangeMatiere = (event: SelectChangeEvent) => {
    setMatiere(event.target.value);
  };

  const [filiere, setFilière] = React.useState("");

  const handleChangeFiliere = (event: SelectChangeEvent) => {
    setFilière(event.target.value);
  };

  const [type, setType] = React.useState("");

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  return (
    <div
      style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}
    >
      <CssBaseline />
      <Box
        sx={{
          background: "#F2F2F7",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar />
      </Box>
      <Box
        display="flex"
        flexGrow={1}
        overflow="auto"
        style={{ overflowX: "hidden" }}
      >
        <Sidebar flex="2" />
        <Box marginLeft="25%" />
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Matière
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={matiere}
            onChange={handleChangeMatiere}
            autoWidth
            label="Matière"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Filière
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filiere}
            onChange={handleChangeFiliere}
            autoWidth
            label="Filière"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={type}
            onChange={handleChangeType}
            autoWidth
            label="Filière"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Cours;
