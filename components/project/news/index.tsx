import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backgroundImage from "../../../assets/image/news/background.png";
import newSnackBg from "../../../assets/image/news/newSnackBg.png";
import newPlayBg from "../../../assets/image/news/newPlayBg.png";
import styels from "../../../styles/news.module.css";
import { NumberImages } from "./data";
import newsIcon from "../../../assets/image/news/newsIcon.png";
import number2Content from "../../../assets/image/news/number2Content.png";
import number4Content from "../../../assets/image/news/number4Content.png";

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
      {/* 01content */}
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
      >
        <Stack direction="row" spacing={"20px"} width={"100%"}>
          <Box className={styels.leftBox} position={"relative"}>
            <Box alignSelf={"left"} width={"480px"}>
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
            <Box alignSelf={"left"} width={"480px"}>
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
    </Stack>
    // <ProjectLayout>
    //   <Stack direction="row" width={"100%"}>
    //     <Stack
    //       sx={{ width: "747px", backgroundColor: "#FFFFFF", height: "1080px" }}
    //       px={"120px"}
    //       justifyContent={"center"}
    //     >
    //       <Typography
    //         sx={{
    //           color: "#797979",
    //           fontSize: "16px",
    //           fontWeight: 500,
    //           lineHeight: "24px",
    //           letterSpacing: "-0.48px",
    //           pb: 1,
    //         }}
    //       >
    //         UX/UI Design personal project
    //       </Typography>
    //       <Typography
    //         sx={{
    //           color: "#1E1E1E",
    //           fontSize: "40px",
    //           fontWeight: 800,
    //           lineHeight: "60px",
    //           pb: 0.5,
    //         }}
    //       >
    //         NEW SNACK APP
    //       </Typography>
    //       <Typography
    //         sx={{
    //           color: "#000",
    //           fontSize: "20px",
    //           fontWeight: 700,
    //           lineHeight: "30px",
    //           letterSpacing: "-0.6px",
    //           pb: "60px",
    //         }}
    //       >
    //         쉬운 뉴스 리딩을 위한{" "}
    //         <span style={{ color: "#1B80FF" }}>새로운 뉴스 지식 플랫폼</span>
    //       </Typography>
    //       <Stack spacing={"30px"} pb={"94px"}>
    //         {DetailList.map((item) => (
    //           <Stack spacing={"5px"} key={`item-${item.title}`}>
    //             <Typography
    //               sx={{
    //                 color: "#1B80FF",
    //                 fontSize: "15px",
    //                 fontWeight: 700,
    //                 lineHeight: "22.5px",
    //                 letterSpacing: "-0.45px",
    //               }}
    //             >
    //               {item.title}
    //             </Typography>
    //             <Typography
    //               whiteSpace={"pre-wrap"}
    //               sx={{
    //                 color: "#656565",
    //                 fontSize: "15px",
    //                 fontWeight: 500,
    //                 lineHeight: "22.5px",
    //                 letterSpacing: "-0.45px",
    //               }}
    //             >
    //               {item.content}
    //             </Typography>
    //           </Stack>
    //         ))}
    //       </Stack>
    //       <Box
    //         sx={{
    //           backgroundColor: "#005FED",
    //           borderRadius: "8px",
    //           width: "309px",
    //           height: "60px",
    //           boxShadow: "0px 2px 0px 0px #005FED",
    //         }}
    //         display={"flex"}
    //         alignItems={"center"}
    //         // justifyContent={"center"}
    //       >
    //         <Typography
    //           sx={{
    //             color: "#FFF",
    //             fontSize: "18px",
    //             fontWeight: 700,
    //             pl: "33px",
    //           }}
    //         >
    //           영상으로 최종 서비스 확인하기
    //         </Typography>
    //       </Box>
    //     </Stack>
    //     <Stack
    //       sx={{
    //         background: "#1B80FF",
    //         width: "1185px",
    //         height: "1080px",
    //         overflow: "hidden",
    //       }}
    //       position={"relative"}
    //     >
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: "58.5%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
    //         }}
    //       >
    //         <Image src={NewsImgList[0]} layout="intrinsic" alt="image" />
    //       </Box>
    //     </Stack>
    //   </Stack>
    //   <Stack sx={{ backgroundColor: "#000" }}>
    //     {/* 제목 */}
    //     <Stack
    //       direction={"row"}
    //       justifyContent={"space-between"}
    //       pl="114px"
    //       pr={"120px"}
    //       pt="213px"
    //       pb="211px"
    //       alignItems={"center"}
    //       spacing={5}
    //     >
    //       <Stack direction={"row"} alignItems={"center"} spacing={8}>
    //         <Typography
    //           sx={{ color: "#FFF", fontSize: "95.879px", fontWeight: 700 }}
    //         >
    //           01
    //         </Typography>
    //         <Stack spacing={1}>
    //           <Typography
    //             sx={{ color: "#FFF", fontSize: "38px", fontWeight: 700 }}
    //           >
    //             News is not interesting.
    //           </Typography>
    //           <Typography
    //             sx={{
    //               color: "#FFF",
    //               fontSize: "18px",
    //               fontWeight: 500,
    //               lineHeight: "34px",
    //             }}
    //           >
    //             핵심 문제점은, 뉴스는 ‘재미없다’는 인식
    //           </Typography>
    //         </Stack>
    //       </Stack>
    //       <Typography
    //         sx={{
    //           color: "#FFF",
    //           fontSize: "18px",
    //           fontWeight: 400,
    //           lineHeight: "34px",
    //           whiteSpace: "pre-wrap",
    //         }}
    //       >
    //         기존 뉴스 플랫폼에 대한 문제점을 정성적, 정량적으로 조사한 후, 이에
    //         대한 문제점을 해결할 수 있는{"\n"}솔루션을 도출하여 이를 기존의
    //         뉴스와 상반되는 비주얼 컨셉으로 풀어냈습니다.
    //       </Typography>
    //     </Stack>
    //     <Stack
    //       position={"relative"}
    //       height="991px"
    //       borderRadius={2}
    //       sx={{
    //         backgroundColor: "#20242F",
    //         m: 2,
    //         overflow: "hidden",
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           background:
    //             "linear-gradient(180deg, #1B80FF 0%, rgba(27, 128, 255, 0.66) 40.12%, rgba(27, 128, 255, 0.00) 71.99%);",
    //           top: 0,
    //           maxWidth: "1980px",
    //           width: "100%",
    //           height: "645px",
    //           zIndex: 1,
    //           left: 0,
    //         }}
    //       ></Box>
    //       <Box
    //         sx={{
    //           width: "116px",
    //           height: "36px",
    //           border: "1px solid #65FEB3",
    //           borderRadius: "4px",
    //           position: "absolute",
    //           top: 179,
    //           left: 940,
    //           zIndex: 1,
    //         }}
    //         display={"flex"}
    //         alignItems={"center"}
    //         justifyContent={"center"}
    //       >
    //         <Typography
    //           sx={{
    //             color: "#65FEB3",
    //             fontSize: "14px",
    //             fontWeight: 600,
    //             lineHeight: "36px",
    //             letterSpacing: "-0.7px",
    //           }}
    //         >
    //           PROJECT GOAL
    //         </Typography>
    //       </Box>
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: 224,
    //           left: 940,
    //           zIndex: 1,
    //         }}
    //         display={"flex"}
    //         alignItems={"center"}
    //         justifyContent={"center"}
    //       >
    //         <Typography
    //           sx={{
    //             color: "#FFF",
    //             fontSize: "22px",
    //             fontWeight: 600,
    //             lineHeight: "31.9px",
    //             whiteSpace: "pre-wrap",
    //           }}
    //         >
    //           SNS 뉴스 형태에 익숙한{"\n"}MZ세대의 특징을 중심으로{"\n"}
    //           {"'"}동기부여 높은 리딩{"'"}을{"\n"}실천할 수 있는 형태로 제안.
    //         </Typography>
    //       </Box>
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: "600px",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
    //           zIndex: 1,
    //         }}
    //         display={"flex"}
    //         alignItems={"center"}
    //         justifyContent={"center"}
    //       >
    //         <Stack>
    //           <Typography
    //             sx={{
    //               color: "#FFF",
    //               fontSize: "242.828px",
    //               fontWeight: 800,
    //               lineHeight: "364.243px",
    //               whiteSpace: "nowrap",
    //             }}
    //           >
    //             NEW + SNACK
    //           </Typography>
    //           <Stack direction={"row"} spacing={"700px"}>
    //             <Typography
    //               sx={{
    //                 color: "#FFF",
    //                 fontSize: "28px",
    //                 fontWeight: 700,
    //                 lineHeight: "40px",
    //                 pl: 2,
    //               }}
    //             >
    //               새로운, 빠른
    //             </Typography>
    //             <Typography
    //               sx={{
    //                 color: "#FFF",
    //                 fontSize: "28px",
    //                 fontWeight: 700,
    //                 lineHeight: "40px",
    //               }}
    //             >
    //               맛있는, 즐거운
    //             </Typography>
    //           </Stack>
    //         </Stack>
    //       </Box>
    //       <Box
    //         sx={{
    //           width: "100%",
    //           borderRadius: 2,
    //         }}
    //       >
    //         <Image
    //           src={NewsImgList[1]}
    //           alt="background"
    //           placeholder="blur"
    //           layout="intrinsic"
    //         />
    //       </Box>
    //     </Stack>
    //     <Stack
    //       alignItems={"center"}
    //       maxWidth={"1880px"}
    //       px={"20px"}
    //       spacing={"20px"}
    //     >
    //       <Stack direction={"row"} spacing={"20px"} width={"100%"}>
    //         <Box
    //           sx={{
    //             backgroundColor: "#171920",
    //             width: "100%",
    //             height: "1080px",
    //             borderRadius: 2,
    //           }}
    //           display={"flex"}
    //           justifyContent={"center"}
    //           alignItems={"center"}
    //         ></Box>
    //         <Box
    //           sx={{
    //             backgroundColor: "#263B74",
    //             width: "100%",
    //             height: "1080px",
    //             borderRadius: 2,
    //           }}
    //           display={"flex"}
    //           justifyContent={"center"}
    //           alignItems={"center"}
    //         ></Box>
    //       </Stack>
    //       <Stack position={"relative"} height="1079px" maxWidth={"1880px"}>
    //         <Box
    //           sx={{
    //             width: "100%",
    //           }}
    //         >
    //           <Image
    //             src={NewsImgList[2]}
    //             alt="background"
    //             placeholder="blur"
    //             layout="intrinsic"
    //           />
    //         </Box>
    //       </Stack>
    //     </Stack>
    //     {/* 제목 */}
    //     <Stack
    //       direction={"row"}
    //       justifyContent={"space-between"}
    //       pl="114px"
    //       pr={"120px"}
    //       pt="213px"
    //       pb="211px"
    //       alignItems={"center"}
    //       spacing={5}
    //     >
    //       <Stack direction={"row"} alignItems={"center"} spacing={8}>
    //         <Typography
    //           sx={{ color: "#FFF", fontSize: "95.879px", fontWeight: 700 }}
    //         >
    //           02
    //         </Typography>
    //         <Stack spacing={1}>
    //           <Typography
    //             sx={{ color: "#FFF", fontSize: "38px", fontWeight: 700 }}
    //           >
    //             Visual solution
    //           </Typography>
    //           <Typography
    //             sx={{
    //               color: "#FFF",
    //               fontSize: "18px",
    //               fontWeight: 500,
    //               lineHeight: "34px",
    //             }}
    //           >
    //             문제점 해결을 위한 비주얼 솔루션
    //           </Typography>
    //         </Stack>
    //       </Stack>
    //       <Typography
    //         sx={{
    //           color: "#FFF",
    //           fontSize: "18px",
    //           fontWeight: 400,
    //           lineHeight: "34px",
    //           whiteSpace: "pre-wrap",
    //         }}
    //       >
    //         기존 뉴스 플랫폼에 대한 문제점을 정성적, 정량적으로 조사한 후, 이에
    //         대한 문제점을 해결할 수 있는{" \n"}솔루션을 도출하여 이를 기존의
    //         뉴스와 상반되는 비주얼 컨셉으로 풀어냈습니다.
    //       </Typography>
    //     </Stack>
    //     <Stack
    //       alignItems={"center"}
    //       maxWidth={"1880px"}
    //       px={"20px"}
    //       spacing={"20px"}
    //     >
    //       <Box
    //         sx={{
    //           backgroundColor: "#222224",
    //           width: "100%",
    //           height: "1080px",
    //           borderRadius: 2,
    //         }}
    //         display={"flex"}
    //         justifyContent={"center"}
    //         alignItems={"center"}
    //       ></Box>
    //       <Box
    //         sx={{
    //           backgroundColor: "#222224",
    //           width: "100%",
    //           height: "1979px",
    //           borderRadius: 2,
    //         }}
    //         display={"flex"}
    //         justifyContent={"center"}
    //         alignItems={"center"}
    //       ></Box>
    //       <Stack
    //         direction={"row"}
    //         spacing={"20px"}
    //         sx={{ width: "100%", height: "1080px" }}
    //       >
    //         <Box
    //           sx={{
    //             backgroundColor: "#F4F8FF",
    //             width: "100%",
    //             height: "1080px",
    //             borderRadius: 2,
    //           }}
    //           display={"flex"}
    //           justifyContent={"center"}
    //           alignItems={"center"}
    //         >
    //           test
    //         </Box>
    //         <Stack spacing={"20px"} width={"100%"} maxWidth="638px">
    //           <Box
    //             sx={{
    //               backgroundColor: "#E9F3FF",
    //               maxWidth: "638px",
    //               width: "100%",
    //               height: "1080px",
    //               borderRadius: 2,
    //             }}
    //             display={"flex"}
    //             justifyContent={"center"}
    //             alignItems={"center"}
    //           >
    //             test
    //           </Box>
    //           <Box
    //             sx={{
    //               backgroundColor: "#1B80FF",
    //               maxWidth: "638px",
    //               width: "100%",
    //               height: "1080px",
    //               borderRadius: 2,
    //             }}
    //             display={"flex"}
    //             justifyContent={"center"}
    //             alignItems={"center"}
    //           >
    //             test3
    //           </Box>
    //         </Stack>
    //       </Stack>
    //       <Stack position={"relative"} height="1079px" maxWidth={"1880px"}>
    //         <Box
    //           sx={{
    //             position: "absolute",
    //             width: "100%",
    //             maxWidth: "1880px",
    //             height: "100%",
    //             backgroundColor: "rgba(0, 0, 0, 0.51);",
    //             zIndex: 1,
    //           }}
    //         ></Box>
    //         <Box
    //           sx={{
    //             position: "absolute",
    //             top: 100,
    //             left: 100,
    //             zIndex: 2,
    //           }}
    //         >
    //           <Stack spacing={"10px"}>
    //             <Typography
    //               sx={{
    //                 color: "#FFF",
    //                 fontSize: "38px",
    //                 fontWeight: 700,
    //                 whiteSpace: "pre-wrap",
    //               }}
    //             >
    //               MZ세대를 타겟팅한{"\n"}홍보 영상을 제작했습니다.
    //             </Typography>
    //             <Typography
    //               sx={{
    //                 color: "#FFF",
    //                 fontSize: "24px",
    //                 fontWeight: 500,
    //                 lineHeight: "34px",
    //               }}
    //             >
    //               썸네일 클릭 시 영상으로 이동합니다.
    //             </Typography>
    //           </Stack>
    //         </Box>
    //         <Box
    //           sx={{
    //             width: "100%",
    //           }}
    //         >
    //           <Image
    //             src={NewsImgList[3]}
    //             alt="background"
    //             placeholder="blur"
    //             layout="intrinsic"
    //           />
    //         </Box>
    //       </Stack>
    //     </Stack>
    //     {/* 제목 */}
    //     <Stack
    //       direction={"row"}
    //       justifyContent={"space-between"}
    //       pl="114px"
    //       pr={"120px"}
    //       py="120px"
    //       alignItems={"center"}
    //       sx={{ backgroundColor: "#C1D6F2" }}
    //       spacing={5}
    //     >
    //       <Stack direction={"row"} alignItems={"center"} spacing={8}>
    //         <Typography
    //           sx={{ color: "#000", fontSize: "95.879px", fontWeight: 700 }}
    //         >
    //           03
    //         </Typography>
    //         <Stack spacing={1}>
    //           <Typography
    //             sx={{ color: "#000", fontSize: "38px", fontWeight: 700 }}
    //           >
    //             SCREEN FLOW
    //           </Typography>
    //           <Typography
    //             sx={{
    //               color: "#000",
    //               fontSize: "18px",
    //               fontWeight: 500,
    //               lineHeight: "34px",
    //             }}
    //           >
    //             화면 플로우
    //           </Typography>
    //         </Stack>
    //       </Stack>
    //       <Typography
    //         sx={{
    //           color: "#000",
    //           fontSize: "18px",
    //           fontWeight: 400,
    //           lineHeight: "34px",
    //           whiteSpace: "pre-wrap",
    //         }}
    //       >
    //         핵심 문제점을 해결할 수 있는 사용자 UI를 설계하고, 와이어프레임을
    //         제작한 뒤{"\n"}타겟층을 대상으로 한 사용성 점검과정을 거쳐 화면을
    //         제작했습니다.
    //       </Typography>
    //     </Stack>
    //     <Stack
    //       alignItems={"center"}
    //       maxWidth={"1880px"}
    //       px={"20px"}
    //       spacing={"20px"}
    //       sx={{ backgroundColor: "#C1D6F2" }}
    //     >
    //       <Stack
    //         position={"relative"}
    //         height="1079px"
    //         maxWidth={"1880px"}
    //         width={"100%"}
    //         sx={{ backgroundColor: "#3385ED", borderRadius: 2 }}
    //       >
    //         <Box
    //           sx={{
    //             width: "100%",
    //             height: "1079px",
    //           }}
    //         >
    //           test
    //         </Box>
    //       </Stack>
    //       <Stack
    //         position={"relative"}
    //         height="1079px"
    //         maxWidth={"1880px"}
    //         width={"100%"}
    //         sx={{ backgroundColor: "#ECF0F7", borderRadius: 2 }}
    //       >
    //         <Box
    //           sx={{
    //             width: "100%",
    //             height: "1079px",
    //           }}
    //         >
    //           test
    //         </Box>
    //       </Stack>
    //       <Stack
    //         position={"relative"}
    //         height="1079px"
    //         maxWidth={"1880px"}
    //         width={"100%"}
    //         sx={{ backgroundColor: "#3385ED", borderRadius: 2 }}
    //       >
    //         <Box
    //           sx={{
    //             width: "100%",
    //             height: "1079px",
    //           }}
    //         >
    //           test
    //         </Box>
    //       </Stack>
    //     </Stack>
    //     {/* 제목 */}
    //     <Stack
    //       direction={"row"}
    //       justifyContent={"space-between"}
    //       pl="114px"
    //       pr={"120px"}
    //       pt="226px"
    //       pb="211px"
    //       spacing={8}
    //       sx={{ backgroundColor: "#C1D6F2" }}
    //     >
    //       <Stack spacing={1}>
    //         <Typography
    //           sx={{
    //             color: "#252528",
    //             fontSize: "38px",
    //             fontWeight: 700,
    //             pb: 3,
    //           }}
    //         >
    //           Project infomation
    //         </Typography>
    //         <Typography
    //           sx={{
    //             color: "#1B80FF",
    //             fontSize: "18px",
    //             fontWeight: 700,
    //             lineHeight: "27px",
    //             letterSpacing: "-0.54px",
    //           }}
    //         >
    //           Overview
    //         </Typography>
    //         <Typography
    //           sx={{
    //             color: "#000",
    //             fontSize: "18px",
    //             fontWeight: 400,
    //             lineHeight: "32px",
    //           }}
    //           whiteSpace={"pre-wrap"}
    //         >
    //           뉴스낵은 아래 세가지로 분류되는 기존 서비스의 장점만을 합쳐 2030
    //           디지털 네이티브 세대의 정보 발굴처 정착을 돕는 새로운 뉴스
    //           서비스입니다.{"\n"}첫째, 사용자가 원하는 컨텐츠보다는 카테고리로만
    //           단순 분류 된 기존의 쉬운 뉴스 서비스. 둘째, 공신력이 있고 실질적
    //           정보를 전달하지만 리딩이 어려운{"\n"}서비스. 셋째, 빠른 정보
    //           전달과 소통 기능이 강점이지만 정보의 신뢰도가 낮은 SNS 서비스. 본
    //           프로젝트는 쉬운 이해가 가능하면서도, 개인에게 맞는{"\n"}균형잡힌
    //           정보를 제공하며, 소통 기능이 결합된 서비스 입니다.
    //         </Typography>
    //       </Stack>
    //       <Stack spacing={"17px"} pt="90px">
    //         <Typography
    //           sx={{
    //             color: "#1B80FF",
    //             fontSize: "18px",
    //             fontWeight: 700,
    //             lineHeight: "27px",
    //             letterSpacing: "-0.54px",
    //           }}
    //         >
    //           Period
    //         </Typography>
    //         <Typography
    //           sx={{
    //             color: "#000",
    //             fontSize: "18px",
    //             fontWeight: 400,
    //             lineHeight: "32px",
    //           }}
    //           whiteSpace={"pre-wrap"}
    //         >
    //           2023.12.05 - 2023.03.15
    //         </Typography>
    //         <Typography
    //           sx={{
    //             color: "#1B80FF",
    //             fontSize: "18px",
    //             fontWeight: 700,
    //             lineHeight: "27px",
    //             letterSpacing: "-0.54px",
    //           }}
    //         >
    //           Role
    //         </Typography>
    //         <Typography
    //           sx={{
    //             color: "#000",
    //             fontSize: "18px",
    //             fontWeight: 400,
    //             lineHeight: "32px",
    //           }}
    //           whiteSpace={"pre-wrap"}
    //         >
    //           실무 프로젝트{"\n"}서비스 기획, 3D 디자인, UI 디자인
    //         </Typography>
    //       </Stack>
    //     </Stack>
    //     {/* endStack */}
    //   </Stack>
    // </ProjectLayout>
  );
}

export default News;
