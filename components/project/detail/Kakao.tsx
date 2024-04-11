"use client";
import { Box, Stack, Typography } from "@mui/material";
import { StaticImageData } from "next/legacy/image";
import Image from "next/image";
import cardBg from "@image/kakao/cardBg.png";
import ProjectLayout from "../../layout/ProjectLayout";
import miniCard1 from "@image/kakao/miniCard1.png";
import miniCard2 from "@image/kakao/miniCard2.png";
import miniCard3 from "@image/kakao/miniCard3.png";
import miniCard4 from "@image/kakao/miniCard4.png";
import slide1 from "@image/kakao/slide1.png";
import slide2 from "@image/kakao/slide2.png";
import slide3 from "@image/kakao/slide3.png";
import slide4 from "@image/kakao/slide4.png";
import slide5 from "@image/kakao/slide5.png";
import emoji1 from "@image/kakao/emoji1.png";
import emoji2 from "@image/kakao/emoji2.png";
import emoji3 from "@image/kakao/emoji3.png";
import emoji4 from "@image/kakao/emoji4.png";
import emoji5 from "@image/kakao/emoji5.png";
import emoji6 from "@image/kakao/emoji6.png";
import emoji7 from "@image/kakao/emoji7.png";
import emoji8 from "@image/kakao/emoji8.png";
import Marquee from "react-fast-marquee";

interface Detail {
  title: string;
  content: string;
}

const detailList: Detail[] = [
  { title: "Period", content: "2023.12.05 - 2023.03.15" },
  {
    title: "Role",
    content: "실무 프로젝트\n서비스 기획, 3D 디자인, UI 디자인",
  },
  {
    title: "Overview",
    content:
      "카카오의 마케팅을 위한 브랜디드 콘텐츠의 기획 및 제작 업무를\n담당했습니다. 일관성있는 브랜드 톤앤매너 관리와 콘텐츠 기획 및\n아이데이션, 관련 제작물을 직접 제작하고 운영했습니다. BX적 관\n점에 입각해 카카오의 온드미디어 콘텐츠를 기획, 생산했습니다.",
  },
];

const miniCardList: Array<StaticImageData> = [
  miniCard1,
  miniCard2,
  miniCard3,
  miniCard4,
];
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

