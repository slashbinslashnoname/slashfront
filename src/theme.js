import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  typography: {
  },
  palette: {
    background: {
      default: '#ddd',
    },
    primary: {
      light: '#757ce8',
      main: '#000',
      dark: '#251b35',
      contrastText: '#fff',
    },
    secondary: {
      light: '#117789',
      main: '#004b58',
      dark: '#0b333a',
      contrastText: '#fff',
    },
    orange: {
      main: '#ff9800',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 300,
        },
        h2: {
          fontWeight: 300,
        },
        h3: {
          fontWeight: 300,
        },
        h4: {
          fontWeight: 300,
        },
        h5: {
          fontWeight: 300,
        },
      },
    },

    MuiGrid: {
      styleOverrides: {
        container: {
          paddingTop: '2em',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '1.5em',
          borderRadius: 9,
        },
      },
    },
    MuiAppBar: {
      backgroundColor: 'none',
      height: '100px',
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: { fontSize: '1rem' },
        containedSizeLarge: {
          padding: '18px 30px',
          borderRadius: '18px',
        },
        outlinedSizeLarge: {
          padding: '18px 30px',
          borderRadius: '18px',
        },
        textSizeLarge: {
          padding: '18px 30px',
          borderRadius: '18px',
        },
      },

    },
  },

});

export default theme;
