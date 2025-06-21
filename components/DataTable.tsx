'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { Tooltip } from '@mui/material'

interface HeadCell {
  id: string
  label: string
  align: string
  disablePadding: boolean
  sortable: boolean
}

interface LineCell {
  label: string
  type: 'money' | 'date' | 'number' | 'others'
}

interface DataTableProps {
  headCells: HeadCell[]
  lineCells: LineCell[]
  rows: any[]
  rowsPerPageOptions?: number[]
  onDelete?: (id: string) => void
}

const ROWS_PER_PAGE_OPTIONS: number[] = [5, 10, 25]

export default function DataTable({
  headCells,
  lineCells,
  rows,
  rowsPerPageOptions = ROWS_PER_PAGE_OPTIONS,
  onDelete
}: DataTableProps) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const formateRowValues = ({
    type,
    value = 0
  }: {
    type: string
    value: number | string
  }) => {
    if (type === 'number') {
      return value
    }

    if (type === 'money') {
      const formatValue = value === 0 ? Number(value) : Number(value) / 100

      return formatValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      })
    }

    return value
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja apagar?')) {
      onDelete?.(id)
    }
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const visibleRows = React.useMemo(
    () => [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, page, rowsPerPage]
  )

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size={'medium'}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                  >
                    {headCell.label}
                  </TableCell>
                ))}
                <TableCell align={'left'}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {lineCells.map((lineCell) => (
                      <TableCell
                        component="th"
                        key={lineCell.label}
                        scope="row"
                        padding="normal"
                      >
                        {formateRowValues({
                          type: lineCell.type,
                          value: row[lineCell.label]
                        })}
                      </TableCell>
                    ))}
                    <TableCell align={'left'}>
                      <Tooltip title="Mostrar">
                        <IconButton aria-label="mostrar">
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Apagar">
                        <IconButton
                          aria-label="apagar"
                          onClick={() => handleDelete(row.id)}
                        >
                          <DeleteIcon color={'secondary'} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}
