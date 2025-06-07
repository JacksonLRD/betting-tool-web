'use client'

import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const BankEvolutionOverviewChart = () => {
  const [bankEvolutionData, setBankEvolutionData] = useState()
  const formatMoney = (amount: number) =>
    amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    })

  useEffect(() => {
    fetch('data/data.json')
      .then((res) => res.json())
      .then((data) => setBankEvolutionData(data.bankEvolution))
  }, [])

  return (
    <div className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0">
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Evolução da Banca
      </h2>
      <div className="h-64 md:h-100">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={bankEvolutionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis
              dataKey="date"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#9ca3af"
              tickFormatter={formatMoney}
              tick={{ fontSize: 12 }}
              width={60}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
                fontSize: '12px'
              }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => formatMoney(value)}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#d6ed0e"
              fill="#d6ed6e"
              strokeWidth={3}
              dot={{ strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BankEvolutionOverviewChart
