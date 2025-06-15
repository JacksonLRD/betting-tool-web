'use client'

import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    customTitle: React.CSSProperties
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    customTitle?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    customTitle: true
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#00e5ff',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f44336'
    },
    success: {
      main: '#69f0ae'
    }
  },
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    customTitle: {
      fontSize: 30,
      fontWeight: 800
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa'
              }
            }
          ]
        }
      }
    }
  }
})

export default theme
