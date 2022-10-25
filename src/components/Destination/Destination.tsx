import { Grid, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  destination: {
    name: string;
    description: string;
    distance: string;
    travel: string;
  };
  destinationImg: string;
};

const Destination: FC<Props> = ({ destination, destinationImg }) => {
  return (
    <Grid container columnSpacing={{ lg: 12 }}>
      <Grid item lg={6} sx={{ display: { xs: "none", md: "block" } }}>
        <img src={destinationImg} alt={destination.name} />
      </Grid>
      <Grid item lg={6} xs={12} sx={{ marginTop: { md: "2rem" } }}>
        <Typography variant="h2" color="textPrimary">
          {destination.name}
        </Typography>
        <Typography color="textPrimary" sx={{ marginBottom: "2rem" }}>
          {destination.description}
        </Typography>
        <hr />
        <Grid container columnSpacing={{ lg: 4 }} sx={{ marginTop: "2rem" }}>
          <Grid
            item
            lg={6}
            xs={12}
            sx={{ marginBottom: { xs: "2rem", md: 0 } }}
          >
            <Typography color="textPrimary">AVG. DISTANCE</Typography>
            <Typography variant="h4" color="textPrimary">
              {destination.distance}
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography color="textPrimary">TRAVEL</Typography>
            <Typography variant="h4" color="textPrimary">
              {destination.travel}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Destination;
