import { Container, Box, styled } from "@mui/material";
import mobileBackground from "../../assets/destination/background-destination-mobile.jpg";
import tabletBackground from "../../assets/destination/background-destination-tablet.jpg";
import desktopBackground from "../../assets/destination/background-destination-desktop.jpg";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${mobileBackground})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  padding: "8rem 2rem 2rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexWrap: "wrap",
  "& .destination-header": {
    marginBottom: "4rem",
    "& span:first-of-type": {
      color: "rgba(255, 255, 255, 0.5)",
      marginRight: ".5rem",
    },
  },
  "& h4": {
    letterSpacing: "3px",
    fontSize: "1.25rem",
    textTransform: "uppercase",
  },
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${tabletBackground})`,
    padding: "12rem 6rem 6rem 6rem",
    "& .destination-header": {
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
  "& .MuiGrid-root.MuiGrid-container.css-b3ndp5-MuiGrid-root": {
    justifyContent: "center",
  },
  "& .paragraph-header": {
    fontSize: "1.25rem",
  },
  "& h2": {
    fontSize: "5rem",
    textTransform: "uppercase",
  },
  "& p": {
    fontSize: "1.25rem",
  },
  "& img": {
    width: "100%",
  },
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
  },
  "& button": {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("lg")]: {
    alignItems: "center",
    "& .MuiTabs-flexContainer": {
      justifyContent: "start",
    },
    "& .css-13xfq8m-MuiTabPanel-root": {
      paddingBottom: 0,
    },
    "& .paragraph-header": {
      fontSize: "1rem",
    },
    "& h2": {
      fontSize: "6rem",
    },
    "& p": {
      fontSize: "1.5rem",
    },
  },
}));
