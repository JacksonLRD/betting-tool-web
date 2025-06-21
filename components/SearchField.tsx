import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchField() {
  return (
    <Paper component="form" sx={{ display: 'flex', alignItems: 'center' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar..."
        inputProps={{ 'aria-label': 'pesquisar' }}
        size={'small'}
        disabled={true}
      />
      <IconButton type="button" aria-label="pesquisar">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
