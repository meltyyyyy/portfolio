import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "components/appTheme";
import type { AppProps } from "next/app";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
