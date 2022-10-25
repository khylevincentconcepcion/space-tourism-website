import { Box, Button, Stack, Typography } from "@mui/material";
import { StyledContainer, StyledBox } from "./styles";
import { useState } from "react";
import anoushehImg from "../../assets/crew/image-anousheh-ansari.webp";
import douglasImg from "../../assets/crew/image-douglas-hurley.webp";
import markImg from "../../assets/crew/image-mark-shuttleworth.webp";
import victorImg from "../../assets/crew/image-victor-glover.webp";
import Crew from "../../components/Crew/Crew";
import data from "../../data.json";
import { Helmet } from "react-helmet-async";

const CrewsPage = () => {
  const [value, setValue] = useState("douglas");
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Crews</title>
      </Helmet>
      <StyledContainer>
        <Typography variant="h4" color="textPrimary" className="crew-header">
          <span>02</span>
          <span>MEET YOUR CREW</span>
        </Typography>
        <StyledBox>
          <Box>
            {value === "douglas" && (
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <img src={douglasImg} alt={data.crew[0].name} />
              </Box>
            )}
            {value === "mark" && (
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <img src={markImg} alt={data.crew[1].name} />
              </Box>
            )}
            {value === "victor" && (
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <img src={victorImg} alt={data.crew[2].name} />
              </Box>
            )}
            {value === "anousheh" && (
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <img src={anoushehImg} alt={data.crew[3].name} />
              </Box>
            )}
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              marginBottom: "2rem",
            }}
            justifyContent="center"
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
          <Box>
            {value === "douglas" && (
              <Crew
                value={value}
                setValue={setValue}
                crew={data.crew[0]}
                crewImg={douglasImg}
              />
            )}
            {value === "mark" && (
              <Crew
                value={value}
                setValue={setValue}
                crew={data.crew[1]}
                crewImg={markImg}
              />
            )}
            {value === "victor" && (
              <Crew
                value={value}
                setValue={setValue}
                crew={data.crew[2]}
                crewImg={victorImg}
              />
            )}
            {value === "anousheh" && (
              <Crew
                value={value}
                setValue={setValue}
                crew={data.crew[3]}
                crewImg={anoushehImg}
              />
            )}
          </Box>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default CrewsPage;
