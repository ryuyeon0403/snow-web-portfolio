import { Stack, SxProps, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SVGLogo from "../_assets/icon/logo.svg";
import { useRouter } from "next/navigation";
import { idxState } from "../_utils/recoil/global";
import { useRecoilState } from "recoil";
import MainLayout from "./layout/MainLayout";

const fontStyle: SxProps<Theme> = {
  p: "10px",
  fontSize: "24px",
  fontWeight: 500,
  cursor: "pointer",
  color: "#9F9F9F",
};

const Header = ({ page }: { page: number }) => {
  const router = useRouter();
  const [idx, setIdx] = useRecoilState(idxState);

  const handleClick = (idx: number) => {
    setIdx(idx);

    const routerUrl = idx == 0 ? "/" : idx == 1 ? "/project" : "about";

    router.push(routerUrl);
  };

  useEffect(() => {
    setIdx(page);
  }, [page]);

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
              sx={{ ...fontStyle, ...(idx == 0 && { color: "#000" }) }}
              onClick={() => handleClick(0)}
            >
              HOME
            </Typography>
            <Typography
              sx={{ ...fontStyle, ...(idx == 1 && { color: "#000" }) }}
              onClick={() => handleClick(1)}
            >
              PROJECT
            </Typography>
            <Typography
              sx={{ ...fontStyle, ...(idx == 2 && { color: "#000" }) }}
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
