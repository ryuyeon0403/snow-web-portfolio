"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backgroundImage from "../../../assets/image/news/background.png";
import newPlayBg from "../../../assets/image/news/newPlayBg.png";
import newSnackBg from "../../../assets/image/news/newSnackBg.png";
import newsIcon from "../../../assets/image/news/newsIcon.png";
import number2Content from "../../../assets/image/news/number2Content.png";
import number2Design from "../../../assets/image/news/number2Design.png";
import number2Group from "../../../assets/image/news/number2Group.png";
import number2Text from "../../../assets/image/news/number2Text.png";
import number4Content from "../../../assets/image/news/number4Content.png";
import styels from "../../../styles/news.module.css";
import NewsYoutube from "./NewsYoutube";
import { NumberImages, ObjImages, number3Images } from "./data";

function News() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      className={styels.content}
    >
      <Image
        src={backgroundImage}
        alt="background"
        placeholder="blur"
        layout="intrinsic"
      />
      <Box className={styels.title}>
        <Stack direction={"row"} spacing={"50px"}>
          <Stack>
            {[
              "PERSONAL PROJECT",
              "NEW SNACK APP",
              "쉬운 뉴스 리딩을 위한 새로운 뉴스 지식 플랫폼",
            ].map((item, index) => (
              <Typography
                key={item}
                className={
                  index == 0
                    ? styels.detail2
                    : index == 1
                    ? styels.heading
                    : styels.body4
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
                className={index == 0 ? styels.detail1 : styels.detail3}
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
                className={index == 0 ? styels.detail1 : styels.detail3}
                whiteSpace={"pre-wrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Box>
      {/* 01 */}
      <Box className={styels.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styels.heading1}>01</Typography>
          <Stack>
            {[
              "News is not interesting",
              "핵심 문제점은, 뉴스는 ‘재미없다’는 인식",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styels.heading3 : styels.detail3}
                whiteSpace={"pre-wrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={10}>
            <Typography whiteSpace={"pre-wrap"} className={styels.detail1}>
              MZ세대의 뉴스 사용 행태에 대하여 데스크 리서치를 실행한 후, 타깃
              사용자 400명을{"\n"}대상으로 설문을 진행하여 도출한 인사이트를
              바탕으로 플랫폼의 핵심 기능을 고안했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 01 content */}
      <Box className={styels.whiteBox}>
        <Stack
          direction={"row"}
          maxWidth={"1360px"}
          width={"100%"}
          pt={"77px"}
          pb={"143px"}
          justifyContent={"space-between"}
        >
          <Stack spacing={5}>
            <Typography className={styels.caption}>Background</Typography>
            <Typography
              whiteSpace={"pre-wrap"}
              className={styels.heading3}
              sx={{ color: "#000 !important" }}
            >
              최근 이슈에 대한 관심에 비해 양질의{"\n"}정보습득이 어려운 20대
            </Typography>
          </Stack>
          <Stack spacing={0.5} alignItems={"flex-end"}>
            <Typography className={styels.detail4} pb={"0.2px"}>
              *출처
            </Typography>
            <Typography className={styels.detail4}>
              한겨례 : MZ세대는 뉴스를 보지 않는 게 아니라 ‘회피’하고 있다
            </Typography>
            <Typography className={styels.detail4}>
              한국뉴스협회 : 요즘 누가 신문·TV로 뉴스 봅니까… 언론만 침묵하는
              불편한 진실
            </Typography>
            <Typography className={styels.detail4}>
              유튜브 뉴스 콘텐츠의 이용동기가 이용 만족도에 미치는 영향/김옥영,
              고려대학교
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          maxWidth={"1360px"}
          width={"100%"}
          justifyContent={"space-between"}
          spacing={"20px"}
          pb={"59px"}
        >
          <Stack spacing={"12px"} width={"100%"}>
            <Box className={styels.contentBox}>
              <Image
                src={NumberImages[0]}
                alt="background"
                placeholder="blur"
                width={20}
                height={20}
                style={{ paddingLeft: "40px" }}
              />
              <Typography
                className={styels.body4}
                sx={{
                  color: "#000 !important",
                  whiteSpace: "pre-wrap",
                  py: "20px",
                  pl: 5,
                }}
              >
                새로운 뉴스 플랫폼이 등장했으나{"\n"}사용자는 정보 정착지를 찾지
                못했습니다.
              </Typography>
              <Typography
                className={styels.detail4}
                sx={{
                  color: "#6B6B73 !important",
                  whiteSpace: "pre-wrap",
                  pb: "28px",
                  pl: 5,
                }}
              >
                젊은층 뉴스 이용자들이 레거시 미디어를 떠나 새로운 뉴스{"\n"}
                플랫폼(네이버 20대 뉴스, 뉴닉 등)으로 이동중이에요.
              </Typography>
            </Box>
            <Box className={styels.contentBox}>
              <Image
                src={NumberImages[1]}
                alt="background"
                placeholder="blur"
                width={20}
                height={20}
                style={{ paddingLeft: "40px" }}
              />
              <Typography
                className={styels.body4}
                sx={{
                  color: "#000 !important",
                  whiteSpace: "pre-wrap",
                  py: "20px",
                  pl: 5,
                }}
              >
                20대 전용 뉴스 플랫폼의 경우,{"\n"}
                <span style={{ color: "#1B80FF" }}>난이도가 어렵다는</span>
                의견이 다수였습니다.
              </Typography>
              <Stack
                direction={"row"}
                pl={5}
                spacing={0.5}
                alignItems={"center"}
              >
                <Image src={newsIcon} alt="newIcon" placeholder="blur" />
                <Typography className={styels.detail4}>
                  네이버 20대 뉴스
                </Typography>
                <Typography className={styels.detail4}>
                  사용자 2644만명
                </Typography>
              </Stack>
              <Box px={5} pb={"20px"}>
                <Image
                  src={number2Content}
                  alt="number2Content"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </Box>
            </Box>
          </Stack>
          <Box className={styels.contentBox}>
            <Image
              src={NumberImages[2]}
              alt="background"
              placeholder="blur"
              width={20}
              height={20}
              style={{ paddingLeft: "40px" }}
            />
            <Typography
              className={styels.body4}
              sx={{
                color: "#000 !important",
                whiteSpace: "pre-wrap",
                py: "20px",
                pl: 5,
              }}
            >
              쉬운 뉴스 앱의 경우,
              <span style={{ color: "#1B80FF" }}>
                정보 업데이트가{"\n"}느리다는 사용자 보이스가 확인되었습니다.
              </span>
            </Typography>
            <Stack direction={"row"} pl={5} spacing={0.5} alignItems={"center"}>
              <Image src={newsIcon} alt="newIcon" placeholder="blur" />
              <Typography className={styels.detail4}>뉴닉</Typography>
              <Typography className={styels.detail4}>사용자 40만명</Typography>
            </Stack>
            <Stack pt={"100px"} px={5} pb={"40px"} spacing={"20px"}>
              {[
                "제공되는 정보의 기준이 모호해요",
                "타인의 의견확인이 불가능한 커뮤니티",
                "속보 소식 전달이 너무 느려요",
                "제가 쓴 의견이 바로 올라가지 않아 답답해요",
              ].map((item, index) => (
                <Box className={styels.chip} key={`chip-${index}`}>
                  <Typography className={styels.chipText}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box className={styels.contentBox}>
            <Image
              src={NumberImages[3]}
              alt="background"
              placeholder="blur"
              width={20}
              height={20}
              style={{ paddingLeft: "40px" }}
            />
            <Typography
              className={styels.body4}
              sx={{
                color: "#000 !important",
                whiteSpace: "pre-wrap",
                py: "20px",
                pl: 5,
              }}
            >
              결국 <span style={{ color: "#1B80FF" }}>SNS로 뉴스를 확인</span>
              하는 MZ세대.{"\n"}
              그러나 이는 정보가 정확하지 않습니다.
            </Typography>
            <Stack
              direction={"row"}
              pl={5}
              pt={2}
              spacing={0.5}
              alignItems={"center"}
            >
              <Typography className={styels.detail4}>
                ‘소셜 미디어를 통해 뉴스를 소비한 경험이 있다’ 응답
              </Typography>
            </Stack>
            <Box pt={5} pl={"76px"} pr={"56px"}>
              <Image
                src={number4Content}
                alt="number4Content"
                placeholder="blur"
                layout="intrinsic"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        className={styels.whiteBox}
        pt={"20px"}
        sx={{ background: "none !important" }}
      >
        <Image
          src={newSnackBg}
          alt="newSnackBg"
          placeholder="blur"
          layout="intrinsic"
        />
      </Box>
      <Box
        className={styels.whiteBox}
        pt={"20px"}
        sx={{ background: "none !important" }}
        position={"relative"}
      >
        <Image
          src={newPlayBg}
          alt="newPlayBg"
          placeholder="blur"
          layout="intrinsic"
        />
        <Image
          src={ObjImages[0]}
          alt="obj1"
          placeholder="blur"
          layout="intrinsic"
          className={styels.obj1}
        />
        <Image
          src={ObjImages[1]}
          alt="obj2"
          placeholder="blur"
          layout="fixed"
          className={styels.obj2}
        />
        <Image
          src={ObjImages[2]}
          alt="obj3"
          placeholder="blur"
          layout="fixed"
          className={styels.obj3}
        />
        <Image
          src={ObjImages[3]}
          alt="obj4"
          placeholder="blur"
          layout="fixed"
          className={styels.obj4}
        />
        <Image
          src={ObjImages[4]}
          alt="obj5"
          placeholder="blur"
          layout="fixed"
          className={styels.obj5}
        />
        <Image
          src={ObjImages[5]}
          alt="obj6"
          placeholder="blur"
          layout="fixed"
          className={styels.obj6}
        />
      </Box>
      <Box
        className={styels.whiteBox}
        pt={"20px"}
        sx={{ background: "none !important" }}
      >
        <Stack direction="row" spacing={"20px"} width={"100%"}>
          <Box className={styels.leftBox} position={"relative"}>
            <Box alignSelf={"left"} maxWidth={"480px"} width={"100%"}>
              <Box className={styels.leftBoxTitle}>
                <Typography className={styels.body4}>Problem</Typography>
              </Box>
            </Box>
            {[
              "정보에 대한 접근성이 좋지 않고\n한쪽으로 편향된 정보를 제공받습니다.",
              "쉬운 정보를 전달할 시 정보의 정확도가\n낮으며, 공신력있는 정보의 경우 어렵습니다.",
              "정보를 접한 후 다양한 사람들의 의견을\n균형있게 볼 수 없습니다.",
            ].map((item, index) => (
              <Box key={item} className={styels.leftBoxContent}>
                <Typography className={styels.body2} whiteSpace={"pre-wrap"}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box className={styels.rightBox}>
            <Box alignSelf={"left"} maxWidth={"480px"} width={"100%"}>
              <Box className={styels.rightBoxTitle}>
                <Typography className={styels.body4}>Solution</Typography>
              </Box>
            </Box>
            {[
              "빠른 뉴스 파인딩 기능을 기반으로\n균형잡힌 뉴스소비 솔루션을 제공합니다.",
              "뉴스의 본질을 잃지 않으며, 사전, 퀴즈\n등의 기능으로 실질적 이해를 돕습니다.",
              "이슈톡, 오픈톡, 투표, 공유기능 등을\n제공해 다양한 여론 활용을 돕습니다.",
            ].map((item, index) => (
              <Box key={item} className={styels.rightBoxContent}>
                <Typography className={styels.body2} whiteSpace={"pre-wrap"}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>

      {/* 02 */}
      <Box className={styels.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styels.heading1}>02</Typography>
          <Stack>
            {["Visual Solution", "문제점 해결을 위한 비주얼 솔루션"].map(
              (item, index) => (
                <Typography
                  key={item}
                  className={index == 0 ? styels.heading3 : styels.detail3}
                  whiteSpace={"pre-wrap"}
                >
                  {item}
                </Typography>
              )
            )}
          </Stack>
          <Stack pl={"220px"}>
            <Typography whiteSpace={"pre-wrap"} className={styels.detail1}>
              기존 뉴스 플랫폼에 대한 문제점을 정성적, 정량적으로 조사한 후,
              이에 대한 문제점을 해결할 수{"\n"}있는 솔루션을 도출하여 이를
              기존의 뉴스와 상반되는 비주얼 컨셉으로 풀어냈습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 02 Content */}
      <Box
        className={styels.whiteBox}
        sx={{ background: "#171920 !important", mb: "20px" }}
      >
        <Stack
          direction={"row"}
          maxWidth={"1360px"}
          width={"100%"}
          pt={"80px"}
          spacing={5}
          pb={"160px"}
        >
          <Typography className={styels.body4}>Design system</Typography>
          <Typography
            className={styels.detail1}
            sx={{ color: "#B6B6B6 !important", whiteSpace: "pre-wrap" }}
          >
            NotoSans 서체로부터 가독성을 더해 만들어진 Pretendard 서체 시스템을
            사용함으로써{"\n"}리딩에 적합한 높은 판독성의 환경을 고안했으며,
            즐거운 뉴스 컨셉에 맞는 컬러를 채택했습니다.
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={5} pb={10}>
          <Box maxWidth={"1020px"}>
            <Image
              src={number2Design}
              alt="number2Design"
              layout="intrinsic"
              placeholder="blur"
            />
          </Box>
          <Box maxWidth={"300px"}>
            <Image
              src={number2Text}
              alt="number2Text"
              layout="intrinsic"
              placeholder="blur"
            />
          </Box>
        </Stack>
      </Box>
      {/* 02 second Content */}
      <Box
        className={styels.whiteBox}
        sx={{ background: "#171920 !important", mb: "20px" }}
      >
        <Stack
          direction={"row"}
          maxWidth={"1360px"}
          width={"100%"}
          pt={"80px"}
          spacing={"64px"}
          pb={"150px"}
        >
          <Typography className={styels.body4}>Asset Library</Typography>
          <Typography
            className={styels.detail1}
            sx={{ color: "#B6B6B6 !important", whiteSpace: "pre-wrap" }}
          >
            주 사용 대상이 선호하는 플랫폼 조사와 사용자 그룹과 비슷한
            인터뷰이들의 인터뷰 조사 결과를 통해 사용자들에게{"\n"}더욱 심미적
            가시성을 높이고 호감도 측면에서 효과적으로 어필할 수 있는 3D 그래픽
            요소를 고안했습니다.
          </Typography>
        </Stack>
        <Box maxWidth={"1440px"} pb={11}>
          <Image
            src={number2Group}
            alt="number2Group"
            layout="intrinsic"
            placeholder="blur"
          />
        </Box>
      </Box>
      {/* 02 Content Youtube */}
      <Box
        className={styels.whiteBox}
        sx={{ background: "#171920 !important" }}
      >
        <NewsYoutube />
      </Box>
      {/* 03 */}
      <Box className={styels.titleContent}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Typography className={styels.heading1}>03</Typography>
          <Stack>
            {["Screen Flow", "화면 플로우"].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styels.heading3 : styels.detail3}
                whiteSpace={"pre-wrap"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={"270px"}>
            <Typography whiteSpace={"pre-wrap"} className={styels.detail1}>
              핵심 문제점을 해결할 수 있는 사용자 UI를 설계하고, 와이어프레임을
              제작한 뒤{"\n"}타겟층을 대상으로 한 사용성 점검과정을 거쳐 화면을
              제작했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* 03 Content */}
      <Stack spacing={"20px"}>
        {[0, 1, 2, 3, 4].map((item) => (
          <Box className={styels.whiteBox} key={`itemContent-${item}`}>
            <Image
              src={number3Images[item]}
              alt={`itemContent-${item}`}
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        ))}
      </Stack>
      {/* FOOTER */}
      <Box className={styels.titleContent}>
        <Typography className={styels.heading3} pb={5}>
          Project infomation
        </Typography>
        <Stack direction="row" justifyContent={"space-between"} spacing={5}>
          <Stack spacing={"20px"}>
            <Typography
              className={styels.caption}
              sx={{ color: "#1B80FF !important" }}
            >
              Overview
            </Typography>
            <Typography className={styels.detail3} whiteSpace={"pre-wrap"}>
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
          <Stack spacing={"20px"}>
            <Typography
              className={styels.caption}
              sx={{ color: "#1B80FF !important" }}
            >
              Period
            </Typography>
            <Typography className={styels.detail3}>
              2022.12.17 - 2023.03.15
            </Typography>
            <Typography
              className={styels.caption}
              sx={{ color: "#1B80FF !important" }}
            >
              Role
            </Typography>
            <Typography className={styels.detail3} whiteSpace={"pre-wrap"}>
              개인 프로젝트(기여도 100%){"\n"}
              서비스 기획, 유저 인터뷰, 유저 테스트, UI 디자인
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default News;
