import { Button, Link, Modal } from "@mui/material";
import { Box, Stack } from "@mui/system";
import {
  FacebookUrl,
  GitHubUrl,
  LinkedInUrl,
  TwitterUrl,
} from "common/constants";
import RefAbout from "components/about";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "components/appIcons";
import RefWork from "components/work";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Canvas = dynamic(() => {
  return import("sketches/canvas");
}, { ssr: false });

const Home: NextPage = () => {
  const [openAbout, setOpenAbout] = useState<boolean>(false);
  const [openWork, setOpenWork] = useState<boolean>(false);

  return (
    <>
      <div id="p5_loading"></div>
      <Canvas />
      <Modal open={openAbout} onClose={() => setOpenAbout(false)}>
        <RefAbout setOpenAbout={setOpenAbout} />
      </Modal>
      <Modal open={openWork} onClose={() => setOpenWork(false)}>
        <RefWork setOpenWork={setOpenWork} />
      </Modal>
      <Box sx={{ m: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Box sx={{ fontSize: 28, fontWeight: "bold" }}>TAKERU ABE</Box>
          <Stack direction={"row"}>
            <Link
              href={TwitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <TwitterIcon
                sx={{
                  mx: 1,
                  "&:hover": {
                    background: "transparent",
                    color: "#797979",
                  },
                }}
              />
            </Link>
            <Link
              href={GitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon
                sx={{
                  mx: 1,
                  "&:hover": {
                    background: "transparent",
                    color: "#797979",
                  },
                }}
              />
            </Link>
            <Link
              href={LinkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon
                sx={{
                  mx: 1,
                  "&:hover": {
                    background: "transparent",
                    color: "#797979",
                  },
                }}
              />
            </Link>
            <Link
              href={FacebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <FacebookIcon
                sx={{
                  ml: 1,
                  "&:hover": {
                    background: "transparent",
                    color: "#797979",
                  },
                }}
              />
            </Link>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <Button
            onClick={() => setOpenAbout(true)}
            sx={{
              color: "#000000",
              "&:hover": {
                background: "transparent",
                color: "#797979",
              },
              fontSize: 14,
              mr: 1,
              minHeight: 0,
              minWidth: 0,
              padding: 0,
            }}
            variant="text"
          >
            ABOUT
          </Button>
          <Button
            onClick={() => setOpenWork(true)}
            sx={{
              color: "#000000",
              "&:hover": {
                background: "transparent",
                color: "#797979",
              },
              fontSize: 14,
              mx: 1,
              minHeight: 0,
              minWidth: 0,
              padding: 0,
            }}
            variant="text"
          >
            WORK
          </Button>
          <Button
            onClick={() =>
              window.open(
                "mailto:takeru.abe.g1@gmail.com?subject=Subject&body=Body%20goes%20here"
              )
            }
            sx={{
              color: "#000000",
              "&:hover": {
                background: "transparent",
                color: "#797979",
              },
              fontSize: 14,
              mx: 1,
              minHeight: 0,
              minWidth: 0,
              padding: 0,
            }}
            variant="text"
          >
            CONTACT
          </Button>
        </Stack>

        <VolumeUpIcon sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          m: 2,
          "&:hover": {
            background: "transparent",
            color: "#797979",
          },
        }} />
      </Box>
    </>
  );
};

export default Home;
