import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/legacy/image";
import img1 from "../../../_assets/img/news/image01.png";
import img2 from "../../../_assets/img/news/image02.png";
import img3 from "../../../_assets/img/news/image03.png";
import img4 from "../../../_assets/img/news/image04.png";
import img5 from "../../../_assets/img/kakao/image05.png";
import cardBg from "../../../_assets/img/kakao/cardBg.png";
import ProjectLayout from "../../layout/ProjectLayout";
import slide1 from "../../../_assets/img/kakao/slide1.png";
import slide2 from "../../../_assets/img/kakao/slide2.png";
import slide3 from "../../../_assets/img/kakao/slide3.png";
import slide4 from "../../../_assets/img/kakao/slide4.png";
import slide5 from "../../../_assets/img/kakao/slide5.png";

import emoji1 from "../../../_assets/img/kakao/emoji1.png";
import emoji2 from "../../../_assets/img/kakao/emoji2.png";
import emoji3 from "../../../_assets/img/kakao/emoji3.png";
import emoji4 from "../../../_assets/img/kakao/emoji4.png";
import emoji5 from "../../../_assets/img/kakao/emoji5.png";
import emoji6 from "../../../_assets/img/kakao/emoji6.png";
import emoji7 from "../../../_assets/img/kakao/emoji7.png";
import emoji8 from "../../../_assets/img/kakao/emoji8.png";
import Marquee from "react-fast-marquee";

interface Detail {
  title: string;
  content: string;
}

const detailList: Detail[] = [
  { title: "Period", content: "2022.12.17 - 2023.03.15" },
  {
    title: "Role",
    content:
      "개인 프로젝트(기여도 100%)\n서비스 기획, 유저 인터뷰, 유저 테스트, UI 디자인",
  },
  {
    title: "Overview",
    content:
      "뉴스낵은 아래 세가지로 분류되는 기존 서비스의 장점만을 합쳐\n2030 디지털 네이티브 세대의 정보 발굴처 정착을 돕는\n새로운 뉴스 서비스입니다.\n\n첫째, 사용자가 원하는 컨텐츠보다는 카테고리로만 단순 분류 된\n기존의 쉬운 뉴스 서비스.\n둘째, 공신력이 있고 실질적 정보를 전달하지만 리딩이 어려운 서비스.\n셋째, 빠른 정보 전달과 소통 기능이 강점이지만 정보의 신뢰도가\n낮은 SNS 서비스.\n\n본 프로젝트는 쉬운 이해가 가능하면서도, 개인에게 맞는\n균형잡힌 정보를 제공하며, 소통 기능이 결합된 서비스 입니다.",
  },
];

const NewsImgList: Array<StaticImageData> = [img1, img2, img3, img4, img5];
const slideList: Array<StaticImageData> = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
];

const emojiList: Array<StaticImageData> = [
  emoji1,
  emoji2,
  emoji3,
  emoji4,
  emoji5,
  emoji6,
  emoji7,
  emoji8,
];

