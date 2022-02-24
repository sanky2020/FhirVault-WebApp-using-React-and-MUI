import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    display: "flex",
    alignItems: "center",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "black",
  },
  link: {
    textDecoration: "none",
    color: "#1A2B6D",
    fontSize: "20px",
    fontWeight: 600,
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    "&:hover": {
      color: "red",
      transition: "all 0.5s ease",
    },
  },
  imagestyle: {},
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar position="static" elevation={0} className={classes.appbar}>
      <CssBaseline />
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <img
          src="https://static.wixstatic.com/media/78eca0_34d230eac2d74b93a9109e40c9b25b3f~mv2.png/v1/fill/w_201,h_118,al_c,lg_1,q_85/FVH.webp"
          alt="logo"
          style={{ width: 150, marginRight: "auto" }}
        />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/why-choose-us" className={classes.link}>
              Why Choose Us
            </Link>
            <a href="#serviceSection" className={classes.link}>
              Our Services
            </a>
            <Link to="/industries" className={classes.link}>
              Industries
            </Link>
            <a href="#contactUs" className={classes.link}>
              Contact Us
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
