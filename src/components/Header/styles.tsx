import { AppBar, Box, Drawer, List, styled, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  backdropFilter: "none",
  top: "0",
  justifyContent: "center",
  height: "6rem",
  maxWidth: "120rem",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  [theme.breakpoints.up("md")]: {
    height: "10rem",
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 0 2rem 2rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem 0 2rem 4rem",
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  "& li": {
    width: "auto",
    "& div": {
      padding: 0,
    },
    "&:hover a": {
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
    },
    "& a": {
      color: theme.palette.secondary,
      fontSize: "1rem",
      letterSpacing: "2px",
      borderRadius: 0,
      borderBottom: "4px solid transparent",
      transition: "all 250ms ease-in-out",
      "&.active": {
        borderBottom: `4px solid ${theme.palette.secondary.main} !important`,
      },
    },
    "& a span:first-of-type": {
      fontWeight: 700,
      marginRight: ".5rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    backdropFilter: "blur(1.5rem)",
    backgroundColor: "rgba(255,255,255,.1)",
    height: "6rem",
    padding: "0 2rem",
    "& a": {
      letterSpacing: "2.8px",
      height: "6rem",
    },
    "& a span:first-of-type": {
      display: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 4rem",
    gap: "2.5rem",
    "& li": {
      padding: 0,
    },
    "& a": {
      fontSize: "1.25rem",
    },
    "& a span:first-of-type": {
      display: "inline",
    },
  },
}));

export const StyledDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    backdropFilter: "blur(1.5rem)",
    backgroundColor: "rgba(255,255,255,.1)",
  },
});

export const MenuBox = styled(Box)(({ theme }) => ({
  "& span": {
    display: "block",
    width: "2rem",
    height: ".25rem",
    backgroundColor: theme.palette.secondary.main,

    "&:first-of-type, &:nth-of-type(2)": {
      marginBottom: ".4rem",
    },
  },
}));
