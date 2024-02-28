"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import SVGLanding from "../../_assets/icon/landing.svg";
import Project from "../../_assets/icon/project.svg";
import About from "../../_assets/icon/about.svg";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import bg1 from "../../_assets/img/bg1.png";
import bg2 from "../../_assets/img/bg2.png";
import bg3 from "../../_assets/img/bg3.png";
import bg4 from "../../_assets/img/bg4.png";
import bg5 from "../../_assets/img/bg5.png";
import bg6 from "../../_assets/img/bg6.png";

interface CardType {
  title: string;
  desc: string;
  imageUrl: string;
  chipList: string[];
  color: string;
  width: number;
  height: number;
}

interface History {
  title: string;
  desc: string;
}

export const myCareerList: History[] = [
  {
    title: "학력",
    desc: "연세대학교 시각디자인과 / 디지털예술학과 졸업\n연세대학교 신촌캠퍼스 디지털예술학과 연계전공\n연세대학교 미래캠퍼스 시각디자인과 편입\n예일여자고등학교",
  },
  {
    title: "경력",
    desc: "카카오  ㅣ  2023.12 - 현재\n동아일보   ㅣ   2023.6 - 2023.11\n대학내일 ES : NHR  ㅣ  2022.7-2023.5\n(주)나로나오   ㅣ   2021.8 - 2021.10",
  },
  {
    title: "어학 l 자격증",
    desc: "Opic IH  l  2023.2\nGTQ 자격증 1급 ㅣ 2023.11\nACA 국제 포토샵 자격증 1급 ㅣ 2021.9\n운전면허증 2종 보통",
  },
  {
    title: "수상",
    desc: "GTQ 자격증 1급 ㅣ 2023.11\nACA 국제 포토샵 자격증 1급 ㅣ 2021.9\n운전면허증 2종 보통",
  },
];

const cardSectionDataList: CardType[] = [
  {
    title: "kakao : 브랜디드 콘텐츠 실무 프로젝트",
    desc: "카카오 기업 재직기간동안 진행한 카카오톡 브랜드 콘텐츠 프로젝트 입니다.",
    imageUrl: "imageUrl1",
    chipList: ["실무 프로젝트", "카카오", "카카오톡"],
    color: "#FAE100",
    width: 354,
    height: 434,
  },
  {
    title: "NEW SNACK APP PROJECT",
    desc: "뉴미디어 시대, 젠지세대를 위해 새롭게 태어난 뉴스 앱 프로젝트 입니다.",
    imageUrl: "imageUrl1",
    chipList: ["APP", "VIDEO", "3D"],
    color: "#1B80FF",
    width: 497,
    height: 461,
  },
  {
    title: "NAVER + MABERSHIP REBRANDING",
    desc: "퍼블리싱으로 홈페이지를 구현한 네이버 맴버십 브랜딩 프로젝트 입니다.",
    imageUrl: "imageUrl1",
    chipList: ["WEB", "CSS/HTML", "PUBLISHING", "그래픽"],
    color: "#6EB6B8",
    width: 428.423,
    height: 331.042,
  },
  {
    title: "대학내일 ES : NHR 실무 프로젝트",
    desc: "NHR기업 재직기간동안 진행한 UX·UI 프로젝트 입니다.",
    imageUrl: "imageUrl1",
    chipList: ["실무 프로젝트", "NHR", "커리어톡"],
    color: "#ECF4F7",
    width: 576.136,
    height: 307.137,
  },
  {
    title: "MERCEDES BENZ REDESIGN",
    desc: "메르세데스 벤츠 코리아 리브랜딩 프로젝트 입니다.",
    imageUrl: "imageUrl1",
    chipList: ["WEB", "리디자인", "편집디자인"],
    color: "#e9e9e9",
    width: 822,
    height: 462,
  },
  {
    title: "ELECPLAN",
    desc: "전기차의 수요 급증에 맞추어 설계한 전기차 예약 앱 프로젝트입니다.",
    imageUrl: "imageUrl1",
    chipList: ["APP", "그래픽", "일러스트"],
    color: "#e9e9e9",
    width: 822,
    height: 462,
  },
];

function Main() {
  const imageList: Array<StaticImageData> = [bg1, bg2, bg3, bg4, bg5, bg6];
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      sx={{ pt: "689px" }}
    >
      <MainLayout sx={{ px: "0px" }}>
        <Image src={SVGLanding} alt="landing" />
        <Divider
          sx={{
            width: "100%",
            border: "1px solid #CECECE",
            mt: "100px",
            mb: "118px",
          }}
        />
        <Stack direction={"row"} justifyContent={"space-between"} pb="84px">
          <Image src={Project} alt="landing" />
          <Typography
            sx={{
              whiteSpace: "pre-wrap",
              textTransform: "uppercase",
              color: "#B6B6B6",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            An itemized list of practical and personal{"\n"}projects. Mainly
            apps and web projects.{"\n"}
            Other works include video, publishing, etc
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {cardSectionDataList.map((item, index) => (
            <Grid item xs={6} key={`cardItem-${index}`} alignItems={"center"}>
              <Stack spacing={2}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: "462px",
                    maxHeight: "462px",
                    backgroundColor: item.color,
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: index == 0 ? "54%" : "51%",
                      left: index == 2 ? "45%" : index == 3 ? "55%" : "50%",
                      transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
                    }}
                  >
                    <Image
                      src={imageList[index]}
                      width={item.width}
                      height={item.height}
                      quality={85}
                      layout="fixed"
                      alt="image"
                    />
                  </Box>
                </Box>
                <Stack alignItems={"left"}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "45px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      lineHeight: "30px",
                      pb: "3px",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Stack direction={"row"} spacing={"12px"}>
                    {item.chipList.map((chip, index) => (
                      <Box
                        key={`chip-${index}`}
                        sx={{
                          borderRadius: "40px",
                          border: "1.291px solid var(--gray_3, #B6B6B6)",
                          p: "5.16px 12.91px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "22px",
                            ...(chip.includes("실무") && { fontWeight: 700 }),
                          }}
                        >
                          {chip}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Divider
          sx={{
            width: "100%",
            border: "1px solid #CECECE",
            mt: "118px",
            mb: "122px",
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          pb={"92px"}
        >
          <Image src={About} alt="about" />
          <Box
            sx={{
              boxShadow: "0px 0px 10px 0px rgba(210, 210, 210, 0.20);",
              height: "422px",
              width: "362px",
              backgroundColor: "grey",
            }}
          ></Box>
        </Stack>
      </MainLayout>
    </Stack>
  );
}

export default Main;
