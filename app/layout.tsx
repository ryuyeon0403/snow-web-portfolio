import "../styles/globals.css";

export const metadata = {
  title: "차설 포트폴리오",
  description: "차설 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
