import { Box, Container, Alert } from "@mui/material";

const NotFound = (props: { message?: string }) => {
  const { message = "404 ページは存在しません" } = props;
  return (
    <Box>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Alert severity="error" sx={{ mt: 5 }}>
            {message}
          </Alert>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
