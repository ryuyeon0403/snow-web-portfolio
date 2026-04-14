import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Metadata } from "next";
import "../styles/globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata: Metadata = {
  metadataBase: new URL("https://snow-web-portfolio.vercel.app"),
  title: "CHASUL PORTFOLIO",
  description: "DESIGN PROJECT / UX-UI / GUI / CONTENTS",
  openGraph: {
    images: [{ url: "/opengraph-image.png", alt: "meta-image" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
