'use client'

import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { motion } from 'framer-motion'

type ProfitLoss = {
  description: string
  value: number
}

type ProfitLossFormated = {
  name: string
  value: number
}

const ProfitLossOverviewChart = () => {
  const [accumulatedProfitLossData, setAccumulatedProfitLossData] = useState<
    ProfitLossFormated[]
  >([])
  const formatProfitLossData = (data: ProfitLoss[]): ProfitLossFormated[] => {
    return data.map((item) => ({
      ...item,
      name: item.description
    }))
  }
  const formatMoney = (amount: number) =>
    amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    })

  useEffect(() => {
    fetch('data/data.json')
      .then((res) => res.json())
      .then((data) =>
        setAccumulatedProfitLossData(
          formatProfitLossData(data.accumulatedProfitLoss)
        )
      )
  }, [])

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Ganhos e Perdas
      </h2>
      <div className="h-64 md:h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={accumulatedProfitLossData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#4b5563"
            />
            <XAxis
              dataKey="name"
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
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="value">
              {accumulatedProfitLossData.map(
                (entry: ProfitLossFormated, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.name === 'Ganhos' ? '#06D6A0' : '#FF6B6B'}
                  />
                )
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ProfitLossOverviewChart
