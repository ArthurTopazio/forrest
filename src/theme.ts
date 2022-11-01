import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b5e20',
      light: '#fff',
      dark: 'rgba(23, 138, 55, 0.56)',
    },
    secondary: {
      main: '#81c784',
    },
    background: {
      default: '#81c784',
    },
    info: {
      main: '#95e89b',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontSize: 26, fontWeight: 400, lineHeight: 1.5 },
    h2: { fontSize: 24, fontWeight: 400, lineHeight: 1.1 },
    h3: { fontSize: 18, fontWeight: 500, lineHeight: 1.5 },
    subtitle1: { fontSize: 14, fontWeight: 500, lineHeight: 1.5 },
    subtitle2: { fontSize: 14, fontWeight: 400, lineHeight: 1.1 },
    body1: { fontSize: 14, fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: 12, fontWeight: 400, lineHeight: 1.1 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-contained': { backgroundColor: '#fff' },
        },
      },
    },
  },
});

export default theme;
