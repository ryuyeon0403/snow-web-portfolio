"use client";
import Footer from "@/components/Footer";
import Main from "@/components/main/Main";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <Main />
      <Footer />
    </RecoilRoot>
  );
}
