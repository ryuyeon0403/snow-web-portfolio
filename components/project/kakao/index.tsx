"use client";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../styles/kakao.module.css";
import backgroundImage from "../../../assets/image/kakao/background.png";
import backgroundImage2 from "../../../assets/image/kakao/background2.png";
import Image from "next/image";
import number1Content from "../../../assets/image/kakao/number1Content.png";
import number2Content from "../../../assets/image/kakao/number2Content.png";
import ArrowRight from "@/components/icon/ArrowRight";
import { CardImages, SlideImages } from "./data";
import Marquee from "react-fast-marquee";
import leftCard from "../../../assets/image/kakao/leftCard.png";
import rightCard from "../../../assets/image/kakao/rightCard.png";
import leftCard2 from "../../../assets/image/kakao/leftCard2.png";
import rightCard2 from "../../../assets/image/kakao/rightCard2.png";
import imgGroup from "../../../assets/image/kakao/imgGroup.png";
import imgGroup2 from "../../../assets/image/kakao/imgGroup2.png";

export default function Kakao() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      className={styles.content}
    >
      <Image
        src={backgroundImage}
        alt="background"
        placeholder="blur"
        layout="intrinsic"
      />
      <Box className={styles.title}>
        <Stack direction={"row"} spacing={"50px"}>
          <Stack>
            {[
              "TEAM PROJECT",
              "카카오 실무 프로젝트",
              "2200만명의 사용자와 만난 기업 실무 프로젝트",
            ].map((item, index) => (
              <Typography
                key={item}
                className={
                  index == 0
                    ? styles.detail2
                    : index == 1
                    ? styles.heading
                    : styles.body4
                }
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={2}>
            {[
              "TOOL & PERIOD",
              "C4D / Afftereffects\n2023.12 - 2024.3\nContribution 80%",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.detail1 : styles.detail3}
                whiteSpace={"pre-wrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={2}>
            {[
              "BACKGROUND & OVERVIEW",
              "카카오 실무 프로젝트에서 필요한 그래픽 에셋을 작업한 바 있습니다. 작업한 그래픽은 카톡이지 프로젝트에서\n주로 활용되었으며, 브랜디드 콘텐츠에 활용되는 에셋 작업 시 3D 에셋 제작과 2D 에셋 제작을 주로 진행했습니다.\n본 내용은 실제 릴리즈 된 프로젝트 내용을 기반으로 제작 및 작성되어 보안상의 이슈가 없음을 알립니다.",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.detail1 : styles.detail3}
                whiteSpace={"pre-wrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Box>
      {/* 01 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>01</Typography>
          <Stack>
            {["AI CONTENT PROJECT", "2200만명의 유저가 이용한 카톡설명서"].map(
              (item, index) => (
                <Typography
                  key={item}
                  className={index == 0 ? styles.heading3 : styles.detail3}
                  whiteSpace={"pre-wrap"}
                >
                  {item}
                </Typography>
              )
            )}
          </Stack>
          <Stack pl={10}>
            <Typography whiteSpace={"pre-wrap"} className={styles.detail1}>
              카카오톡의 AI 기능 UI 페이지 제작과 콘텐츠 제작을 담당했습니다.
              150만 유저가 사용한 카톡 AI기능{"\n"}의 다양한 사용 형태를
              수집하여, AI기능 사용에 대한 유용성과 즐거움을 전달하고자
              했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 01 Content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#171920 !important", mb: "20px" }}
      >
        <Box maxWidth={"975px"} py={"120px"}>
          <Image
            src={number1Content}
            alt="number1Content"
            placeholder="blur"
            layout="intrinsic"
          />
        </Box>
      </Box>
      {/* 01 Second Content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#171920 !important", mb: "20px" }}
        position={"relative"}
      >
        <Stack
          direction={"row"}
          maxWidth={"1360px"}
          width={"100%"}
          sx={{ position: "absolute", top: "20px" }}
        >
          <Box
            className={styles.button}
            onClick={() => {
              window.open("https://talktips.kakao.com/");
            }}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography className={styles.buttonTxt}>VIEW MORE</Typography>
              <ArrowRight />
            </Stack>
          </Box>
        </Stack>
        <Image
          src={number2Content}
          alt="number2Content"
          placeholder="blur"
          layout="intrinsic"
        />
      </Box>
      {/* 01 Third Content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#171920 !important", mb: "20px" }}
        position={"relative"}
      >
        <Stack
          direction={"row"}
          maxWidth={"1360px"}
          width={"100%"}
          spacing={"20px"}
          py={"112px"}
        >
          {CardImages.map((item, index) => (
            <Box key={index} maxWidth={"321px"}>
              <Image
                src={item}
                alt={`card${index}`}
                placeholder="blur"
                layout="intrinsic"
              />
            </Box>
          ))}
        </Stack>
      </Box>
      {/* 02 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>02</Typography>
          <Stack>
            {[
              "CANAL CONTTENT",
              "연말을 더 유용하게 사용하기 위한 서비스 콘텐츠 발행",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.heading3 : styles.detail3}
                whiteSpace={"nowrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={10}>
            <Typography className={styles.detail1}>
              카카오에서 진행되고 있는 프로젝트와 서비스 중 연말을 유용하게 보낼
              수 있는 컨텐츠를 모아 발행 했습니다. UI 제작 및 콘텐츠 제작을
              담당하여 카카오톡의 소비자들이 연말 시즈널 콘텐츠를 유용하게
              사용할 수 있도록 했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 02 Content */}
      <Box
        className={styles.whiteBox}
        sx={{
          background: "none !important",
          maxWidth: "100% !important",
          mb: 5,
        }}
      >
        <Marquee direction="left" pauseOnHover={true} autoFill={true}>
          <Stack
            direction={"row"}
            spacing={"38px"}
            pr="38px"
            sx={{ overflow: "hidden" }}
          >
            {[0, 1, 2, 3, 4].map((item) => (
              <Box maxWidth={"405px"} key={item}>
                <Image
                  src={SlideImages[item]}
                  alt={`slideCard${item}`}
                  placeholder="blur"
                  layout="intrinsic"
                />
              </Box>
            ))}
          </Stack>
        </Marquee>
      </Box>
      {/* 02 Second Content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#171920 !important", mb: "20px" }}
      >
        <Image
          src={backgroundImage2}
          alt="backgroundImage2"
          placeholder="blur"
          layout="intrinsic"
        />
      </Box>
      {/* 03 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>03</Typography>
          <Stack>
            {["3D GRAPHIC ASSET", "카카오톡 3D 에셋 제작"].map(
              (item, index) => (
                <Typography
                  key={item}
                  className={index == 0 ? styles.heading3 : styles.detail3}
                  whiteSpace={"nowrap"}
                >
                  {item}
                </Typography>
              )
            )}
          </Stack>
          <Stack pl={10}>
            <Typography className={styles.detail1}>
              기업의 다양한 콘텐츠에 활용 가능한 3D 에셋 제작을 의뢰받아 필요에
              따라 다양한 방식으로 활용하도록 상황에 맞는 표정의 이모지를
              모델링하고 제작했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 03 Content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "none !important", mb: "20px" }}
      >
        <Stack direction="row" spacing={"13px"} width={"100%"}>
          <Box className={styles.leftBox} position={"relative"}>
            <Box maxWidth={"418px"} px={10}>
              <Image src={leftCard} alt="leftCard" layout="intrinsic" />
            </Box>
          </Box>
          <Box className={styles.rightBox}>
            <Box maxWidth={"432px"} px={10}>
              <Image src={rightCard} alt="rightCard" layout="intrinsic" />
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* 03 Second2 Content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#38383E !important", mb: "20px" }}
      >
        <Box maxWidth={"1424px"} py={"116px"} px={10}>
          <Image src={imgGroup} alt="imgGroup" layout="intrinsic" />
        </Box>
      </Box>
      {/* 03 Third Content */}
      <Box
        className={styles.whiteBox}
        sx={{
          background: "none !important",
          mb: "20px",
        }}
      >
        <Stack direction="row" spacing={"20px"} width={"100%"}>
          <Box maxWidth={"930px"}>
            <Image src={leftCard2} alt="leftCard2" layout="intrinsic" />
          </Box>
          <Box maxWidth={"930px"}>
            <Image src={rightCard2} alt="rightCard2" layout="intrinsic" />
          </Box>
        </Stack>
      </Box>
      {/* 03 Four Content */}
      <Box
        className={styles.whiteBox}
        sx={{
          background: "none !important",
          mb: "20px",
        }}
      >
        <Box maxWidth={"1507px"} py={"63px"}>
          <Image src={imgGroup2} alt="imgGroup2" layout="intrinsic" />
        </Box>
      </Box>
      {/* FOOTER */}
      <Box className={styles.titleContent}>
        <Typography className={styles.heading3} pb={5}>
          Project infomation
        </Typography>
        <Stack direction="row" justifyContent={"space-between"} spacing={5}>
          <Stack spacing={"20px"}>
            <Typography
              className={styles.caption}
              sx={{ color: "#1B80FF !important" }}
            >
              Overview
            </Typography>
            <Typography className={styles.detail3} whiteSpace={"pre-wrap"}>
              카카오의 마케팅을 위한 브랜디드 콘텐츠의 기획 및 제작 업무를
              담당했습니다. 일관성있는 브랜드 톤앤매너 관리와 콘텐츠 기획{"\n"}
              및 아이데이션, 관련 제작물을 직접 제작하고 운영했습니다. BX적
              관점에 입각해 카카오의 온드미디어 콘텐츠를 기획, 생산했습니다.
            </Typography>
          </Stack>
          <Stack spacing={5} direction={"row"}>
            <Stack spacing={"20px"}>
              <Typography
                className={styles.caption}
                sx={{ color: "#1B80FF !important" }}
              >
                Period
              </Typography>
              <Typography className={styles.detail3}>
                2023.12.05 - 2023.03.15
              </Typography>
            </Stack>
            <Stack spacing={"20px"}>
              <Typography
                className={styles.caption}
                sx={{ color: "#1B80FF !important" }}
              >
                Role
              </Typography>
              <Typography className={styles.detail3} whiteSpace={"pre-wrap"}>
                실무 프로젝트{"\n"}
                서비스 기획, 3D 디자인, UI 디자인
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
