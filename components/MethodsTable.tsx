'use client'

import { motion } from 'framer-motion'
import data from '../public/data/data.json'
import { useMemo, useState } from 'react'
import { Eye, Search, Trash2 } from 'lucide-react'

const METHOD_STATUS = {
  VALIDADO: 'Validado',
  EM_VALIDACAO: 'Em Validação',
  ABANDONADO: 'Abandonado'
}

const METHOD_TABLE_HEADER = [
  'ID',
  'Nome',
  'Stake Base',
  'Apostas',
  'Resultado',
  'Status',
  'Ações'
]

const METHOD_TABLE_LINE = [
  'id',
  'name',
  'stakeBase',
  'settledBets',
  'accumulatedResult',
  'status'
]

const isMoneyField = (field: string): boolean => {
  return field === 'accumulatedResult' || field === 'stakeBase'
}

const formatMoney = (amount: number) =>
  amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

const formatMethod = (data: any[]) => {
  return data.map((item) => ({
    ...item,
    status: METHOD_STATUS[item.status]
  }))
}
const MethodsTable = () => {
  const formatedMethods = formatMethod(data.methods)

  const [methods, setMethods] = useState(formatedMethods)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMethods = useMemo(() => {
    return methods.filter((method) =>
      method.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [methods, searchTerm])

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      'Tem certeza que deseja deletar esse Método?'
    )
    if (confirmDelete) {
      setMethods((prevMethods) =>
        prevMethods.filter((method) => method.id !== id)
      )
    }
  }

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p=6 border border-[#1f1f1f] mx-2 md:mx-0 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap=4md:gap-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left">
          Métodos
        </h2>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {METHOD_TABLE_HEADER.map((header) => (
                <th
                  key={header}
                  className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredMethods.map((method) => (
              <motion.tr
                key={method.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-b-0 border-gray-700 md:border-none p2 md:p-0"
              >
                <td className="md:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {method.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          Status: {method.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1 -mt-1 -mr-1">
                      <button className="text-gray-300 hover:text-white mr-1 cursor-pointer">
                        <Eye size={18} />
                      </button>
                      <button
                        className="text-red-400 hover:text-red-300 mr-1 cursor-pointer"
                        onClick={() => handleDelete(method.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </td>
                {METHOD_TABLE_LINE.map((field) => (
                  <td
                    className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300"
                    key={field}
                  >
                    {isMoneyField(field)
                      ? formatMoney(method[field])
                      : method[field]}
                  </td>
                ))}

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex space-x-1">
                    <button className="text-gray-300 hover:text-white mr-1 cursor-pointer">
                      <Eye size={18} />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-300 mr-1 cursor-pointer"
                      onClick={() => handleDelete(method.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default MethodsTable
