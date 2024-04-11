import React from "react";
import Image from "next/legacy/image";
import Provides from "../assets/icon/provides.svg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MainLayout from "./layout/MainLayout";
import { myCareerList } from "./main/Main";

function Provide() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
    >
      <Image src={Provides} alt="provides" />
      <MainLayout sx={{ px: "0px" }}>
        <Grid container pt={"75px"} pb="43px">
          {myCareerList.map((item, index) => (
            <Grid item xs={3} key={`myCareerList-${index}`}>
              <Stack spacing={"6px"}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "45px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#777",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "28.8px",
                    letterSpacing: "-0.54px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {item.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </MainLayout>
    </Stack>
  );
}

export default Provide;
