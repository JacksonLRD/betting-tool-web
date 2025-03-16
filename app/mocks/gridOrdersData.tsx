import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { GridCellParams, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={['hsl(210, 98%, 42%)']}
        xAxis={{
          scaleType: 'band',
          data,
        }}
      />
    </div>
  );
}

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 60
  },
  {
    field: 'data',
    headerName: 'Data',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 100
  },
  {
    field: 'evento',
    headerName: 'Evento',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 240,
  },
  {
    field: 'metodo',
    headerName: 'Método',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'stake',
    headerName: 'Stake',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'resultado',
    headerName: 'Resultado',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 60
  },
  {
    field: 'roi',
    headerName: 'Roi',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    minWidth: 60
  },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    data: '22 Janeiro 2025',
    evento: 'Náutico x Ceará',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 2,
    data: '26 Janeiro 2025',
    evento: 'Ferroviário x Ceará',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 3,
    data: '29 Janeiro 2025',
    evento: 'Ceará x Iguatu',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 4,
    data: '2 Fevereiro 2025',
    evento: 'Ceará x Barbalha',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 5,
    data: '5 Fevereiro 2025',
    evento: 'Ceará x CSA',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 6,
    data: '08 Fevereiro 2025',
    evento: 'Fortaleza x Ceará',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 7,
    data: '12 Fevereiro 2025',
    evento: 'Ceará x Confiança',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 999999999,
    data: '19 Fevereiro 2025',
    evento: 'Sergipe x Ceará',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 10,
    data: '05 Março 2025',
    evento: 'Ceará x América RN',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 11,
    data: '19 Março 2025',
    evento: 'Ceará x Juazeirense',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  },{
    id: 12,
    data: '23 Março 2025',
    evento: 'Sampaio Corrêa x Ceará',
    metodo: 'Vovo [Favorito]',
    stake: 'R$ 100,00',
    resultado: 'R$ 2,41',
    roi: '2,41%'
  }
];
