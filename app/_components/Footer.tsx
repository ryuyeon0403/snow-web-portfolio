import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ReachOut from "../_assets/icon/reachout.svg";
import Image from "next/image";
import MainLayout from "./layout/MainLayout";

function Footer() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
    >
      <MainLayout
        sx={{
          backgroundColor: "#494B50",
          height: "354px",
        }}
      >
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"flex-start"}
        >
          <Stack spacing={"10px"}>
            <Typography
              sx={{ color: "#FFF", fontSize: "40px", fontWeight: 300 }}
            >
              chachasul@naver.com
            </Typography>
            <Typography
              sx={{ color: "#FFF", fontSize: "40px", fontWeight: 300 }}
            >
              10 2520 7547
            </Typography>
            <Typography
              sx={{
                pt: "40px",
                whiteSpace: "pre-wrap",
                color: "rgba(255, 255, 255, 0.50)",
                letterSpacing: "-0.54px",
                fontWeight: 500,
                lineHeight: "27px",
              }}
            >
              WEB APP PUBLISHING MOTION WEB APP{"\n"}PUBLISHING MOTIONWEB APP
              PUBLISHING
            </Typography>
          </Stack>
          <Stack pt={"13px"} spacing={"109px"} alignItems={"flex-end"}>
            <Image src={ReachOut} alt="ReachOut" />
            <Typography sx={{ color: "#B6B6B6" }}>ⓒ2024 chasul</Typography>
          </Stack>
        </Stack>
      </MainLayout>
    </Stack>
  );
}

export default Footer;
