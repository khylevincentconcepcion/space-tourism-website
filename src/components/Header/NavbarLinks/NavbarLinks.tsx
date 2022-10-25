import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { StyledList } from "../styles";

const navbarData = [
  { name: "HOME", order: "01", path: "/" },
  { name: "DESTINATION", order: "02", path: "/destination" },
  { name: "CREWS", order: "03", path: "/crews" },
  { name: "TECHNOLOGY", order: "04", path: "/technology" },
];

type Props = {
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

const NavbarLinks: FunctionComponent<Props> = ({ setOpenSidebar }) => {
  const { pathname } = useLocation();
  return (
    <StyledList
      onClick={() => setOpenSidebar(false)}
    >
      {navbarData.map((data, i) => (
        <ListItem key={i}>
          <ListItemButton>
            <ListItemText
              primary={
                <Button
                  component={RouterLink}
                  to={data.path}
                  color="inherit"
                  className={pathname === data.path ? "active" : ""}
                  disableRipple
                >
                  <span>{data.order}</span>
                  <span>{data.name}</span>
                </Button>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default NavbarLinks;
