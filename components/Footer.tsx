import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ReachOut from "@icon/reachout.svg";
import Image from "next/legacy/image";
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
          minHeight: { xs: "auto", md: "354px" },
          py: { xs: "40px", md: "0px" },
        }}
      >
        <Stack
          justifyContent={"space-between"}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "flex-start" }}
          gap={{ xs: 4, md: 0 }}
        >
          <Stack spacing={"10px"}>
            <Typography
              sx={{ color: "#FFF", fontSize: { xs: "22px", md: "40px" }, fontWeight: 300 }}
            >
              chachasul@naver.com
            </Typography>
            <Typography
              sx={{ color: "#FFF", fontSize: { xs: "22px", md: "40px" }, fontWeight: 300 }}
            >
              10 2520 7547
            </Typography>
            <Typography
              sx={{
                pt: { xs: "20px", md: "40px" },
                whiteSpace: "pre-wrap",
                color: "rgba(255, 255, 255, 0.50)",
                letterSpacing: "-0.54px",
                fontWeight: 500,
                lineHeight: "27px",
                fontSize: { xs: "13px", md: "16px" },
              }}
            >
              WEB APP PUBLISHING MOTION WEB APP{"\n"}PUBLISHING MOTIONWEB APP
              PUBLISHING
            </Typography>
          </Stack>
          <Stack pt={{ xs: 0, md: "13px" }} spacing={{ xs: "20px", md: "109px" }} alignItems={"flex-end"} direction={{ xs: "row-reverse", md: "column" }} justifyContent={{ xs: "space-between", md: "flex-start" }} width={{ xs: "100%", md: "auto" }}>
            <Image src={ReachOut} alt="ReachOut" />
            <Typography sx={{ color: "#B6B6B6", fontSize: { xs: "13px", md: "16px" } }}>ⓒ2024 chasul</Typography>
          </Stack>
        </Stack>
      </MainLayout>
    </Stack>
  );
}

export default Footer;
