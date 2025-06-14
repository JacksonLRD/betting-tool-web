'use client'

import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'

type Rows = {
  id: number
  name: string
  stakeBase: number
  settledBets: number
  accumulatedResult: number
  status: string
  description: string
}

type pagination = {
  page: number
  pageSize: number
}

type Props = {
  rows: Rows[]
  columns: GridColDef[]
  paginationModel?: pagination
}

export default function DataGridTable({
  rows,
  columns,
  paginationModel
}: Props) {
  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 25, 50]}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}
