'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import { Button, Container, MenuItem } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'

const status = [
  {
    label: 'Validado',
    value: 'VALIDADO'
  },
  {
    label: 'Em Validação',
    value: 'EM_VALIDACAO'
  },
  {
    label: 'Abandonado',
    value: 'ABANDONADO'
  }
]

export default function CreateMethodPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid
            container
            direction="row"
            spacing={1}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Link href={'/methods'} color="textPrimary" underline="none">
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>

            <Typography variant="customTitleH4">Criar Novo Método</Typography>
          </Grid>
          <Grid
            size={12}
            spacing={2}
            container
            direction="row"
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}
          >
            <Grid size={{ xs: 12, sm: 7, md: 5 }}>
              <TextField
                fullWidth
                id="name-method-input"
                label="Nome"
                type="text"
                size="small"
              />
            </Grid>
            <Grid
              size={12}
              spacing={2}
              container
              direction="row"
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
              }}
            >
              <Grid size={{ xs: 12, sm: 3, md: 2 }}>
                <TextField
                  fullWidth
                  id="stake-base-method-input"
                  label="Stake"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                <TextField
                  fullWidth
                  select
                  id="status-method-input"
                  label="Status"
                  defaultValue={''}
                  type="text"
                  size="small"
                >
                  {status.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={12}
            spacing={2}
            container
            direction="row"
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}
          >
            <Grid
              size={12}
              spacing={2}
              container
              direction="row"
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
              }}
            >
              <Grid size={{ xs: 12, sm: 7, md: 5 }}>
                <TextField
                  fullWidth
                  id="observations-method-input"
                  label="Observações"
                  type="text"
                  size="small"
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
            <Grid
              size={12}
              spacing={2}
              container
              direction="row"
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
              }}
            >
              <Grid size={{ xs: 12, sm: 3, md: 2 }}>
                <Button
                  variant="contained"
                  size={'medium'}
                  fullWidth
                  color={'primary'}
                  href={'/methods'}
                >
                  Salvar
                </Button>
              </Grid>
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
          ></Grid>
        </Grid>
      </Container>
    </Box>
  )
}
