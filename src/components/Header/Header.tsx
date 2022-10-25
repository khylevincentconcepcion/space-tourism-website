import { Box, Button, IconButton, Container } from "@mui/material";
import logo from "../../assets/shared/logo.svg";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import { MenuBox, StyledAppBar, StyledDrawer, StyledToolbar } from "./styles";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Container sx={{ flexGrow: 1, maxWidth: "120rem" }} maxWidth={false}>
      <StyledAppBar position="absolute">
        <StyledToolbar>
          <Button to="/" component={RouterLink} className="logo">
            <img src={logo} alt="logo" />
          </Button>
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            })}
          >
            <NavbarLinks setOpenSidebar={setOpenSidebar} />
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={() => setOpenSidebar(true)}
          >
            <MenuBox>
              <span></span>
              <span></span>
              <span></span>
            </MenuBox>
          </IconButton>
          <StyledDrawer
            open={openSidebar}
            anchor={"right"}
            onClose={() => setOpenSidebar(false)}
          >
            <NavbarLinks setOpenSidebar={setOpenSidebar} />
          </StyledDrawer>
        </StyledToolbar>
      </StyledAppBar>
    </Container>
  );
};

export default Header;
