import { Box, Grid, IconButton, Paper, Stack } from "@mui/material";
import React, { forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Work = (
  props: {
    setOpenWork: React.Dispatch<React.SetStateAction<boolean>>;
  },
  ref: React.Ref<HTMLElement>
) => {
  const { setOpenWork } = props;
  return (
    <Box sx={{ my: 12, mx: 16 }} ref={ref} tabIndex={-1}>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ mb: 4 }}>
        <Box sx={{ color: "#FFFFFF", fontSize: 40 }}>WORK</Box>
        <IconButton onClick={() => setOpenWork(false)}>
          <CloseIcon sx={{ width: 40, height: 40, color: "#FFFFFF" }} />
        </IconButton>
      </Stack>
      <Grid container spacing={2} justifyItems={"center"} sx={{ my: 4 }}>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyItems={"center"} sx={{ my: 4 }}>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mx: 2 }}>
            <Paper
              sx={{
                my: 1,
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Image
            </Paper>
            <Box sx={{ variant: "text", color: "#FFFFFF", my: 1 }}>
              Something
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const RefWork = forwardRef<
  HTMLElement,
  { setOpenWork: React.Dispatch<React.SetStateAction<boolean>> }
>(Work);
RefWork.displayName = "RefWork";

export default RefWork;
