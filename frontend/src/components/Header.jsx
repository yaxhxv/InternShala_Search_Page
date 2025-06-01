import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  Badge,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Header() {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            src="https://internshala.com/static/images/common/new_internshala_logo.svg"
            alt="Internshala"
            sx={{
              height: 40,
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              color="inherit"
              sx={{
                fontWeight: 500,
                "&:hover": {
                  color: "#008BDC",
                },
              }}
            >
              Internships
            </Button>
            <Button
              sx={{
                bgcolor: "#FF8C00",
                color: "white",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#FF7000",
                },
              }}
            >
              Courses
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: 500,
                "&:hover": {
                  color: "#008BDC",
                },
              }}
            >
              Jobs
            </Button>
            <IconButton>
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
