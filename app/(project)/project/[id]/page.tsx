// "use client";
import Benz from "@/components/project/detail/Benz";
import ES from "@/components/project/detail/ES";
import Elec from "@/components/project/detail/Elec";
import Kakao from "@/components/project/detail/Kakao";
import Naver from "@/components/project/detail/Naver";
import News from "@/components/project/detail/News";

type Props = {
  params: {
    id: string;
  };
};

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Pretendard"].join(","),
//   },
// });
export default async function ProjectDetail({ params: { id } }: Props) {
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const response = await fetch("http://localhost:3000/api/project");
  console.log("#####");
  const data = await response.json();
  console.log(data);

  const idCheck = (id: string) => {
    switch (id) {
      case "0":
        return <Kakao imgList={data.imgList} />;
      case "1":
        return <News />;
      case "2":
        return <Naver />;
      case "3":
        return <ES />;
      case "4":
        return <Benz />;
      case "5":
        return <Elec />;
      default:
        return null;
    }
  };

  return (
    // <ThemeProvider theme={theme}>
    //   <RecoilRoot>{isMobile ? null : idCheck(id)}</RecoilRoot>
    // </ThemeProvider>
    <div>{idCheck(id)}</div>
  );
}
