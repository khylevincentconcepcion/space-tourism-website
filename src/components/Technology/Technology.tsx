import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  technology: {
    name: string;
    description: string;
  };
  technologyImg: string;
};

const Technology: FC<Props> = ({
  value,
  setValue,
  technology,
  technologyImg,
}) => {
  return (
    <Grid container columnSpacing={{ lg: 12 }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          padding: { xs: "0 2rem", sm: "0 6rem", lg: 0 },
        }}
      >
        <Grid container columnSpacing={{ lg: 4 }}>
          <Grid
            item
            sx={{
              display: { xs: "none", lg: "inline-flex" },
            }}
            lg={3}
          >
            <Stack direction="column" spacing={4} justifyContent="center">
              <Button
                onClick={() => setValue("vehicle")}
                className={value === "vehicle" ? "active" : ""}
              >
                1
              </Button>
              <Button
                onClick={() => setValue("port")}
                className={value === "port" ? "active" : ""}
              >
                2
              </Button>
              <Button
                onClick={() => setValue("capsule")}
                className={value === "capsule" ? "active" : ""}
              >
                3
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            lg={9}
            sx={{
              display: { lg: "flex" },
              gap: { lg: "10rem" },
              flexDirection: { lg: "column" },
            }}
          >
            <Box>
              <Typography variant="h4" color="textPrimary">
                THE TERMINOLOGY ...
              </Typography>
              <Typography variant="h2" color="textPrimary">
                {technology.name}
              </Typography>
              <Typography
                color="textPrimary"
                sx={{ marginBottom: { sm: "2rem" } }}
              >
                {technology.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ display: { xs: "none", lg: "block" } }}>
        <img src={technologyImg} alt={technology.name} />
      </Grid>
    </Grid>
  );
};

export default Technology;
