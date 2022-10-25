import { Container, Box, styled } from "@mui/material";
import mobileBackground from "../../assets/crew/background-crew-mobile.jpg";
import tabletBackground from "../../assets/crew/background-crew-tablet.jpg";
import desktopBackground from "../../assets/crew/background-crew-desktop.jpg";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${mobileBackground})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  padding: "8rem 2rem 2rem 2rem",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "& .crew-header": {
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
    padding: "12rem 6rem 6rem 6rem",
    "& .crew-header": {
      width: "100%",
      textAlign: "start",
    },
    "& h4": {
      fontSize: "2rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    backgroundImage: `url(${desktopBackground})`,
    padding: "14rem 8rem 8rem 8rem",
      maxWidth: "120rem",
    textAlign: "start",
    justifyContent: "start",
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
    minWidth: ".5rem",
    minHeight: ".5rem",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,.2)",
    transition: "all 200ms ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    "&.active": {
      backgroundColor: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
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
    "& img": {
      marginBottom: 0,
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
    "& h4": {
      fontSize: "1.5rem",
    },
  },
}));
