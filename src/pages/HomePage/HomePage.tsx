import { Grid, Button, Typography } from "@mui/material";
import { StyledContainer } from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Space tourism website</title>
      </Helmet>
      <StyledContainer>
        <Grid
          container
          columnSpacing={{ lg: 8 }}
          rowSpacing={{ xs: 12, lg: 0 }}
        >
          <Grid item xs={12} lg={6}>
            <Typography variant="h4" color="textPrimary">
              SO, YOU WANT TO TRAVEL TO
            </Typography>
            <Typography variant="h1" color="textPrimary">
              SPACE
            </Typography>
            <Typography color="textPrimary">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={(theme) => ({
              [theme.breakpoints.up("lg")]: {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            })}
          >
            <Button
              to="/destination"
              component={RouterLink}
              className="explore-btn"
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default HomePage;
