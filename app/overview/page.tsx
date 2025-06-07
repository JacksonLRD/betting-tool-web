'use client'

import StatCard from '@/components/StatCard'
import { motion } from 'framer-motion'
import BankEvolutionOverviewChart from '@/components/BankEvolutionOverviewChart'
import ProfitLossOverviewChart from '@/components/ProfitLossOverviewChart'

const bankStatCards = [
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

const betStatCards = [
  {
    name: 'Apostas Liquidadas',
    icon: '',
    value: 30
  },
  {
    name: 'Saldo Inicial',
    icon: '',
    value: 'R$ 100'
  },
  {
    name: 'Saldo Final',
    icon: '',
    value: 'R$ 123,00'
  },
  {
    name: 'Evolução da Banca',
    icon: '',
    value: '23 %'
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
          {bankStatCards.map(({ name, value }) => {
            return <StatCard key={name} name={name} value={value} />
          })}
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <BankEvolutionOverviewChart />
        </div>
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 1 }}
        >
          {betStatCards.map(({ name, value }) => {
            return <StatCard key={name} name={name} value={value} />
          })}
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-7">
          <ProfitLossOverviewChart />
        </div>
      </main>
    </div>
  )
}

export default OverviewPage
