'use client'

import React, { useState } from 'react'
import {
  ArrowLeftRight,
  BookCheck,
  Calculator,
  ChartColumnBig,
  CircleDollarSign,
  Download,
  House,
  Info,
  Menu,
  NotebookPen,
  NotebookText,
  Settings
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ICONS = {
  House,
  Settings,
  Info,
  Calculator,
  CircleDollarSign,
  ArrowLeftRight,
  NotebookText,
  Download,
  BookCheck,
  ChartColumnBig,
  NotebookPen
}

type Item = {
  name: string
  icon: string
  href: string
}

const sidebarItems: Item[] = [
  { name: 'Dashboard', icon: 'House', href: '/' },
  { name: 'Apostas', icon: 'CircleDollarSign', href: '/apostas' },
  {
    name: 'Métodos e Estratégias',
    icon: 'BookCheck',
    href: '/methods'
  },
  { name: 'Movimentações', icon: 'ArrowLeftRight', href: '/movimentacoes' },
  { name: 'Diário', icon: 'NotebookText', href: '/diario' },
  { name: 'Relatórios', icon: 'ChartColumnBig', href: '/relatorios' },
  { name: 'Projetos e Estudos', icon: 'NotebookPen', href: '/projetos' },
  { name: 'Configurações', icon: 'Settings', href: 'configuracoes' },
  { name: 'Calculadora Ladder', icon: 'Calculator', href: 'calculadora' },
  { name: 'Exportar Dados', icon: 'Download', href: 'exportar-dados' },
  { name: 'Ajuda', icon: 'Info', href: 'ajuda' }
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const pathname = usePathname()

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
    >
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
        </button>
        <nav className="mt-8 flex-grow">
          {sidebarItems.map((item: Item) => {
            const IconComponent = ICONS[item.icon]

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${pathname === item.href ? 'bg-[#2f2f2f]' : ''}`}
                >
                  <IconComponent size={20} style={{ minWidth: '20px' }} />
                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
