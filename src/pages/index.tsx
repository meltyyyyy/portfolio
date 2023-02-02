import { Button, Link, Modal, Grid, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FacebookUrl, GitHubUrl, LinkedInUrl, TwitterUrl } from "common/constants";
import About from "components/about";
import { FacebookIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "components/appIcons";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const Canvas = dynamic(() => import("sketches/canvas"), { ssr: false });

const Home: NextPage = () => {
  const [openAbout, setOpenAbout] = useState<boolean>(false);
  const [openWork, setOpenWork] = useState<boolean>(false);

  return (
    <>
      {/* <Canvas /> */}
      <Modal
        open={openAbout}
        onClose={() => setOpenAbout(false)}
      >
        <About />
      </Modal>
      <Modal
        open={openWork}
        onClose={() => setOpenWork(false)}
      >
        <Box sx={{ my: 12, mx: 16 }}>
          <Box sx={{ color: "#FFFFFF", fontSize: 40, mb: 4 }}>WORK</Box>
          <Grid container spacing={2} justifyItems={"center"} sx={{ my: 4 }}>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyItems={"center"} sx={{ my: 4 }}>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mx: 2 }}><Paper sx={{ my: 1, height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Image
              </Paper>
                <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>Something</Box></Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Box sx={{ m: 2 }}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
          <Box sx={{ fontSize: 28, fontWeight: "bold" }}>TAKERU ABE</Box>
          <Stack direction={"row"}>
            <Link href={TwitterUrl} target="_blank" rel="noopener noreferrer" color="inherit">
              <TwitterIcon
                sx={{
                  mx: 1,
                  '&:hover': {
                    background: "transparent",
                    color: '#797979'
                  },
                }} />
            </Link>
            <Link href={GitHubUrl} target="_blank" rel="noopener noreferrer" color="inherit">
              <GitHubIcon sx={{
                mx: 1,
                '&:hover': {
                  background: "transparent",
                  color: '#797979'
                },
              }} />
            </Link>
            <Link href={LinkedInUrl} target="_blank" rel="noopener noreferrer" color="inherit">
              <LinkedInIcon sx={{
                mx: 1,
                '&:hover': {
                  background: "transparent",
                  color: '#797979'
                },
              }} />
            </Link>
            <Link href={FacebookUrl} target="_blank" rel="noopener noreferrer" color="inherit">
              <FacebookIcon sx={{
                ml: 1,
                '&:hover': {
                  background: "transparent",
                  color: '#797979'
                },
              }} />
            </Link>
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
          <Button
            onClick={() => setOpenWork(true)}
            sx={{
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
          <Button
            onClick={() => window.open("mailto:takeru.abe.g1@gmail.com?subject=Subject&body=Body%20goes%20here")}
            sx={{
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
