"use client";

import { Stack, SxProps, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import SVGLogo from "../_assets/icon/logo.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { idxState } from "../_utils/recoil/global";
import { useRecoilState } from "recoil";
import MainLayout from "./layout/MainLayout";
import gsap from "gsap";
import scrollToPlugin from "gsap/dist/ScrollToPlugin";
import scrollTrigger from "gsap/dist/ScrollTrigger";

const fontStyle: SxProps<Theme> = {
  p: "10px",
  fontSize: "24px",
  fontWeight: 500,
  cursor: "pointer",
  color: "#9F9F9F",
};

const Header = () => {
  const router = useRouter();
  gsap.registerPlugin(scrollToPlugin, scrollTrigger);

  const searchParams = useSearchParams();
  const about = searchParams.get("about");
  const path = usePathname();

  const handleClick = (idx: number) => {
    if (idx == 0) {
      router.push("/");
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: 0, offsetY: 150 },
      });
    } else if (idx == 1) {
      router.push("/project");
    } else if (idx == 2) {
      router.push("/?about=true");
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: "#About", offsetY: 150 },
      });
    }
  };

  useEffect(() => {
    if (about) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: "#About", offsetY: 150 },
      });
    }
  }, []);

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      sx={{
        position: "fixed",
        zIndex: 900,
        pt: "55px",
        backgroundColor: "rgba(233,233,233,0.9)",
        backdropFilter: "blur(2.5px)",
      }}
    >
      <MainLayout sx={{ px: "120px" }}>
        <Stack direction={"row"} alignItems={"center"} spacing={"100px"}>
          <Image src={SVGLogo} alt="logo" />
          <Stack direction={"row"} spacing={4}>
            <Typography
              sx={{
                ...fontStyle,
                ...(path == "/" && !about && { color: "#000" }),
              }}
              onClick={() => handleClick(0)}
            >
              HOME
            </Typography>
            <Typography
              sx={{
                ...fontStyle,
                ...(path == "/project" && { color: "#000" }),
              }}
              onClick={() => handleClick(1)}
            >
              PROJECT
            </Typography>
            <Typography
              sx={{ ...fontStyle, ...(about && { color: "#000" }) }}
              onClick={() => handleClick(2)}
            >
              ABOUT
            </Typography>
          </Stack>
        </Stack>
      </MainLayout>
    </Stack>
  );
};

export default Header;
