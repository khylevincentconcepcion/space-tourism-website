import { Container, styled } from "@mui/material";
import mobileBackground from "../../assets/home/background-home-mobile.jpg";
import tabletBackground from "../../assets/home/background-home-tablet.jpg";
import desktopBackground from "../../assets/home/background-home-desktop.jpg";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${mobileBackground})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  padding: "8rem 2rem 2rem 2rem",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "& h4": {
    fontSize: "1.25rem",
    letterSpacing: "3px",
  },
  "& h1": {
    fontSize: "5rem",
    marginBottom: "1rem",
  },
  "& p": {
    textAlign: "center",
  },
  "& .explore-btn": {
    position: "relative",
    zIndex: 1,
    width: "12rem",
    height: "12rem",
    backgroundColor: theme.palette.common.white,
    fontSize: "2rem",
    color: theme.palette.common.black,
    borderRadius: "50%",
    letterSpacing: "3px",
    "&::before": {
      position: "absolute",
      display: "block",
      content: "''",
      inset: 0,
      border: "4px solid rgba(255,255,255, 0.2)",
      backgroundColor: "rgba(255,255,255,.2)",
      borderRadius: "50%",
      zIndex: "-1",
      transition: "all 200ms ease-in-out",
    },
    "&:hover::before": {
      inset: "-4rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${tabletBackground})`,
    padding: "14rem 6rem 6rem 6rem",
    gap: "12rem",
    "& h4": {
      fontSize: "1.875rem",
      marginBottom: "1rem",
    },
    "& h1": {
      fontSize: "12rem",
    },
    "& p": {
      fontSize: "1.25rem",
      padding: "1rem",
    },
    "& .explore-btn": {
      fontSize: "4rem",
      width: "20rem",
      height: "20rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    backgroundImage: `url(${desktopBackground})`,
    padding: "14rem 8rem 8rem 8rem",
    maxWidth: "120rem",
    "& div:first-of-type": {
      textAlign: "start",
    },
    "& h4": {
      fontSize: "1.5rem",
    },
    "& p": {
      padding: 0,
      textAlign: "justify",
      fontSize: "1.5rem",
    },
  },
}));
