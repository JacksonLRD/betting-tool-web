'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import BasicCard from '@/components/BasicCard'
import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material'
import SearchField from '@/components/SearchField'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useState } from 'react'

const CARDS = [
  {
    title: 'Quantidade',
    value: 6
  },
  {
    title: 'Em Validação',
    value: 6
  },
  {
    title: 'Validados',
    value: 6
  },
  {
    title: 'Abandonados',
    value: 6
  }
]

// TODO xs = tela pequena; md = tela grande
export default function MethodsPage() {
  const [windowWidth, setWindowSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window?.innerWidth)
    }

    // Adiciona o listener para o evento de redimensionamento
    window.addEventListener('resize', handleResize)

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h4">Métodos</Typography>
          </Grid>
          {CARDS.map((item) => {
            return (
              <Grid key={`grid-${item.title}`} size={{ md: 3, sm: 6, xs: 12 }}>
                <BasicCard
                  key={`card-${item.title}`}
                  title={item.title}
                  value={item.value}
                />
              </Grid>
            )
          })}
          <Grid
            size={12}
            spacing={2}
            container
            direction="row"
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'flex-start'
            }}
          >
            <Grid size={{ md: 4, sm: 9, xs: 9 }}>
              <SearchField />
            </Grid>
            <Grid size={{ md: 2, sm: 3, xs: 3 }}>
              <Button
                variant="contained"
                sx={{ width: '100%', height: '48px', minHeight: '100%' }}
                fullWidth
                startIcon={<AddIcon />}
                color={'success'}
              >
                {windowWidth >= 600 || windowWidth === 0 ? 'Criar' : ''}
              </Button>
            </Grid>
          </Grid>
          <Grid size={12}>{`window size ${windowWidth}`}</Grid>
        </Grid>
      </Container>
    </Box>
  )
}
