"use client";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { RecoilRoot } from "recoil";
import Header from "./_components/Header";
import Main from "./_components/main/Main";
import "./globals.css";
import Provide from "./_components/Provide";
import Footer from "./_components/Footer";

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
        {isMobile ? (
          <>mobile</>
        ) : (
          <>
            <Header page={0} />
            <Main />
            <Provide />
            <Footer />
          </>
        )}
      </RecoilRoot>
    </ThemeProvider>
  );
}
