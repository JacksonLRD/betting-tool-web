import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/app/theme'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import MiniDrawer from '@/components/MiniDrawer'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MiniDrawer>{props.children}</MiniDrawer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
