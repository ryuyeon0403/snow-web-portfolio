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
      <Image
        src={title}
        alt="title"
        placeholder="blur"
        width={520}
        height={60}
        className={styles.title}
      />
      <Image
        src={backgroundImage}
        alt="background"
        placeholder="blur"
        layout="intrinsic"
      />
      <MainLayout sx={{ px: "0px" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          pt={"100px"}
          pb={"110px"}
        >
          <Image src={Project} alt="landing" />
          <Typography className={styles.subDesc}>
            An itemized list of practical and personal{"\n"}projects. Mainly
            apps and web projects.{"\n"}
            Other works include video, publishing, etc
          </Typography>
        </Stack>
        <Grid container spacing={"20px"}>
          {cardSectionDataList.map((item, index) => (
            <Grid
              item
              xs={6}
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
                  <Typography className={styles.projectTitle}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.projectDesc}>
                    {item.desc}
                  </Typography>
                  <Stack direction={"row"} spacing={"12px"} pt={1}>
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
        <Divider
          sx={{
            width: "100%",
            mb: "59px",
          }}
          className={styles.divider}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          pb={"120px"}
        >
          <Stack spacing={"221px"}>
            <Image src={About} alt="about" id="About" />
            <Stack direction={"row"} spacing={2}>
              {myCareerList.map((item, index) => (
                <Stack spacing={"6px"} key={item.title} maxWidth={"340px"}>
                  <Typography className={styles.careerTitle}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.careerDesc}>
                    {item.desc}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box className={styles.profile}>
            <Image
              src={profile}
              alt="profile"
              placeholder="blur"
              layout="intrinsic"
            />
          </Box>
        </Stack>
      </MainLayout>
    </Stack>
  );
}
