import { Box, Stack } from "@mui/material"

const About = () => {
    return <>
        <Box sx={{ my: 12, mx: 16 }}>
            <Box sx={{ color: "#FFFFFF", fontSize: 40, mb: 4 }}>ABOUT</Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Box sx={{ color: "#FFFFFF", fontSize: 20, my: 1, width: "50%" }}>阿部 武</Box>
                <Box sx={{ color: "#FFFFFF", fontSize: 20, my: 1, width: "50%" }}>TAKERU ABE</Box>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Box sx={{ color: "#FFFFFF", fontSize: 14, my: 2, pr: 4, width: "50%" }}>
                    日本生まれのテクニカルディレクター、インタラクション・デザイナー、フロントエンド・デベロッパー、VJ。
                    表現と技術で人をワクワクさせられるモノづくりをしたいと常日頃から考えている。クラフトマンシップにこだわり、自分を研鑽していける日々を過ごせたら本望だと個人的には思っており、消費の速いデジタル作品においても長く残るモノ、せめて次の世代の人たちに触れてもらえるモノを作ることが最終目標である。
                    <br></br>
                    <br></br>
                    2007年5月、株式会社アーキタイプを共同設立。数々の企業のプロモーションやブランディング等に伴うWebサイト、インスタレーション、アプリケーション開発等、デジタルなプロジェクトのテクニカルディレクションやプログラミングに携わる。国外でのデジタル広告賞の受賞が多い。2017年1月、心から自分のやりたいことをしたいと強く思うようになり、設立10年を節目にアーキタイプを退職し、留学のため渡英。ロンドンにて11ヶ月間ほど過ごし、その後パリ、ベルリン、ウィーンで4ヶ月間過ごしたのち帰国。15ヶ月間ほど色々な国の人や文化、価値観に触れ、多くの感覚を吸収。約2年ほどフリーランスとして東京をベースに国境関係なく活動。2020年10月、Calmhectic inc.設立。
                </Box>
                <Box sx={{ color: "#FFFFFF", fontSize: 14, my: 2, width: "50%" }}>
                    He is a Technical Director, Interaction Designer, Front-End Developer and VJ.
                    He always thinks that he'd love to create things that make people excited with expression and technology. He'd like to keep being enthusiastic about craftsmanship and improve himself every day. In digital works that are rapidly developing changing, it's his ultimate goal to create something that at least the next generation of people can be touched by.
                    <br></br>
                    <br></br>
                    He co-founded ARCHETYP Inc, which is his owned web production company in Tokyo, in May 2007. He has been involved in a lot of variety of projects such as advertising, marketing and branding websites, apps and digital installations as a Technical Direcor or Programmer. He's put his heart into them and has got some evaluations and awards. In January 2017, he decided to study abroad in London and had lived there for 11 months. And then he took a swing through Europe cities, which are Paris, Berlin and Vienna. He met a lot of people from all around the world and experienced a lot of various type of cultures and their sense of values. After that he came back to Tokyo and worked beyond the border as a Freelancer based in Tokyo Japan for 2 years. He founded Calmhectic inc in 2nd October 2020.
                </Box>
            </Stack>
        </Box>
    </>
}

export default About;
