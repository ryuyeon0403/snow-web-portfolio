"use client";
import "./globals.css";
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import Header from "./_components/Header";
import { RecoilRoot } from "recoil";
import Main from "./_components/main/Main";
import Footer from "./_components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Stack alignItems={"center"}>
          <Stack maxWidth={"1920px"} sx={{ pt: "70px" }}>
            <Header page={0} />
            <Main />
          </Stack>
        </Stack>
        <Footer />
      </RecoilRoot>
    </ThemeProvider>
  );
}
