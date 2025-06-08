'use client'

import { motion } from 'framer-motion'
import StatCard from '@/components/StatCard'

const methodStatCards = [
  {
    name: 'Métodos',
    icon: '',
    value: 9
  },
  {
    name: 'Métodos em Validação',
    icon: '',
    value: 2
  },
  {
    name: 'Métodos Validados',
    icon: '',
    value: 2
  },
  {
    name: 'Métodos Abandonados',
    icon: '',
    value: 7
  }
]

const MethodsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {methodStatCards.map(({ name, icon, value }) => {
            return <StatCard key={name} name={name} icon={icon} value={value} />
          })}
        </motion.div>
      </main>
    </div>
  )
}

export default MethodsPage
