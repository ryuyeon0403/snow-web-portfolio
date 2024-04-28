import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../styles/benz.module.css";
import backgroundImage from "../../../assets/image/benz/background.png";
import Image from "next/image";
import {
  benzImages,
  benzSecondContentImages,
  benzSubContentImages,
} from "./data";

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
              "PERSONAL PROJECT",
              "Mercedes Benz Korea",
              "메르세데스 벤츠 코리아 사이트 개선",
            ].map((item, index) => (
              <Typography
                key={item}
                className={
                  index == 0
                    ? styles.detail1
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
              "XD / Photoshop\n2022.01 - 2022.03\nDesign Contribution 100%",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.detail1 : styles.detail3}
                whiteSpace={"pre-wrap"}
                maxWidth={"216px"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={2}>
            {[
              "TOOL & PERIOD",
              "구매와 제품확인을 위해 방문하는 사용자들이 인터페이스의 복잡함으로 인해 원하는 정보를 찾지 못하고 이탈하며, 자사 특유의 고급스러운 이미지를 부족하게 담아내고 있는 벤츠 코리아 홈페이지를 리디자인을 제안했습니다. 홈페이지를 방문 목적과 니즈를 충족하는 경험을 수립하면서 편리하면서도 브랜드 이미지를 반영했습니다.",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.detail1 : styles.detail3}
                whiteSpace={"pre-wrap"}
                maxWidth={"639px"}
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
            {["Problem Define", "기장 큰 문제점은, 번거로운 사용절차"].map(
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
              maxWidth={"700px"}
            >
              UT 결과에 따르면 사용자들은 원하는 행사를 찾는 과정에서 어려움을
              겪었으며 상담카드 작성과 정보관리에 대한 어려움을 경험하였습니다.
              이에 따라 행사 찾기를 용이하게 도와주는 기능과 정보관리 용이성을
              높히는 플로우가 필요하다는 사용자 니즈를 도출했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 02 bg Content */}
      <Stack spacing={"20px"}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) =>
          item == 6 ? (
            <Box className={styles.rowBox} key={`itemContent-${item}`}>
              <Stack pt={"299px"} spacing={"1300px"}>
                <Stack direction={"row"} spacing={"70px"}>
                  <Image
                    src={benzSubContentImages[2]}
                    alt="benzSub1"
                    placeholder="blur"
                    layout="intrinsic"
                    style={{
                      width: "73px",
                      height: "auto",
                    }}
                  />
                  <Stack>
                    <Typography className={styles.caption}>
                      detail page : S-CLass
                    </Typography>
                    <Typography className={styles.detail2} width={"243px"}>
                      브랜드와 연계되는 모델에 대한 설명과 다양한 차량 이미지를
                      확인할 수 있습니다.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={"70px"}>
                  <Image
                    src={benzSubContentImages[3]}
                    alt="benzSub1"
                    placeholder="blur"
                    layout="intrinsic"
                    style={{
                      width: "73px",
                      height: "auto",
                    }}
                  />
                  <Stack>
                    <Typography className={styles.caption}>
                      detail page : Detail
                    </Typography>
                    <Typography className={styles.detail2} width={"273px"}>
                      차량에 사용된 부품, 기능적 설명, 주행 영상을 확인하여 차량
                      구매에 필요한 정보를 수집가능합니다.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Image
                src={benzSubContentImages[0]}
                alt="benzSub1"
                placeholder="blur"
                layout="intrinsic"
                style={{
                  width: "440px",
                  height: "auto",
                }}
              />
              <Image
                src={benzSubContentImages[1]}
                alt="benzSub1"
                placeholder="blur"
                layout="intrinsic"
                style={{
                  width: "434px",
                  height: "auto",
                  paddingTop: "640px",
                }}
              />
            </Box>
          ) : (
            <Box className={styles.whiteBox} key={`itemContent-${item}`}>
              <Image
                src={benzSecondContentImages[item]}
                alt={`itemContentbg-${item}`}
                placeholder="blur"
                layout="intrinsic"
              />
            </Box>
          )
        )}
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
              벤츠 코리아 페이지는 구매와 제품확인을 위해 방문하는 사용자들이
              인터페이스의 복잡함으로인해 원하는 정보를 찾지 못하고 이탈하며,
              브랜드 이미지를 부족하게 담아내고 있었습니다. 하여 홈페이지를 방문
              목적과 니즈를 충족하는 경험을 수립하면서 편리하면서도 브랜드
              이미지를 반영한 리디자인 시안을 제작했습니다.
            </Typography>
          </Stack>
          <Stack spacing={12} direction={"row"}>
            <Stack spacing={"20px"}>
              <Typography className={styles.detail1}>Role</Typography>
              <Typography
                className={styles.detail1}
                sx={{ color: "#6A6A6A !important" }}
                maxWidth={"216px"}
              >
                2022.4.1 - 2022.5.1
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
                개인 프로젝트(기여도 100%)사용자 관찰, 개선 방향 기획, UI 편집
                디자인
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* end stack */}
    </Stack>
  );
}
