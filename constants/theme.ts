import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Aldrich',
  }
};

export const theme = createTheme(themeOptions);
