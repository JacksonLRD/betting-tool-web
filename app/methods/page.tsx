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
import NextLink from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { useMethods } from '@/app/methods/useMethods'
import { Method } from '@/lib/interfaces/Method'
import { useBreakpoint } from '@/utils/useBreakpoint'

const HEAD_CELLS = [
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

const HEAD_CELLS_SM = [
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
  }
]

interface LineCell {
  label: string
  type: 'money' | 'date' | 'number' | 'others'
}

const LINE_CELLS: LineCell[] = [
  { label: 'id', type: 'others' },
  { label: 'name', type: 'others' },
  { label: 'stakeBase', type: 'money' },
  { label: 'settledBets', type: 'number' },
  { label: 'accumulatedResult', type: 'money' },
  { label: 'status', type: 'others' }
]

const LINE_CELLS_SM: LineCell[] = [
  { label: 'name', type: 'others' },
  { label: 'stakeBase', type: 'money' }
]

const METHOD_STATUS: any = {
  VALIDADO: 'Validado',
  EM_VALIDACAO: 'Em Validação',
  ABANDONADO: 'Abandonado'
}

export default function MethodsPage() {
  const { listMethods } = useMethods()
  const [rows, setRows] = useState<Method[]>([])
  const [cardValues, setCardValues] = useState([
    {
      title: 'Quantidade',
      value: 0
    },
    {
      title: 'Em Validação',
      value: 0
    },
    {
      title: 'Validados',
      value: 0
    },
    {
      title: 'Abandonados',
      value: 0
    }
  ])

  const updateCardValues = (methods: Method[]) => {
    let validated = 0
    let inValidation = 0
    let abandoned = 0

    for (const method of methods) {
      if (method.status === 'EM_VALIDACAO') validated += 1
      else if (method.status === 'VALIDADO') inValidation += 1
      else if (method.status === 'ABANDONADO') abandoned += 1
    }

    setCardValues([
      { title: 'Quantidade', value: methods.length },
      { title: 'Validados', value: validated },
      { title: 'Em Validação', value: inValidation },
      { title: 'Abandonados', value: abandoned }
    ])
  }

  const listMethodsCallback = useCallback(async () => {
    const methods = await listMethods()

    updateCardValues(methods)
    setRows(methods)
  }, [setRows])

  const formatRows = (data: any[]) => {
    return data.map((item) => ({
      ...item,
      status: METHOD_STATUS[item.status]
    }))
  }

  useEffect(() => {
    listMethodsCallback()
  }, [listMethodsCallback])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="customTitle">Métodos</Typography>
          </Grid>
          {cardValues.map((item) => {
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
                component={NextLink}
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
              {useBreakpoint() === 'md ou maior' ? (
                <DataTable
                  headCells={HEAD_CELLS}
                  lineCells={LINE_CELLS}
                  rows={formatRows(rows)}
                  rowsPerPageOptions={[15]}
                />
              ) : (
                <DataTable
                  headCells={HEAD_CELLS_SM}
                  lineCells={LINE_CELLS_SM}
                  rows={formatRows(rows)}
                  rowsPerPageOptions={[15]}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
