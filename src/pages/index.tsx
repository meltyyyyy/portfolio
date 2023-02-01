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
          <Box color={"#FFFFFF"} fontSize={40}>ABOUT</Box>
          <Stack direction={"row"} justifyContent={"space-between"}>
          <Box sx={{ color: "#FFFFFF", fontSize: 18, my: 2, width: "50%" }}>阿部 武</Box>
          <Box sx={{ color: "#FFFFFF", fontSize: 18, my: 2, width: "50%" }}>TAKERU ABE</Box>
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
