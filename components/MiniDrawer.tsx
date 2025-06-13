'use client'

import * as React from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import PaidIcon from '@mui/icons-material/Paid'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import RepeatOnIcon from '@mui/icons-material/RepeatOn'
import ClassIcon from '@mui/icons-material/Class'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import CalculateIcon from '@mui/icons-material/Calculate'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated'
import HelpIcon from '@mui/icons-material/Help'
import Link from '@mui/material/Link'

const primaryDrawerItems = [
  { name: 'Início', icon: HomeIcon, href: '/' },
  { name: 'Apostas', icon: PaidIcon, href: '/' },
  {
    name: 'Métodos e Estratégias',
    icon: LibraryBooksIcon,
    href: '/methods'
  },
  { name: 'Movimentações', icon: RepeatOnIcon, href: '/' },
  { name: 'Diário', icon: ClassIcon, href: '/' },
  { name: 'Relatórios', icon: LeaderboardIcon, href: '/' },
  { name: 'Projetos e Estudos', icon: SchoolIcon, href: '/' }
]
const secondaryDrawerItems = [
  { name: 'Configurações', icon: SettingsIcon, href: '/' },
  { name: 'Calculadora Ladder', icon: CalculateIcon, href: '/' },
  { name: 'Exportar Dados', icon: BrowserUpdatedIcon, href: '/' },
  { name: 'Ajuda', icon: HelpIcon, href: '/' }
]

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    }
  ]
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
      }
    }
  ]
}))

export default function MiniDrawer({ children }: any) {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color={'primary'}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5
              },
              open && { display: 'none' }
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Betting Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {primaryDrawerItems.map((item) => {
            const IconComponent = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                color="textPrimary"
                underline="none"
              >
                <ListItem
                  key={item.name}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5
                      },
                      open
                        ? {
                            justifyContent: 'initial'
                          }
                        : {
                            justifyContent: 'center'
                          }
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: 'center'
                        },
                        open
                          ? {
                              mr: 3
                            }
                          : {
                              mr: 'auto'
                            }
                      ]}
                    >
                      <IconComponent />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={[
                        open
                          ? {
                              opacity: 1
                            }
                          : {
                              opacity: 0
                            }
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          })}
        </List>
        <Divider />
        <List>
          {secondaryDrawerItems.map((item) => {
            const IconComponent = item.icon

            return (
              <ListItem
                key={item.name}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5
                    },
                    open
                      ? {
                          justifyContent: 'initial'
                        }
                      : {
                          justifyContent: 'center'
                        }
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center'
                      },
                      open
                        ? {
                            mr: 3
                          }
                        : {
                            mr: 'auto'
                          }
                    ]}
                  >
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={[
                      open
                        ? {
                            opacity: 1
                          }
                        : {
                            opacity: 0
                          }
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}
