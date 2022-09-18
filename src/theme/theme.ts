import { createTheme } from "@mui/material";
import { Colors } from "./colors";

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
            color: Colors.primary,
          },
          transition: "0.3s",
        },
      },
    },
  },
});
