"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import styles from "../../../styles/nhr.module.css";
import backgroundImage from "../../../assets/image/nhr/background.png";
import backgroundImage2 from "../../../assets/image/nhr/background2.png";
import Image from "next/image";
import {
  nhrBoxImages,
  nhrContentImages,
  nhrImages,
  nhrThirdContentImages,
} from "./data";
import colorContent from "../../../assets/image/nhr/colorContent.png";
import textContent from "../../../assets/image/nhr/textContent.png";
import footerContent from "../../../assets/image/nhr/footerContent.png";

export default function NHR() {
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
        <Stack
          direction={"row"}
          spacing={"50px"}
          justifyContent={"space-between"}
        >
          <Stack>
            {["TEAM PROJECT", "커리어톡 프로젝트"].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.detail2 : styles.heading2}
              >
                {item}
              </Typography>
            ))}
            <Typography className={styles.body4}>
              기업의 <span style={{ color: "#00B1CC" }}>스마트한 정보관리</span>
              가 시작됩니다.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            {[
              "TOOL & PERIOD",
              "Figma / C4D\n2022.07 - 2022.09\nDesign Contribution 70%",
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
              "기업측에는 핵심 인재 확보의 시작인 채용 행사부터 스마트한 관리가, 핵심 인재측에는 효율적이고 직관적인 참여 방법과 정보관리 기능이 필요했습니다. 이에 대한 솔루션으로 ‘커리어톡’ 서비스가 탄생하게 되었습니다. 대학내일 ES 자회사 NHR Communications에서 프리랜서로 재직하며 진행하였으며, 본 내용은 라이브 내용을 기반으로 제작 및 작성하여 보안상의 이슈가 없음을 알립니다..",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.detail1 : styles.detail3}
                whiteSpace={"pre-wrap"}
                maxWidth={"760px"}
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
            {["Project Role", "Main Role in Career Talk"].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.heading3 : styles.detail1_1}
                whiteSpace={"nowrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={10}>
            <Typography
              whiteSpace={"pre-wrap"}
              className={styles.detail1_1}
              maxWidth={"699px"}
            >
              소비자들이 실제 사용하는 사용 플로우를 분석하여 플로우 이용과정과
              사용성을 단순화 할 수 있는 화면을 설계하였습니다. 설계한 화면을
              바탕으로 개발팀과 협업화여 페이지를 제작했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 01 content */}
      <Box className={styles.whiteBox}>
        <Stack pt={"100px"} alignItems={"center"}>
          <Typography className={styles.caption}>Main Task 01</Typography>
          <Typography
            className={styles.heading3}
            maxWidth={"750px"}
            height={"100px"}
            textAlign={"center"}
            whiteSpace={"pre-wrap"}
            pb={"20px"}
          >
            소비자 페이지의 타겟층인 20대에 맞추어{"\n"}긍정적이고 활기찬
            그래픽을 고안했습니다.
          </Typography>
          <Typography
            className={styles.detail2}
            maxWidth={"640px"}
            textAlign={"center"}
            whiteSpace={"pre-wrap"}
            height={"60px"}
            pb={"21px"}
          >
            커리어톡 소비자 서비스 프로덕트 디자인 (Mobile/Web 반응형) , 아이콘
            에셋을 작업하였으며{"\n"}경쟁사와 시장조사 결과{" "}
            <span style={{ color: "#0F5F7D" }}>
              3D 그래픽 제작에 대한 수요가 확인되어 툴 공부 후 실무에 응용
            </span>
            하였습니다.
          </Typography>
          <Stack
            direction={"row"}
            spacing={"9px"}
            alignItems={"center"}
            pb={10}
          >
            {nhrImages.map((image, index) => (
              <Box maxWidth={"180px"} key={`circle-${index}`}>
                <Image
                  src={image}
                  alt={`image-${index}`}
                  placeholder="blur"
                  layout="intrinsic"
                />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
      {/* 01 second content */}
      <Box
        className={styles.whiteBox}
        sx={{
          mt: "20px",
          background:
            "linear-gradient(180deg, #ECF4F7 0%, #C7F0FF 100%) !important",
        }}
      >
        <Stack pt={"100px"}>
          <Typography className={styles.caption}>Main Task 02</Typography>
          <Typography
            className={styles.heading3}
            maxWidth={"664px"}
            height={"100px"}
            textAlign={"center"}
            whiteSpace={"pre-wrap"}
            pb={"14px"}
          >
            클라이언트사의 요청과 타겟 조사를 토대로{"\n"}직관적인 UX를
            제안했습니다.
          </Typography>
          <Typography
            className={styles.detail2}
            maxWidth={"640px"}
            textAlign={"center"}
            whiteSpace={"pre-wrap"}
            height={"44px"}
            pb={"42px"}
            sx={{ color: "#0F5F7D !important" }}
          >
            직관적인 행사 찾기와 정보 작성 테스크를 통한 채용 이벤트 참여 UX를
            {"\n"}
            제안하였으며, 이를 통하여 행사 참여율을 높이고자 했습니다.
          </Typography>
          <Stack
            direction={"row"}
            spacing={"9px"}
            alignItems={"center"}
            pb={10}
          >
            {nhrContentImages.map((image, index) => (
              <Box maxWidth={"180px"} key={`circle-${index}`}>
                <Image
                  src={image}
                  alt={`image-${index}`}
                  placeholder="blur"
                  layout="intrinsic"
                />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
      {/* 01 content */}
      <Box
        className={styles.whiteBox}
        sx={{ mt: "20px" }}
        position={"relative"}
        overflow={"hidden"}
      >
        <Image
          src={backgroundImage2}
          alt="bg2"
          placeholder="blur"
          layout="intrinsic"
        />
      </Box>
      {/* 02 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>02</Typography>
          <Stack>
            {["BX / Graphic Design", "Package, PC, Mobile design"].map(
              (item, index) => (
                <Typography
                  key={item}
                  className={index == 0 ? styles.heading3 : styles.detail1_1}
                  whiteSpace={"nowrap"}
                >
                  {item}
                </Typography>
              )
            )}
          </Stack>
          <Stack pl={10}>
            <Typography
              whiteSpace={"pre-wrap"}
              className={styles.detail1_1}
              maxWidth={"699px"}
            >
              모바일 화면 외, 오프라인 행사에 사용되는 물품 디자인과 어드민
              페이지에 사용되는 메인 아트웍 이미지를 기획 및 디자인하여 프로덕트
              관점에 입각한 디자인 산출물을 제작했습니다. 메인 아트웍 이미지
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 02 1 content */}
      <Box sx={{ background: "none !important" }}>
        <Stack direction={"row"} spacing={"20px"} maxHeight={"1042px"}>
          <Stack maxWidth={"931px"} spacing={"20px"}>
            <Box
              sx={{
                borderRadius: "12px",
                background: "#0F5F7D",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  src={nhrBoxImages[0]}
                  alt="nhrbox1"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </Box>
            </Box>
            <Box>
              <Image
                src={nhrBoxImages[1]}
                alt="nhrbox2"
                placeholder="blur"
                layout="intrinsic"
              />
            </Box>
          </Stack>
          <Box maxWidth={"910px"}>
            <Image
              src={nhrBoxImages[2]}
              alt="nhrbox3"
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        </Stack>
      </Box>

      {/* 03 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>03</Typography>
          <Stack>
            {["Mobile Design", "Package, PC, Mobile design"].map(
              (item, index) => (
                <Typography
                  key={item}
                  className={index == 0 ? styles.heading3 : styles.detail1_1}
                  whiteSpace={"nowrap"}
                >
                  {item}
                </Typography>
              )
            )}
          </Stack>
          <Stack pl={10}>
            <Typography
              whiteSpace={"pre-wrap"}
              className={styles.detail1_1}
              maxWidth={"699px"}
            >
              소비자들이 실제 사용하는 사용 플로우를 분석하여 플로우 이용과정과
              사용성을 단순화 할 수 있는 화면을 설계하였습니다. 설계한 화면을
              바탕으로 개발팀과 협업화여 페이지를 제작했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 03 bg Content */}
      <Stack spacing={"20px"}>
        {[0, 1, 2, 3].map((item) => (
          <Box className={styles.whiteBox} key={`itemContent-${item}`}>
            <Image
              src={nhrThirdContentImages[item]}
              alt={`itemContent-${item}`}
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        ))}
      </Stack>
      {/* 03 last content */}
      <Box
        className={styles.whiteBox}
        sx={{ background: "#000 !important", mt: "20px" }}
      >
        <Stack alignItems={"center"} pt={"116px"} pb={10}>
          {/* TODO */}
          <Typography
            className={styles.caption}
            sx={{ color: "#959FAC !important" }}
          >
            Achievement
          </Typography>
          <Typography
            className={styles.heading3}
            maxWidth={"914px"}
            sx={{ color: "#FFF !important", pt: "16px" }}
            textAlign={"center"}
          >
            본 프로젝트는 현재 10만명 이상의 이용자가 가입하였으며,{" "}
            <span style={{ color: "#73DBFF" }}>
              사용문의가 10건 미만으로 감소된 성과를 달성했습니다.
            </span>
          </Typography>
          <Typography
            maxWidth={"1060px"}
            className={styles.detail1}
            sx={{ color: "#B6B6B6 !important", pt: "20px", pb: "82px" }}
            textAlign={"center"}
          >
            라이브 이후 1주일 경과, 약 1만명의 소비자가 커리어톡에 유입되었으며,{" "}
            <span style={{ color: "#73DBFF" }}>
              행사 이후 집계 결과 플랫폼 사용 문의관련 CS가 대폭 감소한 것으로
              확인되었습니다.
            </span>{" "}
            온라인, 오프라인 행사의 경우, 핵심인재들의{" "}
            <span style={{ color: "#73DBFF" }}>
              커리어톡 사용이 핵심인재들의 정보 입력 시간으로 귀결되어 채용
              상담의 효율성이 높아졌습니다.
            </span>
          </Typography>
          <Box maxWidth={"1178px"}>
            <Image
              src={footerContent}
              alt="footerContent"
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        </Stack>
      </Box>

      {/* FOOTER */}
      <Box className={styles.titleContent}>
        <Typography className={styles.heading3} pb={5}>
          Project infomation
        </Typography>
        <Stack direction="row" justifyContent={"space-between"} spacing={5}>
          <Stack spacing={"20px"} alignItems={"flex-start"}>
            <Typography className={styles.detail1}>프로젝트 오버뷰</Typography>
            <Typography
              className={styles.detail1}
              sx={{ color: "#6A6A6A !important" }}
              whiteSpace={"pre-wrap"}
              maxWidth={"760px"}
            >
              기업측에는 핵심 인재 확보의 시작인 채용 행사부터 스마트한 관리가,
              핵심 인재측에는 효율적이고 직관적인 참여 방법과 수월한 정보관리가
              필요했습니다. 이에 대한 솔루션으로 ‘커리어톡’ 서비스가 탄생하게
              되었습니다.
            </Typography>
          </Stack>
          <Stack spacing={12} direction={"row"}>
            <Stack spacing={"20px"}>
              <Typography className={styles.detail1}>업무 요청 기업</Typography>
              <Typography
                className={styles.detail1}
                sx={{ color: "#6A6A6A !important" }}
                maxWidth={"216px"}
              >
                NHR Communications
              </Typography>
            </Stack>
            <Stack spacing={"20px"} alignItems={"flex-start"}>
              <Typography className={styles.detail1}>
                프로젝트 요청 기간 & 기여도
              </Typography>
              <Typography
                className={styles.detail1}
                sx={{ color: "#6A6A6A !important" }}
                maxWidth={"200px"}
              >
                2022년 7월 - 2022년 8월 소비자 페이지 디자인 70%
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* end Stack */}
    </Stack>
  );
}
