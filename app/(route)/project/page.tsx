"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ProjectFilter from "@/app/_components/project/ProjectFilter";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
});

export default function Project() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Suspense>
          {isMobile ? (
            <>mobile</>
          ) : (
            <>
              <Header page={1} />
              <ProjectFilter />
              <Footer />
            </>
          )}
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
}
