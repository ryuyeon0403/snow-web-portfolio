"use client";
import Benz from "@/app/_components/project/detail/Benz";
import ES from "@/app/_components/project/detail/ES";
import Elec from "@/app/_components/project/detail/Elec";
import Kakao from "@/app/_components/project/detail/Kakao";
import Naver from "@/app/_components/project/detail/Naver";
import News from "@/app/_components/project/detail/News";
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import "../../../globals.css";
import { RecoilRoot } from "recoil";
import Header from "@/app/_components/Header";

type Props = {
  params: {
    id: string;
  };
};

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
});
function ProjectDetail({ params: { id } }: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const idCheck = (id: string) => {
    switch (id) {
      case "0":
        return <Kakao />;
      case "1":
        return <News />;
      case "2":
        return <Naver />;
      case "3":
        return <ES />;
      case "4":
        return <Benz />;
      case "5":
        return <Elec />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>{isMobile ? null : idCheck(id)}</RecoilRoot>
    </ThemeProvider>
  );
}

export default ProjectDetail;
