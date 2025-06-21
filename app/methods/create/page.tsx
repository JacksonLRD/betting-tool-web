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
import NextLink from 'next/link'
import { useCreateMethod } from '@/app/methods/create/useCreateMethod'

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
  const {
    handleSubmit,
    control,
    register,
    errors,
    isSubmitting,
    isValid,
    onSubmit
  } = useCreateMethod()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <Link
                href={'/methods'}
                color="textPrimary"
                underline="none"
                component={NextLink}
              >
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
              </Link>

              <Typography variant="customTitle">Criar Novo Método</Typography>
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
                  {...register('name')}
                  error={!!errors.name}
                  helperText={errors.name?.message}
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
                    type="number"
                    size="small"
                    {...register('stakeBase', { valueAsNumber: true })}
                    error={!!errors.stakeBase}
                    helperText={errors.stakeBase?.message}
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
                    {...register('status')}
                    error={!!errors.status}
                    helperText={errors.status?.message}
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
                    {...register('description')}
                    multiline
                    rows={4}
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
                <Grid size={{ xs: 12, sm: 3, md: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size={'medium'}
                    fullWidth
                    color={'primary'}
                    disabled={!isValid}
                  >
                    <Typography variant={'customSubSmall'}>Salvar</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </form>
    </Box>
  )
}
