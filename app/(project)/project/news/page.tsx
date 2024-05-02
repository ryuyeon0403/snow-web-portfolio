"use client";
import News from "@/components/project/news";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Gotham-Bold",
  },
});

export default function page() {
  return (
    <ThemeProvider theme={theme}>
      <News />
    </ThemeProvider>
  );
}
