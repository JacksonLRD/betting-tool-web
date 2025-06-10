'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'

const CreateMethodForm = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-[#222] rounded-xl shadow-md py-8 px-8">
          <h2 className="mb-4 text-[28px] font-semibold text-gray-100 text-center">
            Novo Método
          </h2>
          <form className="flex flex-col">
            <div className="flex space-x-4 mb-4">
              <input
                className="mb-4 bg-gray-700 text-white border-0 rounded-md p-2 w-1/3 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
                placeholder="Nome"
                type="text"
              />
              <input
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/3 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
                placeholder="Stake Base"
                type="text"
              />
              <input
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/3 focus:bg-gray-600 focus:outline-none transition ease-out duration-150 placeholder-gray-300"
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
      </div>
    </div>
  )
}

export default CreateMethodForm