function News() {
  return (
    <ProjectLayout>
      <Stack direction="row" width={"100%"}>
        <Stack
          sx={{ width: "747px", backgroundColor: "#FFFFFF", height: "1080px" }}
          px={"120px"}
          justifyContent={"center"}
        >
          <Typography
            sx={{
              color: "#797979",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "-0.48px",
              pb: 1,
            }}
          >
            UX/UI Design personal project
          </Typography>
          <Typography
            sx={{
              color: "#1E1E1E",
              fontSize: "40px",
              fontWeight: 800,
              lineHeight: "60px",
              pb: 0.5,
            }}
          >
            NEW SNACK APP
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "30px",
              letterSpacing: "-0.6px",
              pb: "60px",
            }}
          >
            쉬운 뉴스 리딩을 위한{" "}
            <span style={{ color: "#1B80FF" }}>새로운 뉴스 지식 플랫폼</span>
          </Typography>
          <Stack spacing={"30px"} pb={"94px"}>
            {detailList.map((item) => (
              <Stack spacing={"5px"} key={`item-${item.title}`}>
                <Typography
                  sx={{
                    color: "#1B80FF",
                    fontSize: "15px",
                    fontWeight: 700,
                    lineHeight: "22.5px",
                    letterSpacing: "-0.45px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  whiteSpace={"pre-wrap"}
                  sx={{
                    color: "#656565",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "22.5px",
                    letterSpacing: "-0.45px",
                  }}
                >
                  {item.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Box
            sx={{
              backgroundColor: "#005FED",
              borderRadius: "8px",
              width: "309px",
              height: "60px",
              boxShadow: "0px 2px 0px 0px #005FED",
            }}
            display={"flex"}
            alignItems={"center"}
            // justifyContent={"center"}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "18px",
                fontWeight: 700,
                pl: "33px",
              }}
            >
              영상으로 최종 서비스 확인하기
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            background: "#1B80FF",
            width: "1185px",
            height: "1080px",
            overflow: "hidden",
          }}
          position={"relative"}
        >
          <Box
            sx={{
              position: "absolute",
              top: "58.5%",
              left: "50%",
              transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
            }}
          >
            <Image
              src={NewsImgList[0]}
              width={1000}
              height={900}
              quality={100}
              layout="fixed"
              alt="image"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ backgroundColor: "#000" }}>
        {/* 제목 */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          pl="114px"
          pr={"120px"}
          pt="213px"
          pb="211px"
          alignItems={"center"}
          spacing={5}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={8}>
            <Typography
              sx={{ color: "#FFF", fontSize: "95.879px", fontWeight: 700 }}
            >
              01
            </Typography>
            <Stack spacing={1}>
              <Typography
                sx={{ color: "#FFF", fontSize: "38px", fontWeight: 700 }}
              >
                News is not interesting.
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                핵심 문제점은, 뉴스는 ‘재미없다’는 인식
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "34px",
              whiteSpace: "pre-wrap",
            }}
          >
            기존 뉴스 플랫폼에 대한 문제점을 정성적, 정량적으로 조사한 후, 이에
            대한 문제점을 해결할 수 있는{"\n"}솔루션을 도출하여 이를 기존의
            뉴스와 상반되는 비주얼 컨셉으로 풀어냈습니다.
          </Typography>
        </Stack>
        <Stack
          position={"relative"}
          height="991px"
          borderRadius={2}
          sx={{
            backgroundColor: "#20242F",
            m: 2,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              background:
                "linear-gradient(180deg, #1B80FF 0%, rgba(27, 128, 255, 0.66) 40.12%, rgba(27, 128, 255, 0.00) 71.99%);",
              top: 0,
              maxWidth: "1980px",
              width: "100%",
              height: "645px",
              zIndex: 1,
              left: 0,
            }}
          ></Box>
          <Box
            sx={{
              width: "116px",
              height: "36px",
              border: "1px solid #65FEB3",
              borderRadius: "4px",
              position: "absolute",
              top: 179,
              left: 940,
              zIndex: 1,
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                color: "#65FEB3",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "36px",
                letterSpacing: "-0.7px",
              }}
            >
              PROJECT GOAL
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 224,
              left: 940,
              zIndex: 1,
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "31.9px",
                whiteSpace: "pre-wrap",
              }}
            >
              SNS 뉴스 형태에 익숙한{"\n"}MZ세대의 특징을 중심으로{"\n"}
              {"'"}동기부여 높은 리딩{"'"}을{"\n"}실천할 수 있는 형태로 제안.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "600px",
              left: "50%",
              transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
              zIndex: 1,
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "242.828px",
                  fontWeight: 800,
                  lineHeight: "364.243px",
                  whiteSpace: "nowrap",
                }}
              >
                NEW + SNACK
              </Typography>
              <Stack direction={"row"} spacing={"700px"}>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: "40px",
                    pl: 2,
                  }}
                >
                  새로운, 빠른
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: "40px",
                  }}
                >
                  맛있는, 즐거운
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          >
            <Image
              src={NewsImgList[1]}
              width={1880}
              height={1080}
              quality={100}
              layout="fill"
              objectFit={"cover"}
              alt="image3"
            />
          </Box>
        </Stack>
        <Stack
          alignItems={"center"}
          maxWidth={"1880px"}
          px={"20px"}
          spacing={"20px"}
        >
          <Stack direction={"row"} spacing={"20px"} width={"100%"}>
            <Box
              sx={{
                backgroundColor: "#171920",
                width: "100%",
                height: "1080px",
                borderRadius: 2,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            ></Box>
            <Box
              sx={{
                backgroundColor: "#263B74",
                width: "100%",
                height: "1080px",
                borderRadius: 2,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            ></Box>
          </Stack>
          <Stack position={"relative"} height="1079px" maxWidth={"1880px"}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Image
                src={NewsImgList[2]}
                width={1880}
                height={1079}
                quality={100}
                alt="image3"
              />
            </Box>
          </Stack>
        </Stack>
        {/* 제목 */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          pl="114px"
          pr={"120px"}
          pt="213px"
          pb="211px"
          alignItems={"center"}
          spacing={5}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={8}>
            <Typography
              sx={{ color: "#FFF", fontSize: "95.879px", fontWeight: 700 }}
            >
              02
            </Typography>
            <Stack spacing={1}>
              <Typography
                sx={{ color: "#FFF", fontSize: "38px", fontWeight: 700 }}
              >
                Visual solution
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                문제점 해결을 위한 비주얼 솔루션
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "34px",
              whiteSpace: "pre-wrap",
            }}
          >
            기존 뉴스 플랫폼에 대한 문제점을 정성적, 정량적으로 조사한 후, 이에
            대한 문제점을 해결할 수 있는{" \n"}솔루션을 도출하여 이를 기존의
            뉴스와 상반되는 비주얼 컨셉으로 풀어냈습니다.
          </Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          maxWidth={"1880px"}
          px={"20px"}
          spacing={"20px"}
        >
          <Box
            sx={{
              backgroundColor: "#222224",
              width: "100%",
              height: "1080px",
              borderRadius: 2,
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#222224",
              width: "100%",
              height: "1979px",
              borderRadius: 2,
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          ></Box>
          <Stack
            direction={"row"}
            spacing={"20px"}
            sx={{ width: "100%", height: "1080px" }}
          >
            <Box
              sx={{
                backgroundColor: "#F4F8FF",
                width: "100%",
                height: "1080px",
                borderRadius: 2,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              test
            </Box>
            <Stack spacing={"20px"} width={"100%"} maxWidth="638px">
              <Box
                sx={{
                  backgroundColor: "#E9F3FF",
                  maxWidth: "638px",
                  width: "100%",
                  height: "1080px",
                  borderRadius: 2,
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                test
              </Box>
              <Box
                sx={{
                  backgroundColor: "#1B80FF",
                  maxWidth: "638px",
                  width: "100%",
                  height: "1080px",
                  borderRadius: 2,
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                test3
              </Box>
            </Stack>
          </Stack>
          <Stack position={"relative"} height="1079px" maxWidth={"1880px"}>
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                maxWidth: "1880px",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.51);",
                zIndex: 1,
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: 100,
                left: 100,
                zIndex: 2,
              }}
            >
              <Stack spacing={"10px"}>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "38px",
                    fontWeight: 700,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  MZ세대를 타겟팅한{"\n"}홍보 영상을 제작했습니다.
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "34px",
                  }}
                >
                  썸네일 클릭 시 영상으로 이동합니다.
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Image
                src={NewsImgList[3]}
                width={1880}
                height={1079}
                quality={100}
                alt="image3"
              />
            </Box>
          </Stack>
        </Stack>
        {/* 제목 */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          pl="114px"
          pr={"120px"}
          py="120px"
          alignItems={"center"}
          sx={{ backgroundColor: "#C1D6F2" }}
          spacing={5}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={8}>
            <Typography
              sx={{ color: "#000", fontSize: "95.879px", fontWeight: 700 }}
            >
              03
            </Typography>
            <Stack spacing={1}>
              <Typography
                sx={{ color: "#000", fontSize: "38px", fontWeight: 700 }}
              >
                SCREEN FLOW
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                화면 플로우
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "34px",
              whiteSpace: "pre-wrap",
            }}
          >
            핵심 문제점을 해결할 수 있는 사용자 UI를 설계하고, 와이어프레임을
            제작한 뒤{"\n"}타겟층을 대상으로 한 사용성 점검과정을 거쳐 화면을
            제작했습니다.
          </Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          maxWidth={"1880px"}
          px={"20px"}
          spacing={"20px"}
          sx={{ backgroundColor: "#C1D6F2" }}
        >
          <Stack
            position={"relative"}
            height="1079px"
            maxWidth={"1880px"}
            width={"100%"}
            sx={{ backgroundColor: "#3385ED", borderRadius: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1079px",
              }}
            >
              test
            </Box>
          </Stack>
          <Stack
            position={"relative"}
            height="1079px"
            maxWidth={"1880px"}
            width={"100%"}
            sx={{ backgroundColor: "#ECF0F7", borderRadius: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1079px",
              }}
            >
              test
            </Box>
          </Stack>
          <Stack
            position={"relative"}
            height="1079px"
            maxWidth={"1880px"}
            width={"100%"}
            sx={{ backgroundColor: "#3385ED", borderRadius: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1079px",
              }}
            >
              test
            </Box>
          </Stack>
        </Stack>
        {/* 제목 */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          pl="114px"
          pr={"120px"}
          pt="226px"
          pb="211px"
          spacing={8}
          sx={{ backgroundColor: "#C1D6F2" }}
        >
          <Stack spacing={1}>
            <Typography
              sx={{
                color: "#252528",
                fontSize: "38px",
                fontWeight: 700,
                pb: 3,
              }}
            >
              Project infomation
            </Typography>
            <Typography
              sx={{
                color: "#1B80FF",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "27px",
                letterSpacing: "-0.54px",
              }}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "32px",
              }}
              whiteSpace={"pre-wrap"}
            >
              뉴스낵은 아래 세가지로 분류되는 기존 서비스의 장점만을 합쳐 2030
              디지털 네이티브 세대의 정보 발굴처 정착을 돕는 새로운 뉴스
              서비스입니다.{"\n"}첫째, 사용자가 원하는 컨텐츠보다는 카테고리로만
              단순 분류 된 기존의 쉬운 뉴스 서비스. 둘째, 공신력이 있고 실질적
              정보를 전달하지만 리딩이 어려운{"\n"}서비스. 셋째, 빠른 정보
              전달과 소통 기능이 강점이지만 정보의 신뢰도가 낮은 SNS 서비스. 본
              프로젝트는 쉬운 이해가 가능하면서도, 개인에게 맞는{"\n"}균형잡힌
              정보를 제공하며, 소통 기능이 결합된 서비스 입니다.
            </Typography>
          </Stack>
          <Stack spacing={"17px"} pt="90px">
            <Typography
              sx={{
                color: "#1B80FF",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "27px",
                letterSpacing: "-0.54px",
              }}
            >
              Period
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "32px",
              }}
              whiteSpace={"pre-wrap"}
            >
              2023.12.05 - 2023.03.15
            </Typography>
            <Typography
              sx={{
                color: "#1B80FF",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "27px",
                letterSpacing: "-0.54px",
              }}
            >
              Role
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "32px",
              }}
              whiteSpace={"pre-wrap"}
            >
              실무 프로젝트{"\n"}서비스 기획, 3D 디자인, UI 디자인
            </Typography>
          </Stack>
        </Stack>
        {/* endStack */}
      </Stack>
    </ProjectLayout>
  );
}

export default News;
