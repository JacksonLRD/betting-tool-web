'use client'

import React, { useEffect, useState } from 'react'
import {
  ArrowLeftRight,
  Calculator,
  ChartPie,
  CircleDollarSign,
  Download,
  House,
  Info,
  Menu,
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
  ChartPie,
  Download
}

type Item = {
  icon: string
  name: string
  href: string
}

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sidebarItems, setSidebarItems] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    fetch('data/data.json')
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems))
  }, [])

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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
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
