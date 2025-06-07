'use client'

import { motion } from 'framer-motion'

type StatCardProps = {
  name: string
  value: string | number
}

const StatCard = ({ name, value }: StatCardProps) => {
  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-[#1f1f1f]"
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12 rgba(0, 0, 0, 0.5)' }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-300">
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-red">{value}</p>
      </div>
    </motion.div>
  )
}

export default StatCard
