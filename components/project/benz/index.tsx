import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../styles/benz.module.css";
import backgroundImage from "../../../assets/image/benz/background.png";
import Image from "next/image";
import { benzImages, benzSecondContentImages } from "./data";

export default function BENZ() {
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
              "커리어톡 프로젝트",
              "인재와 기업의 스마트한 정보관리가 시작됩니다.",
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
              "TOOL & PERIOD",
              "기업측에는 핵심 인재 확보의 시작인 채용 행사부터 스마트한 관리가, 핵심 인재측에는 효율적이고 직관적인 참여 방법과 정보관리 기능이 필요했습니다.\n이에 대한 솔루션으로 ‘커리어톡’ 서비스가 탄생하게 되었습니다. 대학내일 ES 자회사 NHR Communications에서\n프리랜서로 재직하며 진행하였으며, 본 내용은 라이브 내용을 기반으로 제작 및 작성하여 보안상의 이슈가 없음을 알립니다..",
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
            {[
              "Problem Define",
              "PC View 기장 큰 문제점은, PC 뷰에서의 사용성 저하",
            ].map((item, index) => (
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
              maxWidth={"700px"}
            >
              메르세데스 벤츠 코리아를 이용하는 사용자 100명을 대상으로 설문을
              진행한 결과, 사용자들은 구매화면을 찾기 어려운 점을 불편한점으로
              꼽았으며 브랜드가 지닌 고급스러운 아이덴티티가 반영되지 않은 점에
              대하여 개선을 원하고 있었습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 01 bg Content */}
      <Stack spacing={"20px"}>
        {[0, 1].map((item) => (
          <Box className={styles.whiteBox} key={`itemContent-${item}`}>
            <Image
              src={benzImages[item]}
              alt={`itemContent-${item}`}
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        ))}
      </Stack>

      {/* 02 */}
      <Box className={styles.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styles.heading1}>02</Typography>
          <Stack>
            {[
              "Problem Define",
              "PC View 기장 큰 문제점은, PC 뷰에서의 사용성 저하",
            ].map((item, index) => (
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
              maxWidth={"700px"}
            >
              메르세데스 벤츠 코리아를 이용하는 사용자 100명을 대상으로 설문을
              진행한 결과, 사용자들은 구매화면을 찾기 어려운 점을 불편한점으로
              꼽았으며 브랜드가 지닌 고급스러운 아이덴티티가 반영되지 않은 점에
              대하여 개선을 원하고 있었습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 02 bg Content */}
      <Stack spacing={"20px"}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Box className={styles.whiteBox} key={`itemContent-${item}`}>
            <Image
              src={benzSecondContentImages[item]}
              alt={`itemContentbg-${item}`}
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        ))}
      </Stack>

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

      {/* end stack */}
    </Stack>
  );
}
