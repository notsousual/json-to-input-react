import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  palette: {
    background: {
      default: "white",
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          ":hover": {
            color: "#3789ff",
          },
          transition: "0.3s",
        },
      },
    },
  },
});
