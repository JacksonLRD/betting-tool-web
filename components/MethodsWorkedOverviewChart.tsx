'use client'

import React, { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { motion } from 'framer-motion'

const COLORS = ['#FF6D01', '#4D96FF', '#FFD166', '#5B3F86', '#F4C7C3']

type Method = {
  description: string
  value: number
}

type MethodFormated = {
  name: string
  value: number
}

const MethodsWorkedOverviewChart = () => {
  const [methodsData, setMethodsData] = useState<MethodFormated[]>([])
  const [isSmallerScreen, setIsSmallerScreen] = useState<boolean>(false)

  const formatMethodsData = (data: Method[]): MethodFormated[] => {
    return data.map((item) => ({
      ...item,
      name: item.description
    }))
  }

  useEffect(() => {
    fetch('data/data.json')
      .then((res) => res.json())
      .then((data) => setMethodsData(formatMethodsData(data.methods)))
  }, [])

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallerScreen(window.innerWidth <= 768)
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const outerRadius = isSmallerScreen ? 60 : 80

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Métodos Trabalhados
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={methodsData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={outerRadius}
              labelLine={false}
              label={({ description, percent }) =>
                `${description} ${(percent * 100).toFixed(0)}%`
              }
            >
              {methodsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
                padding: '8px',
                fontSize: '12px'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default MethodsWorkedOverviewChart
