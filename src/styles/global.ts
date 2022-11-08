import { createTheme, experimental_sx as sx } from '@mui/material'

export const globalCss = createTheme({
  typography: {
    fontFamily: 'Poppins',
    caption: {
      fontSize: 16,
    },
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    h3: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    h6: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: '0px 0px',
    },
    button: {
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: '#008D48',
    },
    text: {
      primary: '#000000',
    },
    success: {
      main: '#5591f2',
    },
    info: {
      main: '#f25555',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: sx({
          "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          }
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ddd9ce',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'red',
          color: '#fff'
        }
      }
    }
  },
})