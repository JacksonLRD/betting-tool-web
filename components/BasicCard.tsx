import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  value: string | number
}

export default function BasicCard({ title, value }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.primary' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  )
}
