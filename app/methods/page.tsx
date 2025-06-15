'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import BasicCard from '@/components/BasicCard'
import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material'
import SearchField from '@/components/SearchField'
import AddIcon from '@mui/icons-material/Add'
import DataTable from '@/components/DataTable'

const cards = [
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

interface LineCell {
  label: string
  type: 'money' | 'date' | 'others'
}

const lineCells: LineCell[] = [
  { label: 'id', type: 'others' },
  { label: 'name', type: 'others' },
  { label: 'stakeBase', type: 'money' },
  { label: 'settledBets', type: 'others' },
  { label: 'accumulatedResult', type: 'money' },
  { label: 'status', type: 'others' }
]

const METHOD_STATUS: any = {
  VALIDADO: 'Validado',
  EM_VALIDACAO: 'Em Validação',
  ABANDONADO: 'Abandonado'
}

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
  },
  {
    id: 6,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 7,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 8,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 9,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 10,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 11,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 12,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 13,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 14,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 15,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 16,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 55,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 51,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 522,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 5111,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 56,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 59,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 523,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 5123,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 51111,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 522222,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 532323,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 125,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 5231111,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 2225,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 567,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 576,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 5777,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 5888,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  },
  {
    id: 589,
    name: 'Leitura',
    stakeBase: 2,
    settledBets: 1,
    accumulatedResult: 10,
    status: 'EM_VALIDACAO',
    description: ''
  }
]

export default function MethodsPage() {
  const formatRows = (data: any[]) => {
    return data.map((item) => ({
      ...item,
      status: METHOD_STATUS[item.status]
    }))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="customTitle">Métodos</Typography>
          </Grid>
          {cards.map((item) => {
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
                href={'/methods/create'}
                fullWidth
                startIcon={<AddIcon />}
                color={'primary'}
              >
                <Typography variant={'customSub'}>Criar</Typography>
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
              <DataTable
                headCells={headCells}
                lineCells={lineCells}
                rows={formatRows(rows)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
