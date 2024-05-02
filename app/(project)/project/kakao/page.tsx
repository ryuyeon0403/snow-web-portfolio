"use client";
import Kakao from "@/components/project/kakao";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Gotham-Bold",
  },
});

export default function page() {
  return (
    <ThemeProvider theme={theme}>
      <Kakao />
    </ThemeProvider>
  );
}
