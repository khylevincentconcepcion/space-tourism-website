import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Destination from "../../components/Destination/Destination";
import { StyledContainer, StyledBox } from "./styles";
import data from "../../data.json";
import moonImg from "../../assets/destination/image-moon.webp";
import marsImg from "../../assets/destination/image-mars.webp";
import europaImg from "../../assets/destination/image-europa.webp";
import titanImg from "../../assets/destination/image-titan.webp";
import { Helmet } from "react-helmet-async";

const DestinationPage = () => {
  const [value, setValue] = useState("moon");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Destination</title>
      </Helmet>
      <StyledContainer>
        <Typography
          variant="h4"
          color="textPrimary"
          className="destination-header"
        >
          <span>01</span>
          <span>PICK YOUR DESTINATION</span>
        </Typography>
        <StyledBox>
          <TabContext value={value}>
            <TabPanel value="moon" sx={{ display: { lg: "none" } }}>
              <img src={moonImg} alt={data.destinations[0].name} />
            </TabPanel>
            <TabPanel value="mars" sx={{ display: { lg: "none" } }}>
              <img src={marsImg} alt={data.destinations[1].name} />
            </TabPanel>
            <TabPanel value="europa" sx={{ display: { lg: "none" } }}>
              <img src={europaImg} alt={data.destinations[2].name} />
            </TabPanel>
            <TabPanel value="titan" sx={{ display: { lg: "none" } }}>
              <img src={titanImg} alt={data.destinations[3].name} />
            </TabPanel>
            <Grid container columnSpacing={{ lg: 12 }}>
              <Grid item lg={6} sx={{ sm: { display: "none" } }}></Grid>
              <Grid item lg={6} xs={12}>
                <TabList
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="moon" label="Moon" sx={{ color: "#fff" }} />
                  <Tab value="mars" label="Mars" sx={{ color: "#fff" }} />
                  <Tab value="europa" label="Europa" sx={{ color: "#fff" }} />
                  <Tab value="titan" label="Titan" sx={{ color: "#fff" }} />
                </TabList>
              </Grid>
            </Grid>
            <TabPanel value="moon">
              <Destination
                destination={data.destinations[0]}
                destinationImg={moonImg}
              />
            </TabPanel>
            <TabPanel value="mars">
              <Destination
                destination={data.destinations[1]}
                destinationImg={marsImg}
              />
            </TabPanel>
            <TabPanel value="europa">
              <Destination
                destination={data.destinations[2]}
                destinationImg={europaImg}
              />
            </TabPanel>
            <TabPanel value="titan">
              <Destination
                destination={data.destinations[3]}
                destinationImg={titanImg}
              />
            </TabPanel>
          </TabContext>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default DestinationPage;
