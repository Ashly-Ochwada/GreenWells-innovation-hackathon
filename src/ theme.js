import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Body text
    h4: {
      fontFamily: 'Poppins, sans-serif', // Headings
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#00AEEF', // Ocean Blue
    },
    secondary: {
      main: '#7CD338', // Green Wells Green
    },
    background: {
      default: '#FFFFFF',
    },
  },
});
export default theme;
