import { createTheme } from "@mui/material/styles";

// -----------------------------------------------
// MUI全体のテーマカラーを指定
//
// https://mui.com/customization/default-theme/
// https://mui.com/customization/palette/
// https://mui.com/customization/color/
//
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#EAEAEA",
        },
      },
    },
  },
});

export default theme;
