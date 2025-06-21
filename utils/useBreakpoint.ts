import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

export function useBreakpoint() {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))
  // const isMd = useMediaQuery(theme.breakpoints.only('md'))

  if (isXs) return 'xs'
  if (isSm) return 'sm'
  // if (isMd) return 'md'
  return 'md ou maior'
}
