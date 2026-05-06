import { createTheme } from "@mui/material/styles";
import typography from "./Typography";
import { shadows } from "./Shadows";

const baselightTheme = createTheme({
  direction: 'ltr',
  palette: {
    primary: {
      main: "#7c3aed",
      light: "#f1e8ff",
      transparent: "#ffffff00"
    },
    secondary: {
      main: "#ec4899",
      light: "#ffe6f2",
    },
    success: {
      main: '#13DEB9',
      light: '#E6FFFA',
      dark: '#02b3a9',
      contrastText: '#ffffff',
    },
    info: {
      main: '#8b5cf6',
      light: '#f3e8ff',
      dark: '#6d28d9',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FA896B',
      light: '#FDEDE8',
      dark: '#f3704d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFAE1F',
      light: '#FEF5E5',
      dark: '#ae8e59',
      contrastText: '#ffffff',
    },
    purple: {
      A50: '#EBF3FE',
      A100: '#6610f2',
      A200: '#557fb9',
    },
    grey: {
      100: '#F2F6FA',
      200: '#F4EFFE',
      300: '#E8DEF8',
      400: '#8E88A8',
      500: '#625A7A',
      600: '#302742',
      700: '#dfe5ef'

    },
    text: {
      primary: '#2f2440',
      secondary: '#6f6682',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: '#f6f9fc',
    },
    divider: '#eadff5',
  },
  typography,
  shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
        },
        '.simplebar-scrollbar:before': {
          background: " #DFE5EF!important"
        },
        ".rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path":
        {
          clipPath: "inset(0 0 5% 0 round 20px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.11)'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e5eaef !important',
          },
          borderRadius: "7px",
          '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7c3aed !important'
          }
        },
      },
    },
  }
},

);

export { baselightTheme };
