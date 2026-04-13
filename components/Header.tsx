"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import GroupSvg from "../assets/svg/group.svg";
import styles from "../styles/header.module.css";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      sx={{
        position: "fixed",
        zIndex: 900,
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(2.5px)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        maxWidth={"1360px"}
        py={{ xs: 1.5, md: 2 }}
        px={{ xs: "20px", md: "40px", lg: "0px" }}
      >
        <Typography className={styles.body2} sx={{ fontSize: { xs: "16px", md: "24px" } }}>CHASUL PORTFOLIO</Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Typography className={styles.body2_1} sx={{ fontSize: { xs: "16px", md: "24px" }, width: { xs: "auto", md: "121px" }, mr: { xs: 1, md: 0 } }}>
            PROJECT
          </Typography>
          <Image src={GroupSvg} alt="group" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
