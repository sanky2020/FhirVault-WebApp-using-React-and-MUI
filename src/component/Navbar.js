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
    <AppBar position="static" elevation={0} className={classes.appbar} id="homesection">
      <CssBaseline />
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <img
          src="data:image/png;base64,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"
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
