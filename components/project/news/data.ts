import number1 from "../../../assets/image/news/number1.png";
import number2 from "../../../assets/image/news/number2.png";
import number3 from "../../../assets/image/news/number3.png";
import number4 from "../../../assets/image/news/number4.png";

import obj1 from "../../../assets/image/news/obj1.png";
import obj2 from "../../../assets/image/news/obj2.png";
import obj3 from "../../../assets/image/news/obj3.png";
import obj4 from "../../../assets/image/news/obj4.png";
import obj5 from "../../../assets/image/news/obj5.png";
import obj6 from "../../../assets/image/news/obj6.png";

import number3Content1 from "../../../assets/image/news/number3Content1.png";
import number3Content2 from "../../../assets/image/news/number3Content2.png";
import number3Content3 from "../../../assets/image/news/number3Content3.png";
import number3Content4 from "../../../assets/image/news/number3Content4.png";
import number3Content5 from "../../../assets/image/news/number3Content5.png";

import { StaticImageData } from "next/image";

interface Detail {
  title: string;
  content: string;
}

export const DetailList: Detail[] = [
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

export const NumberImages: Array<StaticImageData> = [
  number1,
  number2,
  number3,
  number4,
];

export const ObjImages: Array<StaticImageData> = [
  obj1,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
];

export const number3Images: Array<StaticImageData> = [
  number3Content1,
  number3Content2,
  number3Content3,
  number3Content4,
  number3Content5,
];
