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
import styles from "../../../styles/news.module.css";
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
      className={styles.content}
    >
      <Box sx={{ width: "100%", lineHeight: 0 }}>
        <Image
          src={backgroundImage}
          alt="background"
          placeholder="blur"
          layout="responsive"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </Box>
      <Box className={styles.title}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: "16px", md: "50px" }}>
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
              "BACKGROUND & OVERVIEW",
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
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: "12px", md: 5 }} alignItems={{ xs: "flex-start", md: "center" }}>
          <Typography className={styles.heading1}>01</Typography>
          <Stack>
            {[
              "News is not interesting",
              "핵심 문제점은, 뉴스는 '재미없다'는 인식",
            ].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.heading3 : styles.detail3}
                sx={{ whiteSpace: { xs: "normal", md: "pre-wrap" } }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={{ xs: 0, md: 10 }}>
            <Typography whiteSpace={"pre-wrap"} className={styles.detail1}>
              MZ세대의 뉴스 사용 행태에 대하여 데스크 리서치를 실행한 후, 타깃
              사용자 400명을 대상으로 설문을 진행하여 도출한 인사이트를
              바탕으로 플랫폼의 핵심 기능을 고안했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* 01 content - 배경/출처 */}
      <Box className={styles.whiteBox}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          maxWidth={"1360px"}
          width={"100%"}
          pt={{ xs: "40px", md: "77px" }}
          pb={{ xs: "40px", md: "143px" }}
          px={{ xs: "20px", md: 0 }}
          justifyContent={"space-between"}
          gap={{ xs: 3, md: 0 }}
        >
          <Stack spacing={3}>
            <Typography className={styles.caption}>Background</Typography>
            <Typography
              whiteSpace={"pre-wrap"}
              className={styles.heading3}
              sx={{ color: "#000 !important" }}
            >
              최근 이슈에 대한 관심에 비해{"\n"}양질의 정보습득이 어려운 20대
            </Typography>
          </Stack>
          <Stack spacing={0.5} alignItems={{ xs: "flex-start", md: "flex-end" }}>
            <Typography className={styles.detail4} pb={"0.2px"}>*출처</Typography>
            <Typography className={styles.detail4}>
              한겨례 : MZ세대는 뉴스를 보지 않는 게 아니라 '회피'하고 있다
            </Typography>
            <Typography className={styles.detail4}>
              한국뉴스협회 : 요즘 누가 신문·TV로 뉴스 봅니까…
            </Typography>
            <Typography className={styles.detail4}>
              유튜브 뉴스 콘텐츠의 이용동기가 이용 만족도에 미치는 영향
            </Typography>
          </Stack>
        </Stack>

        {/* 카드 4개 */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          maxWidth={"1360px"}
          width={"100%"}
          px={{ xs: "20px", md: 0 }}
          pb={{ xs: "40px", md: "59px" }}
          spacing={"12px"}
        >
          {/* 카드 1 */}
          <Box className={styles.contentBox}>
            <Box sx={{ px: "20px", pt: "20px", pb: "4px", lineHeight: 0 }}>
              <Image src={NumberImages[0]} alt="num1" width={20} height={20} />
            </Box>
            <Typography className={styles.body4} sx={{ color: "#000 !important", py: "12px", px: "20px" }}>
              새로운 뉴스 플랫폼이 등장했으나 사용자는 정보 정착지를 찾지 못했습니다.
            </Typography>
            <Typography className={styles.detail4} sx={{ color: "#6B6B73 !important", pb: "20px", px: "20px" }}>
              젊은층 뉴스 이용자들이 레거시 미디어를 떠나 새로운 뉴스 플랫폼으로 이동중이에요.
            </Typography>
          </Box>
          {/* 카드 2 */}
          <Box className={styles.contentBox}>
            <Box sx={{ px: "20px", pt: "20px", pb: "4px", lineHeight: 0 }}>
              <Image src={NumberImages[1]} alt="num2" width={20} height={20} />
            </Box>
            <Typography className={styles.body4} sx={{ color: "#000 !important", py: "12px", px: "20px" }}>
              20대 전용 뉴스 플랫폼의 경우,{" "}
              <span style={{ color: "#1B80FF" }}>난이도가 어렵다는</span> 의견이 다수였습니다.
            </Typography>
            <Stack direction={"row"} px={"20px"} spacing={0.5} alignItems={"center"} flexWrap={"wrap"}>
              <Image src={newsIcon} alt="newIcon" placeholder="blur" width={17} height={20} />
              <Typography className={styles.detail4}>네이버 20대 뉴스</Typography>
              <Typography className={styles.detail4}>사용자 2644만명</Typography>
            </Stack>
            <Box px={"20px"} pb={"20px"} pt={"12px"}>
              <Image src={number2Content} alt="number2Content" placeholder="blur" layout="responsive" />
            </Box>
          </Box>
          {/* 카드 3 */}
          <Box className={styles.contentBox}>
            <Box sx={{ px: "20px", pt: "20px", pb: "4px", lineHeight: 0 }}>
              <Image src={NumberImages[2]} alt="num3" width={20} height={20} />
            </Box>
            <Typography className={styles.body4} sx={{ color: "#000 !important", py: "12px", px: "20px" }}>
              쉬운 뉴스 앱의 경우,{" "}
              <span style={{ color: "#1B80FF" }}>정보 업데이트가 느리다는 사용자 보이스가 확인되었습니다.</span>
            </Typography>
            <Stack direction={"row"} px={"20px"} spacing={0.5} alignItems={"center"} flexWrap={"wrap"}>
              <Image src={newsIcon} alt="newIcon" placeholder="blur" width={17} height={20} />
              <Typography className={styles.detail4}>뉴닉</Typography>
              <Typography className={styles.detail4}>사용자 40만명</Typography>
            </Stack>
            <Stack pt={"40px"} px={"20px"} pb={"40px"} spacing={"12px"}>
              {[
                "제공되는 정보의 기준이 모호해요",
                "타인의 의견확인이 불가능한 커뮤니티",
                "속보 소식 전달이 너무 느려요",
                "제가 쓴 의견이 바로 올라가지 않아 답답해요",
              ].map((item, index) => (
                <Box className={styles.chip} key={`chip-${index}`}>
                  <Typography className={styles.chipText}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          {/* 카드 4 */}
          <Box className={styles.contentBox}>
            <Box sx={{ px: "20px", pt: "20px", pb: "4px", lineHeight: 0 }}>
              <Image src={NumberImages[3]} alt="num4" width={20} height={20} />
            </Box>
            <Typography className={styles.body4} sx={{ color: "#000 !important", py: "12px", px: "20px" }}>
              결국 <span style={{ color: "#1B80FF" }}>SNS로 뉴스를 확인</span>하는 MZ세대.{" "}
              그러나 이는 정보가 정확하지 않습니다.
            </Typography>
            <Stack direction={"row"} px={"20px"} pt={2} spacing={0.5} alignItems={"center"}>
              <Typography className={styles.detail4}>
                '소셜 미디어를 통해 뉴스를 소비한 경험이 있다' 응답
              </Typography>
            </Stack>
            <Box pt={4} px={"20px"} pb={"20px"}>
              <Image src={number4Content} alt="number4Content" placeholder="blur" layout="responsive" />
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box className={styles.whiteBox} pt={"20px"} sx={{ background: "none !important" }}>
        <Image src={newSnackBg} alt="newSnackBg" placeholder="blur" layout="responsive" />
      </Box>

      {/* Problem / Solution 카드 */}
      <Box className={styles.whiteBox} pt={"20px"} sx={{ background: "none !important" }}>
        <Image src={newPlayBg} alt="newPlayBg" placeholder="blur" layout="responsive" />
      </Box>

      <Box className={styles.whiteBox} pt={"20px"} sx={{ background: "none !important" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={"13px"} width={"100%"}>
          <Box className={styles.leftBox} position={"relative"}>
            <Box alignSelf={"flex-start"} maxWidth={"480px"} width={"100%"} px={{ xs: "20px", md: 0 }}>
              <Box className={styles.leftBoxTitle}>
                <Typography className={styles.body4}>Problem</Typography>
              </Box>
            </Box>
            {[
              "정보에 대한 접근성이 좋지 않고\n한쪽으로 편향된 정보를 제공받습니다.",
              "쉬운 정보를 전달할 시 정보의 정확도가\n낮으며, 공신력있는 정보의 경우 어렵습니다.",
              "정보를 접한 후 다양한 사람들의 의견을\n균형있게 볼 수 없습니다.",
            ].map((item) => (
              <Box key={item} className={styles.leftBoxContent}>
                <Typography className={styles.body2} whiteSpace={"pre-wrap"} sx={{ px: { xs: "16px", md: 0 } }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box className={styles.rightBox}>
            <Box alignSelf={"flex-start"} maxWidth={"480px"} width={"100%"} px={{ xs: "20px", md: 0 }}>
              <Box className={styles.rightBoxTitle}>
                <Typography className={styles.body4}>Solution</Typography>
              </Box>
            </Box>
            {[
              "빠른 뉴스 파인딩 기능을 기반으로\n균형잡힌 뉴스소비 솔루션을 제공합니다.",
              "뉴스의 본질을 잃지 않으며, 사전, 퀴즈\n등의 기능으로 실질적 이해를 돕습니다.",
              "이슈톡, 오픈톡, 투표, 공유기능 등을\n제공해 다양한 여론 활용을 돕습니다.",
            ].map((item) => (
              <Box key={item} className={styles.rightBoxContent}>
                <Typography className={styles.body2} whiteSpace={"pre-wrap"} sx={{ px: { xs: "16px", md: 0 } }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>

      {/* 02 */}
      <Box className={styles.titleContent}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: "12px", md: 5 }} alignItems={{ xs: "flex-start", md: "center" }}>
          <Typography className={styles.heading1}>02</Typography>
          <Stack>
            {["Visual Solution", "문제점 해결을 위한 비주얼 솔루션"].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.heading3 : styles.detail3}
                sx={{ whiteSpace: { xs: "normal", md: "pre-wrap" } }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={{ xs: 0, md: 10 }}>
            <Typography whiteSpace={"pre-wrap"} className={styles.detail1}>
              기존 뉴스 플랫폼에 대한 문제점을 정성적, 정량적으로 조사한 후,
              이에 대한 솔루션을 도출하여 기존의 뉴스와 상반되는 비주얼 컨셉으로 풀어냈습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* 02 Content - 디자인시스템 */}
      <Box className={styles.whiteBox} sx={{ background: "#171920 !important", mb: "20px" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          maxWidth={"1360px"}
          width={"100%"}
          pt={{ xs: "40px", md: "80px" }}
          px={{ xs: "20px", md: 0 }}
          spacing={{ xs: 2, md: 5 }}
          pb={{ xs: "40px", md: "160px" }}
        >
          <Typography className={styles.body4} sx={{ flexShrink: 0 }}>Design system</Typography>
          <Typography className={styles.detail1} sx={{ color: "#B6B6B6 !important", whiteSpace: "pre-wrap" }}>
            NotoSans 서체로부터 가독성을 더해 만들어진 Pretendard 서체 시스템을 사용함으로써
            리딩에 적합한 높은 판독성의 환경을 고안했으며, 즐거운 뉴스 컨셉에 맞는 컬러를 채택했습니다.
          </Typography>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 5 }} pb={10} px={{ xs: "20px", md: 0 }} width={"100%"} maxWidth={"1360px"}>
          <Box>
            <Image src={number2Design} alt="number2Design" layout="responsive" placeholder="blur" />
          </Box>
          <Box sx={{ maxWidth: { xs: "100%", md: "300px" } }}>
            <Image src={number2Text} alt="number2Text" layout="responsive" placeholder="blur" />
          </Box>
        </Stack>
      </Box>

      {/* 02 second Content - 에셋 */}
      <Box className={styles.whiteBox} sx={{ background: "#171920 !important", mb: "20px" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          maxWidth={"1360px"}
          width={"100%"}
          pt={{ xs: "40px", md: "80px" }}
          px={{ xs: "20px", md: 0 }}
          spacing={{ xs: 2, md: "64px" }}
          pb={{ xs: "40px", md: "150px" }}
        >
          <Typography className={styles.body4} sx={{ flexShrink: 0 }}>Asset Library</Typography>
          <Typography className={styles.detail1} sx={{ color: "#B6B6B6 !important", whiteSpace: "pre-wrap" }}>
            주 사용 대상이 선호하는 플랫폼 조사와 사용자 그룹과 비슷한 인터뷰이들의 인터뷰 조사 결과를 통해
            사용자들에게 더욱 심미적 가시성을 높이고 호감도 측면에서 효과적으로 어필할 수 있는 3D 그래픽 요소를 고안했습니다.
          </Typography>
        </Stack>
        <Box maxWidth={"1440px"} width={"100%"} pb={11} px={{ xs: "20px", md: 0 }}>
          <Image src={number2Group} alt="number2Group" layout="responsive" placeholder="blur" />
        </Box>
      </Box>

      {/* 02 Youtube */}
      <Box className={styles.whiteBox} sx={{ background: "#171920 !important" }}>
        <NewsYoutube />
      </Box>

      {/* 03 */}
      <Box className={styles.titleContent}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: "12px", md: 5 }} alignItems={{ xs: "flex-start", md: "center" }}>
          <Typography className={styles.heading1}>03</Typography>
          <Stack>
            {["Screen Flow", "화면 플로우"].map((item, index) => (
              <Typography
                key={item}
                className={index == 0 ? styles.heading3 : styles.detail3}
                sx={{ whiteSpace: { xs: "normal", md: "pre-wrap" } }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack pl={{ xs: 0, md: 10 }}>
            <Typography whiteSpace={"pre-wrap"} className={styles.detail1}>
              핵심 문제점을 해결할 수 있는 사용자 UI를 설계하고, 와이어프레임을 제작한 뒤
              타겟층을 대상으로 한 사용성 점검과정을 거쳐 화면을 제작했습니다.
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* 03 Content */}
      <Stack spacing={"20px"} width={"100%"} px={{ xs: "16px", md: 0 }}>
        {[0, 1, 2, 3, 4].map((item) => (
          <Box className={styles.whiteBox} key={`itemContent-${item}`}>
            <Image src={number3Images[item]} alt={`itemContent-${item}`} placeholder="blur" layout="responsive" />
          </Box>
        ))}
      </Stack>

      {/* FOOTER */}
      <Box className={styles.titleContent}>
        <Typography className={styles.heading3} pb={5}>Project infomation</Typography>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent={"space-between"} spacing={5}>
          <Stack spacing={"20px"}>
            <Typography className={styles.caption} sx={{ color: "#1B80FF !important" }}>Overview</Typography>
            <Typography className={styles.detail3} whiteSpace={"pre-wrap"}>
              뉴스낵은 아래 세가지로 분류되는 기존 서비스의 장점만을 합쳐 2030 디지털 네이티브 세대의 정보 발굴처 정착을 돕는 새로운 뉴스 서비스입니다.
            </Typography>
          </Stack>
          <Stack spacing={"20px"}>
            <Typography className={styles.caption} sx={{ color: "#1B80FF !important" }}>Period</Typography>
            <Typography className={styles.detail3}>2022.12.17 - 2023.03.15</Typography>
            <Typography className={styles.caption} sx={{ color: "#1B80FF !important" }}>Role</Typography>
            <Typography className={styles.detail3} whiteSpace={"pre-wrap"}>
              개인 프로젝트(기여도 100%){"\n"}서비스 기획, 유저 인터뷰, 유저 테스트, UI 디자인
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default News;
