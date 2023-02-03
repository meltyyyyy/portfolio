import { Box, Grid, IconButton, Paper, Stack } from "@mui/material";
import { forwardRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Work = (props: { forwardRef: React.Ref<HTMLElement> }) => {
  const { forwardRef } = props;
  return (
    <Box sx={{ my: 12, mx: 16 }} ref={forwardRef} tabIndex={-1}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box sx={{ color: "#FFFFFF", fontSize: 40, mb: 4 }}>WORK</Box>
        <IconButton><CloseIcon /></IconButton>
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

const RefWork = forwardRef<HTMLElement>((_, ref) => {
  return <Work forwardRef={ref} />;
});

RefWork.displayName = "RefWork";

export default RefWork;
