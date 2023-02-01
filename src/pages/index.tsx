import { Button, Modal } from "@mui/material";
import { Box, Stack } from "@mui/system";
import About from "components/about";
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
        <About />
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
            sx={{
              color: "#000000",
              '&:hover': {
                background: "transparent",
                color: '#797979'
              },
              fontSize: 14,
              mr: 1,
              minHeight: 0,
              minWidth: 0,
              padding: 0
            }}
            variant="text"
          >ABOUT</Button>
          <Button sx={{
            color: "#000000",
            '&:hover': {
              background: "transparent",
              color: '#797979'
            },
            fontSize: 14,
            mx: 1,
            minHeight: 0,
            minWidth: 0,
            padding: 0
          }} variant="text">WORK</Button>
          <Button sx={{
            color: "#000000",
            '&:hover': {
              background: "transparent",
              color: '#797979'
            },
            fontSize: 14,
            mx: 1,
            minHeight: 0,
            minWidth: 0,
            padding: 0
          }} variant="text">CONTACT</Button>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