function Kakao({ imgList }: { imgList: string[] }) {
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
            Branded contents design
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
            kakao : 카카오톡
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
            카카오 재직기간 진행한 실무 프로젝트
          </Typography>
          <Stack spacing={"30px"} pb={"94px"}>
            {detailList.map((item) => (
              <Stack spacing={"5px"} key={`item-${item.title}`}>
                <Typography
                  sx={{
                    color: "#000",
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
              backgroundColor: "#FFF386",
              borderRadius: "8px",
              width: "309px",
              height: "60px",
              boxShadow: "0px 2px 0px 0px #FEE500",
            }}
            display={"flex"}
            alignItems={"center"}
            // justifyContent={"center"}
          >
            <Typography
              sx={{
                color: "#1E1E1E",
                fontSize: "18px",
                fontWeight: 700,
                pl: "40px",
              }}
            >
              카톡 설명서 페이지 보러가기
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            background: "#FAE100",
            width: "1173px",
            height: "1080px",
          }}
          position={"relative"}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
            }}
          >
            <Image
              src={imgList[0]}
              width={554}
              height={988}
              quality={100}
              layout="fixed"
              alt="image"
              // className="transition-opacity opacity-0 duration-[2s]"
              // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
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
                카톡이지 프로젝트
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                2200만명이 사용한 카카오톡의 핵심 서비스
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
            카카오톡의 AI 기능 UI 페이지 제작과 콘텐츠 제작을 담당했습니다.
            150만 유저가 사용한 카톡 AI기능{"\n"}의 다양한 사용 형태를 수집하여,
            AI기능 사용에 대한 유용성과 즐거움을 전달하고자 했습니다.
          </Typography>
        </Stack>
        {/* AI도편해야 */}
        <Stack direction={"row"} spacing={"20px"} px={"20px"}>
          <Box
            sx={{
              height: "782px",
              width: "100%",
              borderRadius: 2,
              backgroundColor: "#3F4146",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              spacing={"16.5px"}
              width={"100%"}
              justifyContent={"center"}
            >
              <Stack
                sx={{ maxWidth: "365px", width: "100%" }}
                spacing={"17.82px"}
              >
                <Box
                  sx={{
                    height: "155px",
                    backgroundColor: "#FAFAFA",
                    borderRadius: "38px",
                  }}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography
                    sx={{
                      color: "#191919",
                      fontSize: "58.539px",
                      fontWeight: 700,
                      lineHeight: "76px",
                      //   todo kakaofont
                    }}
                  >
                    AI도 편해야
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "262.703px",
                    borderRadius: "38px",
                    backgroundColor:
                      "lightgray 0.608px -7.613px / 132.528% 102.874% no-repeat",
                    boxShadow: "0px 0px 38.177px 0px rgba(0, 0, 0, 0.15)",
                    backgroundImage: `url(${cardBg.src})`,
                    backgournRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#191919",
                      fontSize: "33.087px",
                      fontWeight: 800,
                      lineHeight: "43.268px",
                      whiteSpace: "pre-wrap",
                      pt: "33px",
                      pl: "25px",
                      //   todo kakaofont
                    }}
                  >
                    대화 요약{"\n"}기능
                  </Typography>
                </Box>
              </Stack>
              <Stack
                sx={{ maxWidth: "365px", width: "100%" }}
                spacing={"17.82px"}
              >
                <Box
                  sx={{
                    height: "262.703px",
                    borderRadius: "38px",
                    backgroundColor:
                      "lightgray 0.608px -7.613px / 132.528% 102.874% no-repeat",
                    boxShadow: "0px 0px 38.177px 0px rgba(0, 0, 0, 0.15)",
                    backgroundImage: `url(${cardBg.src})`,
                    backgournRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#191919",
                      fontSize: "33.087px",
                      fontWeight: 800,
                      lineHeight: "43.268px",
                      whiteSpace: "pre-wrap",
                      pt: "33px",
                      pl: "25px",
                      //   todo kakaofont
                    }}
                  >
                    말투 변경{"\n"}기능
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "155px",
                    backgroundColor: "#FEE500",
                    borderRadius: "38px",
                  }}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography
                    sx={{
                      color: "#191919",
                      fontSize: "58.539px",
                      fontWeight: 700,
                      lineHeight: "76px",
                      //   todo kakaofont
                    }}
                  >
                    카톡이지
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              height: "782px",
              width: "100%",
              borderRadius: 2,
              backgroundColor: "#252627",
            }}
            position={"relative"}
          >
            <Box
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
              }}
            >
              <Image
                src={imgList[1]}
                width={440}
                height={717}
                quality={100}
                layout="fixed"
                alt="image2"
              />
            </Box>
          </Box>
        </Stack>
        <Stack
          position={"relative"}
          height="991px"
          px={"10px"}
          maxWidth={"1880px"}
          borderRadius={2}
        >
          <Box
            sx={{
              width: "174px",
              height: "54px",
              backgroundColor: "#333",
              borderRadius: 1,
              position: "absolute",
              top: 43,
              left: 39,
              zIndex: 1,
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "21px",
                letterSpacing: "-0.54px",
              }}
            >
              VIEW MORE
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          >
            <Image
              src={imgList[2]}
              height={991}
              width={800}
              quality={100}
              objectFit={"contain"}
              alt="image3"
            />
          </Box>
        </Stack>
        <Stack alignItems={"center"} py={"20px"}>
          <Box
            sx={{
              backgroundColor: "#222",
              width: "100%",
              maxWidth: "1880px",
              height: "839px",
              borderRadius: 2,
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              px={"74px"}
              spacing={"30px"}
              sx={{ overflow: "hidden" }}
            >
              {[0, 1, 2, 3].map((item) => (
                <Box
                  key={`miniCard-${item}`}
                  sx={{
                    width: "410px",
                    height: "518px",
                    borderRadius: 2,
                  }}
                >
                  <Image
                    src={miniCardList[item]}
                    width={410}
                    height={518}
                    quality={100}
                    layout="fixed"
                    alt="image3"
                  />
                </Box>
              ))}
            </Stack>
          </Box>
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
                카카오톡 채널 소식 콘텐츠
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                연말을 더 유용하게 사용하기 위한 서비스 콘텐츠 발행
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
            카카오에서 진행되고 있는 프로젝트와 서비스 중 연말을 유용하게 보낼
            수 있는 컨텐츠를 모아 발행했습니다.{"\n"}
            UI 제작 및 콘텐츠 제작을 담당하여 카카오톡의 소비자들이 연말 시즈널
            콘텐츠를 유용하게 사용할 수 있도록 했습니다.
          </Typography>
        </Stack>
        <Marquee direction="left" pauseOnHover={true} autoFill={true}>
          <Stack
            direction={"row"}
            spacing={"37.8px"}
            pr="37.8px"
            sx={{ overflow: "hidden" }}
          >
            {[1, 1, 2, 3, 3].map((item) => (
              <Box
                key={`miniCard-${item}`}
                sx={{
                  width: "403.28px",
                  height: "539px",
                  borderRadius: 2,
                }}
              >
                <Image
                  src={slideList[item]}
                  width={403}
                  height={539}
                  quality={100}
                  layout="fixed"
                  alt="image3"
                />
              </Box>
            ))}
          </Stack>
        </Marquee>

        <Stack
          position={"relative"}
          height="1231px"
          px={"20px"}
          maxWidth={"1880px"}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            {/* <Image
              src={imgList[3]}
              width={1880}
              height={1231}
              quality={100}
              
              objectFit={"contain"}
              alt="image3"
            /> */}
          </Box>
        </Stack>
        {/* 제목 */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          pl="114px"
          pr={"120px"}
          pt="120px"
          pb="211px"
          alignItems={"center"}
          spacing={5}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={8}>
            <Typography
              sx={{ color: "#FFF", fontSize: "95.879px", fontWeight: 700 }}
            >
              03
            </Typography>
            <Stack spacing={1}>
              <Typography
                sx={{ color: "#FFF", fontSize: "38px", fontWeight: 700 }}
              >
                3D GRAPHIC ASSET
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                카카오톡 3D 에셋 제작
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
            카카오톡에서 활용되는 UI 그래픽을 더욱 감각적으로 만들기 위해 UI에
            필요한 3D에셋을 제작했습니다.{"\n"} 카카오톡에 사용되는 3D에셋을
            개발했으며 에셋은 실제 UI 페이지와 배너에 라이브 되었습니다.
          </Typography>
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
                backgroundColor: "#333",
                width: "100%",
                height: "782px",
                borderRadius: 2,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={emojiList[0]}
                width={418}
                height={417}
                quality={100}
                layout="fixed"
                alt="image3"
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#212121",
                width: "100%",
                height: "782px",
                borderRadius: 2,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={emojiList[1]}
                width={432}
                height={535}
                quality={100}
                layout="fixed"
                alt="image3"
              />
            </Box>
          </Stack>
          <Box
            sx={{
              backgroundColor: "#242424",
              width: "100%",
              height: "753px",
              borderRadius: 2,
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={emojiList[2]}
              width={1496}
              height={560}
              quality={100}
              layout="fixed"
              alt="emoji2"
            />
          </Box>
          <Stack direction={"row"} spacing={"20px"} width={"100%"}>
            <Box
              sx={{
                backgroundColor: "#212121",
                width: "100%",
                height: "1048px",
                borderRadius: 2,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack spacing={"30px"}>
                <Box>
                  <Image
                    src={emojiList[3]}
                    width={723}
                    height={190}
                    quality={100}
                    layout="fixed"
                    alt="image3"
                  />
                </Box>
                <Box>
                  <Image
                    src={emojiList[4]}
                    width={723}
                    height={190}
                    quality={100}
                    layout="fixed"
                    alt="image3"
                  />
                </Box>
                <Box>
                  <Image
                    src={emojiList[5]}
                    width={723}
                    height={190}
                    quality={100}
                    layout="fixed"
                    alt="image3"
                  />
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                backgroundColor: "#212121",
                width: "100%",
                height: "1048px",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Image
                  src={emojiList[6]}
                  width={1400}
                  height={1048}
                  quality={100}
                  layout="fixed"
                  objectFit={"contain"}
                  objectPosition={"0% 50%"}
                  alt="image3"
                />
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          position={"relative"}
          height="267px"
          px={"20px"}
          maxWidth={"1880px"}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Image
              src={emojiList[7]}
              width={1609}
              height={267}
              quality={100}
              objectFit={"contain"}
              alt="image3"
            />
          </Box>
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
              04
            </Typography>
            <Stack spacing={1}>
              <Typography
                sx={{ color: "#FFF", fontSize: "38px", fontWeight: 700 }}
              >
                Youtube 채널 소식 발행
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                }}
              >
                유트브 메인 채널 배너 제작 및 라이브
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
            카카오톡 유튜브 홈페이지 상단 배너 제작과 ESG캡페인의 영상 썸네일을
            제작했습니다. 제작된 배너와{"\n"}페이지는 실제 라이브되었습니다.
          </Typography>
        </Stack>
        <Stack
          position={"relative"}
          height="1080px"
          px={"20px"}
          maxWidth={"1880px"}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Image
              src={imgList[4]}
              width={1880}
              height={1080}
              quality={100}
              objectFit={"contain"}
              alt="image3"
            />
          </Box>
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
        >
          <Stack spacing={"17px"}>
            <Typography
              sx={{
                color: "#FFF",
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
                color: "#FFF",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "32px",
              }}
              whiteSpace={"pre-wrap"}
            >
              카카오의 마케팅을 위한 브랜디드 콘텐츠의 기획 및 제작 업무를
              담당했습니다. 일관성있는 브랜드 톤앤매너 관리와 콘텐츠 기획 및
              아이데이션,{"\n"}관련 제작물을 직접 제작하고 운영했습니다. BX적
              관점에 입각해 카카오의 온드미디어 콘텐츠를 기획, 생산했습니다.
            </Typography>
          </Stack>
          <Stack spacing={"17px"}>
            <Typography
              sx={{
                color: "#FFF",
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
                color: "#FFF",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "32px",
              }}
              whiteSpace={"pre-wrap"}
            >
              2023.12.05 - 2023.03.15
            </Typography>
          </Stack>
          <Stack spacing={"17px"}>
            <Typography
              sx={{
                color: "#FFF",
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
                color: "#FFF",
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

export default Kakao;
