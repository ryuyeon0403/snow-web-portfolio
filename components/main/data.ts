import { StaticImageData } from "next/image";
import project1 from "../../assets/image/main/project1.png";
import project2 from "../../assets/image/main/project2.png";
import project3 from "../../assets/image/main/project3.png";
import project4 from "../../assets/image/main/project4.png";
import project5 from "../../assets/image/main/project5.png";

interface CardType {
  id: number;
  title: string;
  desc: string;
  chipList: string[];
  color: string;
  path: string;
}

interface History {
  title: string;
  desc: string;
}

export const imageList: Array<StaticImageData> = [
  project1,
  project2,
  project3,
  project4,
  project5,
];

export const myCareerList: History[] = [
  // {
  //   title: "학력",
  //   desc: "연세대학교 시각디자인과 / 디지털예술학과 졸업\n연세대학교 신촌캠퍼스 디지털예술학과 연계전공\n연세대학교 미래캠퍼스 시각디자인과 편입\n예일여자고등학교",
  // },
  {
    title: "경력",
    desc: "카카오  ㅣ  2023.12 - 현재\n동아일보   ㅣ   2023.6 - 2023.11\n대학내일 ES : NHR  ㅣ  2022.7-2023.5\n(주)나로나오   ㅣ   2021.8 - 2021.10",
  },
  // {
  //   title: "어학 l 자격증",
  //   desc: "Opic IH  l  2023.2\nGTQ 자격증 1급 ㅣ 2023.11\nACA 국제 포토샵 자격증 1급 ㅣ 2021.9\n운전면허증 2종 보통",
  // },
  // {
  //   title: "수상",
  //   desc: "GTQ 자격증 1급 ㅣ 2023.11\nACA 국제 포토샵 자격증 1급 ㅣ 2021.9\n운전면허증 2종 보통",
  // },
];

export const cardSectionDataList: CardType[] = [
  {
    id: 0,
    title: "NEW SNACK APP PROJECT",
    desc: "뉴미디어 시대, 젠지세대를 위해 새롭게 태어난 뉴스 앱 프로젝트 입니다.",
    chipList: ["APP", "VIDEO", "3D"],
    color: "#1B80FF",
    path: "news",
  },
  {
    id: 1,
    title: "kakao : 브랜디드 콘텐츠 실무 프로젝트",
    desc: "카카오 기업 재직기간동안 진행한 카카오톡 브랜드 콘텐츠 프로젝트 입니다.",
    chipList: ["실무 프로젝트", "카카오", "카카오톡"],
    color: "#FAE100",
    path: "kakao",
  },
  {
    id: 2,
    title: "NAVER + MABERSHIP REBRANDING",
    desc: "퍼블리싱으로 홈페이지를 구현한 네이버 맴버십 브랜딩 프로젝트 입니다.",
    chipList: ["WEB", "CSS/HTML", "PUBLISHING", "그래픽"],
    color: "#6EB6B8",
    path: "naver",
  },
  {
    id: 3,
    title: "대학내일 ES : NHR 실무 프로젝트",
    desc: "NHR기업 재직기간동안 진행한 UX·UI 프로젝트 입니다.",
    chipList: ["실무 프로젝트", "NHR", "커리어톡"],
    color: "#ECF4F7",
    path: "nhr",
  },
  {
    id: 4,
    title: "MERCEDES BENZ REDESIGN",
    desc: "메르세데스 벤츠 코리아 리브랜딩 프로젝트 입니다.",
    chipList: ["WEB", "리디자인", "편집디자인"],
    color: "#e9e9e9",
    path: "benz",
  },
  // {
  //   id: 5,
  //   title: "ELECPLAN",
  //   desc: "전기차의 수요 급증에 맞추어 설계한 전기차 예약 앱 프로젝트입니다.",
  //   chipList: ["APP", "그래픽", "일러스트"],
  //   color: "#e9e9e9",
  // },
];
