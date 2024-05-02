"use client";
import Naver from "@/components/project/naver";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Gotham-Bold",
  },
});

export default function page() {
  return (
    <ThemeProvider theme={theme}>
      <Naver />
    </ThemeProvider>
  );
}
