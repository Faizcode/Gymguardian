import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7060F2",
      sub: "#60F2E4",
      contrastText: "#8480ae",
    },
    secondary: {
      main: "#9E6EFF",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
    link: "#61dafb",
    background: {
      default: "#282c34",
      paper: "#F3F6FD",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    // For Form labels
    fontSize: 14,
    // PageTitle
    h1: {
      fontWeight: 500,
      color: "#7060F2",
      fontSize: 46,
    },
    h2: {
      fontWeight: 500,
      color: "#7060F2",
      fontSize: 24,
    },
    h3: {
      fontSize: 18,
      color: "#7060F2",
    },
    h4: {
      fontSize: 14,
      color: "#F3F6FD",
      fontWeight: 400,
    },
    // FormLabel and others
    body1: {
      fontSize: 16,
      color: "#F3F6FD",
      fontWeight: 400,
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 994,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;

// linear-gradient(90deg, rgba(112,96,242,1) 0%, rgba(48,0,126,1) 54%, rgba(158,110,255,1) 100%)
