import { Container, Box, styled } from "@mui/material";
import mobileBackground from "../../assets/technology/background-technology-mobile.jpg";
import tabletBackground from "../../assets/technology/background-technology-tablet.jpg";
import desktopBackground from "../../assets/technology/background-technology-desktop.jpg";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${mobileBackground})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  padding: "8rem 0 2rem 0",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "& .technology-header": {
    marginBottom: "4rem",
    textTransform: "uppercase",
    "& span:first-of-type": {
      color: "rgba(255, 255, 255, 0.5)",
      marginRight: ".5rem",
    },
  },
  "& h4": {
    letterSpacing: "3px",
    fontSize: "1.25rem",
    textTransform: "uppercase",
    "& span:first-of-type": {
      color: "rgba(255, 255, 255, 0.5)",
      marginRight: ".5rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${tabletBackground})`,
    padding: "12rem 0 6rem 0",
    "& .technology-header": {
      width: "100%",
      textAlign: "start",
      padding: "0 6rem",
    },
    "& h4": {
      fontSize: "2rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    backgroundImage: `url(${desktopBackground})`,
    padding: "14rem 0 8rem 8rem",
    maxWidth: "120rem",
    textAlign: "start",
    justifyContent: "start",
    "& .technology-header": {
      padding: "0",
    },
    "& h4": {
      fontSize: "1.875rem",
    },
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  "& img": {
    width: "100%",
    marginBottom: "2rem",
  },
  "& button": {
    minWidth: "3rem",
    minHeight: "3rem",
    fontSize: "1rem",
    color: theme.palette.secondary.main,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,.2)",
    transition: "all 200ms ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.primary.main,
    },
    "&.active": {
      backgroundColor: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.primary.main,
    },
  },
  "& h2": {
    fontSize: "2rem",
    marginBottom: "2rem",
    textTransform: "uppercase",
  },
  "& h4": {
    marginBottom: "1rem",
    color: "rgba(255, 255, 255, 0.5)",
  },
  "& p": {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("sm")]: {
    "& h2": {
      fontSize: "3rem",
    },
    "& h4": {
      fontSize: "1.875rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .css-b3ndp5-MuiGrid-root": {
      alignItems: "center",
    },
    "& h2": {
      fontSize: "3rem",
    },
    "& p": {
      fontSize: "1.5rem",
    },
    "& img": {
      marginBottom: 0,
    },
    "& button": {
      minWidth: "4rem",
      minHeight: "4rem",
      fontSize: "1.25rem",
    },
    "& h4": {
      fontSize: "1.5rem",
    },
  },
}));
