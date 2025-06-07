'use client'

import StatCard from '@/components/StatCard'
import { motion } from 'framer-motion'
import BankEvolutionOverviewChart from '@/components/BankEvolutionOverviewChart'

const statCardInfos = [
  {
    name: 'Resultado do Período',
    icon: '',
    value: 'R$ 23,00'
  },
  {
    name: 'Lucro Médio por Aposta',
    icon: '',
    value: 'R$ 0,23'
  },
  {
    name: 'ROI em porcentagem',
    icon: '',
    value: '1,23 %'
  },
  {
    name: 'Saldo final',
    icon: '',
    value: 'R$ 123,00'
  }
]

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {statCardInfos.map(({ name, value }) => {
            return <StatCard key={name} name={name} value={value} />
          })}
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <BankEvolutionOverviewChart />
        </div>
      </main>
    </div>
  )
}

export default OverviewPage
