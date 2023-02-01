import { Button, Modal } from "@mui/material";
import { Box, Stack } from "@mui/system";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const Canvas = dynamic(() => import("sketches/canvas"), { ssr: false });

const Home: NextPage = () => {
  const [openAbout, setOpenAbout] = useState<boolean>(false);

  return (
    <>
      {/* <Canvas /> */}
      <Modal
        open={openAbout}
        onClose={() => setOpenAbout(false)}
      >
        <Box sx={{ my: 12, mx: 16 }}>
          <Box sx={{ color: "#FFFFFF", fontSize: 40, mb: 4}}>ABOUT</Box>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box sx={{ color: "#FFFFFF", fontSize: 20, my: 2, width: "50%" }}>阿部 武</Box>
            <Box sx={{ color: "#FFFFFF", fontSize: 20, my: 2, width: "50%" }}>TAKERU ABE</Box>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box sx={{ color: "#FFFFFF", fontSize: 14, my: 2, pr: 4, width: "50%" }}>
              日本生まれのテクニカルディレクター、インタラクション・デザイナー、フロントエンド・デベロッパー、VJ。
              表現と技術で人をワクワクさせられるモノづくりをしたいと常日頃から考えている。クラフトマンシップにこだわり、自分を研鑽していける日々を過ごせたら本望だと個人的には思っており、消費の速いデジタル作品においても長く残るモノ、せめて次の世代の人たちに触れてもらえるモノを作ることが最終目標である。
              <br></br>
              <br></br>
              2007年5月、株式会社アーキタイプを共同設立。数々の企業のプロモーションやブランディング等に伴うWebサイト、インスタレーション、アプリケーション開発等、デジタルなプロジェクトのテクニカルディレクションやプログラミングに携わる。国外でのデジタル広告賞の受賞が多い。2017年1月、心から自分のやりたいことをしたいと強く思うようになり、設立10年を節目にアーキタイプを退職し、留学のため渡英。ロンドンにて11ヶ月間ほど過ごし、その後パリ、ベルリン、ウィーンで4ヶ月間過ごしたのち帰国。15ヶ月間ほど色々な国の人や文化、価値観に触れ、多くの感覚を吸収。約2年ほどフリーランスとして東京をベースに国境関係なく活動。2020年10月、Calmhectic inc.設立。
            </Box>
            <Box sx={{ color: "#FFFFFF", fontSize: 14, my: 2, width: "50%" }}>TAKERU ABE</Box>
          </Stack>
        </Box>
      </Modal>
      <Box sx={{ m: 2 }}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
          <Box sx={{ fontSize: 28, fontWeight: "bold" }}>TAKERU ABE</Box>
          <Stack direction={"row"}>
            <Box sx={{ fontSize: 14, mx: 1 }}>SNS1</Box>
            <Box sx={{ fontSize: 14, mx: 1 }}>SNS2</Box>
            <Box sx={{ fontSize: 14, ml: 1 }}>SNS2</Box>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <Button
            onClick={() => setOpenAbout(true)}
            sx={{ fontSize: 14, mr: 1 }} variant="text"
          >ABOUT</Button>
          <Button sx={{ fontSize: 14, mr: 1 }} variant="text">WORK</Button>
          <Button sx={{ fontSize: 14, mr: 1 }} variant="text">CONTACT</Button>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
