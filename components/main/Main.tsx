"use client";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import About from "../../assets/icon/about.svg";
import Project from "../../assets/icon/project.svg";
import MainLayout from "../layout/MainLayout";

import { useRouter } from "next/navigation";
import backgroundImage from "../../assets/image/main/background.png";
import title from "../../assets/image/main/title.png";
import profile from "../../assets/image/main/profile.png";
import styles from "../../styles/main.module.css";
import { cardSectionDataList, imageList, myCareerList } from "./data";

export default function Main() {
  const router = useRouter();
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
    >
      <Box className={styles.title} sx={{ px: { xs: "20px", md: "40px", lg: "0px" } }}>
        <Image
          src={title}
          alt="title"
          placeholder="blur"
          width={520}
          height={60}
          style={{ width: "clamp(200px, 40vw, 520px)", height: "auto" }}
        />
      </Box>
      <Box>
        <Image
          src={backgroundImage}
          alt="background"
          placeholder="blur"
          layout="intrinsic"
        />
      </Box>
      <MainLayout sx={{ px: "0px" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ xs: "flex-start", md: "center" }}
          gap={{ xs: 2, md: 0 }}
          pt={{ xs: "60px", md: "100px" }}
          pb={{ xs: "60px", md: "110px" }}
        >
          <Image src={Project} alt="landing" />
          <Typography className={styles.subDesc} sx={{ fontSize: { xs: "14px", md: "16px" } }}>
            An itemized list of practical and personal{"\n"}projects. Mainly
            apps and web projects.{"\n"}
            Other works include video, publishing, etc
          </Typography>
        </Stack>
        <Grid container spacing={"20px"}>
          {cardSectionDataList.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={`cardItem-${index}`}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/project/${item.path}`);
              }}
            >
              <Image
                src={imageList[item.id]}
                placeholder="blur"
                layout="responsive"
                alt={item.title}
              />
              <Stack spacing={0} pt={"20px"} pb={"50px"}>
                <Stack alignItems={"left"} spacing={0.5}>
                  <Typography className={styles.projectTitle} sx={{ fontSize: { xs: "20px", md: "28px" } }}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.projectDesc} sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                    {item.desc}
                  </Typography>
                  <Stack direction={"row"} flexWrap={"wrap"} gap={"8px"} pt={1}>
                    {item.chipList.map((chip, index) => (
                      <Box
                        key={`chip-${index}`}
                        sx={{
                          borderRadius: "40px",
                          border: "1.291px solid var(--gray_3, #B6B6B6)",
                          p: { xs: "4px 10px", md: "5.16px 12.91px" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "13px", md: "18px" },
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
        <Divider
          sx={{
            width: "100%",
            mb: "59px",
          }}
          className={styles.divider}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ xs: "center", md: "flex-start" }}
          gap={{ xs: 4, md: 0 }}
          pb={{ xs: "60px", md: "120px" }}
        >
          <Stack spacing={{ xs: "40px", md: "221px" }} width={{ xs: "100%", md: "auto" }}>
            <Image src={About} alt="about" id="About" />
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              {myCareerList.map((item, index) => (
                <Stack spacing={"6px"} key={item.title} maxWidth={{ xs: "100%", md: "340px" }}>
                  <Typography className={styles.careerTitle} sx={{ fontSize: { xs: "20px", md: "28px" } }}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.careerDesc} sx={{ fontSize: { xs: "15px", md: "18px" } }}>
                    {item.desc}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box className={styles.profile} sx={{ width: { xs: "100%", md: "376px" }, height: { xs: "auto", md: "438px" }, maxWidth: "376px" }}>
            <Image
              src={profile}
              alt="profile"
              placeholder="blur"
              layout="responsive"
            />
          </Box>
        </Stack>
      </MainLayout>
    </Stack>
  );
}
