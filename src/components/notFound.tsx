import { Box, Container, Alert } from "@mui/material";

const NotFound = ({ message = "404 ページは存在しません" }) => {
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
