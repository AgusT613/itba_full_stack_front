'use client'

import { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

interface LoanBreakdownDonutProps {
  principal: number
  totalInterest: number
}

const COLORS = ['#7568ff', '#ec4899']

export default function LoanBreakdownDonut({
  principal,
  totalInterest,
}: LoanBreakdownDonutProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { name: 'Capital Financiado', value: principal },
    { name: 'Intereses Totales', value: totalInterest },
  ]

  const total = principal + totalInterest
  const interestPercentage =
    total > 0 ? Math.round((totalInterest / total) * 100) : 0

  if (!mounted) {
    return (
      <div className='w-full h-64 flex items-center justify-center text-sm text-foreground/50'>
        Cargando gráfico...
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <h4 className='text-sm font-semibold mb-2 text-foreground/90'>
        Composición del Préstamo
      </h4>
      <div className='w-full h-56 relative'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke='#180f2e'
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const item = payload[0]
                  return (
                    <div className='rounded-lg border border-white/20 bg-[#180f2e] p-2.5 text-xs text-white shadow-xl'>
                      <p className='font-semibold'>{item.name}</p>
                      <p className='text-primary-300 font-bold'>
                        ${Number(item.value).toLocaleString('es-AR')}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
          <span className='text-xs text-foreground/60'>Costo Interés</span>
          <span className='text-base font-bold text-white'>
            {interestPercentage}%
          </span>
        </div>
      </div>

      <div className='flex justify-center gap-4 text-xs mt-2'>
        <div className='flex items-center gap-1.5'>
          <span className='w-3 h-3 rounded-full bg-[#7568ff]' />
          <span className='text-foreground/80'>Capital</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <span className='w-3 h-3 rounded-full bg-[#ec4899]' />
          <span className='text-foreground/80'>Interés</span>
        </div>
      </div>
    </div>
  )
}
