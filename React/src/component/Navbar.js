import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {  useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              navigate(`/users`);
            }}
          >
            User Table
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate(`/user`);
            }}
          >
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
