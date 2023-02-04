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
          最新のテクノロジー全般(特にAI,VR/AR,Brain Tech)に興味があり、最先端技術とビジネスの組み合わせによって社会に存在する課題を解決したいと考えている。進化のスピードが早い技術領域において、基礎となる仕組みの理解こそが技術のキャッチアップ力につながると考え、日頃から技術の数学的な解釈やアルゴリズムへの理解を大切にしている。
          <br></br>
          <br></br>
          2019年4月に東北大学に入学しComputer Scienceを専攻する。大学在学中は海外に頻繁に赴き、現地の歴史や文化を堪能した。様々な人種と文化が混ざり合いながら高度に発展しているシンガポールや、先端技術の社会実装とアカデミアへの還元のエコシステムを確立しているアメリカには感銘を受けた。また、在学中は開発業務にも携わり、モバイルアプリ開発からウェブ開発まで幅広くエンジニアとしての経験を積んだ。2023年4月からは大阪大学生命機能研究科に進学し、脳の情報処理の仕組みに関する研究を行う。人間の意識をサイバースペース上にアップロードすることを夢見ており、実現のために人間の脳内の情報処理の仕組みを解明することや人間の知能を模した人工汎用性知能の開発が必要であると考えている。
        </Box>
        <Box sx={{ color: "#FFFFFF", fontSize: 14, my: 2, width: "50%" }}>
        I am a front-end, back-end, and ML engineer born in Japan. I am interested in the latest technology, especially AI, VR/AR, and Brain Tech. I believe that solving societal problems can be achieved by combining cutting-edge technology and business. I think that understanding the underlying mechanisms in rapidly evolving technology fields is crucial for keeping up with technology, and therefore, I value the mathematical interpretation and understanding of algorithms in technology.
          <br></br>
          <br></br>
          I entered Tohoku University in April 2019, majoring in Computer Science. During my university studies, I frequently traveled abroad and experienced different cultures and histories. I was impressed by Singapore where diverse races and cultures coexist and advance, and the United States where advanced technology is being implemented and has a well-established ecosystem that contributes to academia. I also gained experience as an engineer, working on a range of projects, from mobile app development to web development. Starting in April 2023, I will continue my studies at Graduate School of Frontier Biosciences Osaka University, researching information processing in the brain. I dream of uploading human consciousness to cyberspace, and I believe that understanding the information processing mechanisms in the human brain and developing artificial general intelligence that mimics human intelligence are necessary for achieving this.
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
