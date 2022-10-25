import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  crew: {
    name: string;
    role: string;
    bio: string;
  };
  crewImg: string;
};

const Crew: FC<Props> = ({ value, setValue, crew, crewImg }) => {
  return (
    <Grid container columnSpacing={{ lg: 12 }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: { lg: "flex" },
          gap: { lg: "10rem" },
          flexDirection: { lg: "column" },
        }}
      >
        <Box>
          <Typography variant="h4" color="textPrimary">
            {crew.role}
          </Typography>
          <Typography variant="h2" color="textPrimary">
            {crew.name}
          </Typography>
          <Typography color="textPrimary" sx={{ marginBottom: { sm: "2rem" } }}>
            {crew.bio}
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            marginBottom: { sm: "2rem", lg: 0 },
          }}
        >
          <Button
            onClick={() => setValue("douglas")}
            className={value === "douglas" ? "active" : ""}
          ></Button>
          <Button
            onClick={() => setValue("mark")}
            className={value === "mark" ? "active" : ""}
          ></Button>
          <Button
            onClick={() => setValue("victor")}
            className={value === "victor" ? "active" : ""}
          ></Button>
          <Button
            onClick={() => setValue("anousheh")}
            className={value === "anousheh" ? "active" : ""}
          ></Button>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={crewImg} alt={crew.name} />
      </Grid>
    </Grid>
  );
};

export default Crew;
