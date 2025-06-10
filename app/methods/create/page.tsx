'use client'

import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import CreateMethodForm from '@/components/CreateMethodForm'

const CreateMethodPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <div className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p=6 border border-[#1f1f1f] mx-2 md:mx-0 mb-8">
          <div className="flex flex-col md:flex-row justify-start items-center mb-6 gap-4 md:gap-0">
            <ArrowLeft />
            <h2 className="text-lg md:text-2xl mx-3 font-semibold text-gray-100 text-center md:text-left">
              Criar Novo Método
            </h2>
          </div>
          <form className="flex flex-col">
            <div className="flex space-x-4 mb-4">
              <input
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-2/4 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
                placeholder="Nome"
                type="text"
              />
              <input
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/4 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
                placeholder="Stake Base"
                type="text"
              />
              <input
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/4 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
                placeholder="Status"
                type="text"
              />
            </div>
            <input
              className="bg-gray-700 text-white border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
              placeholder="Descrição"
              type="text"
            />
          </form>
        </div>
      </main>
    </div>
  )
}

export default CreateMethodPage
