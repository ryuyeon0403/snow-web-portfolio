"use client";
import "@/app/globals.css";
import Header from "@/app/_components/Header";
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import { RecoilRoot } from "recoil";
import Main from "@/app/_components/main/Main";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
});

const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Stack alignItems={"center"}>
          <Stack maxWidth={"1920px"} sx={{ pt: "70px" }}>
            <Header page={1} />
            <Main />
          </Stack>
        </Stack>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default page;
