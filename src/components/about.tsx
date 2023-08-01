import { Box, IconButton, Stack } from "@mui/material";
import { forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";

const About = (
  props: {
    setOpenAbout: React.Dispatch<React.SetStateAction<boolean>>;
  },
  ref: React.Ref<HTMLElement>
) => {
  const { setOpenAbout } = props;
  return (
    <Box sx={{ my: 12, mx: 16 }} ref={ref} tabIndex={-1}>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ mb: 4 }}>
        <Box sx={{ color: "#FFFFFF", fontSize: 40 }}>ABOUT</Box>
        <IconButton onClick={() => setOpenAbout(false)}>
          <CloseIcon sx={{ width: 40, height: 40, color: "#FFFFFF" }} />
        </IconButton>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box sx={{ color: "#FFFFFF", fontSize: 20, my: 1, width: "50%" }}>
          阿部 武
        </Box>
        <Box sx={{ color: "#FFFFFF", fontSize: 20, my: 1, width: "50%" }}>
          TAKERU ABE
        </Box>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box
          sx={{ color: "#FFFFFF", fontSize: 14, my: 2, pr: 4, width: "50%" }}
        >
          日本生まれのフロントエンドエンジニア、バックエンドエンジニア、MLエンジニア。
          神経科学や人工知能に興味があり、最先端技術とビジネスの組み合わせによって社会に存在する課題を解決したいと考えている。進化のスピードが早い技術領域において、基礎となる仕組みの理解こそが技術のキャッチアップ力につながると考え、日頃から技術の数学的な解釈やアルゴリズムへの理解を大切にしている。
          <br></br>
          <br></br>
          2019年4月に東北大学に入学しComputer Scienceを専攻する。また、在学中は開発業務にも携わり、モバイルアプリ開発からウェブ開発まで幅広くエンジニアとしての経験を積んだ。2023年4月からは大阪大学生命機能研究科に進学し、脳の情報処理の仕組みを模倣したAIに関する研究を行う。人間の意識をサイバースペース上にアップロードすることを夢見ており、実現のために人間の脳内の情報処理の仕組みを解明することや人間の知能を模した人工汎用性知能の開発が必要であると考えている。
        </Box>
        <Box sx={{ color: "#FFFFFF", fontSize: 14, my: 2, width: "50%" }}>
        I am a front-end, back-end, and ML engineer, born and raised in Japan. I harbor a deep interest in neuroscience and artificial intelligence, with a firm belief in resolving societal issues through the amalgamation of cutting-edge technology and business. Within the swiftly evolving technology sector, I posit that understanding the foundational mechanisms is pivotal in staying abreast of technological progress. As such, I always prioritize understanding mathematical interpretations and algorithms in technology.
          <br></br>
          <br></br>
          In April 2019, I began my studies at Tohoku University, majoring in Computer Science. During this time, I also engaged in development work, gaining a breadth of experience as an engineer, spanning from mobile app development to web development. Starting in April 2023, I have furthered my academic journey at the Graduate School of Frontier Biosciences, Osaka University. Here, I am conducting research on artificial intelligence that mimics the information processing mechanisms of the brain. 
          I envision a future where we can upload human consciousness to cyberspace. To realize this aspiration, I believe it is essential to unravel the intricacies of information processing in the human brain and develop artificial general intelligence that emulates human intellect.
        </Box>
      </Stack>
    </Box>
  );
};

const RefAbout = forwardRef<
  HTMLElement,
  { setOpenAbout: React.Dispatch<React.SetStateAction<boolean>> }
>(About);
RefAbout.displayName = "RefAbout";

export default RefAbout;
