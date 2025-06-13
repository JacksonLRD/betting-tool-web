'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import BasicCard from '@/components/BasicCard'
import Typography from '@mui/material/Typography'

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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4">Métodos</Typography>
        </Grid>
        {CARDS.map((item) => {
          return (
            <Grid key={`grid-${item.title}`} size={{ xs: 6, md: 3 }}>
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
          container
          direction="row"
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
          }}
        >
          Search options
        </Grid>
        <Grid spacing={12}>Search options</Grid>
      </Grid>
    </Box>
  )
}
