const GET = () => {
  console.log("###GET");
  return Response.json({
    id: "kakao",
    imgList: [
      "/image/kakao/image01.png",
      "/image/kakao/image02.png",
      "/image/kakao/image03.png",
      "/image/kakao/image04.png",
      "/image/kakao/image05.png",
    ],
  });
};

// const POST = () => {
//   return Response.json({ message: "POST DATA" });
// };

export { GET };
