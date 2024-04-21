"use client";
import Footer from "@/components/Footer";
import Main from "@/components/main/Main";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { RecoilRoot } from "recoil";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
});

export default function Home() {
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        {mobile ? (
          <>mobile</>
        ) : (
          <>
            {/* <Header /> */}
            <Main />
            {/* <Provide /> */}
            <Footer />
          </>
        )}
      </RecoilRoot>
    </ThemeProvider>
  );
}
