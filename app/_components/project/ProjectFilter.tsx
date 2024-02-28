import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Project from "../../_assets/icon/project.svg";
import Image, { StaticImageData } from "next/image";
import MainLayout from "../layout/MainLayout";
import { cardSectionDataList, imageList } from "../main/Main";

function ProjectFilter() {
  const [prjIdx, setPrjIdx] = useState(0);
  const [filterTxt, setFilterTxt] = useState("");

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      sx={{ pt: "236px", pb: "60px" }}
    >
      <MainLayout sx={{ px: "0px" }}>
        <Stack direction={"row"} justifyContent={"space-between"} pb="84px">
          <Image src={Project} alt="landing" />
          <Typography
            sx={{
              whiteSpace: "pre-wrap",
              textTransform: "uppercase",
              color: "#B6B6B6",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            An itemized list of practical and personal{"\n"}projects. Mainly
            apps and web projects.{"\n"}
            Other works include video, publishing, etc
          </Typography>
        </Stack>
        <Stack direction={"row"} pt={"163px"} spacing={"18px"}>
          {["ALL", "APP", "WEB", "PUBLISHING", "3D", "VIDEO"].map(
            (item, index) => (
              <Box px={"10px"} py={"4px"} key={`filter-${item}`}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#B6B6B6",
                    cursor: "pointer",
                    ...(prjIdx == index && { fontWeight: 700, color: "#000" }),
                  }}
                  onClick={() => {
                    setPrjIdx(index);
                    setFilterTxt(index == 0 ? "" : item);
                  }}
                >
                  {item}
                </Typography>
              </Box>
            )
          )}
        </Stack>
        <Divider
          sx={{
            width: "100%",
            border: "1px solid #777",
            mt: "31px",
            mb: "60px",
          }}
        />
        <Grid container spacing={4}>
          {cardSectionDataList
            .filter((item, index) => {
              if (filterTxt == "") {
                return true;
              } else {
                return item.chipList.includes(filterTxt);
              }
            })
            .map((item, index) => (
              <Grid item xs={6} key={`cardItem-${index}`} alignItems={"center"}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      minHeight: "462px",
                      maxHeight: "462px",
                      backgroundColor: item.color,
                      borderRadius: "20px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: item.id == 0 ? "54%" : "51%",
                        left:
                          item.id == 2 ? "45%" : item.id == 3 ? "55%" : "50%",
                        transform: "translate(-50%, -50%)", // 추가: 가운데 정렬
                      }}
                    >
                      <Image
                        src={imageList[item.id]}
                        width={item.width}
                        height={item.height}
                        quality={85}
                        layout="fixed"
                        alt="image"
                      />
                    </Box>
                  </Box>
                  <Stack alignItems={"left"}>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "45px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 300,
                        lineHeight: "30px",
                        pb: "3px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                    <Stack direction={"row"} spacing={"12px"}>
                      {item.chipList.map((chip, index) => (
                        <Box
                          key={`chip-${index}`}
                          sx={{
                            borderRadius: "40px",
                            border: "1.291px solid var(--gray_3, #B6B6B6)",
                            p: "5.16px 12.91px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "22px",
                              ...(chip.includes("실무") && { fontWeight: 700 }),
                            }}
                          >
                            {chip}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            ))}
        </Grid>
      </MainLayout>
    </Stack>
  );
}

export default ProjectFilter;
