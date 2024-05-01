"use client";
import ArrowRightCircle from "@/components/icon/ArrowRightCircle";
import ArrowRightCircle2 from "@/components/icon/ArrowRightCircle2";
import FemaleChip from "@/components/icon/FemaleChip";
import MaleChip from "@/components/icon/MaleChip";
import Polygon from "@/components/icon/Polygon";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backgroundImage from "../../../assets/image/naver/background.png";
import backgroundImage2 from "../../../assets/image/naver/background2.png";
import backgroundImage3 from "../../../assets/image/naver/background3.png";
import fiveContent from "../../../assets/image/naver/fiveContent.png";
import styles from "../../../styles/naver.module.css";
import { naverContentImages, naverImages } from "./data";
import NaverYoutube from "../news/NaverYoutube";

export default function Naver() {
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
              "PERSONAL PROJECT",
              "네이버 플러스 멤버십 WEB",
              "쉬운 뉴스 리딩을 위한 새로운 뉴스 지식 플랫폼",
            ].map((item, index) => (
              <Typography
                key={item}
                className={
                  index == 0
                    ? styles.detail2
                    : index == 1
                    ? styles.heading2
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
              "C4D / Aftereffects\n2023.03 - 2023.06\nContribution 100%",
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
              "TOOL & PERIOD",
              "스마트폰 사용에 익숙한 MZ세대의 낮은 문해력 문제가 이슈화되면서 MZ세대는 양질의 정보를 얻으려는 노력을 하지 않는다는 내용의\n기사를 쉽게 찾아볼 수 있게 되었습니다. 그러나 리서치 결과, 이들은 실질적 정보에 관심이 많지만 이를 찾아 여러 플랫폼을 헤매고 있었\n습니다. 본 프로젝트는 이러한 니즈를 채우고, 개인에게 맞는 균형잡힌 정보를 제공하며, 소통 기능이 결합된 서비스 입니다.",
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
            {["Problem Define", "PC View Usability"].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.heading3 : styles.detail3}
                whiteSpace={"pre-wrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={10}>
            <Typography whiteSpace={"pre-wrap"} className={styles.detail1}>
              네이버플러스 이용자 50명을 대상으로 설문조사를 진행한 결과
              이용자들은 PC뷰에서의 사용성 저하에{"\n"}대한 아쉬움을 표하고
              있었습니다. 하여 브랜드를 충실히 반영하되 PC뷰의 사이즈를
              적극적으로 활용할{"\n"}수 있는 홈페이지를 디자인했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 01 content */}
      <Box className={styles.whiteBox}>
        <Stack
          direction={"row"}
          py="207px"
          maxWidth={"1350px"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack spacing={"20px"} alignItems={"center"}>
            <Box maxWidth={"420px"}>
              <Image
                src={naverImages[0]}
                alt="number1Content"
                placeholder="blur"
                layout="intrinsic"
              />
            </Box>
            <Box maxWidth={"420px"}>
              <Image
                src={naverImages[0]}
                alt="number1Content"
                placeholder="blur"
                layout="intrinsic"
              />
            </Box>
            <Typography
              className={styles.detail1}
              sx={{ color: "#6EB6B8 !important" }}
            >
              기존 네이버 멤버십 PC 뷰
            </Typography>
          </Stack>
          <Stack maxWidth={"660px"} width={"100%"}>
            <Typography
              className={styles.heading3}
              sx={{ color: "#FFF !important" }}
              whiteSpace={"pre-wrap"}
            >
              기존의 페이지에서 문제가 되었던{"\n"}비확장형 PC뷰를 개선하고자
              했습니다.
            </Typography>
            <Stack
              direction={"row"}
              pt={"33px"}
              alignItems={"flex-start"}
              spacing={"23px"}
              pb={3}
            >
              <Box className={styles.box} mt={"3px"}>
                <Typography className={styles.boxText}>Q1</Typography>
              </Box>
              <Typography
                className={styles.body4}
                sx={{ color: "#FFFFFF !important" }}
                whiteSpace={"pre-wrap"}
              >
                네이버 플러스 멤버십의 PC뷰를 보고 든 느낌 혹은{"\n"}생각 중
                가장 가까운 항목은 무엇인가요?
              </Typography>
            </Stack>
            <Box className={styles.box0} width={"100%"}>
              <Box className={styles.box2} width={"100%"}>
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                  <FemaleChip />
                  <Typography className={styles.box2Text}>
                    다양한 정보가 작은 면적에 보여 답답한 인상을 줍니다.
                  </Typography>
                </Stack>
              </Box>
              <Typography
                className={styles.box0Text}
                sx={{ textAlign: "right", width: "100%", pr: 3 }}
              >
                43%
              </Typography>
            </Box>
            <Box className={styles.box0} width={"100%"} mt={"23px"}>
              <Box className={styles.box2} width={"100%"}>
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                  <MaleChip />
                  <Typography className={styles.box2Text}>
                    글로 된 내용이 많아 정보를 읽는데 부담을 느낍니다.
                  </Typography>
                </Stack>
              </Box>
              <Typography
                className={styles.box0Text}
                sx={{ textAlign: "right", width: "100%", pr: 3 }}
              >
                30%
              </Typography>
            </Box>
            <Typography className={styles.detail1_1} pt={"41px"}>
              <span style={{ color: "#6EB6B8", paddingRight: "3px" }}>
                대상
              </span>{" "}
              멤버십 페이지 확인 경험이 있는 20-40대 150명
              <span style={{ color: "#6EB6B8", paddingLeft: "24px" }}>
                기간
              </span>{" "}
              약 2주간 진행
              <span style={{ color: "#6EB6B8", paddingLeft: "24px" }}>
                플랫폼
              </span>{" "}
              구글폼
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 01 second content */}
      <Box
        className={styles.whiteBox}
        sx={{ mt: "20px", background: "#0F1A25 !important" }}
      >
        <Stack alignItems={"center"} pt={"123px"} pb={"83px"}>
          <Typography className={styles.caption}>Insight & Solution</Typography>
          <Typography
            className={styles.heading3}
            sx={{ color: "#FFF !important", pt: "19px", pb: "17px" }}
          >
            사용자 의견을 토대로, 다음과 같은 해결방안을 도출했습니다.
          </Typography>
          <Typography
            className={styles.detail1}
            sx={{ color: "#FFFFFF !important", opacity: 0.7 }}
            whiteSpace={"pre-wrap"}
            textAlign={"center"}
          >
            멤버십 가입으로 연결이 되는 PC 웹 페이지는 모바일 환경에 국한되는
            반응형 UI 디자인으로 구성되어 아쉬운 사용성을{"\n"}전달하며, 경직된
            브랜딩으로 인해 서비스의 긍정적인 이미지가 약하게 전달되고 있습니다.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={5}
          justifyContent={"center"}
          width={"100%"}
          position={"relative"}
          pb={"122px"}
        >
          <Box
            sx={{
              position: "absolute",
              left: "51%",
              top: "50.5%",
              transform: "translate(-51%, -50.5%)",
            }}
          >
            <ArrowRightCircle />
          </Box>
          <Box className={styles.contentBox} width={"100%"}>
            <Box
              sx={{ background: "#C7D1E3", borderRadius: "12px 12px 0px 0px" }}
            >
              <Typography className={styles.body1} pt={"43px"} pb={"36px"}>
                사용자 의견기반 인사이트
              </Typography>
            </Box>
            <Stack pt={"45px"} px={10}>
              <Typography
                className={styles.body2}
                sx={{ color: "#489999 !important", pb: 1 }}
              >
                모바일에 맞춘 UI로 PC환경에서의 탐색 불편 증가
              </Typography>
              <Typography
                className={styles.detail1}
                whiteSpace={"pre-wrap"}
                pb={"52px"}
              >
                모바일에 맞는 좁은 면적의 UI로 인해 PC뷰 내의 메뉴 바와{"\n"}
                바디 영역 내에서 원하는정보를 빠르게 찾을 수 없습니다.
              </Typography>
              <Divider className={styles.divider} />
              <Typography
                className={styles.body2}
                sx={{ color: "#489999 !important", pb: 1, pt: "41px" }}
              >
                탄탄한 브랜딩 결과물에 대한 수요
              </Typography>
              <Typography
                className={styles.detail1}
                whiteSpace={"pre-wrap"}
                pb={"52px"}
              >
                PC뷰 개선에 대한 의견 수집 결과, 정보 인지 뿐 아니라 탄탄한
                {"\n"}
                브랜딩 기획을 풀어낸 결과물에 대한 니즈가 있었습니다
              </Typography>
            </Stack>
          </Box>
          <Box className={styles.contentBox} width={"100%"}>
            <Box
              sx={{ background: "#6EB6B8", borderRadius: "12px 12px 0px 0px" }}
            >
              <Typography
                className={styles.body1}
                pt={"43px"}
                pb={"36px"}
                sx={{ color: "#FFF !important" }}
              >
                문제점 해결방안
              </Typography>
            </Box>
            <Stack pt={"45px"} px={10}>
              <Typography
                className={styles.body2}
                sx={{ color: "#489999 !important", pb: 1 }}
              >
                PC 화면에 적합한 레이아웃 구성
              </Typography>
              <Typography
                className={styles.detail1}
                whiteSpace={"pre-wrap"}
                pb={"52px"}
              >
                PC뷰에서 구현할 수 있는 와이드한 화면을 구성하며, 혜택 정보를
                한번에 확인할 수 있는 메뉴탭을 구현합니다.
              </Typography>
              <Divider className={styles.divider} />
              <Typography
                className={styles.body2}
                sx={{ color: "#489999 !important", pb: 1, pt: "41px" }}
              >
                기업가치와 멤버십 내용을 함께 어필하는 브랜딩 구축
              </Typography>
              <Typography
                className={styles.detail1}
                whiteSpace={"pre-wrap"}
                pb={"52px"}
              >
                브랜드의 컨셉과 가치를 적극적으로 반영하면서도, 사용자들이 쉽게
                접근하고 이해할 수 있는 직관적인 디자인을 제공합니다.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      {/* 01 third Content  */}
      <Box
        className={styles.whiteBox}
        sx={{ mt: "20px", background: "#F4F5F6 !important" }}
      >
        <Image
          src={backgroundImage2}
          alt="background2"
          placeholder="blur"
          layout="intrinsic"
        />
      </Box>
      {/* 01 four content */}
      {/* 01 five content */}
      <Box
        className={styles.whiteBox}
        sx={{ mt: "20px", background: "#000 !important" }}
      >
        <Stack direction={"row"} spacing={"80px"}>
          <Stack pt={"241px"} spacing={"20px"} alignItems={"flex-start"}>
            <Typography className={styles.caption}>solution</Typography>
            <Typography
              className={styles.heading3}
              sx={{ color: "#FFF !important" }}
              whiteSpace={"pre-wrap"}
            >
              기획을 토대로 실제{"\n"}웹페이지를 개발했습니다.
            </Typography>
            <Typography className={styles.detail1_2} whiteSpace={"pre-wrap"}>
              <span style={{ color: "#B6B6B6" }}>
                애니메이션을 활용하여 사용자들의 관심을 끌고, 이를{"\n"}통해
                브랜드 가치를 강조하기 위해
              </span>
              HTML, CSS,{"\n"}JavaScript를 활용
              <span style={{ color: "#B6B6B6" }}>
                하여 페이지를 구현했습니다.
              </span>
            </Typography>
            <Typography className={styles.tool}>
              [TOOL] PhP storm After Effects
            </Typography>
            <Stack alignItems={"center"} pt={10} pl={"17px"}>
              <Stack alignItems={"center"} className={styles.animationBtn}>
                <Box className={styles.clickBtn}>
                  <Typography className={styles.clickTxt}>CLICK</Typography>
                </Box>
                <Box sx={{ mt: -1 }}>
                  <Polygon />
                </Box>
              </Stack>
              <Box
                className={styles.interBox}
                onClick={() =>
                  window.open("https://youtu.be/IWIY13k7F68", "_blank")
                }
              >
                <Typography className={styles.interTxt} pl={"22px"}>
                  인터랙티브 웹 확인하기
                </Typography>
                <Box pr={"14px"} display={"flex"} alignItems={"center"}>
                  <ArrowRightCircle2 />
                </Box>
              </Box>
            </Stack>
          </Stack>
          <Box position={"relative"}>
            <Box maxWidth={"915px"}>
              <Image
                src={backgroundImage3}
                alt="fiveBg"
                layout="intrinsic"
                placeholder="blur"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "5%",
                top: "40%",
                transform: "translate(-17%, -40%)",
                width: "100%",
              }}
            >
              <Box width={"1142px"}>
                <Image
                  src={fiveContent}
                  alt="fiveContent"
                  layout="intrinsic"
                  placeholder="blur"
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* 02 Content Youtube */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#C7D1E3 !important", mt: "20px" }}
      >
        <NaverYoutube />
      </Box>
      {/* 02 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>02</Typography>
          <Stack>
            {["Page design", "직관적인 화면 제작을 통한 디자인 솔루션"].map(
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
              문제점 해결을 위하여 브랜드 아이덴티티를 녹여내는 일러스트를
              제작한 뒤 백터 그래픽화 하였습니다. 페이지 구현을 통하여 사용
              편의성을 높이고 서비스에 대한 브랜드 경험을 충실히 재고하고자
              했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {naverContentImages.map((item, index) => (
        <Box
          className={styles.whiteBox}
          sx={{ mt: "20px", background: "#F4F5F6 !important" }}
          key={`boxImage-${index}`}
        >
          <Image
            src={naverContentImages[index]}
            alt={`number2Content${index}`}
            placeholder="blur"
            layout="intrinsic"
          />
        </Box>
      ))}
      {/* FOOTER */}
      <Box className={styles.titleContent}>
        <Typography className={styles.heading3} pb={5}>
          Project infomation
        </Typography>
        <Stack direction="row" justifyContent={"space-between"} spacing={5}>
          <Stack spacing={"20px"} alignItems={"flex-start"}>
            <Typography
              className={styles.caption}
              sx={{ color: "#489999 !important" }}
            >
              프로젝트 오버뷰
            </Typography>
            <Typography className={styles.detail1} whiteSpace={"pre-wrap"}>
              불편한 PC뷰에 대한 인터뷰를 바탕으로 네이버 플러스 멤버십의
              프로모션 사이트를 제작 했습니다. 높은 범용성을{"\n"}가진 서비스의
              다채로운 이미지에 초점을 맞추어 ‘네이버 플러스가 이용되는 도시
              속에서의 다양한 라이프 스타일’{"\n"}이라는 주제로 스토리텔링 컨셉
              디자인을 기획했습니다.
            </Typography>
          </Stack>
          <Stack spacing={"51px"} direction={"row"}>
            <Stack spacing={"20px"} alignItems={"flex-start"}>
              <Typography
                className={styles.caption}
                sx={{ color: "#489999 !important" }}
              >
                Role
              </Typography>
              <Typography className={styles.detail1} whiteSpace={"pre-wrap"}>
                개인 프로젝트(기여도 100%){"\n"}
                서비스 기획, UI 그래픽 작업,{"\n"}HTML/CSS
              </Typography>
            </Stack>
            <Stack spacing={"20px"} alignItems={"flex-start"}>
              <Typography
                className={styles.caption}
                sx={{ color: "#489999 !important" }}
              >
                프로젝트 요청 기간 & 기여도
              </Typography>
              <Typography className={styles.detail1}>
                2022.09.01 - 2022.11.10
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* end Stack */}
    </Stack>
  );
}
