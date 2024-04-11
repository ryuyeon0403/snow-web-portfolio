"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provide from "@/components/Provide";
import Main from "@/components/main/Main";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
});

export default function Home() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Suspense>
          {isMobile ? (
            <>mobile</>
          ) : (
            <>
              <Header />
              <Main />
              <Provide />
              <Footer />
            </>
          )}
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
}
