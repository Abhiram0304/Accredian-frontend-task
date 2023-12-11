import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Navbar() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const navigate = useNavigate();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const {token} = useSelector((state) => state.auth);

    const list = (anchor) => (
        <Box
            sx={{
                width: { md: "400px", sm: "350px", xs: "230px" },
                height: "100vh",
                background: "rgba( 36, 34, 34, 1 )",
                borderLeft: "2px solid rgba( 36, 34, 34, 0 )"
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ marginTop: "1rem" }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText sx={{ fontWeight: "800", color: "white", textAlign: "center" }} primary={"HOME"} onClick={() => { navigate("/") }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText sx={{ fontWeight: "800", color: "white" }} primary={"LOGIN"} onClick={() => { navigate("/login") }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText sx={{ fontWeight: "800", color: "white" }} primary={"SIGN UP"} onClick={() => { navigate("/signup") }} />
                    </ListItemButton>
                </ListItem>
                {
                    token && <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{ fontWeight: "800", color: "white" }} primary={"DASHBOARD"} onClick={() => navigate("/dashboard")} />
                                </ListItemButton>
                            </ListItem>
                }
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{
            background: "rgba( 221, 207, 207, 0.2 )", padding: "0rem 1rem"
            , alignItems: "flex-start",
            opacity: "1",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 0.75rem )", borderBottom: "2px solid rgba( 255, 255, 255, 0.18 )"
        }}>
            <Box>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>


                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </Box>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Box display={"flex"} alignItems={"center"} gap={{ xs: "1.2rem", sm: undefined }} justifyContent={{ xs: "space-between", md: undefined }} width={{ xs: "100%" }}>
                            <Box visibility={{ xs: "visible", md: "hidden" }}>
                                <IconButton
                                    size="large"
                                    onClick={toggleDrawer("right", true)}
                                    color="inherit"
                                    sx={{ marginLeft: "-1rem" }}
                                >
                                    <MenuIcon fontSize='large' />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "1rem" }}>
                        <Button
                                sx={{
                                    my: 2, color: 'white', display: 'block',
                                    textAlign: "center",
                                    fontFamily: "Inter",
                                    fontSize: "1rem",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "20px", 
                                    letterSpacing: "0.1px",
                                }}
                                onClick={() => { navigate("/") }}
                            >
                                HOME
                            </Button>
                            <Button
                                sx={{
                                    my: 2, color: 'white', display: 'block',
                                    textAlign: "center",
                                    fontFamily: "Inter",
                                    fontSize: "1rem",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "20px", 
                                    letterSpacing: "0.1px",
                                }}
                                onClick={() => { navigate("/signup") }}
                            >
                                SIGNUP
                            </Button>
                            <Button
                                sx={{
                                    my: 2, color: 'white', display: 'block',
                                    textAlign: "center",
                                    fontFamily: "Inter",
                                    fontSize: "1rem",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "20px", /* 83.333% */
                                    letterSpacing: "0.1px",
                                }}
                                onClick={() => { navigate("/login") }}
                            >
                                LOGIN
                            </Button>
                            {
                                token && <Button
                                                sx={{
                                                    my: 2, color: 'white', display: 'block',
                                                    textAlign: "center",
                                                    fontFamily: "Inter",
                                                    fontSize: "1rem",
                                                    fontStyle: "normal",
                                                    fontWeight: "500",
                                                    lineHeight: "20px", /* 83.333% */
                                                    letterSpacing: "0.1px",
                                                }}
                                                onClick={() => { navigate("/dashboard") }}
                                            >
                                                DASHBOARD
                                        </Button>
                            }
                        </Box>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
