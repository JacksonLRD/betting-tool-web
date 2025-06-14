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
import DataTable from '@/components/DataTable'

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

const headCells = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    label: 'ID',
    sortable: false
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Nome',
    sortable: false
  },
  {
    id: 'stakeBase',
    align: 'left',
    disablePadding: false,
    label: 'Stake Base',
    sortable: false
  },
  {
    id: 'settledBets',
    align: 'left',
    disablePadding: false,
    label: 'Apostas',
    sortable: false
  },
  {
    id: 'accumulatedResult',
    align: 'left',
    disablePadding: false,
    label: 'Resultado',
    sortable: false
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status',
    sortable: true
  }
]

const rows = [
  {
    id: 1,
    name: 'Lay a Zebra HT 1.0',
    stakeBase: 20,
    settledBets: 18,
    accumulatedResult: 300,
    status: 'VALIDADO',
    description: ''
  },
  {
    id: 2,
    name: 'Vovo 1.0',
    stakeBase: 20,
    settledBets: 10,
    accumulatedResult: 30,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 3,
    name: 'Lay ao Favorito HT 1.0',
    stakeBase: 2,
    settledBets: 4,
    accumulatedResult: 40,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 4,
    name: 'Sniperback[Must Win]',
    stakeBase: 3,
    settledBets: 4,
    accumulatedResult: 6,
    status: 'ABANDONADO',
    description: ''
  },
  {
    id: 5,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  }
]

// TODO xs = tela pequena; md = tela grande
export default function MethodsPage() {
  const [windowWidth, setWindowSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window?.innerWidth)
    }

    window.addEventListener('resize', handleResize)

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
          <Grid
            size={12}
            container
            direction="row"
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'flex-start'
            }}
          >
            <Grid size={12}>
              <DataTable headCells={headCells} rows={rows} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
