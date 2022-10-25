import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { StyledBox, StyledContainer } from "./styles";
import launchVehicleImgLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortImgLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleImgLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import launchVehicleImgPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortImgPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleImgPortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import Technology from "../../components/Technology/Technology";
import data from "../../data.json";
import { Helmet } from "react-helmet-async";

const TechnologyPage = () => {
  const [value, setValue] = useState("vehicle");
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Technology</title>
      </Helmet>
      <StyledContainer>
        <Typography
          variant="h4"
          color="textPrimary"
          className="technology-header"
        >
          <span>03</span>
          <span>SPACE LAUNCH 101</span>
        </Typography>
        <StyledBox>
          {value === "vehicle" && (
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img
                src={launchVehicleImgLandscape}
                alt={data.technology[0].name}
              />
            </Box>
          )}
          {value === "port" && (
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img src={spacePortImgLandscape} alt={data.technology[1].name} />
            </Box>
          )}
          {value === "capsule" && (
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img
                src={spaceCapsuleImgLandscape}
                alt={data.technology[2].name}
              />
            </Box>
          )}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "inline-flex", lg: "none" },
              marginBottom: { xs: "2rem", lg: 0 },
            }}
            justifyContent="center"
          >
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
          <Box>
            {value === "vehicle" && (
              <Technology
                value={value}
                setValue={setValue}
                technology={data.technology[0]}
                technologyImg={launchVehicleImgPortrait}
              />
            )}
            {value === "port" && (
              <Technology
                value={value}
                setValue={setValue}
                technology={data.technology[1]}
                technologyImg={spacePortImgPortrait}
              />
            )}
            {value === "capsule" && (
              <Technology
                value={value}
                setValue={setValue}
                technology={data.technology[2]}
                technologyImg={spaceCapsuleImgPortrait}
              />
            )}
          </Box>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default TechnologyPage;
